import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";

import { loginSchema } from "@/validations/registerSchema";
import { CustomErrorReporter } from "@/validations/CstomErrorReporter";
import { compareSync } from "bcryptjs";
import prisma from "@/DB/db.config";


export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(loginSchema);

    const payload = await validator.validate(data);
    //check the email is already used or not
    const findUser = await prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (!findUser) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "No account found with this email ",
        },
      });
    }

    //checking if password matched or not
    const checkPassword = compareSync(payload.password, findUser.password!);
    if (checkPassword) {
      return NextResponse.json({
        status: 200,
        message: "User login successfully",
      });
    }
    return NextResponse.json({
      status: 400,
      errors: {
        email:"Invalid Credentials"
      }
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}

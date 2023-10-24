import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";

import { registerSchema } from "@/validations/registerSchema";
import { CustomErrorReporter } from "@/validations/CstomErrorReporter";
import bcrypt, { genSaltSync, hashSync } from "bcryptjs";
import prisma from "@/DB/db.config";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(registerSchema);

    const payload = await validator.validate(data);
    //check the email is already used or not
    const isEmailExist = await prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (isEmailExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "Email Already taken . Please use another one. ",
        },
      });
    }
    //checking the user name is already used or not
    const isUsernameExist = await prisma.user.findUnique({
      where: { username: payload.username },
    });

    if (isUsernameExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          username: "Username Already taken . Please use another one. ",
        },
      });
    }

    // hashing the password
    const salt = genSaltSync(10);
    payload.password = hashSync(payload.password, salt);

    //inserting record in database
    await prisma.user.create({
      data: payload,
    });

    return NextResponse.json({
      status: 200,
      message: "Account Created successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ status: 400, errors: error.messages });
    }
  }
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });
  const submit = () => {
    console.log("the auth state is ", authState);
  };
  return (
    <div bg-background>
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className=" flex justify-center ">
            <Image src={logo} width={190} height={190} alt="LOGO" />
          </div>
          <h1 className=" text-2xl font-bold">Login</h1>
          <p>welcome back</p>
          <div className="mt-5">
            <Label htmlFor="email"></Label>
            <Input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) =>
                setAuthState({ ...authState, email: e.target.value })
              }
            ></Input>
          </div>
          <div className="mt-5">
            <Label htmlFor="password"></Label>
            <Input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) =>
                setAuthState({ ...authState, password: e.target.value })
              }
            ></Input>
          </div>
          <div className=" mt-5">
            <Button className="w-full" onClick={submit}>
              Login
            </Button>
          </div>
          <div className=" mt-5">
            <span> Dont have an account?</span>
            <Link href="/register" className="text-blue-800 font-bold ml-2">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
function usestate(arg0: { email: string; password: string }): [any, any] {
  throw new Error("Function not implemented.");
}

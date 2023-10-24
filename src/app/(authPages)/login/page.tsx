"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Login = () => {
  const params = useSearchParams();
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post("/api/auth/login",authState)
    .then((res) => {
      setLoading(false);
      const response = res.data;
      if (response.status == 200) {
        alert("Success logged in ")
        
      } else if (response.status == 400) {
        setErrors(response.errors);
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log("The error is ", err);
    });
};
  return (
    <div bg-background>
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full md:w-1/3 mx-2 bg-muted p-6 rounded-lg">
          <div className=" flex justify-center ">
            <Image src={logo} width={190} height={190} alt="LOGO" />
          </div>
          {params.get("message")? (<div className=" bg-green-500 p-4 rounded-lg my-4">
            <strong>Success! </strong>{params.get("message")}
          </div>):(
            <></>
          )}

          <h1 className=" text-2xl font-bold">Login</h1>
          <p>welcome back</p>
          <form onSubmit={submit}>
            <div className="mt-5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Enter your Email"
                onChange={(e) =>
                  setAuthState({ ...authState, email: e.target.value })
                }
              ></Input>
              <span className="text-red-400  font-bold">{errors?.email}</span>
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) =>
                  setAuthState({ ...authState, password: e.target.value })
                }
              ></Input>
              <span className="text-red-400  font-bold">{errors?.password}</span>
            </div>
            <div className=" mt-5">
              <Button className="w-full" onClick={submit} disabled={loading}>
                {loading?"Processing...":"Login"}
              </Button>
            </div>
          </form>
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

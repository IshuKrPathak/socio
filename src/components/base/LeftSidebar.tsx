"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import SidebarLinks from "../common/SidebarLinks";

export default function LeftSidebar() {

  return (
    <div
      className="h-screen border-r-2 md:w-1/4 lg:p-10 md:pt-5 hidden md:block
    "
    >
      <div className=" flex justify-start items-center">
        <Image src={logo} width={150} height={150} alt="logo" />
        <h1
          className=" font-bold text-2xl 
"
        >
          Socio
        </h1>
      </div>
      <SidebarLinks/>
      
    </div>
  );
}

"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import SidebarLinks from "../common/SidebarLinks";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="md:hidden justify-between items-center flex">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu height={30} width={30} className="font-bold " />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className=" flex justify-start items-center">
                  <Image src={logo} width={150} height={150} alt="logo" />
                  <h1
                    className=" font-bold text-2xl 
"
                  >
                    Socio
                  </h1>
                </div>
              </SheetTitle>
              <SheetDescription>
                <SidebarLinks />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Image src={logo} width={130} height={130} alt={""} />
      <Link href="/profile">
        <User2 height={25} width={25} />
      </Link>
    </nav>
  );
};

export default MobileNav;

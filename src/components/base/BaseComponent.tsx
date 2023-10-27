import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../../../public/assets/logo.png"
import NewPost from "../threads/NewPost";

const BaseComponent = () => {
  return (
    <div className="md:container p-5">
      <div className="flex">
        <LeftSidebar />
        <div className="h-screen w-full lg:w-2/4 md:w-3/4 lg:px-8 lg:py-4 xl:px-12 md:p-6">
          <MobileNav />
          <div className="flex justify-center items-center">
            <Image src={logo} height={150} width={150} alt={"logo"}/>
          </div>
          <NewPost/>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default BaseComponent;

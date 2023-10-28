import React from "react";
import Link from "next/link";
import { Bell, Home, Search, User2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import ThemeToggleBtn from "./ThemeToggleBtn";
import SignOutBtn from "./SignOutBtn";
const SidebarLinks = () => {
  const pathName = usePathname();
  return (
    <ul className=" mt-10">
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 mt-6 hover:font-bold ${
            pathName == "/" ? "font-bold" : ""
          }`}
        >
          <Home height={30} width={30} />
          <h3 className="text-lg lg:text-xl">Home</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 mt-6 hover:font-bold ${
            pathName == "/explore" ? "font-bold" : ""
          }`}
        >
          <Search height={30} width={30} />
          <h3 className="text-lg lg:text-xl">Explore</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 mt-6 hover:font-bold ${
            pathName == "/notifications" ? "font-bold" : ""
          }`}
        >
          <Bell height={30} width={30} />
          <h3 className="text-lg lg:text-xl">Notifications</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 mt-6 hover:font-bold ${
            pathName == "/profile" ? "font-bold" : ""
          }`}
        >
          <User2 height={30} width={30} />
          <h3 className="text-lg lg:text-xl">Profile</h3>
        </Link>
      </li>
      <li
        className=" flex items-center absolute bottom-5
        "
      >
        <SignOutBtn />
        <ThemeToggleBtn />
      </li>
    </ul>
  );
};

export default SidebarLinks;

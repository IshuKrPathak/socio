"use client";
import React from "react";
import UserAvatar from "./UserAvatar";
import { Link } from "lucide-react";
import { Button } from "../ui/button";

const UserListCard = () => {
  return (
    <div className=" w-full shadow-sm p-4 rounded-md mb-3">
      <div className="flex">
        <UserAvatar name="Ishu Pathak" image="" />
        <div className=" flex justify-between items-start w-full">
          <div className="flex flex-col">
            <strong className="text-md font-bold ml-2">Ishu Pathak</strong>
            <span className="ml-2 font-light text-xs">@Ishu</span>
          </div>
          <Link href="#">
          <Button size="sm">View</Button>
    
          </Link>

        </div>
      </div>
    </div>
  );
};

export default UserListCard;

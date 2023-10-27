import React from "react";
import UserListCard from "../common/UserListCard";

const RightSidebar = () => {
  return (
    <div className=" h-screen border-l-2 lg:w-1/4 lg:pt-5 lg:px-2 xl:p-5 hidden lg:block">
      <h1 className=" text-2xl font-bold mb-5 ">Suggestions for you</h1>
      <UserListCard />
    </div>
  );
};

export default RightSidebar;

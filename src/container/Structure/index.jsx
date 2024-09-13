import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../compunent/SideNav";
import TopNav from "../../compunent/TopNav";

const Structure = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-200">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col">
        <div className=" top-0 right-0 bg-gray-800 text-white">
          <TopNav />
        </div>
        <div className="flex-1 p-4 mt-14 text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Structure;

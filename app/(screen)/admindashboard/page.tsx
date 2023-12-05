import React from "react";
import SideBar from "../sidebar/page";
import Dashboard from "../dashboard/page";

export default function Admin() {
  return (
    <div>
      <div className="bg-teal-100 ">
        <SideBar />
      </div>
      <div className="bg-teal-200">
        <Dashboard />
      </div>
    </div>
  );
}

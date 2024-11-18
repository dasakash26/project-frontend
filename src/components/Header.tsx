import React from "react";
import Logo from "./Logo";
import { SidebarTrigger } from "./ui/sidebar";
import Notification from "./Notification";

function Header() {
  return (
    <div className="fixed bg-[#224422] w-[100vw] h-16 flex items-center justify-between px-4 shadow-md">
      <SidebarTrigger className="text-white"/>
      <Logo />
      <Notification />
    </div>
  );
}

export default Header;

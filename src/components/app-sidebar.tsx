// import React from "react";
import { HandCoinsIcon, Handshake, Home, Search, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import ProfileDropdown from "./ProfileDropdown";
// import { useState } from "react";
// import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Create Offer",
    url: "/create-offer",
    icon: HandCoinsIcon,
  },
  {
    title: "Negotiations",
    url: "/negotiations",
    icon: Handshake,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return [
    "w-full flex items-center gap-3 p-2 rounded-md transition-colors",
    isActive ? "bg-green-800 text-white" : "text-gray-500 hover:bg-gray-100",
  ].join(" ");
};

export function AppSidebar() {
  return (
    <Sidebar
      className="bg-white"
      collapsible="icon"
      variant="sidebar"
    >
      <div className="flex items-center justify-center h-16 bg-[#224422] text-white"></div>
      <SidebarContent className="relative">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="!0">
                  <NavLink
                    to={item.url}
                    end={item.url === "/"}
                    className={getLinkClassName}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="bg-gray-300 h-[1px] w-full my-2"></div>
            <ProfileDropdown />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

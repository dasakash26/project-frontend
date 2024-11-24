// import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, SquareChevronUp } from "lucide-react";
import { SidebarMenuButton } from "./ui/sidebar";
import { Card } from "./ui/card";

function ProfileDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <User /> User
            <SquareChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <Card>
          <DropdownMenuContent
          side="top"
          className="w-[--radix-popper-anchor-width] bg-[#47663B] shadow-lg rounded-lg p-2"
        >
          <DropdownMenuItem className="p-2 on text-white rounded-lg">
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-2 text-white rounded-lg">
            <span>Payments</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-2 text-white rounded-lg">
            <span>Contracts</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-2  text-white rounded-lg">
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
        </Card>
      </DropdownMenu>
    </>
  );
}

export default ProfileDropdown;

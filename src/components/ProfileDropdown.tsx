// import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, SquareChevronUp } from "lucide-react";
import { SidebarMenuButton } from "./ui/sidebar";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

function ProfileDropdown() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try{
      await axios.get("http://localhost:3000/api/user/logout")
      toast({
        title: "Logged out successfully!"
      })
      navigate("/login");
    }
    catch(error: any){
      toast({
        title: error.response.data.message
      })
      }
    };
  
  
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <User /> User
            <SquareChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
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
            <span onClick={handleLogout}>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default ProfileDropdown;

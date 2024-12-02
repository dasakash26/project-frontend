import React, { useEffect, useState } from "react";
import api, { profileRoute } from "@/api/axiosConfig";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Payments from "@/components/profile/Payments";
import Offers from "@/components/profile/Offers";
import Contracts from "@/components/profile/contracts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  offers: string[];
  contracts: string[];
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(profileRoute);
        setUser(response.data.user);
        console.log("User data:", response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto py-20">
      <div className="flex justify-center gap-3">
        <UserDetail user={user} />
        <UserTabs offers={user.offers}/>
      </div>
    </div>
  );
};

const UserDetail: React.FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <Card className="w-full max-w-xs">
        <CardHeader className="flex flex-row gap-4">
          <div className="flex-col">
            <Avatar className="h-20 w-20 rounded-lg pb-1">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
                alt={user.name}
              />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <p className="pl-[0.3rem]">{user.role.toLowerCase()}</p>
          </div>
          <div className="flex-col">
            <CardTitle>{user.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <Rating name="size-small" defaultValue={4} size="small" readOnly className="my-1"/>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 my-4">
            <Button variant={"outline"} className="h-8 rounded-lg mb-8">
              Edit Profile
            </Button>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Department:</span>
              <span className="text-sm">Cereals</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Join Date:</span>
              <span className="text-sm">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Last Update:</span>
              <span className="text-sm">
                {new Date(user.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Crops Produced:</span>
            <div className="flex">
                <Badge className="mr-2" variant={"outline"}>Tomatoes</Badge>
                <Badge className="mr-2" variant={"outline"}>Cucumbers</Badge>
                <Badge className="mr-2" variant={"outline"}>Peppers</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

const UserTabs = ({offers}:any) => {
  return (
    <>
      <div className="border-[0.05rem] rounded-lg p-4 md:w-[50vw]">
        <Tabs defaultValue="offers" className="">
          <TabsList>
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
          </TabsList>
          <TabsContent value="offers">
            <Offers offers={offers} />
          </TabsContent>
          <TabsContent value="payments">
            <Payments />
          </TabsContent>
          <TabsContent value="contracts">
            <Contracts />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;

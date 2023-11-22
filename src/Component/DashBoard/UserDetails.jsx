import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../UI/Card";
import {  User2  } from "lucide-react";

const UserInfoCard = ({ name,email }) => {
  return (
    <Card className="md:col-span-5">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">User Details</CardTitle>
        <User2 />
      </CardHeader>
      <CardContent className="flex  flex-col t">
        <div className="flex justify-between items-center">
           <p className="font-medium">Name</p>
           <p>{name}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Email</p>
           <p>{email}</p>
        </div>
        
      </CardContent>
    </Card>
  );
};

export {UserInfoCard};
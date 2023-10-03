import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../UI/Card";
import { Hourglass } from "lucide-react";
import { formatTimeDelta } from "../../libs/utils";
import { differenceInSeconds } from "date-fns";


const TimeTakenCard = ({ timeEnded, timeStarted }) => {
  return (
    <Card className="md:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Time Taken</CardTitle>
        <Hourglass />
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium">
          {formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
        </div>
      </CardContent>
    </Card>
  );
};

export {TimeTakenCard};
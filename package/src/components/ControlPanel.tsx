import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import APIPanel from "./APIPanel";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Mic, CornerDownLeft } from "lucide-react";
import { Tooltip, TooltipTrigger } from "./ui/tooltip";
import { Textarea } from "./ui/textarea";
import ConfigPanel from "./ConfigPanel";
import { Button } from "./ui/button";

export default function ControlPanel() {
  return (
    <Card className="mt-10 w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full justify-between">
            <span>Playground</span>
            <Button size="sm" disabled>
              Generate
            </Button>
          </div>
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="flex w-full h-full gap-8 justify-between">
          <div className="relative flex min-h-max w-full flex-col rounded-xl bg-muted/50">
            <Badge variant="outline" className="absolute left-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
          </div>
          <div className="w-8/12">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <ConfigPanel />
              <APIPanel />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
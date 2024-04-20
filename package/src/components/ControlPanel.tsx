"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import APIPanel from "./APIPanel";
import { Badge } from "./ui/badge";
import ConfigPanel from "./ConfigPanel";
import { Button } from "./ui/button";
import Animated from "./Animated";
import { Loader } from "lucide-react";
import Lottie from "lottie-react";
import travelAnimation from "./travel-animation.json";
import { ImageConfiguration } from "@/interface/interfaces";
import { useGenerateImage } from "@/hooks/useGenerateImage";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLocalStorage, useMediaQuery } from "@uidotdev/usehooks";

export default function ControlPanel() {
  const { generate, loading, error, data } = useGenerateImage({
    onSuccess: () => setQuota((prev) => String(Number(prev) - 1)),
  });

  const handleSubmit = (data: ImageConfiguration) => {
    if (Number(quota) <= 0) {
      alert("Quota limit reached. Please try again later.");
      return;
    }
    generate(data);
  };

  const [quota, setQuota] = useLocalStorage("quota", process.env.NEXT_PUBLIC_QUOTA_LIMIT || "5");

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  if(isSmallDevice) {
    return <div className="flex w-full h-full justify-center items-center mt-10">Only Desktop is supported</div>
  }

  return (
    <Animated>
      <div className="flex w-full justify-center items-center">
        <Card className="mt-10 w-full">
          <CardHeader>
            <CardTitle>
              <div className="flex w-full justify-between">
                <span>Playground</span>
                <div className="flex gap-4 items-center">
                  <span className="text-sm text-muted-foreground">
                    Quota Limit ({quota} / {process.env.NEXT_PUBLIC_QUOTA_LIMIT})
                  </span>
                  <Button size="sm" type="submit" form="sticker-form" disabled={loading}>
                    Generate
                  </Button>
                </div>
              </div>
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex w-full h-full gap-8 justify-between">
              <div
                className={cn(
                  "relative flex justify-center items-center min-h-max w-full flex-col rounded-xl",
                  data && data.data[0].url ? "" : "bg-muted/50"
                )}
              >
                <Badge variant="outline" className="absolute left-5 top-5">
                  Output
                </Badge>
                {loading ? (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <span>Generating</span>
                    <Loader className="mr-2 h-10 w-10 animate-spin self-center" />
                  </div>
                ) : data && data.data[0].url ? (
                  <div>
                    <Image
                      src={data.data[0].url}
                      loader={() => data.data[0].url}
                      alt="Generated Image"
                      width={0}
                      height={0}
                      className="rounded-xl"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                ) : (
                  <Lottie animationData={travelAnimation} />
                )}
              </div>
              <div className="w-8/12">
                <div className="relative hidden flex-col items-start gap-8 md:flex">
                  <ConfigPanel onSubmit={handleSubmit} />
                  <APIPanel />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Animated>
  );
}

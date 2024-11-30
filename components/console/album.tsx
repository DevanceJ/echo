import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Album() {
  return (
    <Card className="w-full max-w-4xl bg-pink-400">
      <CardHeader>
        <CardTitle className="text-4xl font-bold"></CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <h3>New Album</h3>
          <h1 className="text-4xl font-extrabold uppercase leading-tight mt-4 mb-2">
            The second step:
            <br />
            chapter one
          </h1>
          <p className="uppercase font-bold text-blue-950 text-xl">treasure</p>
          <Button className="mt-4 bg-blue-700 text-white hover:bg-blue-900 ">
            Listen Now
          </Button>
        </div>
        <Image
          src="/images/abbey.jpg"
          alt="Song 1"
          width={400}
          height={400}
          className="rounded-md"
        />
      </CardContent>
    </Card>
  );
}

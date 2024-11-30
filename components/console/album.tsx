import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export function Album() {
  return (
    <Card className="w-full max-w-4xl bg-gradient-to-r from-pink-400 to-pink-600 overflow-hidden shadow-2xl animate-fade-in">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-8">
        <div
          className="space-y-4 animate-slide-in-left
          ">
          <h3 className="text-sm uppercase font-semibold text-blue-950 tracking-widest translate-y-full animate-rise-up">
            not New Album
          </h3>

          <h1 className="text-3xl md:text-4xl font-black uppercase leading-tight text-white translate-y-full animate-rise-up animate-delay-100">
            Abbey Road:
            <br />
            The Beatles
          </h1>

          <p className="uppercase font-bold text-blue-950 text-xl translate-y-full animate-rise-up animate-delay-200">
            1969
          </p>

          <Button className="mt-4 bg-blue-700 text-white hover:bg-blue-900 translate-y-full animate-rise-up animate-delay-300 group">
            <PlayCircle className="transition-transform duration-500 group-hover:rotate-180" />
            Listen Now
          </Button>
        </div>

        {/* Image */}
        <div
          className="
            relative 
            w-full 
            aspect-square 
            animate-slide-in-right
          ">
          <Image
            src="/images/stage.jpeg"
            alt="Album Cover"
            fill
            className="
              object-cover 
              rounded-lg 
              shadow-lg 
              hover:scale-105 
              transition-transform 
              duration-500
            "
          />
        </div>
      </CardContent>
    </Card>
  );
}

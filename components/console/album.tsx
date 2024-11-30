import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

function wrapTextWithSpans(text: string, baseClass: string) {
  return text.split("").map((char, index) => (
    <span
      key={index}
      className={`${baseClass} inline-block`}
      style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}
export function Album() {
  return (
    <Card className="w-full max-w-4xl bg-gradient-to-r from-pink-400 to-pink-600 overflow-hidden shadow-2xl">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-8">
        <div className="space-y-4">
          <h3 className="text-sm uppercase font-semibold text-blue-950 tracking-widest ">
            {wrapTextWithSpans("Not New Album", "animate-letter-pop")}
          </h3>

          <h1 className="text-3xl md:text-4xl font-black uppercase leading-tight ">
            {wrapTextWithSpans("Abbey Road", "animate-letter-pop")}
            <br />
            {wrapTextWithSpans("The Beatles", "animate-letter-pop")}
          </h1>

          <p className="uppercase font-bold text-blue-950 text-xl translate-y-full animate-rise-up animate-delay-200">
            {wrapTextWithSpans("Remastered Edition", "animate-letter-pop")}
          </p>

          <Button
            className="mt-4 group 
            bg-gradient-to-r
            text-white
          from-blue-500 via-purple-500 to-blue-700 hover:scale-105 transition-all duration-500 ">
            <PlayCircle className="transition-transform duration-500 group-hover:rotate-180" />
            Listen Now
          </Button>
        </div>
        <div
          className="
            relative 
            w-full 
            h-full
            animate-slide-in-right
          ">
          <Image
            src="/images/beatles.avif"
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

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import beatles from "@/public/images/beatles.png";

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
    <Card className="w-full max-w-5xl bg-gradient-to-r from-pink-400 to-pink-600 overflow-hidden shadow-2xl mt-6">
      <CardContent className="flex flex-wrap gap-4 items-center justify-evenly p-6">
        <div className="space-y-2">
          <h3 className="text-sm uppercase font-semibold text-blue-950 tracking-widest ">
            {wrapTextWithSpans("Not New Album", "animate-letter-pop")}
          </h3>
          <h1 className="text-2xl md:text-4xl font-black uppercase leading-tight ">
            {wrapTextWithSpans("Abbey Road", "animate-letter-pop")}
            <br />
            {wrapTextWithSpans("The Beatles", "animate-letter-pop")}
          </h1>
          <p className="uppercase font-bold text-blue-950 text-base md:text-xl">
            {wrapTextWithSpans("Remastered Edition", "animate-letter-pop")}
          </p>
          <Button className="mt-4 group bg-gradient-to-r font-bold from-blue-500 via-purple-500 to-blue-700 hover:-translate-y-1 hover:scale-110 transition-all duration-500 uppercase text-white">
            <PlayCircle className="transition-transform duration-500 group-hover:rotate-180" />
            Listen Now
          </Button>
        </div>
        <Image
          src={beatles}
          alt="Album Cover"
          width={400}
          height={500}
          className="ease-in-out object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 animate-slide-in-right hover:translate-x-2"
        />
      </CardContent>
    </Card>
  );
}

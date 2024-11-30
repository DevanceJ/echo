"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function PlaylistGridSkeleton() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-24" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="group relative overflow-hidden transform transition-transform cursor-pointer animate-fade-in-fast animation-delay-100">
            <div className="p-0">
              <Skeleton className="w-full aspect-square" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
              <div className="p-4">
                <Skeleton className="h-6 w-36" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QueryProvider({ children }: any) {
  const [client] = useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  );
}

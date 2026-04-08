"use client";

import { ReactNode } from "react";
import { LoadingProvider } from "@/context/LoadingContext";
import { LoadingScreen } from "./loading/LoadingScreen";

interface LayoutClientProps {
  children: ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
  return (
    <LoadingProvider>
      <LoadingScreen>{children}</LoadingScreen>
    </LoadingProvider>
  );
}

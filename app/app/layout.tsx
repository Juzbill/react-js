"use client";
import React from "react";
import AppHome from "./AppHome";
import { usePathname } from "next/navigation";
import { LayoutProvider } from "@/components/standard/LayoutProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutProvider>{children}</LayoutProvider>
    </>
  );
};

export default layout;

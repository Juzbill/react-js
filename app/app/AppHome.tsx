"use client";

import React from "react";
import AppLayout from "./AppLayout";
import { useRouter } from "next/navigation";

const AppHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex w-full h-full">
      <AppLayout />
      {children}
    </section>
  );
};

export default AppHome;

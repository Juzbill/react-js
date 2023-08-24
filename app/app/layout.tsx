import React from "react";
import AppHome from "./AppHome";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <AppHome>{children}</AppHome>;
};

export default layout;

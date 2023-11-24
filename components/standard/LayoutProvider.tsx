import AppHome from "@/app/app/AppHome";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface ILayoutProviderProps {
  children: React.ReactNode;
}

export function LayoutProvider({ children }: ILayoutProviderProps) {
  const pathsArray: string[] = ["/app/sales/create"];
  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
      {pathsArray.includes(pathname) ? (
        <div>{children}</div>
      ) : (
        <AppHome>{children}</AppHome>
      )}
    </>
  );
}

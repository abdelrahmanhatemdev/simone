"use client";
import { ReactNode } from "react";
import ThemeProvider from "@/providers/ThemeProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default Providers;

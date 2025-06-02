"use client";
import { ReactNode, useEffect, useState } from "react";
import NoInternet from "@/components/custom/NoInternet";
import AppLayout from "@/components/custom/AppLayout";
import dynamic from "next/dynamic";

const LazyLenis = dynamic(
  () => import("lenis/react").then((mod) => mod.ReactLenis),
  {
    ssr: false,
    loading: () => <></>,
  }
);

function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [setIsOnline]);

  return !isOnline ? (
    <NoInternet />
  ) : (
    <LazyLenis root>
      <AppLayout>{children}</AppLayout>
    </LazyLenis>
  );
}

export default MainLayout;
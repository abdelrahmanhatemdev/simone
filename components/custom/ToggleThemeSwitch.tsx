"use client";
import useTheme from "@/hooks/useTheme";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

function ToggleThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center p-0 cursor-pointer"
      aria-label="Theme Switch"
      title="Switch Theme"
    >
      {theme !== "dark" ? (
        <IoMoonSharp size={20} />
      ) : (
        <IoSunnyOutline size={20} />
      )}
    </button>
  );
}
export default ToggleThemeSwitch;

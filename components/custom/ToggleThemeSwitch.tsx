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
        className="flex justify-center items-center p-0 w-8 h-8"
        aria-label="Theme Switch"
        title="Switch Theme"
      >
        {theme !== "dark" && <div className="hover:bg-neutral-100 rounded p-1">
          <IoMoonSharp
            size={14}
          />
        </div>}
        {theme === "dark" && <div className="hover:bg-neutral-700 rounded p-1">
          <IoSunnyOutline
            size={14}
          />
        </div>}
        
      </button>
  );
}
export default ToggleThemeSwitch;

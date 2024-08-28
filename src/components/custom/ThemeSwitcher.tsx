"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        break;
      }
      case "dark": {
        setTheme("light");
        break;
      }
      default:
        break;
    }
  };

  function toggleTheme() {
    //@ts-ignore
    if (!document.startViewTransition) switchTheme();
    //@ts-ignore
    document.startViewTransition(switchTheme);
  }

  return (
    <Button
      onClick={toggleTheme}
      variant={"ghost"}
      size={"icon"}
      className="rounded-full"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

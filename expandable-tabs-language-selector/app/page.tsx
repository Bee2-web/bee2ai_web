"use client"

import { LanguagePicker } from "@/components/language-picker"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")

  useEffect(() => {
    const root = window.document.documentElement

    // Remove existing theme classes
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.remove("light", "dark")
        root.classList.add(e.matches ? "dark" : "light")
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center gap-8 overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "text-neutral-300/40 dark:text-neutral-700/30",
        )}
      />

      <div className="absolute top-8 right-8 z-10">
        <ThemeSwitcher defaultValue="system" onChange={setTheme} value={theme} />
      </div>

      <div className="relative z-10">
        <LanguagePicker onLanguageChange={(lang) => console.log("Language changed to:", lang)} />
      </div>
    </div>
  )
}

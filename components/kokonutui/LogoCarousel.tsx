"use client"

import { cn } from "@/lib/utils"
import Image from 'next/image';

interface Logo {
  id: string
  name: string
  image?: string
  height: string
}

interface LogoCarouselProps {
  logos: Logo[]
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
  className?: string
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, speed = "normal", direction = "left", className }) => {
  const speedMap = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  }

  const animationDirection = direction === "left" ? "reverse" : "normal"

  return (
    <div className="relative w-full">
      <div
        className={cn("group flex overflow-hidden", className)}
        style={
          {
            "--duration": speedMap[speed],
          } as React.CSSProperties
        }
      >
        {/* Animated container with three sets of logos */}
        <div
          className="flex shrink-0 animate-marquee gap-16 min-w-full"
          style={{
            animationDirection: animationDirection,
            animationDuration: "var(--duration)",
          }}
        >
          {/* Generate three identical sets for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={`set-${setIndex}`} className="flex shrink-0 items-center justify-around gap-16">
              {logos.map((logo) => (
                <div key={`${setIndex}-${logo.id}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image 
                        src={logo.image || ''} 
                        alt={logo.name} 
                        width={150}
                        height={40}
                        className={cn("object-contain max-w-[150px]", logo.height)} 
                    />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}

export default LogoCarousel

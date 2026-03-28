"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Flex, Media, RevealFx } from "@once-ui-system/core";

interface CarouselItem {
  slide: string;
  alt: string;
}

interface AutoCarouselProps {
  items: CarouselItem[];
  aspectRatio?: string;
  interval?: number;
}

export function AutoCarousel({
  items,
  aspectRatio = "16 / 9",
  interval = 3500,
}: AutoCarouselProps) {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (items.length <= 1) return;
    timer.current = setInterval(() => {
      setRevealed(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % items.length);
        setTimeout(() => setRevealed(true), 50);
      }, 300);
    }, interval);
    return () => clearInterval(timer.current);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  return (
    <Column fillWidth gap="8">
      <RevealFx
        fillWidth
        trigger={revealed}
        translateY="8"
        speed="fast"
        style={{ aspectRatio }}
      >
        <Media
          priority={active === 0}
          radius="l"
          border="neutral-alpha-weak"
          overflow="hidden"
          alt={items[active]?.alt || ""}
          aspectRatio={aspectRatio}
          src={items[active]?.slide}
        />
      </RevealFx>
      {items.length > 1 && (
        <Flex gap="4" paddingX="s" fillWidth horizontal="center">
          {items.map((_, i) => (
            <Flex
              key={i}
              radius="full"
              onClick={() => {
                setRevealed(false);
                setTimeout(() => {
                  setActive(i);
                  setTimeout(() => setRevealed(true), 50);
                }, 300);
                clearInterval(timer.current);
                timer.current = setInterval(() => {
                  setRevealed(false);
                  setTimeout(() => {
                    setActive((prev) => (prev + 1) % items.length);
                    setTimeout(() => setRevealed(true), 50);
                  }, 300);
                }, interval);
              }}
              style={{
                background:
                  active === i
                    ? "var(--neutral-on-background-strong)"
                    : "var(--neutral-alpha-medium)",
                transition: "background 0.3s ease",
                height: "2px",
              }}
              cursor="interactive"
              fillWidth
            />
          ))}
        </Flex>
      )}
    </Column>
  );
}

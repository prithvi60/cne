"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </NextUIProvider>
  );
}

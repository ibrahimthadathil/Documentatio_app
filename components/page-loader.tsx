"use client";

import { useEffect, useState } from "react";
import SVGComponent from "@/components/icons/logo";
import SVGLabel from "@/components/icons/label";
import { useTheme } from "next-themes";
export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="mb-2 sm:mb-4 md:mb-2">
          <div className="flex items-center h-[50px] sm:h-[70px] md:h-[100px]">
            <SVGComponent
              color="#87BFE5"
              size="28"
              className="sm:size-10 md:size-14 animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

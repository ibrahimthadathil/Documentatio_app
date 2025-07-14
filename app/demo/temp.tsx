"use client";
import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import SVGComponent from "@/components/icons/logo";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import SVGLabel from "@/components/icons/label";

import React from "react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Pagination } from "@/components/pagination";

const page = () => {
  const { isExpanded } = useCommandClipboard();
  const { theme } = useTheme();

  return (
    <>
      <SidebarInset
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "md:mr-80" : "mr-0"
        }`}
      >
        <ScrollIndicator />
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mx-2 h-4" />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center">
                <SVGComponent color="#87BFE5" size="16" className="" />
                <SVGLabel
                  color="red"
                  className="mt-2"
                  theme={theme == "dark" ? "white" : "black"}
                />

                <h1 className="text-lg font-semibold md:ps-3">Documentation</h1>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  v2.0.0
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="w-full max-w-full px-4 py-6 lg:py-8">
            <div className="mx-auto w-full max-w-4xl">
              
              <Pagination
                currentPage={1}
                totalPages={5}
                previousLabel="Welcome"
                nextLabel="Installation Guide"
                previousHref="#"
                nextHref="#installation"
              />
            </div>
          </div>
        </main>
      </SidebarInset>
      <CommandClipboard />
    </>
  );
};

export default page;

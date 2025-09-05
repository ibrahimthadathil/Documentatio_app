"use client";
// landing page
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { CodeSnippet } from "@/components/code-snippet";
import { VideoPlayer } from "@/components/video-player";
import { Pagination } from "@/components/pagination";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Star,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import SVGComponent from "@/components/icons/logo";
import SVGLabel from "@/components/icons/label";
import { useTheme } from "next-themes";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const { isExpanded } = useCommandClipboard();
  const router = useRouter;
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
          <div className="container max-w-screen-2xl px-4 py-6 lg:py-8">
            <div className="mx-auto max-w-4xl">
              {/* Hero Section */}
              <div className="mb-8 space-y-4 ">
                {/* Navigation Arrows */}

                {/* Top Badge */}
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-primary/10">
                    <Star className="mr-1 h-3 w-3" />
                    New
                  </Badge>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Version 2.0 is now available
                  </span>
                </div>
                <div className=" top-0 justify-end right-0  flex space-x-2">
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Previous page"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/installation/api">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Next page"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Bounded Section */}
              <div
                className={`shadow ${
                  theme == "dark"
                    ? "bg-zinc-900 text-gray-300"
                    : "bg-gray-50 text-zinc-900 shadow-inner"
                } rounded-xl sm:rounded-2xl mb-5 min-h-[300px] sm:min-h-[400px] md:max-h-[650px] h-auto flex flex-col items-center justify-center p-3 sm:p-6 md:p-14 text-center mx-6 sm:mx-6 md:mx-0`}
              >
                {/* Logo */}
                <div className="mb-2 sm:mb-4 md:mb-2">
                  <div className="flex items-center h-[50px] sm:h-[70px] md:h-[100px]">
                    <SVGComponent
                      color="#87BFE5"
                      size="32"
                      className="sm:size-10 md:size-14"
                    />
                    <SVGLabel
                      color="red"
                      className="mt-2 sm:mt-3 md:mt-5"
                      size={120}
                      theme={theme == "dark" ? "white" : "black"}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-[280px] sm:max-w-md md:max-w-2xl text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed">
                  <span className="font-semibold">AutoXLR8</span>, a purpose
                  built automated testing suite for the buy-side community,
                  simplifies the end-to-end testing process. Our approach helps
                  clients improve data management, simulate actual business
                  activities, and incorporate testing earlier in their projects,
                  reducing data discrepancies and resource demands.
                </p>
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={1}
                totalPages={5}
                previousLabel="Welcome"
                nextLabel="Installation Guide"
                previousHref="#"
                nextHref="/installation/api"
              />
            </div>
          </div>
        </main>
      </SidebarInset>
      <CommandClipboard />
    </>
  );
}

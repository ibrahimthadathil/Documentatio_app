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
import { CodeSnippet } from "@/components/code-snippet";
import { VideoPlayer } from "@/components/video-player";
import { Star } from "lucide-react";

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
              {/* Hero section */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-primary/10">
                    <Star className="mr-1 h-3 w-3" />
                    New
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Version 2.0 is now available
                  </span>
                </div>
              </div>
              {/* Introduction */}
              <section className="mb-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Windows Service Installation
                  </h2>
                  <p className="text-muted-foreground">
                    Install Auto XLR8 Manually
                    <br />
                    Overview: There are multiple Windows Services in the Auto
                    XLR8 framework:
                    <br />
                    1. Test Execution: Executes tests from the queue
                    <br />
                    a. This is required, all tests are executed by this service
                    <br />
                    2. Test Complete Test Execution
                    <br />
                    a. This is optional, but required if using Test Complete
                    <br />
                    b. It is recommended this Windows service AND Test Complete
                    AND <br />
                    all dependencies be installed on a separate server
                    <br />
                    There are two options of automation tools: Powershell and
                    CMD.
                    <br />
                  </p>
                  {/* Video Tutorial */}
                  <section className="mb-12 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold tracking-tight">
                        Video Tutorial
                      </h2>
                      <p className="text-muted-foreground">
                        Watch this comprehensive tutorial to get started with
                        our component library.
                      </p>
                    </div>

                    <VideoPlayer
                      title="Getting Started with UI Components"
                      description="Learn how to set up and use our component library in your Next.js project."
                    />
                  </section>
                </div>

                
              </section>
              {/* code snippet */}
              <section id="installation" className="mb-12 space-y-6">
                <div className="space-y-4">
                  <h3>Option 1: Via Powershell</h3>
                  <CodeSnippet
                    code={`sc.exe create "VIS Auto XLR8 Test Service" binpath=D:\VisDepl
--delete
sc.exe delete "Vis Auto XLR8 Test Service
                        `}
                    language="bash"
                    title="Terminal"
                  />
                  <h3>
                    Option 2: Via CMD
                  </h3>
                  <CodeSnippet
                    code={`dotnet dev-certs https -clean
 dotnet dev-certs https 
 dotnet dev-certs https --trust 
                      `}
                    language="bash"
                    title="Terminal"
                  />
                </div>
              </section>
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

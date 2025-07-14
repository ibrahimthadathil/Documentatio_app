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
import { Star } from "lucide-react";
import { VideoPlayer } from "@/components/video-player";
import { CodeSnippet } from "@/components/code-snippet";

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
                    API and Website Installation
                  </h2>
                  <p className="text-muted-foreground">
                    Install Auto XLR8 Manually <br /> Prerequisites:
                    <br />
                    <br /> We’ll need the following: <br />
                    1. Windows Server, 2019 or later <br />
                    2. IIS <br />
                    3. .NET 8.0 <br />
                    4. A file share for the different services to write log
                    files a. We’ll also need a way to view these files. <br />
                    5. A file share to manage Excel files used for configuration
                    a. If none is provided, the installation direction has one
                    by default which will be used.
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

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    What do you mean by not a component library?
                  </h3>
                  <p className="leading-7">
                    I mean you do not install it as a dependency. It is not
                    available or distributed via npm.
                  </p>
                  <p className="leading-7">
                    Pick the components you need. Copy and paste the code into
                    your project and customize to your needs. The code is yours.
                  </p>

                  <div className="my-6 w-full overflow-hidden rounded-lg border bg-zinc-950 dark:bg-zinc-900">
                    <div className="flex items-center justify-between px-4 py-2 text-white">
                      <span className="text-sm font-medium">
                        Use this as a reference to build your own component
                        system.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              {/* code snippet */}
              <section id="installation" className="mb-12 space-y-6">
                <div className="space-y-4">
                  <h3>Restart IIS Service</h3>
                  <CodeSnippet
                    code="iisreset (as admin)"
                    language="bash"
                    title="Terminal"
                  />
                  <h3>
                    Trust Development SSL Certificate (only for developer
                    instance):
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

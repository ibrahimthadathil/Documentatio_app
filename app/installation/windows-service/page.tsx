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
import { SidebarContentLayout } from "@/components/layouts/dashboardLayout";

const page = () => {
  const { isExpanded } = useCommandClipboard();
  const { theme } = useTheme();

  return (
    <>
      <SidebarContentLayout title="Documenation">
        {/* Introduction */}
        <section className="mb-12 space-y-6">
          <div className="space-y-2">
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
            {/* Video Tutorial */}
            <section className="mb-12 space-y-6">
              <div className="space-y-2">
                {/* <h2 className="text-lg font-bold tracking-tight">
                        Video Tutorial
                      </h2>
                      <p className="text-muted-foreground">
                        Watch this comprehensive tutorial to get started with
                        our component library.
                      </p> */}
              </div>

              <VideoPlayer
                title="Getting Started with UI Components"
                description="Learn how to set up and install Auto XLR8 Manually."
              />
            </section>
            <br />
            <br />
            <h2 className="text-3xl font-bold  tracking-tight">
              Windows Service Installation
            </h2>
            <p className="text-muted-foreground">
              Install Auto XLR8 Manually
              <br />
              Overview: There are multiple Windows Services in the Auto XLR8
              framework:
              <br />
              1. Test Execution: Executes tests from the queue
              <br />
              a. This is required, all tests are executed by this service
              <br />
              2. Test Complete Test Execution
              <br />
              a. This is optional, but required if using Test Complete
              <br />
              b. It is recommended this Windows service AND Test Complete AND{" "}
              <br />
              all dependencies be installed on a separate server
              <br />
              There are two options of automation tools: Powershell and CMD.
              <br />
            </p>
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
            <h3>Option 2: Via CMD</h3>
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
          nextHref="/"
        />
      </SidebarContentLayout>
    </>
  );
};

export default page;

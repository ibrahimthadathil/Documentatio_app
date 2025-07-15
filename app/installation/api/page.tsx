"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/pagination";
import { Star } from "lucide-react";
import { VideoPlayer } from "@/components/video-player";
import { CodeSnippet } from "@/components/code-snippet";
import { SidebarContentLayout } from "@/components/layouts/dashboardLayout";

const page = () => {


  return (
    <>
      <SidebarContentLayout title="Documentation">
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
        <section className="mb-12 space-y-6 opacity-75">
          <h2 className="text-3xl font-bold tracking-tight">
            API and Website Installation
          </h2>
          {/* <div className="space-y-2">
                      <h2 className="text-lg font-bold tracking-tight">
                        Video Tutorial
                      </h2>
                      <p className="text-muted-foreground">
                        Watch this comprehensive tutorial to get started with
                        our component library.
                      </p>
                    </div> */}

          <VideoPlayer
            title="Getting Started with UI Components"
            description="Learn how to set up and use our component library in your Next.js project."
          />
        </section>
        {/* Introduction */}
        <section className="mb-12 space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Install Auto XLR8 Manually <br /> Prerequisites:
              <br />
              <br /> We’ll need the following: <br />
              1. Windows Server, 2019 or later <br />
              2. IIS <br />
              3. .NET 8.0 <br />
              4. A file share for the different services to write log files a.
              We’ll also need a way to view these files. <br />
              5. A file share to manage Excel files used for configuration a. If
              none is provided, the installation direction has one by default
              which will be used.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              What do you mean by not a component library?
            </h3>
            <p className="leading-7">
              I mean you do not install it as a dependency. It is not available
              or distributed via npm.
            </p>
            <p className="leading-7">
              Pick the components you need. Copy and paste the code into your
              project and customize to your needs. The code is yours.
            </p>

            <div className="my-6 w-full overflow-hidden rounded-lg border bg-zinc-950 dark:bg-zinc-900">
              <div className="flex items-center justify-between px-4 py-2 text-white">
                <span className="text-sm font-medium">
                  Use this as a reference to build your own component system.
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
              Trust Development SSL Certificate (only for developer instance):
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
      </SidebarContentLayout>
    </>
  );
};

export default page;

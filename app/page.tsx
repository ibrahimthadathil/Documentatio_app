"use client";

import { useState, useEffect } from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { CodeSnippet } from "@/components/code-snippet";
import { VideoPlayer } from "@/components/video-player";
import { Pagination } from "@/components/pagination";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import SVGComponent from "@/components/icons/logo";
import SVGLabel from "@/components/icons/label";
import { useTheme } from "next-themes";
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
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
          <div className="container max-w-screen-2xl px-4 py-6 lg:py-8">
            <div className="mx-auto max-w-4xl">
              {/* Hero Section */}
              <div className="mb-8 space-y-4 ">
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

                {/* Bounded Section */}
              </div>
                <div
                  className={`shadow ${
                    theme == "dark"
                      ? "bg-zinc-900 text-gray-300"
                      : "bg-gray-50 text-zinc-900 shadow-inner"
                  } rounded-xl sm:rounded-2xl mb-5 min-h-[300px]  sm:min-h-[400px] md:max-h-[650px] h-auto flex flex-col items-center justify-center p-3 sm:p-6 md:p-14 text-center mx-6 sm:mx-6 md:mx-0`}
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
                    simplifies the end-to-end testing process. Our approach
                    helps clients improve data management, simulate actual
                    business activities, and incorporate testing earlier in
                    their projects, reducing data discrepancies and resource
                    demands.
                  </p>
                </div>

              {/* Introduction */}
              {/* <section className="mb-12 space-y-6"> */}
                {/* <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground">
                    This is not a component library. It's a collection of
                    re-usable components that you can copy and paste into your
                    apps.
                  </p>
                </div> */}

                {/* <div className="space-y-4">
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
                </div> */}
              {/* </section> */}
              {/* Video Tutorial */}
              <section className="mb-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Video Tutorial
                  </h2>
                  <p className="text-muted-foreground">
                    Watch this comprehensive tutorial to get started with our
                    component library.
                  </p>
                </div>

                <VideoPlayer
                  title="Getting Started with UI Components"
                  description="Learn how to set up and use our component library in your Next.js project."
                />
              </section>

              {/* Installation */}
              <section id="installation" className="mb-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Installation
                  </h2>
                  <p className="text-muted-foreground">
                    How to install dependencies and structure your app.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Create project</h3>
                  <p className="leading-7">
                    Start by creating a new Next.js project using{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      create-next-app
                    </code>
                    :
                  </p>

                  <CodeSnippet
                    code="npx create-next-app@latest my-app --typescript --tailwind --eslint"
                    language="bash"
                    title="Terminal"
                  />

                  <h3 className="text-xl font-semibold">
                    Install dependencies
                  </h3>
                  <p className="leading-7">
                    Install the required dependencies for your project:
                  </p>

                  <CodeSnippet
                    code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install -D @types/node`}
                    language="bash"
                    title="Terminal"
                  />

                  <h3 className="text-xl font-semibold">Add a cn helper</h3>
                  <p className="leading-7">
                    I use a{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      cn
                    </code>{" "}
                    helper to make it easier to conditionally add Tailwind CSS
                    classes:
                  </p>

                  <CodeSnippet
                    code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                    language="typescript"
                    title="lib/utils.ts"
                  />
                </div>
              </section>

              {/* Components Preview */}
              {/* <section className="mb-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Components
                  </h2>
                  <p className="text-muted-foreground">
                    Over 50+ components built with Radix UI and Tailwind CSS.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Button",
                      description:
                        "Displays a button or a component that looks like a button.",
                    },
                    {
                      name: "Card",
                      description:
                        "Displays a card with header, content, and footer.",
                    },
                    {
                      name: "Dialog",
                      description:
                        "A window overlaid on either the primary window or another dialog window.",
                    },
                    {
                      name: "Input",
                      description:
                        "Displays a form input field or a component that looks like an input field.",
                    },
                    {
                      name: "Select",
                      description:
                        "Displays a list of options for the user to pick from.",
                    },
                    {
                      name: "Table",
                      description:
                        "A responsive table component with sorting and filtering.",
                    },
                  ].map((component) => (
                    <div
                      key={component.name}
                      className="group relative overflow-hidden rounded-lg border p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="space-y-2">
                        <h3 className="font-semibold">{component.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section> */}

              {/* FAQ
              <section className="mb-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground">
                    Common questions about using our component library.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">
                      Can I use this in my project?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes. Free to use for personal and commercial projects. No
                      attribution required.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">
                      Do you provide Figma files?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes! We provide Figma files for all components. You can
                      find them in our design system.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Can I contribute?</h3>
                    <p className="text-sm text-muted-foreground">
                      We welcome contributions. Check out our contributing guide
                      on GitHub.
                    </p>
                  </div>
                </div>
              </section> */}

              {/* Pagination */}
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
}

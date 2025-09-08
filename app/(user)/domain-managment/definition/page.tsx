"use client";

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
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import Link from "next/link";

export default function HomePage() {
  //   const [isLoading, setIsLoading] = useState(true);
  const { isExpanded } = useCommandClipboard();

  //   if (isLoading) {
  //     return null; // PageLoader will handle the loading state
  //   }

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
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">Documentation</h1>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  v2.0.0
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="container max-w-screen-2xl px-4 py-6 lg:py-8">
            <div className="mx-auto max-w-4xl">
              {/* Hero Section */}
              <div className="mb-8 space-y-4">
                {/* <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-primary/10">
                    <Star className="mr-1 h-3 w-3" />
                    New
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Version 2.0 is now available
                  </span>
                </div> */}

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

                  <Link href="/">
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

              {/* {  contents  } */}

              {/* Content Section */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Domain Definition</h1>
                <h2 className="text-xl ">Domain List</h2>
                <p className="text-muted-foreground">
                  The Domain List page provides a searchable list of all domains
                  in the system.
                </p>

                {/* Search Section */}
                <div>
                  <h3 className="text-lg font-medium">Search Domain Name</h3>
                  <p className="text-muted-foreground">
                    Use the search bar to quickly locate a specific domain.
                  </p>
                </div>

                {/* Table Section */}
                <div>
                  <h3 className="text-lg font-medium">Domain List Table</h3>
                  <p className="text-muted-foreground">
                    Displays available domains with the following information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      <strong>Id</strong> → Unique identifier for the domain.
                    </li>
                    <li>
                      <strong>Domains</strong> → Domain name (e.g.,{" "}
                      <code>test_9876725</code>).
                    </li>
                    <li>
                      <strong>Description</strong> → Purpose or note for the
                      domain (e.g., Domain for performance test).
                    </li>
                    <li>
                      <strong>Modified By</strong> → User who last updated the
                      domain.
                    </li>
                    <li>
                      <strong>Last Modified</strong> → Timestamp of last
                      modification.
                    </li>
                    <li>
                      <strong>Action</strong> → Options for managing each domain
                      (View, Audit, Linked Resources, etc.).
                    </li>
                  </ul>
                </div>

                {/* Export Section */}
                <div>
                  <h3 className="text-lg font-medium">Exporting Domains</h3>
                  <p className="text-muted-foreground">
                    Use the <strong>Download as Excel</strong> button
                    (top-right) to export the entire domain list for offline
                    review.
                  </p>
                </div>
              </div>

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

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

              {/* Content Section */}
              {/* Content Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Domain Linkage</h2>
                <p className="text-muted-foreground max-w-2xl">
                  The Domain Linkage feature defines relationships between two
                  domains by linking their columns. This ensures consistency
                  across domains and allows validation/comparisons to run
                  smoothly.
                </p>

                {/* Domain Linkage List */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    2.4.1 Domain Linkage List
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Found under Configurations → Domain Linkage. Displays all
                    defined linkages in a table:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      <strong>Source Domain</strong> → The origin domain.
                    </li>
                    <li>
                      <strong>Source Column Key</strong> → The column(s) being
                      mapped.
                    </li>
                    <li>
                      <strong>Target Domain</strong> → The destination domain.
                    </li>
                    <li>
                      <strong>Target Column Key</strong> → The column(s) being
                      mapped to.
                    </li>
                    <li>
                      <strong>Action</strong> → View details of the linkage.
                    </li>
                  </ul>
                </div>

                {/* Filtering Domain Linkages */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    2.4.2 Filtering Domain Linkages
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Use the Filter panel (right-hand side) to narrow results by:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Source Domain Name</li>
                    <li>Source Domain Key</li>
                    <li>Target Domain Name</li>
                    <li>Target Domain Key</li>
                  </ul>
                  <p className="text-muted-foreground max-w-2xl">
                    After choosing filters, click <strong>Apply Filter</strong>{" "}
                    to refresh results.
                  </p>
                </div>

                {/* Viewing a Domain Linkage */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    2.4.3 Viewing a Domain Linkage
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Clicking the View (eye icon) opens a detail view. The detail
                    screen shows:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Source Domain & Source Column Key</li>
                    <li>Target Domain & Target Column Key</li>
                    <li>
                      Key Status → Indicates whether the source/target column is
                      a key field.
                    </li>
                    <li>Tags → Displays associated tags (e.g., Legacy).</li>
                  </ul>
                </div>

                {/* Best Practices */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    2.4.4 Best Practices
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      Use clear, consistent column names across domains to
                      simplify linkage.
                    </li>
                    <li>
                      Ensure at least one key field is mapped to maintain data
                      integrity.
                    </li>
                    <li>
                      Regularly audit linkages to confirm they align with
                      updated domain structures.
                    </li>
                  </ul>
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

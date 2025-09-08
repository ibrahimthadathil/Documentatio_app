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
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Comparison Summary</h2>
                <p className="text-muted-foreground max-w-2xl">
                  The Comparison Summary page provides a consolidated view of
                  data comparison runs. It allows users to review whether
                  datasets align correctly across rules, domains, or resources.
                </p>

                {/* Key Fields */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    Key Fields
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      <strong>Rule Name</strong> → The comparison rule or
                      research query used for the run.
                    </li>
                    <li>
                      <strong>Description</strong> → A short explanation of the
                      rule or comparison scenario.
                    </li>
                    <li>
                      <strong>Execution Time</strong> → The date and time the
                      comparison was run.
                    </li>
                    <li>
                      <strong>Status</strong> → The outcome of the comparison:
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>
                          ✅ Green Check – Comparison passed successfully.
                        </li>
                        <li>
                          ❌ Red Cross – Comparison failed with mismatches or
                          missing records.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Records</strong> → Total number of records
                      evaluated in the comparison.
                    </li>
                    <li>
                      <strong>Mismatched</strong> → Number of records where data
                      values differed across sources.
                    </li>
                    <li>
                      <strong>Missing</strong> → Number of records missing from
                      one side of the comparison.
                    </li>
                  </ul>
                </div>

                {/* User Actions */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    User Actions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      <strong>Run Filters:</strong> Select Run Name, Run Date,
                      or Report Type (Summary or Detailed) to refine the
                      results.
                    </li>
                    <li>
                      <strong>Search Rule:</strong> Use the Search Rule box to
                      locate a specific rule quickly.
                    </li>
                    <li>
                      <strong>Export:</strong> Use the Download button to export
                      comparison results to Excel for offline analysis.
                    </li>
                    <li>
                      <strong>Drill Down:</strong> Click on a comparison entry
                      to view detailed results and error breakdowns.
                    </li>
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    Use Cases
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      Validating that reference data (e.g., Security Master)
                      matches across systems.
                    </li>
                    <li>
                      Checking that daily resource files align with domain
                      rules.
                    </li>
                    <li>
                      Comparing datasets across different runs to ensure no
                      unexpected changes.
                    </li>
                    <li>Other storage systems depending on your setup.</li>
                    <li>
                      Each time a new version of a system is deployed, data
                      comparisons can run automatically.
                    </li>
                    <li>Helps catch issues before they reach users.</li>
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

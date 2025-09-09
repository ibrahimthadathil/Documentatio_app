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
 
              {/* Content Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Domain Audit</h2>
                <p className="text-muted-foreground max-w-2xl">
                  The Audit Domain feature lets you track changes and review
                  modification history.
                </p>

                {/* Modification History */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    Domain Modification History Table
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      <strong>Code</strong> → Domain code.
                    </li>
                    <li>
                      <strong>Last Modified</strong> → Date and time of
                      modification.
                    </li>
                    <li>
                      <strong>Modified By</strong> → User who made the changes.
                    </li>
                    <li>
                      <strong>Domain Info</strong> → Extra metadata (click the
                      info icon).
                    </li>
                    <li>
                      <strong>Action</strong> → Compare changes or download
                      audit logs.
                    </li>
                  </ul>
                </div>

                {/* Compare Feature */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    Compare Feature
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Use the <strong>Compare</strong> button (top-right) to see
                    differences between versions. Helpful for compliance reviews
                    and debugging.
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
            
    </>
  );
}

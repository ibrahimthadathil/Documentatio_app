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
import Wrapper from '@/app/(user)/user-layout'

export default function HomePage() {
  //   const [isLoading, setIsLoading] = useState(true);
  const { isExpanded } = useCommandClipboard();

  //   if (isLoading) {
  //     return null; // PageLoader will handle the loading state
  //   }

  return (
    <>
      
              <Wrapper commandClipboard={<CommandClipboard/>}>
              <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/comparison-rules/strategies">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/comparison-rules/result&storage">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
              {/* Content Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">
                  Rule Precedence and Conflict Resolution
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  When multiple rules apply to the same data, the system follows
                  a set priority to decide which rule takes effect. This
                  prevents confusion and ensures consistent comparison results.
                </p>

                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    Conflict Resolution
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    If there are conflicting outcomes (e.g., one rule shows a
                    match, another doesn’t), the system resolves the conflict
                    based on:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      Rule priority (which rule is considered more important)
                    </li>
                    <li>
                      Data source priority (which system is considered most
                      accurate)
                    </li>
                  </ul>
                  <p className="text-muted-foreground max-w-2xl">
                    You don’t need to manage these manually—the system follows
                    the configured logic automatically.
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
           
              </Wrapper>
    </>
  );
}

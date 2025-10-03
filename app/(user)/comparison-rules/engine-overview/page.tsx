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
  const { isExpanded } = useCommandClipboard();


  return (
    <>
      
        <Wrapper commandClipboard={<CommandClipboard/>}>
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/validation-rules/validation-result">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/comparison-rules/config">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
        </div>
              {/* Content Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Comparison Rules</h2>
                <p className="text-muted-foreground max-w-2xl">
                  This section explains how the system compares data between
                  different files or systems. It describes the rules used for
                  matching data, handling mismatches, and analyzing results. The
                  comparison engine helps ensure data is accurate and consistent
                  across your sources.
                </p>

                {/* Comparison Engine Overview */}
                <div>
                  <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
                    Comparison Engine Overview
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                  The comparison engine checks that data from multiple systems
                    or files matches correctly. It applies rules to align data
                    and identify any differences. These rules may involve
                    adjusting formats, translating values, or comparing combined
                    fields. The engine helps ensure your data is complete and
                    accurate across systems—without changing the original files.
                  </p> 
                </div> 
            </div>

              {/* Pagination */}
              <Pagination
                currentPage={1}
                totalPages={5}
                previousLabel="Welcome"
                nextLabel="Definition and Configuration"
                previousHref="#"
                nextHref="/comparison-rules/config"
              />
            
        </Wrapper>
    </>
  );
}

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

      {/* Content Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">
          Creating Custom Validation Rules
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Users can define their own validation rules through the Rule Builder
          interface.
        </p>

        {/* Steps */}
        <div>
          <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
            Steps
          </h3>
          <ol className="list-decimal list-inside space-y-1 pl-4">
            <li>
              Navigate to <strong>Validation Rules → Create New Rule</strong>.
            </li>
            <li>
              Enter <strong>Rule Name</strong>, <strong>Category</strong>, and{" "}
              <strong>Description</strong>.
            </li>
            <li>
              Select the <strong>Target Domain/Resource</strong> the rule will
              apply to.
            </li>
            <li>
              Define the <strong>Logic</strong>:
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>
                  Choose condition type (Not Null, Format, Range, Lookup, SQL
                  Expression).
                </li>
                <li>
                  Specify parameters (column, min/max, pattern, reference
                  table).
                </li>
                <li>Assign Severity Levels (Low, Medium, High).</li>
              </ul>
            </li>
            <li>Save and tag the rule for easier search.</li>
          </ol>
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

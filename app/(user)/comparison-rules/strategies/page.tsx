"use client";
import { Pagination } from "@/components/pagination";

import { CommandClipboard } from "@/components/command-clipboard";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {


  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard/>}>
        {/* Content Section */}
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/comparison-rules/config">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/comparison-rules/config-result">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Comparison Strategies</h2>
          <p className="text-muted-foreground max-w-2xl">
            When comparing multiple systems, the order matters. The system
            compares data in a defined sequence (e.g., GWP &gt; CRD &gt; XYZ) to
            help trace issues.
          </p>

          {/* Example 1 */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Example 1: Problem in Middle System (CRD)
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              GWP &gt; CRD &gt; XYZ
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>CRD and XYZ match each other, but GWP is different.</li>
              <li>The system shows an error.</li>
              <li>
                Even though CRD and XYZ match, the mismatch is real because GWP
                has the wrong value.
              </li>
            </ul>
          </div>

          {/* Example 2 */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Example 2: Problem in First System (GWP)
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              GWP &gt; CRD &gt; XYZ
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>All values match.</li>
              <li>No error is shown.</li>
              <li>But later, a user reports that the value is wrong.</li>
              <li>Since CRD and XYZ match, the issue is likely with GWP.</li>
            </ul>
          </div>

          {/* Strategy Benefits */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              These strategies help you
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Trace the issue to the right system.</li>
              <li>Save time by checking the correct source first.</li>
              <li>Improve accuracy and confidence in data.</li>
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
      </Wrapper>
    </>
  );
}

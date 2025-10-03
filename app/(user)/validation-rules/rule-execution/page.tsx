"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { CommandClipboard } from "@/components/command-clipboard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
      <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/validation-rules/custom-validation">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/validation-rules/validation-result">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Rule Execution and Scheduling
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Validation rules can be run manually or scheduled:
          </p>

          {/* Manual Execution */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Manual Execution
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                From a Domain or Resource screen, click{" "}
                <strong>Validate</strong> to run applicable rules immediately.
              </li>
            </ul>
          </div>

          {/* Scheduled Execution */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Scheduled Execution
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                Rules can be configured to run automatically at set times (e.g.,
                nightly, weekly).
              </li>
              <li>Useful for continuous data monitoring.</li>
            </ul>
          </div>

          {/* Execution Parameters */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Execution Parameters
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                Rules run against the resource data using its Linked Service
                connection.
              </li>
              <li>
                Execution history (time, status, duration) is logged for audit.
              </li>
            </ul>
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="Validation Result"
          previousHref="#"
          nextHref="/validation-rules/validation-result"
        />
      </Wrapper>
    </>
  );
}

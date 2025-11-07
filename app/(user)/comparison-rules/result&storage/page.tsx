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
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* Content Section */}

        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/comparison-rules/conflict-result">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/file-processing">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Comparison Results and Storage
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            After the comparison, the system generates results. You can choose
            how these results are stored and viewed.
          </p>

          {/* Options for Result Storage */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Options for Result Storage
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>Store All Errors:</strong> Keeps a record of every
                mismatch found.
              </li>
              <li>
                <strong>Store Summary Only:</strong> Keeps a high-level overview
                (e.g., number of mismatches, affected fields).
              </li>
              <li>
                <strong>Choose Both:</strong> You can configure the system to
                store detailed and summary information based on your needs.
              </li>
            </ul>
          </div>

          {/* Where Are Results Stored? */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Where Are Results Stored?
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Results can be stored in:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Databases</li>
              <li>Logging tools like Splunk</li>
            </ul>
          </div>

          {/* CI/CD (Automation) Use Case */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              CI/CD (Automation) Use Case
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Comparison rules can be part of automated testing pipelines. This
              means results can be automatically validated as part of continuous
              integration or deployment workflows.
            </p>
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="File Processing"
          previousHref="#"
          nextHref="/file-processing"
        />
      </Wrapper>
    </>
  );
}

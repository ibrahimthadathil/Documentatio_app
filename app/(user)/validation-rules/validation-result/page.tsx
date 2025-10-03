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
            <Link href="/validation-rules/rule-execution">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/comparison-rules/engine-overview">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Validation Results and Reporting
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            After execution, results can be reviewed in the Validation History
            and Validation Result pages.
          </p>

          {/* Validation History */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Validation History
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Displays all past validation runs with details such as domain
              name, resource, execution ID, execution name, run name, timestamp,
              and status.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Filters can be applied to find specific runs.</li>
              <li>
                Reports can be downloaded or consolidated across multiple runs.
              </li>
            </ul>
          </div>

          {/* Validation Result */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Validation Result
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Provides detailed statistics for a specific run:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Total Records</li>
              <li>Unique Records</li>
              <li>Total Invalid Records</li>
              <li>Total Duplicate Records</li>
              <li>Total Validation Errors</li>
              <li>Execution Time</li>
              <li>
                Shows validation parameters including resource name, file name,
                linked service, connection key, and resource location.
              </li>
              <li>
                Includes summaries of validation errors, duplicate records, and
                null key errors.
              </li>
            </ul>
          </div>

          {/* Reporting & Insights */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Reporting & Insights
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Generate consolidated reports across runs.</li>
              <li>Analyze validation trends over time.</li>
              <li>
                Prioritize remediation by focusing on High/Medium severity
                issues.
              </li>
              <li>Raise issues directly from failed validations.</li>
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

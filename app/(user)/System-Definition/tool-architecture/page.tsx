"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Architecture() {
  return (
    <>
      <Wrapper>
        <div className=" top-0 justify-end right-0  flex space-x-2">
          <Link href="/">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/installation/windows-service">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Tool Architecture</h2>
          <p className="text-muted-foreground max-w-2xl">
            The AutoXLR8 Data Module is structured as a modular, flexible system
            designed for high-volume financial data validation and
            reconciliation.
          </p>

          {/* Core Components */}
          <div >
            <h3 className="text-lg font-medium mb-4 border-muted-foreground/20 pb-1 ">
              Core Components
            </h3>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>
                <strong>Data Ingestion Layer</strong>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    Connects to databases, APIs, SFTP folders, and cloud storage
                    via Linked Services.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Resource Layer</strong>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    Defines how data is queried, filtered, and transformed.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Domain Mapping Layer</strong>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    Normalizes system-specific field names into standardized
                    domain models.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Validation Layer</strong>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    Applies data quality and business rules to ensure accuracy.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Comparison Layer</strong>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    Reconciles data across multiple systems, identifying
                    discrepancies and missing records.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Action & Reporting Layer</strong>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    Provides issue assignment, comments, and exports for audit
                    and reporting needs.
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          {/* System Data Flow */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              System Data Flow
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Source Systems → Linked Services → Resources → Domains →
              Validation → Comparison → Actioning → Export/Reports
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

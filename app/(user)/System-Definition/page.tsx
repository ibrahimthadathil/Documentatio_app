"use client";

import { Pagination } from "@/components/pagination";

import { CommandClipboard } from "@/components/command-clipboard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from "next-themes";
import SVGComponent from "@/components/icons/logo";
import SVGLabel from "@/components/icons/label";
import Wrapper from "@/app/(user)/user-layout";

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* {  contents  } */}
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/System-Definition">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/System-Definition/key-terminology">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* Bounded Section */}
        <div
          className={`shadow ${
            theme == "dark"
              ? "bg-zinc-900 text-gray-300"
              : "bg-gray-50 text-zinc-900 shadow-inner"
          } rounded-xl sm:rounded-2xl mb-5 min-h-[300px] sm:min-h-[400px] md:max-h-[650px] h-auto flex flex-col items-center justify-center p-3 sm:p-6 md:p-14 text-center mx-6 sm:mx-6 md:mx-0`}
        >
          {/* Logo */}
          <div className="mb-2 sm:mb-4 md:mb-2">
            <div className="flex items-center h-[50px] sm:h-[70px] md:h-[100px]">
              <SVGComponent
                color="#87BFE5"
                size="32"
                className="sm:size-10 md:size-14"
              />
              <SVGLabel
                color="red"
                className="mt-2 sm:mt-3 md:mt-5"
                size={120}
                theme={theme == "dark" ? "white" : "black"}
              />
            </div>
          </div>

          {/* Description */}
          <p className="max-w-[280px] sm:max-w-md md:max-w-2xl text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed">
            <span className="font-semibold">AutoXLR8</span> is a data quality
            and validation management platform designed to ensure accuracy,
            consistency, and compliance across enterprise data sources. It
            provides an end-to-end framework for defining domains, configuring
            resources, applying validation rules, and executing queries across
            multiple systems.
          </p>
        </div>

        {/* What the system enables */}
        <div className="space-y-8 mb-8">
  <section className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-foreground">The system enables organizations to:</h2>
    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Integrate with multiple data sources through Linked Services (e.g., local files, SFTP, SQL, Azure SQL)
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Define Domains to standardize data structures, column types, and formats
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Configure Resources by mapping actual data files to domain definitions
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Apply Validation Rules to enforce data integrity, format consistency, and business-specific checks
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Establish Domain Linkages to connect related datasets across systems
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Run Research Queries for extracting, comparing, and analyzing data
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Audit Changes to maintain transparency and track modifications over time
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Generate Reports and Dashboards for validation results, compliance monitoring, and error tracking
      </li>
    </ul>
  </section>

  {/* Core Modules */}
  <section className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Core Modules of the System:</h2>
    <ol className="space-y-2 text-sm sm:text-base text-muted-foreground">
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">1.</span>
        <span>
          <strong>Domain Management</strong> → Defines the structure and metadata for datasets
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">2.</span>
        <span>
          <strong>Resource Management</strong> → Maps actual data files to defined domains
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">3.</span>
        <span>
          <strong>Validation Rules</strong> → Enforces integrity and business rules on data
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">4.</span>
        <span>
          <strong>Domain Linkage</strong> → Establishes relationships between domains for cross-checks
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">5.</span>
        <span>
          <strong>Linked Services</strong> → Connects AutoXLR8 to external data sources
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">6.</span>
        <span>
          <strong>Research Queries</strong> → Provides query building, execution, and results visualization
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-primary font-semibold mr-2 min-w-[1.5rem]">7.</span>
        <span>
          <strong>Audit and History</strong> → Tracks domain changes, rule executions, and validation history
        </span>
      </li>
    </ol>
  </section>

  {/* Benefits */}
  <section className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Benefits of AutoXLR8:</h2>
    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Reduces manual data validation work
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Improves data quality and compliance
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Supports both technical users (SQL, custom validations) and business users (predefined templates, dashboards)
      </li>
      <li className="flex items-start">
        <span className="text-primary mr-2">•</span>
        Provides transparency with audit trails and consolidated reporting
      </li>
    </ul>
  </section>
</div>

        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="Key Terminology"
          previousHref="#"
          nextHref="/System-Definition/key-terminology"
        />
      </Wrapper>
    </>
  );
}

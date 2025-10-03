"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/System-Definition/tool-architecture">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/domain-managment/audit">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* {  contents  } */}
            <div className="space-y-8">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold mb-4">Use Cases and Applications</h1>
      <p className="text-muted-foreground mb-6">
        The Data Module is built for organizations with complex, high-volume datasets,
        especially in finance, trading, and operations.
      </p>

      {/* Subheading */}
      <h2 className="text-lg text-pretty font-bold mb-3">Primary Use Cases</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Trade and Position Reconciliation</span> – Compare
          front-office trading systems and back-office accounting systems to ensure positions
          and balances match.
        </li>
        <li>
          <span className="font-semibold">Data Quality Monitoring</span> – Automatically
          detect missing or invalid data fields (e.g., missing identifiers, outdated
          timestamps).
        </li>
        <li>
          <span className="font-semibold">Vendor File Validation</span> – Verify incoming data
          files from vendors or custodians against expected formats and rules.
        </li>
        <li>
          <span className="font-semibold">Regulatory Compliance Checks</span> – Demonstrate
          data accuracy and completeness for regulatory reporting through audit trails and
          validation logs.
        </li>
        <li>
          <span className="font-semibold">System Migration Testing</span> – Compare legacy
          system data with new platform data during migrations to identify discrepancies.
        </li>
      </ul>

      {/* Subheading */}
      <h2 className="text-lg text-pretty font-bold mb-3">Benefits</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Centralized Data Control:</span> Consolidates
          validation and reconciliation tasks into one platform.
        </li>
        <li>
          <span className="font-semibold">Automation-Ready:</span> Supports workflows that run
          on a schedule or trigger.
        </li>
        <li>
          <span className="font-semibold">Transparency:</span> Every action is logged,
          creating an audit-ready environment.
        </li>
        <li>
          <span className="font-semibold">Efficiency:</span> Saves time by reusing Linked
          Services, Domains, and Rules across datasets.
        </li>
      </ul>
    </div>
        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="Domain Managment"
          previousHref="#"
          nextHref="/domain-managment/definition"
        />
      </Wrapper>
    </>
  );
}

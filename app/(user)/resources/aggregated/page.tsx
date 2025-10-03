"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <div className=" top-0 justify-end right-0  flex space-x-2">
          <Link href="/resources/configuration">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/resources/methods">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Aggregated Resources */}
          <h2 className="text-2xl font-bold mb-4">Aggregated Resources</h2>
          <p className="mb-4">
            Aggregated Resources are specialized resources that roll up detailed
            data into summary views based on defined key fields. They
            consolidate granular records (like individual tax lots) into
            higher-level aggregations (such as position-level summaries by
            account and security), calculating derived metrics like total
            quantities, market values, and weighted averages.
          </p>

          <h3 className="text-lg text-pretty font-bold mb-2">Key Features</h3>
          <ul className="list-disc list-inside mb-6">
            <li>
              <span className="font-bold">Roll-up Operations:</span> Aggregate
              detailed records based on grouping keys (e.g., account_id +
              security_id)
            </li>
            <li>
              <span className="font-bold">Calculated Metrics:</span>{" "}
              Automatically compute sums, counts, averages, and other
              statistical measures
            </li>
            <li>
              <span className="font-bold">Multi-level Aggregation:</span>{" "}
              Support for hierarchical roll-ups (e.g., tax lot → position →
              portfolio → firm-wide)
            </li>
            <li>
              <span className="font-bold">Derived Values:</span> Generate
              calculated fields like total market value, net exposure, or
              weighted average price
            </li>
          </ul>
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="Methods"
          previousHref="#"
          nextHref="/resources/methods"
        />
      </Wrapper>
    </>
  );
}

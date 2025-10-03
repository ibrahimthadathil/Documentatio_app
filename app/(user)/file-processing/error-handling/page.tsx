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
          <Link href="/file-processing/pipelines">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/appendix">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Main Heading */}
          <h2 className="text-2xl font-bold mb-4">
            Error Handling and Recovery
          </h2>
          <p className="mb-4">
            Robust error detection and recovery mechanisms ensure resilience:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Schema Errors:</span> Flag unexpected
              field changes, missing columns, or invalid layouts.
            </li>
            <li>
              <span className="font-bold">Validation Failures:</span> Clearly
              display rule-level failures for remediation.
            </li>
            <li>
              <span className="font-bold">Partial Processing:</span> Isolate
              failed files without blocking the rest of the pipeline.
            </li>
            <li>
              <span className="font-bold">Automated Alerts:</span> Notify users
              of critical failures or schema drift.
            </li>
            <li>
              <span className="font-bold">Recovery Options:</span> Rerun failed
              loads, replay files, or roll back to a prior state.
            </li>
          </ul>
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="Appendices"
          previousHref="#"
          nextHref="/appendix"
        />
      </Wrapper>
    </>
  );
}

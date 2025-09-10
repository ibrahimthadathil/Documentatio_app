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
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Main Heading */}
          <h2 className="text-2xl font-bold mb-4">Processing Pipelines</h2>
          <p className="mb-4">
            Once ingested, files follow a standardized processing pipeline:
          </p>

          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-bold">Schema Detection:</span> Validate file
              structure against expected fields.
            </li>
            <li>
              <span className="font-bold">Data Normalization:</span> Clean and
              transform files into tabular datasets.
            </li>
            <li>
              <span className="font-bold">Validation:</span> Apply technical and
              business-level data quality checks.
            </li>
            <li>
              <span className="font-bold">Enrichment:</span> Join or map
              imported data to system resources for reconciliation.
            </li>
            <li>
              <span className="font-bold">Load:</span> Store processed results
              for downstream workflows.
            </li>
          </ul>
           <h2 className="text-2xl font-bold mb-4">
        Batch Processing
      </h2>
      <p className="mb-4">
        The platform supports high-volume file handling through batch processing:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li><span className="font-bold">Parallel Execution:</span> Efficiently processes large volumes of files or high-row-count datasets.</li>
        <li><span className="font-bold">Scheduling:</span> Automate processing on daily, intraday, or custom schedules.</li>
        <li><span className="font-bold">Retry Logic:</span> Intelligent handling of partially failed batches.</li>
      </ul>
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

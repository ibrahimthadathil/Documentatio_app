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
            <Link href="/comparison-rules/result&storage">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/file-processing/upload-import">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* {  contents  } */}
                <div className="mx-auto max-w-4xl p-6 space-y-10">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold mb-4">
        File Processing
      </h2>
      <p className="mb-4">
        The Data Tool provides a robust framework for ingesting, validating, and transforming files from multiple 
        sources. File processing capabilities ensure that static or semi-static datasets—such as vendor reports, 
        regulatory submissions, and operational extracts—are reliably integrated into workflows alongside system
        based data connections.
      </p>

      {/* Subheading */}
      <h3 className="text-lg text-pretty font-bold mb-2">
        8.1 Supported File Formats
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li><span className="font-bold">Structured Files:</span> CSV, TSV, PSV</li>
        <li><span className="font-bold">Semi-Structured Files:</span> JSON, XML, Parquet</li>
        <li><span className="font-bold">Excel Files:</span> XLS, XLSX (with sheet selection)</li>
        <li><span className="font-bold">Compressed Files:</span> GZIP, ZIP (auto-extraction supported)</li>
        <li><span className="font-bold">Other Formats:</span> Fixed-width text, proprietary layouts (via configuration)</li>
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

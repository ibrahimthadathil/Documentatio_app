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
          <Link href="/resources/additional">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/linked-service/integration">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Linked Services */}
          <h2 className="text-2xl font-bold mb-4">Linked Services</h2>
          <p className="mb-4">
            Linked Services allow the Data Tool to connect seamlessly with
            external platforms, APIs, and data providers. These integrations
            extend the platform’s capabilities by enabling automated data
            ingestion, enrichment, and validation workflows across multiple
            systems.
          </p>

          <p className="mb-2">
            By defining Linked Services separately from Resources, you can:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Centralize connection logic for external systems.</li>
            <li>
              Standardize credentials and endpoints for multiple workflows.
            </li>
            <li>
              Streamline the process of pulling or pushing data between systems.
            </li>
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

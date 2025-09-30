"use client";

import { Pagination } from "@/components/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Wrapper from "@/app/(user)/user-layout";
import { CommandClipboard } from "@/components/command-clipboard";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>

      <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/domain-managment/linkage">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/resources/types">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

        <div className="space-y-8">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold mb-4">Resource Overview</h1>
      <p className="text-muted-foreground mb-6">
        Resources are the core building blocks of the Data Tool. They define what data is pulled,
        how it’s filtered, and how integrity is enforced:
      </p>

      {/* Subheading */}
      <h2 className="text-lg text-pretty font-bold mb-3">Resource Variables</h2>
      <p className="text-muted-foreground mb-4">
        Dynamic parameters for flexible pulls.
      </p>

      {/* Subheading */}
      <h2 className="text-lg text-pretty font-bold mb-3">Resource Columns</h2>
      <p className="text-muted-foreground mb-4">
        Schema and validation rules for consistent, high-quality ingestion.
      </p>

      <p className="text-muted-foreground">
        Combined with Filters and Joins, resources form a scalable framework for
        multi-source reconciliation and reporting.
      </p>
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

"use client";

import { Pagination } from "@/components/pagination";

import Wrapper from "@/app/(user)/user-layout";
import { CommandClipboard } from "@/components/command-clipboard";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
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

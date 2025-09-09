"use client";

import { Pagination } from "@/components/pagination";
import { CommandClipboard } from "@/components/command-clipboard";

import Wrapper from "@/app/(user)/user-layout";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Validation Rules</h2>
          <p className="text-muted-foreground max-w-2xl">
            Validation Rules are the checks applied to ensure data integrity,
            accuracy, and compliance across Domains and Resources. They define
            what “valid” data looks like in your system.
          </p>

          {/* Validation Framework */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              7.1 Validation Framework
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              The Validation Framework provides the foundation for how rules are
              defined and executed.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                Validation rules can be applied at the Domain or Resource level.
              </li>
              <li>
                Each rule checks data against defined conditions (e.g., “Column
                must not be null” or “Value must match reference table”).
              </li>
              <li>
                Rules can be predefined by administrators or custom-created by
                users.
              </li>
              <li>
                The framework supports reusable rule sets, so the same logic can
                be applied across multiple domains or resources.
              </li>
            </ul>

            {/* Key Components */}
            <p className="text-muted-foreground max-w-2xl font-medium mt-2">
              Key Components:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>Validation Rule Definition</strong> – Logic and
                conditions to check.
              </li>
              <li>
                <strong>Execution Engine</strong> – Runs rules against
                resources.
              </li>
              <li>
                <strong>Results</strong> – Flags issues, warnings, or compliance
                passes.
              </li>
              <li>
                <strong>Reports</strong> – Summarize results for review.
              </li>
            </ul>
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

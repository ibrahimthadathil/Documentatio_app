"use client";

import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { CommandClipboard } from "@/components/command-clipboard";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Rule Types and Categories</h2>
          <p className="text-muted-foreground max-w-2xl">
            Validation rules are grouped into categories based on their purpose:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Data Integrity Rules</li>
            <li>Format Rules</li>
            <li>Value Rules</li>
            <li>Cross-Domain Rules</li>
            <li>Custom Rules</li>
          </ul>

          {/* Data Integrity Rules */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Data Integrity Rules
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Examples: Not Null, Unique Key Check, Referential Integrity.
            </p>
          </div>

          {/* Format Rules */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Format Rules
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Ensure data follows a defined format.
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Examples: String length = 10, Decimal precision = (10,5), Date
              format.
            </p>
          </div>

          {/* Value Rules */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Value Rules
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Validate acceptable ranges or specific lists of values.
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Examples: Value must be between 1–100, Must be in lookup table.
            </p>
          </div>

          {/* Cross-Domain Rules */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Cross-Domain Rules
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Compare values across domains (leveraging Domain Linkage).
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Example: Account Code in Security must exist in LegalEntity.
            </p>
          </div>

          {/* Custom Rules */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              Custom Rules
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              User-defined validations built for business-specific checks.
            </p>
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

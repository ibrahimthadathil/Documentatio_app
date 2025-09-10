"use client";

import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { CommandClipboard } from "@/components/command-clipboard";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* Content Section */}
        {/* Content Section */}
        
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Domain Linkage</h2>
          <p className="text-muted-foreground max-w-2xl">
            The Domain Linkage feature defines relationships between two domains
            by linking their columns. This ensures consistency across domains
            and allows validation/comparisons to run smoothly.
          </p>

          {/* Domain Linkage List */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              2.4.1 Domain Linkage List
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Found under Configurations → Domain Linkage. Displays all defined
              linkages in a table:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>Source Domain</strong> → The origin domain.
              </li>
              <li>
                <strong>Source Column Key</strong> → The column(s) being mapped.
              </li>
              <li>
                <strong>Target Domain</strong> → The destination domain.
              </li>
              <li>
                <strong>Target Column Key</strong> → The column(s) being mapped
                to.
              </li>
              <li>
                <strong>Action</strong> → View details of the linkage.
              </li>
            </ul>
          </div>

          {/* Filtering Domain Linkages */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              2.4.2 Filtering Domain Linkages
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Use the Filter panel (right-hand side) to narrow results by:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Source Domain Name</li>
              <li>Source Domain Key</li>
              <li>Target Domain Name</li>
              <li>Target Domain Key</li>
            </ul>
            <p className="text-muted-foreground max-w-2xl">
              After choosing filters, click <strong>Apply Filter</strong> to
              refresh results.
            </p>
          </div>

          {/* Viewing a Domain Linkage */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              2.4.3 Viewing a Domain Linkage
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Clicking the View (eye icon) opens a detail view. The detail
              screen shows:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Source Domain & Source Column Key</li>
              <li>Target Domain & Target Column Key</li>
              <li>
                Key Status → Indicates whether the source/target column is a key
                field.
              </li>
              <li>Tags → Displays associated tags (e.g., Legacy).</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div>
            <h3 className="text-lg font-medium border-b border-muted-foreground/20 pb-1 inline-block">
              2.4.4 Best Practices
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                Use clear, consistent column names across domains to simplify
                linkage.
              </li>
              <li>
                Ensure at least one key field is mapped to maintain data
                integrity.
              </li>
              <li>
                Regularly audit linkages to confirm they align with updated
                domain structures.
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

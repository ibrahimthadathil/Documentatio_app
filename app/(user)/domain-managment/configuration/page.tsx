"use client";
import { Pagination } from "@/components/pagination";

import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import Wrapper from "@/app/(user)/user-layout";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* {  contents  } */}
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Domain Configuration</h2>
          <p className="text-muted-foreground">
            Selecting a domain opens the Domain Detail page.
          </p>

          {/* Domain Information */}
          <div>
            <h3 className="text-lg font-medium">Domain Information</h3>
            <p className="text-muted-foreground">
              Shows domain name, code, tags, and description.
            </p>
          </div>

          {/* Columns List */}
          <div>
            <h3 className="text-lg font-medium">Columns List</h3>
            <p className="text-muted-foreground">
              Defines the structure of the domain:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong>Column Name</strong> → Each field in the domain (e.g.,{" "}
                <code>file_name</code>, <code>Column1</code>).
              </li>
              <li>
                <strong>Data Type</strong> → Format of the field (string,
                decimal, etc.).
              </li>
              <li>
                <strong>Mandatory</strong> → Marks the field as required.
              </li>
              <li>
                <strong>Key</strong> → Marks the field as a primary or unique
                key.
              </li>
              <li>
                <strong>Format</strong> → Rules for data entry (length or
                decimal precision).
              </li>
            </ul>
          </div>

          {/* Export Option */}
          <div>
            <h3 className="text-lg font-medium">Export Option</h3>
            <p className="text-muted-foreground">
              Use the <strong>Download</strong> button to export domain
              configuration details.
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

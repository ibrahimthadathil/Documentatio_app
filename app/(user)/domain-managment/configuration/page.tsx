"use client";
import { Pagination } from "@/components/pagination";

import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        {/* {  contents  } */}
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/domain-managment/definition">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/domain-managment/audit">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
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

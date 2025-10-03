"use client";


import { Pagination } from "@/components/pagination";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import { CommandClipboard } from "@/components/command-clipboard";
import { useCommandClipboard } from "@/components/command-clipboard-provider";
import Link from "next/link";
import Wrapper from '@/app/(user)/user-layout'

export default function HomePage() {


  return (
    <>
     <Wrapper commandClipboard={<CommandClipboard/>}>

              {/* {  contents  } */}
              <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/System-Definition/use-case">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/domain-managment/configuration">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
              {/* Content Section */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Domain Definition</h1>
                <h2 className="text-xl ">Domain List</h2>
                <p className="text-muted-foreground">
                  The Domain List page provides a searchable list of all domains
                  in the system.
                </p>

                {/* Search Section */}
                <div>
                  <h3 className="text-lg font-medium">Search Domain Name</h3>
                  <p className="text-muted-foreground">
                    Use the search bar to quickly locate a specific domain.
                  </p>
                </div>

                {/* Table Section */}
                <div>
                  <h3 className="text-lg font-medium">Domain List Table</h3>
                  <p className="text-muted-foreground">
                    Displays available domains with the following information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>
                      <strong>Id</strong> → Unique identifier for the domain.
                    </li>
                    <li>
                      <strong>Domains</strong> → Domain name (e.g.,{" "}
                      <code>test_9876725</code>).
                    </li>
                    <li>
                      <strong>Description</strong> → Purpose or note for the
                      domain (e.g., Domain for performance test).
                    </li>
                    <li>
                      <strong>Modified By</strong> → User who last updated the
                      domain.
                    </li>
                    <li>
                      <strong>Last Modified</strong> → Timestamp of last
                      modification.
                    </li>
                    <li>
                      <strong>Action</strong> → Options for managing each domain
                      (View, Audit, Linked Resources, etc.).
                    </li>
                  </ul>
                </div>

                {/* Export Section */}
                <div>
                  <h3 className="text-lg font-medium">Exporting Domains</h3>
                  <p className="text-muted-foreground">
                    Use the <strong>Download as Excel</strong> button
                    (top-right) to export the entire domain list for offline
                    review.
                  </p>
                </div>
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={1}
                totalPages={5}
                previousLabel="Welcome"
                nextLabel="Domain Configuration"
                previousHref="#"
                nextHref="/domain-managment/configuration"
              />
     </Wrapper>
           
    </>
  );
}

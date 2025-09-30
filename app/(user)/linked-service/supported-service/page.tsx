"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/linked-service/integration">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/connection-keys">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* {  contents  } */}
            <div className="mx-auto max-w-4xl p-6 space-y-10">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold mb-4">Supported Service Types</h2>
      <p className="mb-4">
        The Data Tool supports a range of service types to cover both market-facing and internal data flows:
      </p>

      {/* Table */}
      <Table className="mb-4">
        <TableHeader>
          <TableRow>
            <TableHead>Service Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Typical Use Case</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Database Services</TableCell>
            <TableCell>Direct SQL or NoSQL database connections</TableCell>
            <TableCell>Query transactional or reference data for analysis, reconciliation, or reporting (e.g., Snowflake, SQL Server, Oracle, PostgreSQL)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>File Transfer Services</TableCell>
            <TableCell>SFTP, FTPS, and shared network paths for secure file exchange</TableCell>
            <TableCell>Import daily batch reports, custodian statements, or regulatory files</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cloud Storage Services</TableCell>
            <TableCell>Azure Blob, AWS S3, Google Cloud Storage</TableCell>
            <TableCell>Ingest large-scale or vendor-delivered datasets</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>REST/SOAP APIs</TableCell>
            <TableCell>Web services for real-time or on-demand data retrieval</TableCell>
            <TableCell>Market data lookups, pricing APIs, or CRM enrichment</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Internal Microservices</TableCell>
            <TableCell>Company-specific APIs or message queues</TableCell>
            <TableCell>Integrate internal reference data or workflow triggers</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Third-Party Vendor Feeds</TableCell>
            <TableCell>Market, risk, or compliance data providers (Bloomberg, Refinitiv, etc.)</TableCell>
            <TableCell>Enrich position or trade data with pricing or ratings</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Example Paragraph */}
      <p>
        <span className="font-bold">Example:</span> A Linked Service could connect to Snowflake for querying raw trade data, while another integrates with Bloomberg APIs to enrich that data with live market pricing—both reusable across multiple Resources and Aggregated datasets.
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

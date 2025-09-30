"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function HomePage() {
  return (
    <>
      <Wrapper>
        <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/file-processing/error-handling">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/summery">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* {  contents  } */}
                <div className="mx-auto max-w-6xl p-6 space-y-10">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold mb-6">Glossary / Appendix</h2>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[25%]">Term</TableHead>
              <TableHead className="w-[50%]">Definition</TableHead>
              <TableHead className="w-[25%]">Where It’s Used</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Actioning / Resolution Tracking</TableCell>
              <TableCell>
                Functionality to assign errors, add comments, and log remediation
                steps directly within the Data Module, creating an audit trail.
              </TableCell>
              <TableCell>Results & Action screens</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Additional Data Capability</TableCell>
              <TableCell>
                Feature allowing multiple datasets (Resources) to be joined
                within a single pull, enabling enriched comparisons without
                manual merges.
              </TableCell>
              <TableCell>Resource configuration</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Advanced Resource Setup</TableCell>
              <TableCell>
                Resource-level features such as joins, aggregation, variables,
                validation rules, and filters for complex data workflows.
              </TableCell>
              <TableCell>Resource configuration</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Aggregation</TableCell>
              <TableCell>
                Process of combining multiple Resources into a unified dataset
                for reporting, reconciliation, or downstream comparisons.
              </TableCell>
              <TableCell>Resource → Aggregation</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Audit Trail</TableCell>
              <TableCell>
                Record of all error resolutions, assignments, and user actions,
                providing complete traceability.
              </TableCell>
              <TableCell>Action panels & History pages</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Audit-Ready Reporting</TableCell>
              <TableCell>
                Structured exports and logs designed for operational review and
                regulatory compliance.
              </TableCell>
              <TableCell>Results, History pages</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Batch Processing</TableCell>
              <TableCell>
                Executing validations and comparisons on large datasets in
                scheduled or on-demand runs with built-in retry logic.
              </TableCell>
              <TableCell>Workflow Module integration</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>BMP Starter Date Positions Example</TableCell>
              <TableCell>
                A reference/demo configuration illustrating advanced Data Module
                capabilities (joins, aggregation, filters).
              </TableCell>
              <TableCell>Training/demo resources</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Comparison History</TableCell>
              <TableCell>
                Historical results view showing counts of matched, missing, or
                mismatched records between datasets.
              </TableCell>
              <TableCell>Results → Comparison History</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Comparison Rule</TableCell>
              <TableCell>
                A defined configuration specifying how datasets are matched and
                compared across systems, including tolerances.
              </TableCell>
              <TableCell>Comparison setup</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Connection Key</TableCell>
              <TableCell>
                A stored set of credentials and connection details for secure
                system access, referenced by Linked Services.
              </TableCell>
              <TableCell>Connection Keys admin</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Data Module Core Auto</TableCell>
              <TableCell>
                Accelerate module responsible for data ingestion, validation,
                normalization, comparison, and reporting.
              </TableCell>
              <TableCell>Application main module</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Domain</TableCell>
              <TableCell>
                A standardized data model with universal field names to map
                system-specific field names for easier comparison.
              </TableCell>
              <TableCell>Domain mapping screen</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Domain Mapping</TableCell>
              <TableCell>
                Linking of system-specific field names to universal domain
                names, simplifying comparisons and validation rules.
              </TableCell>
              <TableCell>Domain editor</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Error-to-Action Lifecycle</TableCell>
              <TableCell>
                Workflow where discrepancies are detected, assigned, and
                resolved within the Data Module.
              </TableCell>
              <TableCell>Results & Action screens</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Filter Rule</TableCell>
              <TableCell>
                SQL-like logic used to subset Resource data (e.g., region =
                'EMEA') without modifying core connections.
              </TableCell>
              <TableCell>Resource → Filters</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Full Picture Compare</TableCell>
              <TableCell>
                Multi-system comparison setup to view discrepancies across
                several systems simultaneously.
              </TableCell>
              <TableCell>Comparison setup</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Golden Source</TableCell>
              <TableCell>
                Designation of a trusted dataset or field as the authoritative
                source when consolidating or comparing data.
              </TableCell>
              <TableCell>Aggregation & Comparison Rules</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Linked Service</TableCell>
              <TableCell>
                A reusable connection template (e.g., DB, SFTP, API) that
                defines how a system is accessed.
              </TableCell>
              <TableCell>Linked Services screen</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pairwise Comparison</TableCell>
              <TableCell>
                Manual field-level mapping between datasets, bypassing domains
                for ad hoc comparisons.
              </TableCell>
              <TableCell>Comparison setup</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Processing Pipeline</TableCell>
              <TableCell>
                Standardized sequence: ingest → normalize → validate →
                enrich/aggregate → compare → export.
              </TableCell>
              <TableCell>System workflow</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Research Queries</TableCell>
              <TableCell>
                Supplemental queries embedded in Results to provide context for
                root-cause analysis.
              </TableCell>
              <TableCell>Results → Research Queries</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Resolution Management</TableCell>
              <TableCell>
                Built-in system for tracking fixes, assigning owners, and
                closing out data issues.
              </TableCell>
              <TableCell>Results & Action screens</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Resource</TableCell>
              <TableCell>
                A configurable definition of a single dataset pull from a source
                (e.g., database, API, file).
              </TableCell>
              <TableCell>Resource configuration</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Resource Columns</TableCell>
              <TableCell>
                Schema specification for a Resource: expected fields, types,
                required flags, keys, and validations.
              </TableCell>
              <TableCell>Resource → Columns</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Resource Variable</TableCell>
              <TableCell>
                Parameter placeholders (e.g., $AS_OF_DATE$) used for dynamic
                queries and scheduled runs.
              </TableCell>
              <TableCell>Resource → Variables</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Results Export</TableCell>
              <TableCell>
                Auto-generated spreadsheet or API-based delivery of
                validation/comparison outcomes.
              </TableCell>
              <TableCell>Results & API</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Schema Drift Detection</TableCell>
              <TableCell>
                Automatic failure triggered by unexpected schema changes
                (missing, renamed, or extra fields).
              </TableCell>
              <TableCell>Validation runs</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Trigger Actions (Planned)</TableCell>
              <TableCell>
                Upcoming functionality to push changes to other systems or
                trigger external workflows based on results.
              </TableCell>
              <TableCell>Planned Data Module feature</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Validation History</TableCell>
              <TableCell>
                Historical record of validations on a Resource, showing counts,
                duplicates, and failed checks.
              </TableCell>
              <TableCell>Results → Validation History</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Validation Rule</TableCell>
              <TableCell>
                Field- or dataset-level checks (e.g., null, type, length,
                freshness) used to ensure data quality.
              </TableCell>
              <TableCell>Resource → Validation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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

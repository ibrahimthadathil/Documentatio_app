"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <div className=" top-0 justify-end right-0  flex space-x-2">
          <Link href="/linked-service/supported-service">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/connection-keys/key-managment">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Main Heading */}
          <h2 className="text-2xl font-bold mb-4">Connection Keys</h2>
          <p className="mb-4">
            Connection Keys are secure credentials that define how the Data Tool
            authenticates and connects to external systems, databases, or file
            repositories. Each Connection Key encapsulates all required
            configuration details for seamless integration with upstream data
            sources.
          </p>

          {/* Subheading */}
          <h3 className="text-lg text-pretty font-bold mb-2">Key Components</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-bold">Authentication Details:</span>{" "}
              Encrypted credentials (username/password, tokens, or
              certificates).
            </li>
            <li>
              <span className="font-bold">Connection Metadata:</span> Hostnames,
              ports, and driver details.
            </li>
            <li>
              <span className="font-bold">Access Control:</span> Granular
              permissions to ensure least-privilege access to data sources.
            </li>
          </ul>

          <p className="mt-4">
            By separating connection details from individual resource
            configurations, Connection Keys provide a centralized, reusable, and
            secure method for managing system integrations.
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

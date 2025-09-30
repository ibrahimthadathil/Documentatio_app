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
          <Link href="/linked-service">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/linked-service/supported-service">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Service Integration Overview */}
          <h2 className="text-2xl font-bold mb-4">
            Service Integration Overview
          </h2>
          <p className="mb-4">
            Service integration provides a framework for securely connecting to
            upstream and downstream platforms. Each Linked Service acts as a
            connector that abstracts authentication, protocols, and API calls,
            allowing end users to focus on configuration rather than
            connectivity.
          </p>

          <h3 className="text-lg text-pretty font-bold mb-2">Key Features</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              <span className="font-bold">Centralized Management:</span> One
              service connection can be reused by multiple Resources.
            </li>
            <li>
              <span className="font-bold">Secure Access:</span> All credentials
              are encrypted, and access can be restricted by role or
              environment.
            </li>
            <li>
              <span className="font-bold">Automated Workflows:</span> Enable
              scheduled data pulls or pushes from/to third-party systems.
            </li>
            <li>
              <span className="font-bold">Scalability:</span> Supports
              high-frequency integrations for trading, risk, and compliance
              workflows.
            </li>
          </ul>
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

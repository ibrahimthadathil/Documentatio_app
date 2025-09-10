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
          <Link href="/">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/installation/windows-service">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Main Heading */}
          <h2 className="text-2xl font-bold mb-4">Connection Key Management</h2>
          <p className="mb-4">
            Connection Key Management ensures connections are secure, reusable,
            and easy to maintain across environments (development, QA,
            production).
          </p>

          {/* Subheading */}
          <h3 className="text-lg text-pretty font-bold mb-2">Capabilities</h3>

          {/* List of Capabilities */}
          <ul className="list-disc list-inside space-y-4">
            <li>
              <span className="font-bold">Centralised Storage:</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Connection Keys are stored in a secure, encrypted repository.
                </li>
                <li>
                  Reduces risk by eliminating hardcoded credentials in resource
                  configurations.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">Version Control & Rotation:</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Easily rotate credentials or tokens without modifying
                  downstream workflows.
                </li>
                <li>
                  Support for scheduled key expiration and renewal to meet
                  compliance requirements.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">Access Controls:</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  Assign role-based permissions to limit access to sensitive
                  connection details.
                </li>
                <li>
                  Restrict usage to authorized users and approved workflows.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">Reusability:</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  A single Connection Key can be linked to multiple resources,
                  reducing duplicate setup efforts.
                </li>
                <li>
                  Promotes consistency in how data is accessed across teams and
                  environments.
                </li>
              </ul>
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

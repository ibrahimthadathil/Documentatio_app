"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      <h2 className="text-2xl font-bold mb-4">
        2 File Upload and Import
      </h2>
      <p className="mb-4">
        Files can be imported through multiple ingestion points:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li><span className="font-bold">Direct Upload:</span> Users can manually upload files through the platform’s interface for ad hoc analysis or testing.</li>
        <li><span className="font-bold">SFTP Integration:</span> Automated ingestion from secure, scheduled delivery locations.</li>
        <li><span className="font-bold">Cloud Storage Integration:</span> Support for Azure Blob, AWS S3, or internal shared storage.</li>
        <li><span className="font-bold">API Endpoints:</span> For automated system-to-system transfers.</li>
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

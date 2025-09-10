"use client";
import { Pagination } from "@/components/pagination";
import Wrapper from "@/app/(user)/user-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CommandClipboard } from "@/components/command-clipboard";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard/>}>
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

        
        {/* <div className="space-y-6">
           <h2 className="text-xl font-semibold">Domain Audit</h2>
           <p className="text-muted-foreground max-w-2xl">
             The Audit Domain feature lets you track changes and review
             modification history.
           </p>
        
           {/* Modification History */}
           <div >
             <h3 className="text-lg font-medium border-muted-foreground/20 pb-1 inline-block">
               Domain Modification History Table
             </h3>
             <ul className="list-disc list-inside space-y-1 pl-4">
               <li>
                 <strong>Code</strong> → Domain code.
               </li>
               <li>
                 <strong>Last Modified</strong> → Date and time of
                 modification.
               </li>
               <li>
                 <strong>Modified By</strong> → User who made the changes.
               </li>
               <li>
                 <strong>Domain Info</strong> → Extra metadata (click the
                 info icon).
               </li>
               <li>
                 <strong>Action</strong> → Compare changes or download
                 audit logs.
               </li>
             </ul>
           </div>
        
           {/* Compare Feature */}
           <div className="mt-4">
             <h3 className="text-lg font-medium  border-muted-foreground/20 pb-1 inline-block">
               Compare Feature
             </h3>
             <p className="text-muted-foreground max-w-2xl">
               Use the <strong>Compare</strong> button (top-right) to see
               differences between versions. Helpful for compliance reviews
               and debugging.
             </p>
           </div>
         {/* </div> */} 
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

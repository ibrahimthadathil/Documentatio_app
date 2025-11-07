import React from 'react'
import Wrapper from '@/app/(user)/user-layout'
import { CommandClipboard } from '@/components/command-clipboard'
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/pagination';

const page = () => {
  return (
    <>
  <Wrapper commandClipboard={<CommandClipboard/>}> 
  <div className=" top-0 justify-end right-0  flex space-x-2">
            <Link href="/installation/api">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link> ̰

            <Link href="/System-Definition">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
    <h1>Windows Service </h1>
    <Pagination
                    currentPage={1}
                    totalPages={5}
                    previousLabel="Welcome"
                    nextLabel="System Definition"
                    previousHref="#"
                    nextHref="/System-Definition"
                  />
  </Wrapper>
    </>
  )
}

export default page
 
"use client";

import { Pagination } from "@/components/pagination";

import Wrapper from "@/app/(user)/user-layout";
import { CommandClipboard } from "@/components/command-clipboard";

export default function HomePage() {
  return (
    <>
      <Wrapper commandClipboard={<CommandClipboard />}>
        <h1 className="text-2xl">Resources Page</h1>

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

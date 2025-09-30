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
          <Link href="/resources/methods">
            <Button variant="outline" size="icon" aria-label="Previous page">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/linked-service">
            <Button variant="outline" size="icon" aria-label="Next page">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        {/* {  contents  } */}
        <div className="mx-auto max-w-4xl p-6 space-y-10">
          {/* Adding an Additional Resource */}
          <h2 className="text-2xl font-bold mb-4">
            Adding an Additional Resource
          </h2>
          <p className="mb-4">
            The Additional Resource feature in the VIS Data Tool makes it easy
            to pull data from different sources and combine it—no more copying
            into Excel or using complicated formulas.
          </p>

          <h3 className="text-lg text-pretty font-bold mb-2">
            What You Can Do
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              <span className="font-bold">Connect to Different Systems:</span>{" "}
              Quickly grab data from tools like Salesforce or daily Workday
              files.
            </li>
            <li>
              <span className="font-bold">Mix and Match:</span> Bring multiple
              data sources together in one place.
            </li>
            <li>
              <span className="font-bold">Save Time:</span> Skip manual steps
              and let the tool do the heavy lifting for you.
            </li>
          </ul>

          <h3 className="text-lg text-pretty font-bold mb-2">Example</h3>
          <ul className="list-decimal list-inside mb-4 space-y-1">
            <li>Pull a list of employees from Salesforce.</li>
            <li>Add a second file from Workday that updates every day.</li>
            <li>
              Tell the tool to match people by their{" "}
              <span className="font-bold">Person ID</span>.
            </li>
            <li>View your combined data in one simple view.</li>
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

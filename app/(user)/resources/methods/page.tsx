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
            <Link href="/resources/aggregated">
              <Button variant="outline" size="icon" aria-label="Previous page">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/resources/additional">
              <Button variant="outline" size="icon" aria-label="Next page">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        {/* {  contents  } */}
            <div className="mx-auto max-w-4xl p-6 space-y-10">
      {/* Aggregation Methods */}
      <h2 className="text-2xl font-bold mb-4">Aggregation Methods</h2>
      <p className="mb-4">
        The platform supports several aggregation strategies for rolling up data:
      </p>

      <h3 className="text-lg text-pretty font-bold mb-2">Strategies</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <span className="font-bold">Group By Operations:</span> Roll up records based on key
          combinations (e.g., grouping all tax lots by account_id and security_id to calculate
          total position quantity)
        </li>
        <li>
          <span className="font-bold">Sum Aggregations:</span> Calculate totals for numeric fields
          (e.g., sum of quantities, market values, P&L)
        </li>
        <li>
          <span className="font-bold">Statistical Calculations:</span> Compute averages, min/max
          values, standard deviations across grouped records
        </li>
        <li>
          <span className="font-bold">Weighted Calculations:</span> Apply weighted averages using
          a specified field (e.g., quantity-weighted average price)
        </li>
        <li>
          <span className="font-bold">Count Operations:</span> Tally the number of records in each
          group (e.g., number of tax lots per position)
        </li>
      </ul>

      <h3 className="text-lg text-pretty font-bold mb-2">Use Case Examples</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Rolling up tax lot data by account and security to get aggregate position quantities and market values</li>
        <li>Consolidating trade-level data into daily position summaries</li>
        <li>Aggregating position data by portfolio, strategy, or legal entity for risk reporting</li>
        <li>Creating summary views of P&L by trader, desk, or business unit</li>
      </ul>

      <h3 className="text-lg text-pretty font-bold mb-2">3.4.2 Aggregation Rules</h3>
      <p className="mb-4">
        Aggregation Rules define how data is rolled up and which calculations are performed:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <span className="font-bold">Grouping Keys:</span> Specify the fields used to group
          records (e.g., account_id, security_id, trade_date)
        </li>
        <li>
          <span className="font-bold">Aggregation Functions:</span> Define calculations for each
          numeric field:
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li>SUM for quantities, market values, notionals</li>
            <li>AVG for prices, rates, ratios</li>
            <li>COUNT for record counts</li>
            <li>MIN/MAX for ranges</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Derived Calculations:</span> Create new fields from
          aggregated values (e.g., total_market_value = SUM(quantity) * AVG(price))
        </li>
        <li>
          <span className="font-bold">Filter Conditions:</span> Apply filters before aggregation
          (e.g., only include active positions)
        </li>
        <li>
          <span className="font-bold">Having Clauses:</span> Filter results after aggregation
          (e.g., only show positions with total_quantity &gt; 0)
        </li>
      </ul>
    </div>
        {/* Pagination */}
        <Pagination
          currentPage={1}
          totalPages={5}
          previousLabel="Welcome"
          nextLabel="Additional Resources"
          previousHref="#"
          nextHref="/resources/additional"
        />
      </Wrapper>
    </>
  );
}

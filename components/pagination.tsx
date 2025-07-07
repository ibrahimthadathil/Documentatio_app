import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  previousLabel?: string
  nextLabel?: string
  previousHref?: string
  nextHref?: string
}

export function Pagination({
  currentPage,
  totalPages,
  previousLabel = "Previous",
  nextLabel = "Next",
  previousHref = "#",
  nextHref = "#",
}: PaginationProps) {
  const hasPrevious = currentPage > 1
  const hasNext = currentPage < totalPages

  return (
    <div className="flex items-center justify-between border-t pt-6">
      <div className="flex-1">
        {hasPrevious && (
          <Button variant="ghost" asChild className="pl-0">
            <a href={previousHref} className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Previous</div>
                <div className="font-medium">{previousLabel}</div>
              </div>
            </a>
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="flex-1 text-right">
        {hasNext && (
          <Button variant="ghost" asChild className="pr-0">
            <a href={nextHref} className="flex items-center">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Next</div>
                <div className="font-medium">{nextLabel}</div>
              </div>
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

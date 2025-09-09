// import type React from "react"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
// import { PageLoader } from "@/components/page-loader"

// export default function AdminLayout({ children }: { children: React.ReactNode }) {

//   return (
//     <SidebarProvider defaultOpen={true}>
//       <div className="flex min-h-screen w-full">
//         <AppSidebar />
//         <div className="flex-1 flex">
//           <PageLoader />
//           {children}
//         </div>
//       </div>
//     </SidebarProvider>
//   )
// }


"use client"

import type React from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useCommandClipboard } from "@/components/command-clipboard-provider"
import { ArrowLeft, ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export default function AdminLayout({
  children,
  commandClipboard,
}: {
  children: React.ReactNode
  commandClipboard?: React.ReactNode // 👈 dynamic part
}) {
  const { isExpanded } = useCommandClipboard()

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex">
        <SidebarInset
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "md:mr-80" : "mr-0"
          }`}
        >
          <ScrollIndicator />

          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="flex flex-1 items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg font-semibold">Documentation</h1>
                  <Badge variant="secondary" className="hidden sm:inline-flex">
                    v2.0.0
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">
            <div className="container max-w-screen-2xl px-4 py-6 lg:py-8">
              <div className="mx-auto max-w-4xl">
                {children}
              </div>
            </div>
          </main>

          {/* Dynamic Command Clipboard */}
          {commandClipboard && <div className="p-4">{commandClipboard}</div>}
        </SidebarInset>

        </div>

      </div>
    </SidebarProvider>
  )
}

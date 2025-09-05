import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { PageLoader } from "@/components/page-loader"
import { Toaster } from "@/components/ui/sonner"
import { CommandClipboardProvider } from "@/components/command-clipboard-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Documentation - UI Library",
  description: "Beautiful, accessible components for modern web applications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CommandClipboardProvider>
           
                  {children}
                
          </CommandClipboardProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { AppSidebar } from "@/components/app-sidebar"
import { PageLoader } from "@/components/page-loader"
import { SidebarProvider } from "@/components/ui/sidebar"
import { BookOpen, Package, PlusCircle } from "lucide-react"
import type React from "react"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const data = {
  user: {
    name: "Documentation",
    email: "docs@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: PlusCircle,
      isActive: true,
      items: [
        {
          title: "All pages",
          url: "/",
        },
        {
          title: "New page",
          url: "/",
        },

      ],
    },
    // {
    //   title: "Installation",
    //   url: "/installation",
    //   icon: Package,
    //   items: [
    //     {
    //       title: "API and website ",
    //       url: "/installation/api",
    //     },
    //     {
    //       title: "Windows Service ",
    //       url: "/installation/windows-service",
    //     },
        
 
    //   ],
    // },
  ],}
  return (
    
     <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex">
          <PageLoader />
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

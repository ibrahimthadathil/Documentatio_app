import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { PageLoader } from "@/components/page-loader"
import { BookOpen, Package } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const data = {
  user: {
    name: "Documentation",
    email: "docs@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Getting Started",
      url: "/",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "/",
        },

      ],
    },
    {
      title: "Installation",
      url: "/installation",
      icon: Package,
      items: [
        {
          title: "API and website ",
          url: "/installation/api",
        },
        {
          title: "Windows Service ",
          url: "/installation/windows-service",
        },
        
 
      ],
    },
    // {
    //   title: "Layout",
    //   url: "#",
    //   icon: Layout,
    //   items: [
    //     {
    //       title: "Container",
    //       url: "#",
    //     },
    //     {
    //       title: "Grid",
    //       url: "#",
    //     },
    //     {
    //       title: "Flex",
    //       url: "#",
    //     },
    //     {
    //       title: "Sidebar",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Forms",
    //   url: "#",
    //   icon: Form,
    //   items: [
    //     {
    //       title: "Form",
    //       url: "#",
    //     },
    //     {
    //       title: "Input",
    //       url: "#",
    //     },
    //     {
    //       title: "Textarea",
    //       url: "#",
    //     },
    //     {
    //       title: "Select",
    //       url: "#",
    //     },
    //     {
    //       title: "Checkbox",
    //       url: "#",
    //     },
    //     {
    //       title: "Radio Group",
    //       url: "#",
    //     },
    //     {
    //       title: "Switch",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  // navSecondary: [
  //   {
  //     title: "Support",
  //     url: "#",
  //     icon: LifeBuoy,
  //   },
  //   {
  //     title: "Feedback",
  //     url: "#",
  //     icon: Send,
  //   },
  // ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

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

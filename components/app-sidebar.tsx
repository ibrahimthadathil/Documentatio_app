"use client";

import type * as React from "react";
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Package,
  Layout,
  ShapesIcon as Form,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import SVGtext from "@/components/icons/logoText";
import SVGComponent from "@/components/icons/logo"

const data = {
  user: {
    name: "Documentation",
    email: "docs@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "#",
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {theme} = useTheme()
  return (
    <Sidebar variant="inset" {...props} className={`border-e ${theme=='dark'?"border-gray-900":"border-gray-100"} `}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
              <div className="flex md:justify-start  justify-center align-items-center p-2 rounded-lg">
                <SVGComponent color='#87BFE5' className="mt-2 ms-8 " />
                <SVGtext color={`${theme=='dark'?'#ffff':'#252626'}`} className="-ml-6 " />
              </div>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

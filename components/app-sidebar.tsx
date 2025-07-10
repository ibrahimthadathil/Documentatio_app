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
        // {
        //   title: "Installation",
        //   url: "installation",
        // },
        // {
        //   title: "Theming",
        //   url: "#",
        // },
        // {
        //   title: "Dark Mode",
        //   url: "#",
        // },
        // {
        //   title: "CLI",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: "Components",
    //   url: "#",
    //   icon: Package,
    //   items: [
    //     {
    //       title: "Accordion",
    //       url: "#",
    //     },
    //     {
    //       title: "Alert",
    //       url: "#",
    //     },
    //     {
    //       title: "Avatar",
    //       url: "#",
    //     },
    //     {
    //       title: "Badge",
    //       url: "#",
    //     },
    //     {
    //       title: "Button",
    //       url: "#",
    //     },
    //     {
    //       title: "Calendar",
    //       url: "#",
    //     },
    //     {
    //       title: "Card",
    //       url: "#",
    //     },
    //     {
    //       title: "Checkbox",
    //       url: "#",
    //     },
    //     {
    //       title: "Dialog",
    //       url: "#",
    //     },
    //     {
    //       title: "Dropdown Menu",
    //       url: "#",
    //     },
    //     {
    //       title: "Form",
    //       url: "#",
    //     },
    //     {
    //       title: "Input",
    //       url: "#",
    //     },
    //     {
    //       title: "Select",
    //       url: "#",
    //     },
    //     {
    //       title: "Table",
    //       url: "#",
    //     },
    //     {
    //       title: "Tabs",
    //       url: "#",
    //     },
    //     {
    //       title: "Toast",
    //       url: "#",
    //     },
    //   ],
    // },
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
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
              <div className="flex md:justify-start justify-center align-items-center ">
              <img src="/logo.png" alt="Logo" className="w-20 h-20 " />
              <h6 className={`-ml-4  font-extrabold text-3xl pt-5 ${theme=='dark'?"!text-gray-100":"text-zinc-800"}`}>Velocity</h6>
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

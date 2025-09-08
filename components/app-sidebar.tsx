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
  File,
  Icon,
  Workflow,
  Library,
  Link,
  Link2,
  ShieldCheck,
  GitCompare,
  ArrowLeftRight,
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
import { title } from "process";

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
    {
      title:'System Definition',
      url:'/System-Definition',
     icon: BookOpen,
     items: [
      {
        title:'Key Terminology',
        url:'/System-Definition/key-terminology'
      },
      {
        title:'Tool Architecture',
        url:'#'
      },
      {
        title:"Use Cases and Application",
        url:'#'
      },
     ]
      
    },
    {
      title: 'Domain Managment',
      icon: Workflow,
    url : '/domain-managment/definition',
      items:[
        {
          title:"Domain Definition",
          url :'/domain-managment/definition'
        },
        {
          title: "Domain Configuration",
          url:'/domain-managment/configuration'
        },
        {
          title:'Domain Audit',
          url: '/domain-managment/audit'
        },
        {
          title:'Domain Linkage',
          url: '/domain-managment/linkage'
        }
      ]
    },
    {
      title : "Resources",
      icon: Library,
      url:'/resources',
      items: [
        {
          title : 'Resource Types and Categories',
          url:'#'
        },
        {
          title : "Resource Configuration",
          url:'#'
        },
        {
          title:'Aggregated Resources',
          url :'#'
        },
        {
          title:'Aggregation Methods',
          url: '#'
        },
        {
          title:'Aggregation Rules',
          url: '#'
        },
        {
          title:'Additional Resources',
          url: '#'
        },
        {
          title:'Supplementary Resource Types',
          url: '#'
        },
        {
          title:'Custom Resource Configuration',
          url: '#'
        },
        
      ]
    },
    {
      title:'Linked Services',
      url:'#',
      icon:Link,
      items:[

        {
          title:'Service Integration Overview',
          url:'#'
        },
        {
          title:'Supported Service Types',
          url:'#'
        },
       
      ]
    },
    {
      title :'Connection keys',
      icon : Link2,
      url: '/connection-keys',
      items : [
        {
          title: 'Conntection Key Managment',
          url: '#'
        },
      
      ]

    },
    {
      title:'Validation Rules',
      icon :ShieldCheck,
      url:'/validation-rules/framework',
      items: [
        {
          title:'Validation Framework',
          url:'/validation-rules/framework'
        },
        {
          title:'Rule Types and Categories',
          url:'/validation-rules/rule-category'
          
        },
        {
          title:'Creating Custom Validation Rules',
          url :'/validation-rules/custom-validation'
        },
        {
          title:'Rules Execution and Scheduling',
          url:'/validation-rules/rule-execution'
        },
        {
          title:'validation Results and Reporting',
          url:'/validation-rules/validation-result'
        }
      ]
    },
    {
      title:'Comparison Rules',
      icon:GitCompare,
      url:'/comparison-rules/engine-overview',
      items: [
        {
          title:'Comparison Engine Overview',
          url:'/comparison-rules/engine-overview'
        },
        {
          title:"Rule definition And Configuration",
          url:'/comparison-rules/config'
        },
        {
          title:'Comparison Strategies',
          url:'/comparison-rules/strategies'
        },
        {
          title:'Rule Precedence and Conflict Resolution',
          url:'/comparison-rules/conflict-result'
        },
        {
          title:'Comparison Results and Storage',
          url:'/comparison-rules/result&storage'
        },

      ]
    },
    {
      title: "File Processing",
      url: "#",
      icon: File,
      items: [
        {
          title:"Supported File Formates",
          url:"#"
        },
        {
          title:"File Upload and Import",
          url:"#"
        },
        {
          title:"processing pipelines",
          url:"#"
        },
        {
          title:"Batch Processing",
          url:"#"
        },
        {
          title:"Error Handling and Recovery",
          url:"#"
        },
      ],

    },
    {
      title: "Comparison Tolerance",
      url: "#",
      icon: Layout,
      items: [
        {
          title: "Tolerance Configuration",
          url: "#",
        },
        {
          title: "Numeric Tolerance Settings",
          url: "#",
        },
        {
          title: "String and Text Tolerance",
          url: "#",
        },
        {
          title: "Date/Time Tolerance",
          url: "#",
        },
        {
          title: "Custom Tolerance Rules",
          url: "#",
        },
      ],
    },
    {
      title: "Research Queries",
      url: "#",
      icon: Form,
      items: [
        {
          title: "Query Builder Interface",
          url: "#",
        },
        {
          title: "Query Syntax and Structure",
          url: "#",
        },
        {
          title: "Saved Queries and Templates",
          url: "#",
        },
        {
          title: "Queries Optimisation",
          url: "#",
        },
        {
          title: "Query Results Export and Visualisation",
          url: "#",
        },
        
      ],
    },
     {
      title: "Appendices",
      url: "#",
      icon: Layout,
      items: [
        {
          title: "Glossary of Terms",
          url: "#",
        },
        {
          title: "Best Practices Guide",
          url: "#",
        },
        {
          title: "TrubleShooting Guide",
          url: "#",
        },
        {
          title: "API Reference",
          url: "#",
        },
        {
          title: "Release Notes",
          url: "#",
        },
      ],
    },
    {
      title:"Comparison Summary",
      icon : ArrowLeftRight,
      url:'/summery'
    }
  ],

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {theme} = useTheme()
  return (
    <Sidebar variant="inset" {...props} className={`border-e${theme=='dark'?" border-gray-900":"border-gray-100"} `}>
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

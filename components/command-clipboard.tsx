"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Copy, Check, Terminal, Package, Settings, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useCommandClipboard } from "./command-clipboard-provider"
import { useTheme } from "next-themes"

interface CommandStep {
  id: string
  title: string
  command: string
  description?: string
  icon?: React.ReactNode
}

const commandSteps: CommandStep[] = [
  {
    id: "install",
    title: "Install Package",
    command: "npm install your-lib",
    description: "Install the library via npm",
    icon: <Package className="h-4 w-4" />,
  },
  {
    id: "init",
    title: "Initialize Project",
    command: "npx your-lib init",
    description: "Set up the initial configuration",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    id: "add-components",
    title: "Add Components",
    command: "npx your-lib add button card dialog",
    description: "Add specific components to your project",
    icon: <Play className="h-4 w-4" />,
  },
  {
    id: "dev-server",
    title: "Start Development",
    command: "npm run dev",
    description: "Start the development server",
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    id: "build",
    title: "Build for Production",
    command: "npm run build",
    description: "Create production build",
    icon: <Package className="h-4 w-4" />,
  },
]

export function CommandClipboard() {
  const { isExpanded, toggleExpanded } = useCommandClipboard()
  const [copiedSteps, setCopiedSteps] = useState<Set<string>>(new Set())
  const { theme } = useTheme()

  const copyToClipboard = async (command: string, stepId: string) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedSteps((prev) => new Set(prev).add(stepId))
      toast.success("Command copied to clipboard!")

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedSteps((prev) => {
          const newSet = new Set(prev)
          newSet.delete(stepId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      toast.error("Failed to copy command")
    }
  }

  return (
    <>
      {/* Toggle Button - Always visible */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background shadow-lg hover:shadow-xl transition-all duration-200 border-2"
          onClick={toggleExpanded}
        >
          {isExpanded ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          <span className="sr-only">{isExpanded ? "Close" : "Open"} Command Clipboard</span>
        </Button>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-background border-l shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex-shrink-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Command Clipboard</h2>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-sm text-muted-foreground">Quick setup commands for your project</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {commandSteps.map((step, index) => (
                <div key={step.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-1 font-medium">
                      Step {index + 1}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {step.icon}
                      {step.title}
                    </div>
                  </div>

                  {step.description && (
                    <p className="text-xs text-muted-foreground pl-2 leading-relaxed">{step.description}</p>
                  )}

                  <div className="relative group">
                    <div className={`flex items-center justify-between ${theme==='dark'? "bg-zinc-950" : "bg-zinc-300" }  dark:bg-zinc-900 rounded-lg p-3 border`}>
                      <code className={`"text-sm font-mono ${theme==='dark'?"":"text-zinc-700 bg-transparent"} flex-1 pr-2 break-all"`}>{step.command}</code>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        onClick={() => copyToClipboard(step.command, step.id)}
                      >
                        {copiedSteps.has(step.id) ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        <span className="sr-only">Copy command</span>
                      </Button>
                    </div>
                  </div>

                  {index < commandSteps.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 border-t bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Pro Tip</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Run these commands in sequence to set up your project quickly. Each step builds on the previous one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden" onClick={toggleExpanded} />
      )}
    </>
  )
}

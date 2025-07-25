"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useTheme } from "next-themes"

interface CodeSnippetProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export function CodeSnippet({
  code,
  language = "bash",
  title = "Terminal",
  showLineNumbers = false,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)
  const {theme} = useTheme()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success("Copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy to clipboard")
    }
  }
  
  const isTerminal = language === "bash" || language === "shell"

  return (

    <div className="group relative overflow-hidden rounded-lg border bg-gray-100 dark:bg-zinc-900 w-full max-w-full">
  {/* Header */}
  <div className={`flex items-center justify-between border-b  px-4 py-2 ${theme==='dark'?"bg-zinc-950/30 border-zinc-800 ":"bg-gray-200 border-zinc-300"}` }>
    <div className="flex items-center gap-2 min-w-0 flex-1">
      {isTerminal && <Terminal className={`"h-4 w-4  ${theme==='dark'?"text-zinc-400":"text-zinc-800"} flex-shrink-0"`} />}
      <span className={`"text-sm font-medium ${theme==='dark'?"text-zinc-300":"text-zinc-800 b"}  truncate"`}>{title}</span>
    </div>
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
      onClick={copyToClipboard}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy code</span>
    </Button>
  </div>

  {/* Code Content */}
  <div className="overflow-x-auto max-w-full">
    <pre className={`p-4 text-sm min-w-0 whitespace-pre-wrap break-words  ${theme==='dark'?"":""} `}>
      <code className={`font-mono ${theme==='dark'?' text-gray-300 bg-transparent':' text-gray-700'} break-all`}>
        {showLineNumbers
          ? code.split("\n").map((line, index) => (
              <div key={index} className="flex flex-wrap sm:flex-nowrap">
                <span className="mr-4 text-zinc-500 select-none w-8 text-right flex-shrink-0">{index + 1}</span>
                <span className="break-words min-w-0 flex-1">{line}</span>
              </div>
            ))
          : code}
      </code>
    </pre>
  </div>

  {/* Terminal prompt styling for bash */}
  {isTerminal && (
    <style jsx>{`
      pre code::before {
        content: "$ ";
        color: #10b981;
        font-weight: bold;
      }
    `}</style>
  )}
</div>
  )
}

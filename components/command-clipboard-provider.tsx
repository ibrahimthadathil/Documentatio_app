"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface CommandClipboardContextType {
  isExpanded: boolean
  setIsExpanded: (expanded: boolean) => void
  toggleExpanded: () => void
}

const CommandClipboardContext = createContext<CommandClipboardContextType | undefined>(undefined)

export function CommandClipboardProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <CommandClipboardContext.Provider
      value={{
        isExpanded,
        setIsExpanded,
        toggleExpanded,
      }}
    >
      {children}
    </CommandClipboardContext.Provider>
  )
}

export function useCommandClipboard() {
  const context = useContext(CommandClipboardContext)
  if (context === undefined) {
    throw new Error("useCommandClipboard must be used within a CommandClipboardProvider")
  }
  return context
}

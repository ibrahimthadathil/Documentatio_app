import type React from "react"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      {children}
    </div>
  )
}

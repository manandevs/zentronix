"use client"

import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import { Check, Copy, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("prose prose-stone max-w-none prose-sm md:prose-base", className)}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mb-4 last:mb-0 leading-relaxed text-stone-800/90">{children}</p>,
          // Custom Code Block (The Window in your image)
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "")
            const language = match ? match[1] : ""
            const codeValue = String(children).replace(/\n$/, "")

            if (!inline) {
              return <CodeBlock language={language} value={codeValue} />
            }

            // Inline Code style
            return (
              <code
                className="px-1.5 py-0.5 bg-stone-100 text-stone-700 rounded-md text-[0.9em] font-mono font-medium border border-stone-200"
                {...props}
              >
                {children}
              </code>
            )
          },
          // Remove default pre styling as our CodeBlock handles it
          pre: ({ children }) => <>{children}</>,
          strong: ({ children }) => <strong className="font-bold text-stone-900">{children}</strong>,
          ul: ({ children }) => <ul className="list-disc ml-4 mb-4 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-4 mb-4 space-y-1">{children}</ol>,
          a: ({ children, href }) => (
            <a href={href} className="text-stone-900 underline underline-offset-4 font-medium hover:text-stone-600 transition-colors">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

// Sub-component for the Code Window
function CodeBlock({ language, value }: { language: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl bg-stone-950 shadow-agency border border-stone-800">
      {/* macOS Style Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-stone-900/50 border-b border-stone-800">
        <div className="flex items-center gap-2">
            {/* Window Dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
          </div>
          <div className="ml-4 flex items-center gap-1.5 text-stone-400 text-xs font-mono">
            <Terminal className="w-3 h-3" />
            <span>{language || "code"}</span>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="h-7 w-7 text-stone-400 hover:text-white hover:bg-stone-800 transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </Button>
      </div>

      {/* Code Area */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto custom-scrollbar">
          <code className="text-sm font-mono leading-relaxed text-stone-200 block">
            {value}
          </code>
        </pre>
      </div>
    </div>
  )
}
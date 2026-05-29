"use client"

import { cn } from "@/lib/utils"
import type { Message } from "./types"
import { User } from "lucide-react"
import { MarkdownRenderer } from "./markdown-renderer"
import { AnimatedOrb } from "./animated-orb"

export function MessageBubble({ message, isStreaming }: { message: Message; isStreaming?: boolean }) {
  const isUser = message.sender === "user"

  return (
    <div className={cn("flex max-w-[90%] md:max-w-[80%] gap-3 mb-6", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}>
      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm", isUser ? "bg-white border" : "bg-black")}>
        {isUser ? <User className="w-4 h-4 text-stone-600" /> : <AnimatedOrb size={32} />}
      </div>

      <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-agency transition-all duration-300",
            isUser ? "bg-white text-stone-800 rounded-tr-none" : "bg-transparent text-stone-800 rounded-tl-none border-none"
          )}
        >
          {isUser ? (
            <p className="text-sm whitespace-pre-wrap">{message.text}</p>
          ) : (
            <MarkdownRenderer content={message.text} />
          )}
        </div>
      </div>
    </div>
  )
}
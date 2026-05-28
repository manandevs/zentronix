"use client"

import { useState, useEffect } from "react"
import { MessageSquareDashed } from "lucide-react"
import { MessageList } from "./message-list"
import { Composer } from "./composer"
import { Button } from "@/components/ui/button"

export interface Message {
  text: string
  sender: "user" | "bot"
}

const STORAGE_KEY = "zentronix-chat-v1"

export function ChatShell() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load history
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try { setMessages(JSON.parse(stored)) } catch (e) { console.error(e) }
    }
    setIsLoaded(true)
  }, [])

  // Save history
  useEffect(() => {
    if (isLoaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages, isLoaded])

  const handleSubmit = async (content: string) => {
    if (!content.trim() || loading) return
    setError(null)

    const userMsg: Message = { text: content, sender: "user" }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: content }),
      })

      if (!response.ok) throw new Error("Failed to fetch response")

      const data = await response.json()
      const botMsg: Message = { text: data.text, sender: "bot" }
      setMessages(prev => [...prev, botMsg])
    } catch (err: any) {
      setError(err.message || "Connection Error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative h-dvh bg-stone-50 overflow-hidden">
      <Button
        onClick={() => { setMessages([]); localStorage.removeItem(STORAGE_KEY); }}
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-20 h-10 w-10 rounded-full bg-white border border-stone-200 text-stone-600 shadow-sm hover:bg-stone-50"
      >
        <MessageSquareDashed className="w-5 h-5" />
      </Button>

      <MessageList 
        messages={messages} 
        isStreaming={loading} 
        error={error} 
        onRetry={() => {}} 
        isLoaded={isLoaded} 
      />

      <Composer
        onSend={handleSubmit}
        onStop={() => {}}
        isStreaming={loading}
      />
    </div>
  )
}
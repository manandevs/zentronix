"use client";

import { AlertCircle, RefreshCw, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedOrb } from "../shared/animated-orb";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";


export function MessageList({
  messages,
  isStreaming,
  error,
  onRetry,
  isLoaded,
}: MessageListProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, isStreaming]);

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedOrb size={64} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-y-auto pt-16 pb-40 px-6 space-y-4"
      role="log"
      aria-label="Chat messages"
      aria-live="polite"
    >
      {/* Empty State */}
      {messages.length === 0 && !error && !isStreaming && (
        <div className="flex flex-col items-center justify-center h-full text-center text-stone-400">
          <div className="mb-4">
            <Image
              src="/images/favicon.png"
              alt="Zentronix Logo"
              height={200}
              width={200}
              priority
            />
          </div>
          <p className="text-lg font-medium text-gray-500">Hi, my name is Zentronix</p>
          <p className="text-sm mt-1 text-gray-400">
            Send a message to begin chatting with the AI assistant
          </p>
        </div>
      )}

      {/* Messages */}
      {messages.map((message, index) => {
        const isUser = message.sender === "user";
        return (
          <div
            key={index}
            className={cn(
              "flex max-w-[90%] md:max-w-[80%] gap-3 mb-6",
              isUser ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                isUser ? "bg-white border" : "bg-black"
              )}
            >
              {isUser ? (
                <User className="w-4 h-4 text-stone-600" />
              ) : (
                <AnimatedOrb size={32} />
              )}
            </div>

            <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
              <div
                className={cn(
                  "rounded-2xl px-4 py-3 shadow-sm transition-all duration-300",
                  isUser
                    ? "bg-white text-stone-800 rounded-tr-none"
                    : "bg-transparent text-stone-800 rounded-tl-none"
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ✅ Error state — renders the full Gemini error message */}
      {error != null && (
        <div
          className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-red-800">Something went wrong</p>
            {/* ✅ whitespace-pre-wrap preserves the newlines in Gemini's error message */}
            <p className="text-xs text-red-600 mt-1 whitespace-pre-wrap break-words">
              {error}
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onRetry}
            className="text-red-600 hover:text-red-700 hover:bg-red-100 transition-colors shrink-0"
          >
            <RefreshCw className="w-4 h-4 mr-1" />
            Retry
          </Button>
        </div>
      )}

      <div className="h-20" />
    </div>
  );
}
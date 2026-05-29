"use client";

import { useState } from "react";
import { MessageSquareDashed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Composer } from "@/components/chat/composer";
import { MessageList } from "@/components/chat/message-list";

export default function ChatPage() {
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    setLoading(true);

    try {
      await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ prompt: text }),
      });
    } finally {
      setLoading(false);
    }
  };

  // 👇 dummy data
const messages: Message[] = [
  {
    sender: "user",
    text: "Hello!",
  },
  {
    sender: "bot",
    text: "Hi! How can I help you today?",
  },
  {
    sender: "user",
    text: "I want to build a chat app in Next.js.",
  },
  {
    sender: "bot",
    text: "Great choice. Next.js works really well for chat apps, especially with API routes and streaming.",
  },
  {
    sender: "user",
    text: "Can I use WebSockets for real-time messaging?",
  },
  {
    sender: "bot",
    text: "Yes, you can use WebSockets via libraries like Socket.io or Pusher. For simpler setups, polling or server-sent events also work.",
  },
  {
    sender: "user",
    text: "What about state management?",
  },
  {
    sender: "bot",
    text: "You can start with React state or Context. For larger apps, Zustand or Redux Toolkit are solid options.",
  },
  {
    sender: "user",
    text: "How do I handle loading states?",
  },
  {
    sender: "bot",
    text: "Typically you use an `isLoading` or `isStreaming` flag while waiting for API responses, just like you're doing now.",
  },
  {
    sender: "user",
    text: "Can I stream responses like ChatGPT?",
  },
  {
    sender: "bot",
    text: "Yes. You can use the Fetch API with ReadableStream or frameworks like Vercel AI SDK for token streaming.",
  },
  {
    sender: "user",
    text: "That sounds cool. Any UI tips?",
  },
  {
    sender: "bot",
    text: "Keep messages in a scrollable container, auto-scroll on new messages, and differentiate user vs bot styling clearly.",
  },
  {
    sender: "user",
    text: "Thanks! This helps a lot.",
  },
  {
    sender: "bot",
    text: "You're welcome! Let me know if you want help wiring the backend next.",
  },
];

  return (
    <div className="relative h-screen w-screen bg-stone-50 overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-20 h-10 w-10 rounded-full bg-white border border-stone-200 text-stone-600 shadow-sm hover:bg-stone-50"
      >
        <MessageSquareDashed className="w-5 h-5" />
      </Button>

      <Composer onSend={handleSend} isStreaming={loading} />

      <MessageList
        messages={messages}
        isStreaming={loading}
        error={null}
        onRetry={() => { }}
        isLoaded={true}
      />
    </div>
  );
}
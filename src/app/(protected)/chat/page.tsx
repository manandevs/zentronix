"use client";

import { useState } from "react";
import { MessageSquareDashed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Composer } from "@/components/chat/composer";
import { MessageList } from "@/components/chat/message-list";
import { AI_MODELS } from "@/config/ai-models";

export default function ChatPage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<AIModel>(AI_MODELS[0]);

  const handleSend = async (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text, model: selectedModel }),
      });

      const data = await response.json();

      if (!response.ok) {
        const apiError =
          data?.error?.message ||
          data?.message ||
          `Request failed (${response.status})`;
        setError(apiError);
        return;
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.message },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    const lastUserMessage = [...messages].reverse().find((m) => m.sender === "user");
    if (lastUserMessage) {
      setError(null);
      handleSend(lastUserMessage.text);
    }
  };

  return (
    <div className="relative h-screen w-screen bg-stone-50 overflow-hidden">
      <Button
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
        onRetry={handleRetry}
        isLoaded={true}
      />

      <Composer
        onSend={handleSend}
        isStreaming={loading}
        selectedModel={selectedModel}
        onModelChange={(model) => setSelectedModel(model)}
      />
    </div>
  );
}
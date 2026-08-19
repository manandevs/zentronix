"use client";

import { useState, useEffect } from "react";
import { MessageSquareDashed, FileJson, FileText, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Composer } from "@/components/chat/composer";
import { MessageList } from "@/components/chat/message-list";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatPage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("zentronix_chat_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  });
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("zentronix_chat_history", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text }),
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

  const exportJson = () => {
    if (messages.length === 0) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `chat-history-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const exportText = () => {
    if (messages.length === 0) return;
    const textContent = messages
      .map((m) => `[${m.sender.toUpperCase()}]\n${m.text}\n`)
      .join("\n");
    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(textContent);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `chat-history-${new Date().toISOString().slice(0, 10)}.txt`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const toggleSidebar = () => {
    const nextState = !sidebarOpen;
    setSidebarOpen(nextState);
    if (!nextState) {
      localStorage.setItem("zentronix_chat_history", JSON.stringify(messages));
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

      {/* Target Button: div:nth-of-type(2) > button:nth-of-type(1) */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          variant="outline"
          onClick={toggleSidebar}
          className="gap-2 rounded-full bg-white border border-stone-200 text-stone-700 shadow-sm hover:bg-stone-50"
        >
          <MessageSquareDashed className="w-4 h-4 text-stone-600" />
          <span className="text-sm font-medium">
            {sidebarOpen ? "Close Sidebar" : "Chat History"}
          </span>
        </Button>
      </div>

      {/* Chat History Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-80 bg-white border-l border-stone-200 shadow-2xl z-40 flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <h2 className="text-lg font-semibold text-stone-800">Chat History</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="h-8 w-8 rounded-full text-stone-500 hover:bg-stone-100"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {messages.length === 0 ? (
              <p className="text-sm text-stone-400 text-center py-8">No chats recorded yet.</p>
            ) : (
              messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl text-xs ${
                    m.sender === "user"
                      ? "bg-stone-100 text-stone-800 ml-4"
                      : "bg-stone-900 text-white mr-4"
                  }`}
                >
                  <p className="font-semibold mb-1 opacity-75 capitalize">{m.sender}</p>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              ))
            )}
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={exportJson}
              disabled={messages.length === 0}
              className="w-full justify-start gap-2 rounded-xl text-stone-700"
            >
              <FileJson className="w-4 h-4 text-stone-500" />
              Export as JSON
            </Button>
            <Button
              variant="outline"
              onClick={exportText}
              disabled={messages.length === 0}
              className="w-full justify-start gap-2 rounded-xl text-stone-700"
            >
              <FileText className="w-4 h-4 text-stone-500" />
              Export as Text
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setMessages([]);
                localStorage.removeItem("zentronix_chat_history");
              }}
              disabled={messages.length === 0}
              className="w-full justify-start gap-2 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
              Clear History
            </Button>
          </div>
        </div>
      )}

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
      />
    </div>
  );
}
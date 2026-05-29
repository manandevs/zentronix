import type { Metadata } from "next";
import ChatView from "./chat-view";

export const metadata: Metadata = {
  title: "Chat - AI Assistant",
  description: "Chat with our AI assistant powered by Gemini",
};

export default function ChatPage() {
  return (
    <div className="font-urbanist">
      <ChatView />
    </div>
  );
}

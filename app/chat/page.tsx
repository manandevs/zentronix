import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { SectionFallback } from "@/components/section-fallback";

const ChatShell = dynamic(
  () =>
    import("@/components/chat/chat-shell").then((mod) => ({
      default: mod.ChatShell,
    })),
  {
    loading: () => <SectionFallback minHeight="100dvh" />,
  }
);

export const metadata: Metadata = {
  title: "Chat - AI Assistant",
  description: "Chat with our AI assistant powered by Gemini",
};

export default function ChatPage() {
  return (
    <div className="font-urbanist">
      <ChatShell />
    </div>
  );
}

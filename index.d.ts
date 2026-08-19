interface GroupLayoutProps {
  children: React.ReactNode;
}

interface ComposerProps {
  onSend: (text: string) => void;
  onStop?: () => void;
  isStreaming: boolean;
  disabled?: boolean;
}

interface MessageListProps {
  messages: Message[];
  isStreaming: boolean;
  error: string | null;
  onRetry: () => void;
  isLoaded: boolean;
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

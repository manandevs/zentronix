interface GroupLayoutProps {
    children: React.ReactNode;
}

interface ComposerProps {
  onSend: (text: string) => void;
  onStop?: () => void;
  isStreaming: boolean;
  disabled?: boolean;
  selectedModel?: AIModel;
  onModelChange?: (model: AIModel) => void;
}

interface MessageListProps {
  messages: Message[];
  isStreaming: boolean;
  error: string | null;
  onRetry: () => void;
  isLoaded: boolean;
}

type AIModel =
  | "google/gemini-2.0-flash-001";

interface Message {
  sender: "user" | "bot";
  text: string;
}
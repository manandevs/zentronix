interface GroupLayoutProps {
    children: React.ReactNode;
}

interface ComposerProps {
    onSend: (text: string, imageBase64?: string) => void;
    onStop?: () => void;
    isStreaming: boolean;
    disabled?: boolean;
    selectedModel?: string;
    onModelChange?: (modelId: string) => void;
}

type AIModel =
    | "google/gemini-2.0-flash-001"
    | "google/gemini-1.5-flash-latest"
    | "google/gemini-1.5-pro-latest";

interface Message {
    text: string;
    sender: "user" | "bot";
}

interface MessageListProps {
    messages: Message[]
    isStreaming: boolean
    error: string | null
    onRetry: () => void
    isLoaded: boolean
}
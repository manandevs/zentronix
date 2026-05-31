"use client";

import { Square, Brain, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { AnimatedOrb } from "../shared/animated-orb";
import { AI_MODELS } from "@/config/ai-models";
import { useRef, useState } from "react";

interface ComposerProps {
  onSend: (text: string) => void;
  onStop?: () => void;
  isStreaming: boolean;
  disabled?: boolean;
  selectedModel?: AIModel;
  onModelChange?: (model: AIModel) => void;
}

export function Composer({
  onSend,
  onStop,
  isStreaming,
  disabled,
  selectedModel = AI_MODELS[0],
  onModelChange,
}: ComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 px-4 flex justify-center pointer-events-none z-50">
      <div className="w-full max-w-2xl pointer-events-auto">
        <div className="flex flex-col bg-white border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[32px] p-4 transition-all duration-300 focus-within:shadow-[0_8px_40px_rgb(0,0,0,0.1)]">

          <div className="flex w-full mb-2">
            <ScrollArea className="w-full max-h-36 px-2 overflow-y-auto">
              <textarea
                ref={textareaRef}
                placeholder="Type a message..."
                disabled={isStreaming || disabled}
                rows={1}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  handleInput();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full bg-transparent border-none resize-none py-3 text-[15px] leading-relaxed text-stone-700 placeholder:text-stone-400 focus:ring-0 focus:outline-none"
                style={{ minHeight: "40px" }}
              />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full text-stone-400 hover:bg-stone-50 hover:text-stone-900"
                  >
                    <Brain className="w-[18px] h-[18px]" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuContent
                    align="start"
                    side="top"
                    className="w-52 p-1 rounded-2xl border-stone-100 shadow-xl"
                  >
                    {AI_MODELS.map((aiModel) => (
                      <DropdownMenuItem
                        key={aiModel}
                        onClick={() => onModelChange?.(aiModel)}
                        className="flex items-center justify-between rounded-xl p-2.5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Brain className="w-4 h-4 text-stone-300" />
                          <span className="text-sm font-medium text-stone-300">
                            {aiModel.replace("google/", "").split("-").slice(0, 2).join(" ").toUpperCase()}
                          </span>
                        </div>

                        {selectedModel === aiModel && (
                          <Check className="w-4 h-4 text-emerald-500" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>

              {/* ✅ Shows the selected model string directly */}
              <span className="text-xs text-stone-400 ml-2 select-none hidden sm:inline">
                {selectedModel.replace("google/", "").split("-").slice(0, 2).join(" ").toUpperCase()}
              </span>
            </div>

            <button
              onClick={isStreaming ? onStop : handleSend}
              disabled={(!isStreaming && !text.trim()) || disabled}
              className="relative h-10 w-10 flex items-center justify-center active:scale-95 transition-transform"
            >
              <AnimatedOrb size={40} variant={isStreaming ? "red" : "default"} />
              {isStreaming ? (
                <Square className="w-5 h-5 absolute text-white" fill="currentColor" />
              ) : (
                <span className="absolute text-white text-[24px] font-bold">↵</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
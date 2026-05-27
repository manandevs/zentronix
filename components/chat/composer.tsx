"use client"

import type React from "react"
import { useState, useRef, useCallback, type KeyboardEvent, useEffect } from "react"
import { Square, Mic, MicOff, Brain, Paperclip, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { AnimatedOrb } from "./animated-orb"
import { AudioWaveform } from "./audio-waveform"

export type AIModel = "google/gemini-2.0-flash-001" | "google/gemini-1.5-flash-latest" | "google/gemini-1.5-pro-latest"

export const AI_MODELS: { id: AIModel; name: string; icon: string }[] = [
  { 
    id: "google/gemini-2.0-flash-001", 
    name: "Gemini 2.0 Flash", 
    icon: "https://www.gstatic.com/lamda/images/favicon_v1_150160d13903a53445129.svg" 
  },
  { 
    id: "google/gemini-1.5-flash-latest", 
    name: "Gemini 1.5 Flash", 
    icon: "https://www.gstatic.com/lamda/images/favicon_v1_150160d13903a53445129.svg" 
  },
  { 
    id: "google/gemini-1.5-pro-latest", 
    name: "Gemini 1.5 Pro", 
    icon: "https://www.gstatic.com/lamda/images/favicon_v1_150160d13903a53445129.svg" 
  },
]

interface ComposerProps {
  onSend: (content: string, imageData?: string) => void
  onStop: () => void
  isStreaming: boolean
  disabled?: boolean
  selectedModel: AIModel
  onModelChange: (model: AIModel) => void
}

export function Composer({ onSend, onStop, isStreaming, disabled, selectedModel, onModelChange }: ComposerProps) {
  const [value, setValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setHasAnimated(true) }, [])

  const handleSend = useCallback(() => {
    if ((!value.trim() && !uploadedImage) || isStreaming || disabled) return
    onSend(value || "Describe this image", uploadedImage || undefined)
    setValue(""); setUploadedImage(null)
    if (textareaRef.current) textareaRef.current.style.height = "auto"
  }, [value, uploadedImage, isStreaming, disabled, onSend])

  const currentModel = AI_MODELS.find((m) => m.id === selectedModel) || AI_MODELS[0]

  return (
    <div className={cn("fixed bottom-6 left-0 right-0 px-4 pointer-events-none z-10", hasAnimated && "composer-intro")}>
      <div className="relative max-w-2xl mx-auto pointer-events-auto">
        {/* Container updated with Glassmorphism and synced shadows */}
        <div
          className="zentronix-glass flex flex-col gap-3 p-4 rounded-3xl shadow-xl transition-all duration-300 focus-within:shadow-2xl focus-within:border-stone-300"
        >
          <div className="flex gap-2 items-center">
            {uploadedImage && (
              <div className="relative shrink-0 image-bounce">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-stone-200">
                  <Image src={uploadedImage} alt="Preview" width={48} height={48} className="object-cover" />
                </div>
                <button onClick={() => setUploadedImage(null)} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-stone-800 text-white rounded-full flex items-center justify-center">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                e.target.style.height = "auto"
                e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`
              }}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder="Type a message..."
              disabled={isStreaming || disabled}
              rows={1}
              className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none max-h-[56px]"
            />

            <button
              onClick={isStreaming ? onStop : handleSend}
              className="zentronix-button h-9 w-9 shrink-0 flex items-center justify-center"
            >
              <AnimatedOrb size={36} variant={isStreaming ? "red" : "default"} />
              {isStreaming && <Square className="w-3 h-3 absolute text-red-700" fill="currentColor" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => setUploadedImage(ev.target?.result as string)
                reader.readAsDataURL(file)
              }
            }} className="hidden" />

            <Button size="icon" className="zentronix-button h-9 w-9 bg-zinc-100 text-stone-700 rounded-full">
              <Mic className="w-4 h-4" />
            </Button>

            <Button onClick={() => fileInputRef.current?.click()} size="icon" className="zentronix-button h-9 w-9 bg-zinc-100 text-stone-700 rounded-full">
              <Paperclip className="w-4 h-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" className="zentronix-button h-9 w-9 bg-zinc-100 text-stone-700 rounded-full">
                  <Brain className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuPortal>
                <DropdownMenuContent align="start" side="top" className="w-40 rounded-2xl z-[9999]">
                  {AI_MODELS.map((model) => (
                    <DropdownMenuItem key={model.id} onClick={() => onModelChange(model.id)} className="gap-3 rounded-lg">
                      <Image src={model.icon} alt={model.name} width={16} height={16} className="rounded-sm" />
                      <span className="text-sm">{model.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>

            <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-auto">
              Powered by <span className="text-stone-600">{currentModel.name}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
  "use client"

  import type React from "react"
  import { useState, useRef, useEffect, useCallback } from "react"
  import { Square, Mic, Brain, Paperclip, X, Check } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { ScrollArea } from "@/components/ui/scroll-area"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuPortal,
  } from "@/components/ui/dropdown-menu"
  import Image from "next/image"
  import { AnimatedOrb } from "./animated-orb"


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
    onSend: (text: string, imageBase64?: string) => void
    onStop?: () => void
    isStreaming: boolean
    disabled?: boolean
    selectedModel?: string
    onModelChange?: (modelId: string) => void
  }

  export function Composer({
    onSend,
    onStop,
    isStreaming,
    disabled,
    selectedModel = "gemini-2.0-flash",
    onModelChange,
  }: ComposerProps) {
    const [value, setValue] = useState("")
    const [uploadedImage, setUploadedImage] = useState<string | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Auto-resize Logic
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }, [value])

    // Process File Input Helper
    const processFile = (file: File) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setUploadedImage(reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    }

    // File Selector Handler
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) processFile(file)
    }

    // Handle Clipboard Image Paste (e.g. Cmd+V a screenshot)
    const handlePaste = useCallback((e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      const items = e.clipboardData.items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile()
          if (file) {
            e.preventDefault()
            processFile(file)
          }
        }
      }
    }, [])

    const handleSend = useCallback(() => {
      if ((!value.trim() && !uploadedImage) || isStreaming || disabled) return
      onSend(value || "Describe this image", uploadedImage || undefined)
      setValue("")
      setUploadedImage(null)
      
      // Reset Textarea height manually back to 1 row
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }, [value, uploadedImage, isStreaming, disabled, onSend])

    const selectedModelData = AI_MODELS.find(m => m.id === selectedModel) || AI_MODELS[0]

    return (
      <div className="fixed bottom-8 left-0 right-0 px-4 flex justify-center pointer-events-none z-50">
        <div className="w-full max-w-2xl pointer-events-auto">
          <div className="flex flex-col bg-white border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[32px] p-4 transition-all duration-300 focus-within:shadow-[0_8px_40px_rgb(0,0,0,0.1)]">
            
            {/* Image Preview */}
            {uploadedImage && (
              <div className="mb-3 px-2 flex items-start">
                <div className="relative group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-stone-100 shadow-sm relative">
                    <Image src={uploadedImage} alt="Preview" fill className="object-cover" />
                  </div>
                  <button 
                    onClick={() => setUploadedImage(null)} 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-white shadow-md border border-stone-100 text-stone-500 rounded-full flex items-center justify-center hover:text-red-500 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Correct implementation of ScrollArea + Textarea */}
            <div className="flex w-full mb-2">
              <ScrollArea className="w-full max-h-[200px] px-2">
                <textarea
                  ref={textareaRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onPaste={handlePaste}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Type a message..."
                  disabled={isStreaming || disabled}
                  rows={1}
                  className="w-full bg-transparent border-none resize-none py-2 text-[15px] leading-relaxed text-stone-700 placeholder:text-stone-400 focus:ring-0 focus:outline-none overflow-hidden"
                />
              </ScrollArea>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <input 
                  ref={fileInputRef} 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
                
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-stone-400 hover:bg-stone-50 hover:text-stone-900">
                  <Mic className="w-[18px] h-[18px]" />
                </Button>

                <Button onClick={() => fileInputRef.current?.click()} variant="ghost" size="icon" className="h-10 w-10 rounded-full text-stone-400 hover:bg-stone-50 hover:text-stone-900">
                  <Paperclip className="w-[18px] h-[18px]" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-stone-400 hover:bg-stone-50 hover:text-stone-900">
                      <Brain className="w-[18px] h-[18px]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuContent align="start" side="top" className="w-64 p-1 rounded-2xl border-stone-100 shadow-xl">
                      {AI_MODELS.map((model) => (
                        <DropdownMenuItem 
                          key={model.id}
                          onClick={() => onModelChange?.(model.id)}
                          className="flex items-center justify-between rounded-xl p-2.5 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <Brain className="w-4 h-4 text-stone-500" />
                            <span className="text-sm font-medium text-stone-700">{model.name}</span>
                          </div>
                          {selectedModel === model.id && <Check className="w-4 h-4 text-emerald-500" />}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenuPortal>
                </DropdownMenu>
                
                {/* Optional Active Model label */}
                <span className="text-xs text-stone-400 ml-2 select-none hidden sm:inline">
                  {selectedModelData.name}
                </span>
              </div>

              <button
                onClick={isStreaming ? onStop : handleSend}
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
    )
  }
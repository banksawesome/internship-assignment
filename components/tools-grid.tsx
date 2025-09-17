"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, ChevronDown, Video, Radio, Sparkles, ArrowUp, RotateCcw, Edit, Zap } from "lucide-react"

const tools = [
  {
    icon: ImageIcon,
    name: "Image",
    description: "Generate images with custom prompts using SDXL",
    isNew: true,
    color: "bg-blue-500",
  },
  {
    icon: Video,
    name: "Video",
    description: "Generate videos with Haiku, Flux, Pika, and more.",
    isNew: false,
    color: "bg-orange-500",
  },
  {
    icon: Radio,
    name: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback on every stroke.",
    isNew: false,
    color: "bg-blue-400",
  },
  {
    icon: Sparkles,
    name: "Enhancer",
    description: "Upscale and enhance images and videos with AI.",
    isNew: true,
    color: "bg-gray-800",
  },
  {
    icon: ArrowUp,
    name: "Video Upscale",
    description: "Upscale videos with Haiku, Flux, Pika, and more.",
    isNew: true,
    color: "bg-green-600",
  },
  {
    icon: RotateCcw,
    name: "Motion Transfer",
    description: "Transfer motion from one video to another.",
    isNew: true,
    color: "bg-gray-900",
  },
  {
    icon: Edit,
    name: "Edit",
    description: "Edit and change style of images and generative.",
    isNew: true,
    color: "bg-purple-600",
  },
  {
    icon: Zap,
    name: "Train",
    description: "Fine-tune to replicate your style, products, or characters.",
    isNew: false,
    color: "bg-orange-400",
  },
]

export function ToolsGrid() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Generate</h2>
        <Button variant="link" className="text-blue-500 text-sm p-0">
          <ChevronDown className="h-3 w-3 ml-1" />
          Show all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {tools.map((tool, index) => (
          <Card key={index} className="border-0 p-0 shadow-none">
            <CardContent className="py-0 px-2 shadow-none">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${tool.color} text-white flex-shrink-0`}>
                  <tool.icon className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-sm">{tool.name}</h3>
                    {tool.isNew && (
                      <Badge variant="secondary" className="text-xs bg-blue-500 text-white">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-8 px-4 flex-shrink-0 bg-accent rounded-full"
                >
                  Open
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Home,
  Battery as Gallery,
  HelpCircle,
  Bell,
  Hash,
  Bookmark,
  Edit3,
  Wand2,
  Check,
  Palette,
  Menu,
  X,
} from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 h-14 items-center">
  {/* Left section */}
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2">
      <Hash className="h-5 w-5" />
      <span className="text-sm text-muted-foreground hidden sm:inline">banksawesome</span>
    </div>
  </div>

  {/* Middle section */}
  <div className="flex items-center justify-center">
  <div className="hidden md:flex flex items-center justify-between rounded-2xl bg-secondary/50 px-3 py-1 w-72">
    <Button variant="ghost" size="sm" className="h-8 w-8 bg-white">
      <Home className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8">
      <Bookmark className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8">
      <Edit3 className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8">
      <Wand2 className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8">
      <Check className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8">
      <Palette className="h-4 w-4" />
    </Button>
  </div>
</div>


  {/* Right section */}
  <div className="flex items-center justify-end space-x-3">
    <Button variant="ghost" size="sm" className="text-xs hidden sm:flex bg-secondary">
      <Gallery className="h-4 w-4 mr-1" />
      Gallery
    </Button>
    <Button variant="ghost" size="sm" className="text-xs hidden sm:flex bg-secondary">
      <HelpCircle className="h-4 w-4 mr-1" />
      Support
    </Button>
    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hidden sm:flex">
      <Bell className="h-4 w-4" />
    </Button>
    <ThemeToggle />
    <Avatar className="h-7 w-7">
      <AvatarImage src="/placeholder.svg?height=28&width=28" />
      <AvatarFallback className="text-xs bg-purple-500 text-white">U</AvatarFallback>
    </Avatar>
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 md:hidden"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
    </Button>
  </div>
</div>


        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center space-x-1 mb-4 shadow-2xsm rounded-2xl bg-secondary/50 px-3 py-1">
                <Button variant="ghost" size="sm" className="h-8 w-8 bg-white px-3 py-1">
                  <Home className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Wand2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Check className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Palette className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-xs justify-start">
                <Gallery className="h-4 w-4 mr-2" />
                Gallery
              </Button>
              <Button variant="ghost" size="sm" className="text-xs justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support
              </Button>
              <Button variant="ghost" size="sm" className="text-xs justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

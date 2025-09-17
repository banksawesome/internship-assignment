"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">K</span>
              </div>
              <span className="font-semibold text-sm">Krea AI</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>curated by</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="font-semibold text-foreground">Mobbin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

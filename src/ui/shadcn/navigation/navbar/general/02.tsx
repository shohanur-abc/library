'use client'

import { Button } from '@/components/ui/button'
import { Search, Bell, User } from 'lucide-react'

export default function Navbar02() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="text-lg font-bold">App</div>
        <div className="hidden md:flex gap-6 flex-1 ml-8">
          <a href="#" className="text-sm hover:text-primary transition-colors">Dashboard</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Projects</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Settings</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

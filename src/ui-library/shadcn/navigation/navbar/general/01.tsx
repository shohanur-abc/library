'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Navbar01() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}

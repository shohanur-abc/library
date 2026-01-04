'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ShoppingCart, Search } from 'lucide-react'

export default function Navbar03() {
  return (
    <nav className="bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold">Store</div>
          <div className="hidden lg:flex gap-12">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">New</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Popular</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sale</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Separator />
      </div>
    </nav>
  )
}

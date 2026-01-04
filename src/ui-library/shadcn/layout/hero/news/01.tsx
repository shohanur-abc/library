import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Bell, Clock, Flame, Play, TrendingUp } from 'lucide-react'

const breakingNews = {
    title: 'Global Tech Summit 2024: Major Announcements Reshape Industry Landscape',
    excerpt: 'World leaders and tech giants gather to discuss AI regulation, climate tech, and the future of digital infrastructure.',
    category: 'Breaking',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    isLive: true,
}

const trendingStories = [
    { id: 1, title: 'Markets surge as inflation data shows cooling trend', category: 'Finance', time: '45 min ago', hot: true },
    { id: 2, title: 'New climate report reveals accelerated ice melt patterns', category: 'Science', time: '1 hour ago', hot: false },
    { id: 3, title: 'Major sports league announces expansion to three new cities', category: 'Sports', time: '2 hours ago', hot: true },
    { id: 4, title: 'Breakthrough in renewable energy storage announced', category: 'Technology', time: '3 hours ago', hot: false },
]

const categories = ['Top Stories', 'Politics', 'Business', 'Tech', 'Sports', 'Entertainment']

export default function NewsHero01() {
    return (
        <section className="bg-background">
            {/* Top Bar */}
            <div className="border-b bg-muted/30">
                <div className="container mx-auto flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-4">
                        <Badge variant="destructive" className="animate-pulse">
                            <span className="mr-1.5 h-2 w-2 rounded-full bg-white" />
                            LIVE
                        </Badge>
                        <span className="text-sm font-medium">Breaking news updates every minute</span>
                    </div>
                    <Button variant="ghost" size="sm">
                        <Bell className="mr-2 h-4 w-4" />
                        Subscribe
                    </Button>
                </div>
            </div>

            {/* Category Nav */}
            <div className="border-b">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-1 overflow-x-auto py-2">
                        {categories.map((cat, i) => (
                            <Button key={cat} variant={i === 0 ? 'default' : 'ghost'} size="sm" className="shrink-0">
                                {cat}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Featured Story */}
                    <div className="lg:col-span-2">
                        <div className="group relative overflow-hidden rounded-xl">
                            <img src={breakingNews.image} alt={breakingNews.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <Badge variant="destructive" className="text-sm">
                                        <Flame className="mr-1 h-3 w-3" />
                                        {breakingNews.category}
                                    </Badge>
                                    {breakingNews.isLive && (
                                        <Badge className="bg-red-600">
                                            <Play className="mr-1 h-3 w-3 fill-current" />
                                            LIVE
                                        </Badge>
                                    )}
                                    <span className="flex items-center gap-1 text-sm text-white/80">
                                        <Clock className="h-3 w-3" />
                                        {breakingNews.time}
                                    </span>
                                </div>

                                <h1 className="mb-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">{breakingNews.title}</h1>

                                <p className="mb-4 text-white/80 md:text-lg">{breakingNews.excerpt}</p>

                                <Button className="bg-white text-black hover:bg-white/90">Read Full Coverage</Button>
                            </div>
                        </div>
                    </div>

                    {/* Trending Sidebar */}
                    <div className="rounded-xl border bg-card p-6">
                        <div className="mb-4 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <h2 className="text-lg font-bold">Trending Now</h2>
                        </div>

                        <div className="space-y-0">
                            {trendingStories.map((story, index) => (
                                <div key={story.id}>
                                    <div className="group cursor-pointer py-4">
                                        <div className="mb-2 flex items-center gap-2">
                                            <Badge variant="outline" className="text-xs">
                                                {story.category}
                                            </Badge>
                                            {story.hot && <Flame className="h-3 w-3 text-orange-500" />}
                                        </div>
                                        <h3 className="mb-1 font-medium leading-tight transition-colors group-hover:text-primary">{story.title}</h3>
                                        <span className="text-xs text-muted-foreground">{story.time}</span>
                                    </div>
                                    {index < trendingStories.length - 1 && <Separator />}
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="mt-4 w-full">
                            View All Trending
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

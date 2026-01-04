// BlogHero04: Video/Podcast Featured Hero
// A hero section focused on multimedia content like videos and podcasts

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Headphones, Mic, Play, PlayCircle, Video } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// PART: DATA
// Multimedia content data
// ═══════════════════════════════════════════════════════════════════════════════

const featuredVideo = {
    id: 1,
    title: 'Building a Startup from Zero to IPO: The Complete Journey',
    description: 'An in-depth documentary following three founders as they navigate the challenges of building a tech startup.',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop',
    duration: '45:32',
    views: '125K',
    host: { name: 'Tech Insider', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
    category: 'Documentary',
}

const latestEpisodes = [
    {
        id: 1,
        title: 'The Art of Code Review',
        type: 'podcast',
        duration: '32 min',
        thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop',
        guest: 'Dan Abramov',
    },
    {
        id: 2,
        title: 'AI Tools for Developers',
        type: 'video',
        duration: '18 min',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
        guest: 'Sarah Chen',
    },
    {
        id: 3,
        title: 'Remote Work Culture',
        type: 'podcast',
        duration: '45 min',
        thumbnail: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=300&fit=crop',
        guest: 'GitLab Team',
    },
]

const categories = [
    { name: 'All', icon: PlayCircle, count: 156 },
    { name: 'Videos', icon: Video, count: 89 },
    { name: 'Podcasts', icon: Mic, count: 67 },
]

// ═══════════════════════════════════════════════════════════════════════════════
// PART: CategoryTabs
// Content type filter tabs
// ═══════════════════════════════════════════════════════════════════════════════

function CategoryTabs() {
    return (
        <div className="flex gap-2 flex-wrap">
            {categories.map((cat, index) => (
                <Button key={cat.name} variant={index === 0 ? 'default' : 'outline'} className="gap-2">
                    <cat.icon className="size-4" />
                    {cat.name}
                    <Badge variant="secondary" className="ml-1 bg-background/20">
                        {cat.count}
                    </Badge>
                </Button>
            ))}
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: FeaturedVideoCard
// Large featured video player card
// ═══════════════════════════════════════════════════════════════════════════════

function FeaturedVideoCard() {
    return (
        <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img src={featuredVideo.thumbnail} alt={featuredVideo.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="size-20 rounded-full bg-primary/90 hover:bg-primary hover:scale-110 transition-all">
                    <Play className="size-8 ml-1 text-primary-foreground" />
                </Button>
            </div>

            {/* Duration Badge */}
            <Badge className="absolute top-4 right-4 bg-black/70 text-white border-0">{featuredVideo.duration}</Badge>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <Badge className="mb-3 bg-primary/90">{featuredVideo.category}</Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{featuredVideo.title}</h2>
                <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">{featuredVideo.description}</p>

                <div className="flex items-center gap-4">
                    <Avatar className="size-10 border-2 border-white/30">
                        <AvatarImage src={featuredVideo.host.avatar} />
                        <AvatarFallback>TI</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-white font-medium">{featuredVideo.host.name}</p>
                        <p className="text-white/60 text-sm">{featuredVideo.views} views</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: EpisodeCard
// Smaller episode card for sidebar
// ═══════════════════════════════════════════════════════════════════════════════

function EpisodeCard({ episode }: { episode: (typeof latestEpisodes)[0] }) {
    const Icon = episode.type === 'podcast' ? Headphones : Video

    return (
        <Card className="group cursor-pointer hover:shadow-lg transition-all border-border/50 overflow-hidden py-0 gap-0">
            <div className="flex gap-4 p-4">
                <div className="relative shrink-0">
                    <img src={episode.thumbnail} alt={episode.title} className="size-20 object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="size-6 text-white" />
                    </div>
                    <Badge className="absolute -bottom-1 -right-1 size-6 p-0 flex items-center justify-center rounded-full bg-primary">
                        <Icon className="size-3" />
                    </Badge>
                </div>
                <CardContent className="p-0 flex flex-col justify-center">
                    <p className="text-xs text-muted-foreground mb-1">
                        {episode.duration} • {episode.guest}
                    </p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{episode.title}</h3>
                </CardContent>
            </div>
        </Card>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: MAIN BLOCK
// Main multimedia hero section
// ═══════════════════════════════════════════════════════════════════════════════

export default function BlogHero04() {
    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <Badge variant="outline" className="mb-4">
                            <PlayCircle className="size-3 mr-1" />
                            Multimedia
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">Watch & Listen</h1>
                        <p className="text-muted-foreground">Videos, podcasts, and live streams from industry experts</p>
                    </div>
                    <CategoryTabs />
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <FeaturedVideoCard />
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Mic className="size-5 text-primary" />
                            Latest Episodes
                        </h3>
                        {latestEpisodes.map((episode) => (
                            <EpisodeCard key={episode.id} episode={episode} />
                        ))}
                        <Button variant="outline" className="w-full">
                            View All Episodes
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

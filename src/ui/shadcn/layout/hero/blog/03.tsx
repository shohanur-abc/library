// BlogHero01: Magazine Style Hero with Featured Post
// A stunning magazine-style hero with large featured post and smaller side posts

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Calendar, Clock, Search, TrendingUp } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// PART: DATA
// Blog hero data arrays - customize content here
// ═══════════════════════════════════════════════════════════════════════════════

const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2025 and Beyond',
    excerpt: 'Explore the emerging technologies, frameworks, and methodologies that are shaping the future of web development. From AI-powered tools to edge computing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
    category: 'Technology',
    author: {
        name: 'Sarah Mitchell',
        avatar: 'https://thumbs.dreamstime.com/b/white-chicken-headshot-tilted-head-dark-background-feathered-detailed-posture-343331892.jpg?w=100',
        role: 'Senior Editor',
    },
    date: 'Dec 8, 2025',
    readTime: '12 min read',
}

const trendingPosts = [
    {
        id: 2,
        title: 'Building Scalable Microservices with Node.js',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
        category: 'Backend',
        date: 'Dec 7, 2025',
        readTime: '8 min',
    },
    {
        id: 3,
        title: 'Design Systems That Scale: A Complete Guide',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        category: 'Design',
        date: 'Dec 6, 2025',
        readTime: '10 min',
    },
    {
        id: 4,
        title: 'AI-Powered Code Reviews: Best Practices',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
        category: 'AI',
        date: 'Dec 5, 2025',
        readTime: '6 min',
    },
]

const categories = ['All', 'Technology', 'Design', 'Development', 'AI', 'Backend', 'Frontend']

// ═══════════════════════════════════════════════════════════════════════════════
// PART: SearchBar
// Search input with icon
// ═══════════════════════════════════════════════════════════════════════════════

function SearchBar() {
    return (
        <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <Input placeholder="Search articles, topics, authors..." className="pl-12 h-12 bg-background/80 backdrop-blur border-muted-foreground/20" />
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: CategoryNav
// Horizontal category navigation pills
// ═══════════════════════════════════════════════════════════════════════════════

function CategoryNav() {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
                <Button key={category} variant={index === 0 ? 'default' : 'outline'} size="sm" className="rounded-full">
                    {category}
                </Button>
            ))}
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: FeaturedPostCard
// Large featured post card with overlay
// ═══════════════════════════════════════════════════════════════════════════════

function FeaturedPostCard() {
    return (
        <div className="relative group rounded-2xl overflow-hidden aspect-4/3 lg:aspect-auto lg:h-full">
            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <Badge className="w-fit mb-4 bg-primary/90 text-primary-foreground">{featuredPost.category}</Badge>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 line-clamp-3 group-hover:text-primary transition-colors">{featuredPost.title}</h2>

                <p className="text-white/80 mb-6 line-clamp-2 max-w-2xl">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                        <Avatar className="size-10 border-2 border-white/30">
                            <AvatarImage src={featuredPost.author.avatar} />
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-white font-medium">{featuredPost.author.name}</p>
                            <p className="text-white/60 text-sm">{featuredPost.author.role}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="size-4" />
                            {featuredPost.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: TrendingPostCard
// Smaller trending post card for sidebar
// ═══════════════════════════════════════════════════════════════════════════════

function TrendingPostCard({ post, index }: { post: (typeof trendingPosts)[0]; index: number }) {
    return (
        <div className="group flex gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="relative shrink-0">
                <img src={post.image} alt={post.title} className="size-20 md:size-24 object-cover rounded-lg" />
                <span className="absolute -top-2 -left-2 size-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
            </div>
            <div className="flex flex-col justify-center min-w-0">
                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                    {post.category}
                </Badge>
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors text-sm md:text-base">{post.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: TrendingSidebar
// Sidebar with trending posts list
// ═══════════════════════════════════════════════════════════════════════════════

function TrendingSidebar() {
    return (
        <div className="bg-card rounded-2xl p-4 md:p-6 border h-full">
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="size-5 text-primary" />
                <h3 className="font-bold text-lg">Trending Now</h3>
            </div>

            <div className="space-y-2">
                {trendingPosts.map((post, index) => (
                    <TrendingPostCard key={post.id} post={post} index={index} />
                ))}
            </div>

            <Button variant="ghost" className="w-full mt-4 group">
                View All Trending
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: MAIN BLOCK
// Main blog hero section combining all components
// ═══════════════════════════════════════════════════════════════════════════════

export default function BlogHero01() {
    return (
        <section className="py-12 md:py-20 bg-linear-to-b from-muted/50 to-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10 space-y-6">
                    <Badge variant="outline" className="px-4 py-1">
                        ✨ Welcome to Our Blog
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Discover Stories & Ideas</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Insights, tutorials, and perspectives from industry experts and thought leaders</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <SearchBar />
                    </div>

                    <CategoryNav />
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <FeaturedPostCard />
                    </div>
                    <div className="lg:col-span-1">
                        <TrendingSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

// BlogHero03: Dark Mode Editorial Hero
// A sophisticated dark editorial-style hero with featured articles carousel
'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Calendar, Clock, Play } from 'lucide-react'
import { use, useState } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// PART: DATA
// Featured articles data
// ═══════════════════════════════════════════════════════════════════════════════

const featuredArticles = [
    {
        id: 1,
        title: 'The Architecture of Modern Web Applications',
        excerpt: "Understanding the fundamental patterns and practices that power today's most scalable web applications.",
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop',
        category: 'Architecture',
        author: { name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
        date: 'Dec 8, 2025',
        readTime: '15 min',
        hasVideo: true,
    },
    {
        id: 2,
        title: 'Machine Learning in Production: A Practical Guide',
        excerpt: 'Learn how to deploy and maintain machine learning models in production environments effectively.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
        category: 'Machine Learning',
        author: { name: 'Emily Zhang', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
        date: 'Dec 7, 2025',
        readTime: '12 min',
        hasVideo: false,
    },
    {
        id: 3,
        title: 'Building Design Systems at Scale',
        excerpt: 'How top companies create and maintain design systems that work across hundreds of products.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
        category: 'Design',
        author: { name: 'Michael Park', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
        date: 'Dec 6, 2025',
        readTime: '10 min',
        hasVideo: true,
    },
]

const quickLinks = [
    { label: 'Latest', count: 24 },
    { label: 'Trending', count: 12 },
    { label: "Editor's Pick", count: 8 },
    { label: 'Most Read', count: 15 },
]

// ═══════════════════════════════════════════════════════════════════════════════
// PART: QuickLinks
// Quick navigation links with counts
// ═══════════════════════════════════════════════════════════════════════════════

function QuickLinks() {
    return (
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {quickLinks.map((link) => (
                <Button key={link.label} variant="outline" className="group border-border/50 hover:border-primary hover:bg-primary/10">
                    {link.label}
                    <Badge variant="secondary" className="ml-2 bg-muted text-muted-foreground group-hover:bg-primary/20">
                        {link.count}
                    </Badge>
                </Button>
            ))}
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: FeaturedSlide
// Individual featured article slide
// ═══════════════════════════════════════════════════════════════════════════════

function FeaturedSlide({ article }: { article: (typeof featuredArticles)[0] }) {
    return (
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden group aspect-video lg:aspect-4/3">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                {article.hasVideo && (
                    <Button size="lg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-white/90 hover:bg-white text-foreground">
                        <Play className="size-6 ml-1" />
                    </Button>
                )}

                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{article.category}</Badge>
            </div>

            {/* Content */}
            <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {article.readTime}
                    </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight hover:text-primary transition-colors cursor-pointer">{article.title}</h2>

                <p className="text-lg text-muted-foreground">{article.excerpt}</p>

                <div className="flex items-center gap-4">
                    <Avatar className="size-12 border-2 border-primary/30">
                        <AvatarImage src={article.author.avatar} />
                        <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{article.author.name}</p>
                        <p className="text-sm text-muted-foreground">Contributing Writer</p>
                    </div>
                </div>

                <Button size="lg" className="group">
                    Read Article
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: SliderControls
// Navigation controls for the slider
// ═══════════════════════════════════════════════════════════════════════════════

function SliderControls({ current, total, onPrev, onNext }: { current: number; total: number; onPrev: () => void; onNext: () => void }) {
    return (
        <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'}`} />
                ))}
            </div>

            <div className="flex gap-2">
                <Button size="icon" variant="outline" onClick={onPrev} className="size-10 rounded-full">
                    <ArrowLeft className="size-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={onNext} className="size-10 rounded-full">
                    <ArrowRight className="size-4" />
                </Button>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: MAIN BLOCK
// Main editorial hero with carousel
// ═══════════════════════════════════════════════════════════════════════════════

export default function BlogHero03() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div>
                        <Badge variant="outline" className="mb-4">
                            Featured Stories
                        </Badge>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Editor's Picks This Week</h1>
                    </div>
                    <QuickLinks />
                </div>

                {/* Featured Slider */}
                <Card className="p-6 md:p-10 border-border/50 bg-card/50 backdrop-blur py-0 gap-0">
                    <FeaturedSlide article={featuredArticles[currentSlide]} />
                    <SliderControls current={currentSlide} total={featuredArticles.length} onPrev={prevSlide} onNext={nextSlide} />
                </Card>
            </div>
        </section>
    )
}

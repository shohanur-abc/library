import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Calendar, Clock, TrendingUp } from 'lucide-react'

const featuredPost = {
    title: 'The Future of Web Development: What to Expect in 2025',
    excerpt: 'Exploring the cutting-edge technologies and trends that will shape how we build for the web, from AI-assisted coding to edge computing.',
    category: 'Technology',
    readTime: '8 min read',
    date: 'Mar 15, 2024',
    author: {
        name: 'Sarah Chen',
        avatar: 'https://thumbs.dreamstime.com/b/white-chicken-headshot-tilted-head-dark-background-feathered-detailed-posture-343331892.jpg?w=100',
        role: 'Senior Editor',
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
}

const trendingTopics = ['React 19', 'AI Tools', 'TypeScript', 'Edge Computing', 'Web3']

export default function BlogHero01() {
    return (
        <section className="relative overflow-hidden bg-background py-16 md:py-24">
            {/* Subtle gradient background */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />

            <div className="container relative mx-auto px-4">
                {/* Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <Badge variant="secondary" className="mb-4">
                            <TrendingUp className="mr-1.5 h-3 w-3" />
                            Featured Story
                        </Badge>
                        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                            Discover Ideas That
                            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Inspire</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {trendingTopics.map((topic) => (
                            <Badge key={topic} variant="outline" className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground">
                                {topic}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Featured Post Card */}
                <div className="group relative overflow-hidden rounded-2xl border bg-card">
                    <div className="grid gap-0 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                            <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover  transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
                            <Badge className="absolute left-4 top-4 bg-primary/90 backdrop-blur-sm">{featuredPost.category}</Badge>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-center p-6 md:p-10">
                            {/* Meta info */}
                            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="h-4 w-4" />
                                    {featuredPost.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    {featuredPost.readTime}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">{featuredPost.title}</h2>

                            {/* Excerpt */}
                            <p className="mb-6 text-muted-foreground md:text-lg">{featuredPost.excerpt}</p>

                            {/* Author & CTA */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                                        <AvatarImage src={featuredPost.author.avatar} />
                                        <AvatarFallback>{featuredPost.author.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{featuredPost.author.name}</p>
                                        <p className="text-sm text-muted-foreground">{featuredPost.author.role}</p>
                                    </div>
                                </div>
                                <Button className="group/btn">
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Read Article
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

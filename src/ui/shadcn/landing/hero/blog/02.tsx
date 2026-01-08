import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Bookmark, Heart, MessageCircle, Share2, Sparkles } from 'lucide-react'

const posts = [
    {
        id: 1,
        title: 'Building Scalable Design Systems',
        excerpt: 'How we created a design system that scales across 50+ products',
        category: 'Design',
        likes: 234,
        comments: 45,
        author: { name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
        featured: true,
    },
    {
        id: 2,
        title: 'The Art of Code Reviews',
        excerpt: 'Best practices for giving and receiving constructive feedback',
        category: 'Engineering',
        likes: 189,
        comments: 32,
        author: { name: 'Maya Patel', avatar: 'https://thumbs.dreamstime.com/b/white-chicken-headshot-tilted-head-dark-background-feathered-detailed-posture-343331892.jpg?w=100' },
        featured: false,
    },
    {
        id: 3,
        title: 'Remote Work Culture Tips',
        excerpt: 'Building strong team connections in a distributed workplace',
        category: 'Culture',
        likes: 156,
        comments: 28,
        author: { name: 'Jordan Lee', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
        featured: false,
    },
]

const categories = ['All', 'Design', 'Engineering', 'Culture', 'Product', 'Career']

export default function BlogHero02() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-background">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 py-16 md:py-24">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <Badge className="mb-4" variant="outline">
                        <Sparkles className="mr-1.5 h-3 w-3 text-yellow-500" />
                        Company Blog
                    </Badge>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Stories from the
                        <span className="relative ml-2">
                            <span className="relative z-10">Team</span>
                            <span className="absolute -bottom-1 left-0 h-3 w-full bg-primary/30 -rotate-1" />
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground">Insights, tutorials, and updates from our engineering, design, and product teams.</p>
                </div>

                {/* Category Filter */}
                <div className="mb-10 flex flex-wrap justify-center gap-2">
                    {categories.map((cat, i) => (
                        <Button key={cat} variant={i === 0 ? 'default' : 'outline'} size="sm" className="rounded-full">
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post.id} className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${post.featured ? 'md:col-span-2 md:row-span-2' : 'py-0 gap-0'}`}>
                            <CardContent className={`flex h-full flex-col ${post.featured ? 'p-8' : 'p-4'}`}>
                                {post.featured && (
                                    <Badge className="mb-4 w-fit bg-yellow-500/10 text-yellow-600">
                                        <Sparkles className="mr-1.5 h-3 w-3" />
                                        Featured
                                    </Badge>
                                )}

                                <Badge variant="secondary" className="mb-3 w-fit">
                                    {post.category}
                                </Badge>

                                <h3 className={`mb-2 font-bold leading-tight ${post.featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>{post.title}</h3>

                                <p className={`mb-4 text-muted-foreground ${post.featured ? 'text-lg' : 'text-sm'}`}>{post.excerpt}</p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={post.author.avatar} />
                                            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium">{post.author.name}</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <span className="flex items-center gap-1 text-sm">
                                            <Heart className="h-4 w-4" />
                                            {post.likes}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm">
                                            <MessageCircle className="h-4 w-4" />
                                            {post.comments}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Actions */}
                                <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                    <Button size="icon" variant="secondary" className="h-8 w-8">
                                        <Bookmark className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="secondary" className="h-8 w-8">
                                        <Share2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All */}
                <div className="mt-10 text-center">
                    <Button variant="outline" size="lg" className="group">
                        Browse All Articles
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

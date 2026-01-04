// BlogHero02: Minimal Clean Hero with Newsletter
// A clean, minimalist blog hero with prominent newsletter signup

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, BookOpen, Mail, Sparkles, Users } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// PART: DATA
// Blog hero data - customize content here
// ═══════════════════════════════════════════════════════════════════════════════

const stats = [
    { icon: BookOpen, value: '500+', label: 'Articles' },
    { icon: Users, value: '50K+', label: 'Readers' },
    { icon: Sparkles, value: '100+', label: 'Authors' },
]

const topics = ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'DevOps', 'AI/ML', 'Design']

// ═══════════════════════════════════════════════════════════════════════════════
// PART: StatsRow
// Display key blog statistics
// ═══════════════════════════════════════════════════════════════════════════════

function StatsRow() {
    return (
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="size-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: NewsletterForm
// Email subscription form with validation
// ═══════════════════════════════════════════════════════════════════════════════

function NewsletterForm() {
    return (
        <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                    <Input type="email" placeholder="Enter your email" className="pl-12 h-12 bg-background border-2 focus:border-primary" />
                </div>
                <Button size="lg" className="h-12 px-8">
                    Subscribe
                    <ArrowRight className="ml-2 size-4" />
                </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">Join 50,000+ developers. No spam, unsubscribe anytime.</p>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: TopicTags
// Popular topics as clickable badges
// ═══════════════════════════════════════════════════════════════════════════════

function TopicTags() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Popular topics:</span>
            {topics.map((topic) => (
                <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {topic}
                </Badge>
            ))}
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: MAIN BLOCK
// Main blog hero section with newsletter focus
// ═══════════════════════════════════════════════════════════════════════════════

export default function BlogHero02() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.08),transparent_50%)]" />

            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-0">
                        <Sparkles className="size-4 mr-2" />
                        Welcome to the Blog
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                        Ideas that
                        <span className="text-primary"> inspire.</span>
                        <br />
                        Stories that
                        <span className="text-primary"> matter.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Deep dives into software engineering, design, and technology. Written by developers, for developers.</p>

                    {/* Newsletter Form */}
                    <NewsletterForm />
                </div>

                {/* Stats */}
                <div className="mb-12">
                    <StatsRow />
                </div>

                {/* Topics */}
                <TopicTags />
            </div>
        </section>
    )
}

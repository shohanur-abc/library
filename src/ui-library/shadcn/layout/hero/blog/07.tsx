// BlogHero05: Split Screen Hero with Categories
// A bold split-screen hero with category navigation

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ChevronRight, Code, Cpu, Layers, Palette, Smartphone, Zap } from 'lucide-react'
import { Separator } from 'react-resizable-panels'

// ═══════════════════════════════════════════════════════════════════════════════
// PART: DATA
// Categories and featured data
// ═══════════════════════════════════════════════════════════════════════════════

const categories = [
    { name: 'Development', icon: Code, color: 'bg-blue-500', articles: 124, description: 'Web, mobile & backend development' },
    { name: 'Design', icon: Palette, color: 'bg-purple-500', articles: 89, description: 'UI/UX, graphics & brand design' },
    { name: 'Technology', icon: Cpu, color: 'bg-green-500', articles: 156, description: 'AI, blockchain & emerging tech' },
    { name: 'Mobile', icon: Smartphone, color: 'bg-orange-500', articles: 67, description: 'iOS, Android & cross-platform' },
    { name: 'DevOps', icon: Layers, color: 'bg-cyan-500', articles: 45, description: 'CI/CD, cloud & infrastructure' },
    { name: 'Performance', icon: Zap, color: 'bg-yellow-500', articles: 38, description: 'Optimization & best practices' },
]

const heroContent = {
    title: "Empowering Developers with Knowledge",
    subtitle: 'Your destination for cutting-edge development tutorials, insights, and industry news.',
    cta: 'Start Reading',
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: CategoryCard
// Individual category card with icon
// ═══════════════════════════════════════════════════════════════════════════════

function CategoryCard({ category }: { category: (typeof categories)[0] }) {
    return (
        <Card className="group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 py-0 gap-0">
            <CardContent className="p-5">
                <div className="flex items-start gap-4">
                    <div className={`size-12 rounded-xl ${category.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <category.icon className="size-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
                            <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{category.description}</p>
                        <Badge variant="secondary" className="text-xs">
                            {category.articles} articles
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: HeroContent
// Left side hero content with title and CTA
// ═══════════════════════════════════════════════════════════════════════════════

function HeroContent() {
    return (
        <div className="flex flex-col justify-center h-full py-12 lg:py-0">
            <Badge variant="outline" className="w-fit mb-6">
                🚀 Over 500+ Articles
            </Badge>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight text-center lg:text-left">
                {heroContent.title.split('.').map((word, i) => (
                    <span key={i}>
                        {word}
                        {/* {i < 2 && <span className="text-primary">.</span>}
                        {i < 2 && <br />} */}
                    </span>
                ))}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto text-center lg:mx-0 lg:text-left">{heroContent.subtitle}</p>

            <div className="flex justify-center lg:justify-start flex-wrap gap-4">
                <Button size="lg" className="group">
                    {heroContent.cta}
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                    Browse Categories
                </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 pt-5 mx-5 border-t ">
                <div>
                    <p className="text-3xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Articles</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">Authors</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-foreground">100K+</p>
                    <p className="text-sm text-muted-foreground">Readers</p>
                </div>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: MAIN BLOCK
// Main split screen hero
// ═══════════════════════════════════════════════════════════════════════════════

export default function BlogHero05() {
    return (
        <section className="min-h-[90vh] bg-background">
            <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 min-h-[90vh]">
                    {/* Left - Hero Content */}
                    <HeroContent />

                    {/* Right - Categories Grid */}
                    <div className="flex flex-col justify-center py-12 lg:py-20">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-foreground">Explore Topics</h2>
                            <Button variant="ghost" size="sm" className="text-primary">
                                View All
                                <ChevronRight className="size-4 ml-1" />
                            </Button>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {categories.map((category) => (
                                <CategoryCard key={category.name} category={category} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

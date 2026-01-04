import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowRight, Code2, Layers, Palette, Play, Rocket, Shield, Sparkles, Zap } from 'lucide-react'

const featureCards = [
    {
        icon: Layers,
        title: '50+ Components',
        description: 'Pre-built, customizable UI blocks for rapid development',
        color: 'from-blue-500 to-cyan-500',
        stats: '50+'
    },
    {
        icon: Palette,
        title: 'Fully Themeable',
        description: 'Customize every aspect with CSS variables and Tailwind',
        color: 'from-purple-500 to-pink-500',
        stats: '∞'
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized for Core Web Vitals and performance',
        color: 'from-amber-500 to-orange-500',
        stats: '100ms'
    },
    {
        icon: Shield,
        title: 'Accessible',
        description: 'WCAG 2.1 AA compliant with keyboard navigation',
        color: 'from-emerald-500 to-green-500',
        stats: 'AA'
    },
]

const StartupHero03 = () => {
    return (
        <section className="py-20 md:py-28 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
                    <Badge variant="secondary" className="px-4 py-1.5 gap-2">
                        <Sparkles className="size-3.5" />
                        INTRODUCING BLOCKS
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Everything You Need to Build Modern UIs
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive collection of beautifully designed, production-ready components built with Shadcn UI and Tailwind CSS.
                    </p>

                    <div className="flex flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="h-12 px-8 gap-2">
                            Browse Components
                            <ArrowRight className="size-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 gap-2">
                            <Play className="size-4" />
                            Watch Video
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureCards.map((card) => {
                        const IconComponent = card.icon
                        return (
                            <Card key={card.title} className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${card.color} opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />

                                <CardHeader className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                                            <IconComponent className="size-6 text-white" />
                                        </div>
                                        <span className="text-2xl font-bold text-muted-foreground/50">{card.stats}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-2">
                                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Code2 className="size-5" />
                        <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Rocket className="size-5" />
                        <span>React 19</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Layers className="size-5" />
                        <span>Tailwind v4</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupHero03

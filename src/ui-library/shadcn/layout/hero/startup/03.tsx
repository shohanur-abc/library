import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react'

const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
]

const StartupHero04 = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <Badge variant="secondary" className="px-4 py-2 text-sm font-medium gap-2">
                        <Sparkles className="size-4" />
                        New Release v2.0 is here
                    </Badge>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Build beautiful products <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">faster than ever</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">The modern platform for building exceptional digital experiences. Ship faster, scale better, and delight your customers.</p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="text-base px-8 h-12 gap-2">
                            Get Started Free
                            <ArrowRight className="size-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2">
                            <Play className="size-4" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="pt-8 space-y-4">
                        <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 2,000+ reviews</span>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-center gap-8 sm:gap-12 pt-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupHero04

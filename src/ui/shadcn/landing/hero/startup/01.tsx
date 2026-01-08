import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

/**
 * StartupHero02 - Split Layout Hero with Features
 *
 * Split hero with content left, image right.
 * Features: Badge, title, description, feature list, CTAs, image.
 * Built with Shadcn UI + Tailwind CSS.
 */

// Data: Features
const features = [
    { text: 'Built with React & TypeScript' },
    { text: 'Fully Responsive Design' },
    { text: 'Dark Mode Support' },
    { text: 'Accessible Components' },
]

const StartupHero02 = () => {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="container mx-auto px-4 sm:w-11/12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <Badge variant="outline" className="px-3 py-1">
                            New Release
                        </Badge>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            The Modern Way to Build Web Applications
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg">
                            Accelerate your development workflow with our pre-built components. Ship faster, iterate quickly, and focus on what matters most.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-row justify-center sm:justify-start gap-4 pt-4">
                            <Button size="lg" className="h-12 px-8 gap-2">
                                Start Building
                                <ArrowRight className="size-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8">
                                View Components
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border">
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
                                alt="Dashboard Preview"
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                        {/* Floating decoration */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupHero02

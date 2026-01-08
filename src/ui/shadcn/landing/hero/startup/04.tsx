import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Code2, Layers, Palette, Rocket, Sparkles } from 'lucide-react'

const steps = [
    { icon: Code2, title: 'Write Code', desc: 'Simple, clean APIs' },
    { icon: Layers, title: 'Build Components', desc: 'Reusable blocks' },
    { icon: Palette, title: 'Customize Design', desc: 'Match your brand' },
    { icon: Rocket, title: 'Ship Faster', desc: 'Deploy anywhere' },
]

const StartupHero06 = () => {
    return (
        <section className="relative min-h-screen flex items-center py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8 ">
                        <div className='flex justify-center lg:justify-start'>
                            <Badge className="gap-2 px-3 py-1.5">
                                <Sparkles className="size-3.5" />
                                Developer First
                            </Badge>
                        </div>

                        <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center lg:text-left">
                            Ship products your <span className="text-primary">customers love</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg text-center mx-auto lg:text-left lg:mx-0 ">A complete toolkit for building modern applications. From design to deployment, we've got you covered.</p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="h-12 px-8 gap-2">
                                Get Started
                                <ArrowRight className="size-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8">
                                View Examples
                            </Button>
                        </div>

                        {/* Metrics */}
                        <Separator className="my-6" />
                        <div className="flex items-center justify-center gap-14 mt-4">
                            <div>
                                <div className="text-3xl font-bold">10K+</div>
                                <div className="text-sm text-muted-foreground">Developers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">500+</div>
                                <div className="text-sm text-muted-foreground">Components</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">99%</div>
                                <div className="text-sm text-muted-foreground">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Steps */}
                    <div className="">
                        <div className="relative">
                            {/* Connection line */}
                            <div className="absolute left-8 top-12 bottom-12 w-px bg-border hidden sm:block" />

                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <div key={step.title} className="relative flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors group">
                                        <div className="relative z-10 flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <step.icon className="size-6" />
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-medium text-muted-foreground">Step {index + 1}</span>
                                            </div>
                                            <h3 className="font-semibold text-lg">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupHero06

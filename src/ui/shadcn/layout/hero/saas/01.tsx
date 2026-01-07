import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, BarChart3, Layers, Play, Shield, Sparkles, Zap } from 'lucide-react'

const features = [
    { icon: Zap, label: 'Lightning Fast', desc: '99.99% uptime SLA' },
    { icon: Shield, label: 'Enterprise Security', desc: 'SOC 2 compliant' },
    { icon: Layers, label: 'Scalable', desc: 'From startup to enterprise' },
    { icon: BarChart3, label: 'Analytics', desc: 'Real-time insights' },
]

const integrations = ['Slack', 'Notion', 'GitHub', 'Jira', 'Figma']

const testimonial = {
    quote: "This platform transformed how our team collaborates. We've seen a 40% increase in productivity.",
    author: 'Sarah Chen',
    role: 'VP Engineering at TechCorp',
    avatar: 'https://thumbs.dreamstime.com/b/white-chicken-headshot-tilted-head-dark-background-feathered-detailed-posture-343331892.jpg?w=100',
}

export default function SaaSHero01() {
    return (
        <section className="relative overflow-hidden bg-background">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

            {/* Gradient orbs */}
            <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="container relative mx-auto px-4 py-16 md:py-24">
                {/* Announcement */}
                <div className="mb-8 flex justify-center">
                    <Badge variant="outline" className="gap-2 px-4 py-2 text-sm">
                        <Sparkles className="h-4 w-4 text-yellow-500" />
                        New: AI-powered workflows now available
                        <ArrowRight className="h-4 w-4" />
                    </Badge>
                </div>

                {/* Hero Content */}
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        The Modern Platform for
                        <span className="block bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Building & Shipping Fast</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">Streamline your workflow with our all-in-one platform. From idea to deployment, we've got everything your team needs to succeed.</p>

                    {/* CTAs */}
                    <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="gap-2 px-8">
                            Start Free Trial
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2">
                            <Play className="h-4 w-4" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="mb-12 flex flex-col items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Avatar key={i} className="h-10 w-10 border-2 border-background">
                                    <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 20}`} />
                                    <AvatarFallback>U{i}</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">10,000+</span> teams already shipping faster
                        </p>
                    </div>

                    {/* Integrations */}
                    <div className="mb-16">
                        <p className="mb-4 text-sm text-muted-foreground">Integrates with your favorite tools</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {integrations.map((name) => (
                                <div key={name} className="flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm">
                                    <div className="h-5 w-5 rounded bg-muted" />
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map(({ icon: Icon, label, desc }) => (
                        <Card key={label} className="group border-muted/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg">
                            <CardContent className="p-6">
                                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-1 font-semibold">{label}</h3>
                                <p className="text-sm text-muted-foreground">{desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Testimonial */}
                <Card className="mx-auto mt-12 max-w-2xl border-muted/50 bg-muted/30 py-0 gap-0">
                    <CardContent className="p-6 text-center">
                        <p className="mb-4 text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-center gap-3">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} />
                                <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                                <p className="font-medium">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

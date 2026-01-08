import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Quote, Star } from 'lucide-react'

const testimonial = {
    quote: "This platform transformed how we work. We shipped 3x faster and our team couldn't be happier.",
    author: 'Sarah Chen',
    role: 'CTO at TechCorp',
    avatar: 'https://i.pravatar.cc/100?img=5',
}

const StartupHero07 = () => {
    return (
        <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Top Badge */}
                    <div className="flex justify-center mb-8">
                        <Badge variant="outline" className="px-4 py-1.5 gap-2 text-sm">
                            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                            Rated #1 Platform in 2024
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6">
                        Where ideas become{' '}
                        <span className="relative inline-block">
                            reality
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-10">Join thousands of innovators who turn their visions into products that millions of people use every day.</p>

                    {/* CTA Buttons */}
                    <div className="flex flex-row items-center justify-center gap-4 mb-16">
                        <Button size="lg" className="h-14 px-10 text-base gap-2 rounded-full">
                            Start Free Trial
                            <ArrowRight className="size-4" />
                        </Button>
                        <Button variant="ghost" size="lg" className="h-14 px-10 text-base rounded-full">
                            Book a Demo
                        </Button>
                    </div>

                    {/* Testimonial Card */}
                    <Card className="max-w-2xl mx-auto border-none shadow-2xl py-0 gap-0">
                        <CardContent className="p-8">
                            <Quote className="size-10 text-primary/20 mb-4" />
                            <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4">
                                <Avatar className="size-12">
                                    <AvatarImage src={testimonial.avatar} />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">150K+</div>
                            <div className="text-sm text-muted-foreground">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">50M+</div>
                            <div className="text-sm text-muted-foreground">API Requests/Day</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">99.99%</div>
                            <div className="text-sm text-muted-foreground">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">190+</div>
                            <div className="text-sm text-muted-foreground">Countries</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupHero07

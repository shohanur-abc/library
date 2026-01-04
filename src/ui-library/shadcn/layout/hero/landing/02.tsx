import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const features = ['No credit card required', '14-day free trial', 'Cancel anytime']

const avatars = [
    { src: 'https://i.pravatar.cc/100?img=1', fallback: 'JD' },
    { src: 'https://i.pravatar.cc/100?img=2', fallback: 'AB' },
    { src: 'https://i.pravatar.cc/100?img=3', fallback: 'CD' },
    { src: 'https://i.pravatar.cc/100?img=4', fallback: 'EF' },
]

const LandingHero02 = () => {
    return (
        <section className="relative min-h-screen flex items-center py-10 sm:py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-7">

                        <div>
                            <div className='flex justify-center lg:justify-start mb-4'>
                                <Badge variant="outline" className="px-4 py-1.5 ">
                                    🚀 Launching Soon
                                </Badge>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight leading-tight text-center lg:text-left">

                                The future of <span className="text-primary">team collaboration</span> is here
                            </h1>
                        </div>


                        <p className="text-lg xl:text-xl mx-auto text-muted-foreground max-w-2xl text-center lg:text-left">Streamline your workflow, boost productivity, and bring your team together with our next-generation collaboration platform.</p>

                        {/* Email Signup */}
                        <div className="flex flex-col sm:flex-row mx-auto gap-3 max-w-xl">
                            <Input type="email" placeholder="Enter your email" className="h-12 px-4" />
                            <Button size="lg" className="h-12 px-6 gap-2 shrink-0">
                                Join Waitlist
                                <ArrowRight className="size-4" />
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="flex  justify-center flex-wrap gap-4">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="size-4 text-primary" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center justify-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {avatars.map((avatar, i) => (
                                    <Avatar key={i} className="border-2 border-background size-10">
                                        <AvatarImage src={avatar.src} />
                                        <AvatarFallback>{avatar.fallback}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">2,500+</span> people already joined
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Dashboard Preview */}
                    <div className="relative">
                        <div className="relative rounded-2xl border bg-card shadow-2xl overflow-hidden">
                            <div className="p-4 border-b bg-muted/50">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-red-500" />
                                    <div className="size-3 rounded-full bg-yellow-500" />
                                    <div className="size-3 rounded-full bg-green-500" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <div className="h-4 bg-muted rounded w-1/3" />
                                    <div className="h-8 bg-muted rounded w-2/3" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 bg-muted rounded-lg" />
                                    ))}
                                </div>
                                <div className="h-32 bg-muted rounded-lg" />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 size-24 bg-primary/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 size-32 bg-secondary/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingHero02

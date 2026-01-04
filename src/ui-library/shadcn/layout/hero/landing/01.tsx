import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Star, Users, Zap } from 'lucide-react'

/**
 * LandingHero01 - Email Signup Hero
 *
 * Landing page hero with email capture.
 * Features: Trust badges, title with highlight, email input, avatars, social proof.
 * Built with Shadcn UI + Tailwind CSS.
 */

// Data: Trust Badges
const trustBadges = [
    { icon: Users, text: '10K+ Users' },
    { icon: Star, text: '4.9/5 Rating' },
    { icon: Zap, text: '99.9% Uptime' },
]

// Data: Avatars
const avatars = [
    { src: 'https://i.pravatar.cc/100?img=1', fallback: 'JD' },
    { src: 'https://i.pravatar.cc/100?img=2', fallback: 'AB' },
    { src: 'https://i.pravatar.cc/100?img=3', fallback: 'CD' },
    { src: 'https://i.pravatar.cc/100?img=4', fallback: 'EF' },
    { src: 'https://i.pravatar.cc/100?img=5', fallback: 'GH' },
]

const LandingHero01 = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {trustBadges.map((badge) => {
                            const IconComponent = badge.icon
                            return (
                                <Badge key={badge.text} variant="secondary" className="flex items-center gap-2 px-3 py-1.5">
                                    <IconComponent className="size-4" />
                                    {badge.text}
                                </Badge>
                            )
                        })}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Launch Your Next Project{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">In Minutes</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-0" />
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of developers who trust our platform. Get started with a single command and deploy instantly.
                    </p>

                    {/* Email Signup */}
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input type="email" placeholder="Enter your email" className="h-12 px-4" />
                        <Button size="lg" className="h-12 px-6 gap-2 shrink-0">
                            Get Early Access
                            <ArrowRight className="size-4" />
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col items-center gap-4 pt-8">
                        <div className="flex -space-x-3">
                            {avatars.map((avatar, index) => (
                                <Avatar key={index} className="border-2 border-background w-10 h-10">
                                    <AvatarImage src={avatar.src} />
                                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">2,000+ developers joined this week</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingHero01

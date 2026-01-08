import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Award, BarChart3, Building2, CheckCircle, Globe, Phone, Shield, Users } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════════════════
// PART: DATA
// Stats and features data arrays
// ═══════════════════════════════════════════════════════════════════════════════

const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Globe, value: '25+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: BarChart3, value: '98%', label: 'Client Satisfaction' },
]

const features = ['Industry-leading expertise', 'Tailored business solutions', '24/7 dedicated support', 'Proven track record']

// ═══════════════════════════════════════════════════════════════════════════════
// PART: FeatureList
// Checkmark list of key features
// ═══════════════════════════════════════════════════════════════════════════════

function FeatureList() {
    return (
        <ul className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="size-5 text-primary shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: HeroActions
// CTA buttons and trust badges
// ═══════════════════════════════════════════════════════════════════════════════

function HeroActions() {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-12 px-8 gap-2">
                    Schedule Consultation
                    <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 gap-2">
                    <Phone className="size-4" />
                    Contact Sales
                </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2">
                    <Shield className="size-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">ISO 27001 Certified</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                    <Award className="size-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Fortune 500 Partner</span>
                </div>
            </div>
        </>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: StatCard
// Individual stat card with icon and value
// ═══════════════════════════════════════════════════════════════════════════════

interface StatCardProps {
    stat: (typeof stats)[0]
}

function StatCard({ stat }: StatCardProps) {
    const IconComponent = stat.icon
    return (
        <Card className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300 p-2 py-0 gap-0">
            <CardContent className="py-4 px-2 text-center space-y-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="size-6 text-primary" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
        </Card>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: ContactCard
// Quick contact card with phone number
// ═══════════════════════════════════════════════════════════════════════════════

function ContactCard() {
    return (
        <Card className="border-primary/20 bg-primary/5 p-2 py-0 gap-0">
            <CardContent className="py-4 px-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="size-6 text-primary-foreground" />
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Need immediate assistance?</p>
                    <p className="font-semibold">Call us: +1 (800) 123-4567</p>
                </div>
            </CardContent>
        </Card>
    )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PART: MAIN BLOCK
// Main hero section with two-column layout
// ═══════════════════════════════════════════════════════════════════════════════

const BusinessHero01 = () => {
    return (
        <section className="relative py-10 md:py-28 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-muted/50 to-background" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2">
                            <Building2 className="size-5 text-primary" />
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">Enterprise Solutions</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                            Transform Your Business with <span className="text-primary">Strategic Excellence</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">Partner with industry leaders who understand your vision. We deliver measurable results through innovative strategies and proven methodologies.</p>

                        <FeatureList />
                        <HeroActions />
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <StatCard key={stat.label} stat={stat} />
                            ))}
                        </div>
                        <ContactCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessHero01

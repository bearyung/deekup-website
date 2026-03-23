"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Quote, UtensilsCrossed, Smartphone, Percent, Apple } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "500+", label: "Partner Restaurants" },
  { value: "50k+", label: "Happy Diners" },
  { value: "Up to 50%", label: "Off Peak Discounts" },
  { value: "4.9", label: "App Store Rating" },
];

const howItWorksSteps = [
  {
    icon: <UtensilsCrossed className="h-6 w-6 text-[#1A6B5C]" />,
    title: "Browse nearby offers",
    description: "Discover premium restaurants near you offering exclusive discounted time slots — tonight or this weekend.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-[#1A6B5C]" />,
    title: "Book your slot",
    description: "Choose your preferred time slot and secure your table in seconds. No credit card required until you arrive.",
  },
  {
    icon: <Percent className="h-6 w-6 text-[#1A6B5C]" />,
    title: "Dine and pay with Deekup",
    description: "Enjoy the full fine dining experience. When the bill arrives, tap your Deekup Card to pay at the discounted rate automatically.",
  },
];

const forDinersFeatures = [
  {
    title: "Real savings, real restaurants",
    description: "Save up to 50% at verified premium restaurants. Not food trucks or cafes — we're talking hatted restaurants, signature dining rooms, and culinary hotspots.",
  },
  {
    title: "The Deekup Card",
    description: "A sleek virtual card that automatically applies your discount when you tap to pay. No coupons. No awkward conversations with staff.",
  },
  {
    title: "Zero booking fees",
    description: "Download the app and book for free. You only pay for your meal — at the discounted price you booked.",
  },
];

const forRestaurantFeatures = [
  {
    title: "Fill off-peak tables",
    description: "Monday night? 5:30pm sitting? Convert empty tables into genuine revenue by offering Deekup slots at your chosen discount rate.",
  },
  {
    title: "You set the terms",
    description: "Choose which nights, which time windows, how many covers, and what discount to offer. Full control, always.",
  },
  {
    title: "Fast, reliable payouts",
    description: "Revenue lands in your account within 2 business days. No invoicing, no chasing payments — just clean weekly payouts.",
  },
];

const testimonials = [
  {
    quote: "I took my partner to a restaurant we'd been wanting to try for years. Saved $80 on a Tuesday night. The food and service were identical to what full-price guests received.",
    name: "Sarah M.",
    role: "Deekup member since 2024",
  },
  {
    quote: "We were losing money on Tuesday and Wednesday nights. Deekup turned those into consistent $3–4k nights with minimal effort on our part.",
    name: "Chef Marcus T.",
    role: "Head Chef, The Larder Melbourne",
  },
  {
    quote: "The app is incredibly simple. Found a restaurant, booked it, showed up. The Deekup Card just worked. I didn't have to explain anything to the waiter.",
    name: "James L.",
    role: "Deekup member since 2023",
  },
];

export default function HomeClient() {
  return (
    <div className="overflow-x-hidden pt-20">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[color:var(--color-primary)] blur-[120px] mix-blend-multiply opacity-40 animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[color:var(--color-accent)] blur-[120px] mix-blend-multiply opacity-30 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pb-16 md:py-16 min-h-[80vh] md:min-h-0 flex items-center mt-4">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-[color:var(--color-primary-dark)] shadow-sm uppercase border border-[color:var(--color-primary)]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
                </span>
                Now discovering in Melbourne & Sydney
              </div>
              <h1 className="text-4xl font-light leading-tight tracking-wide text-[color:var(--color-text)] md:text-5xl lg:text-6xl font-heading mb-4 lg:mb-6">
                Effortless dining.<br />
                <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent">Refreshingly priced.</span>
              </h1>
              <p className="max-w-xl text-base md:text-lg leading-relaxed text-[color:var(--color-text-muted)] lg:mt-2 font-medium">
                Deekup connects mindful food lovers with premium, health-focused restaurants offering exclusive off-peak tables. Relaxed vibes, zero compromise.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[color:var(--color-primary-dark)] hover:shadow-xl hover:shadow-[#1A6B5C]/30 hover:-translate-y-1"
                >
                  Download Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#1A2E35]/20 bg-white/50 px-8 py-4 text-lg font-semibold text-[#1A2E35] backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md hover:-translate-y-1"
                >
                  See how it works
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm font-medium text-[color:var(--color-text-muted)]">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-8 w-8 rounded-full border-2 border-[color:var(--background)] bg-[#1A6B5C]/20 flex items-center justify-center text-xs font-medium text-[#1A6B5C] shadow-sm z-[${5-i}]`}>
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-[color:var(--color-accent)] mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current drop-shadow-md" />)}
                  </div>
                  <span className="font-medium">Join 50k+ rule-breakers</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[9/18]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-accent)] to-[color:var(--color-cream)] rounded-[3rem] blur-2xl opacity-60 animate-pulse" />
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative h-full w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl bg-white"
                >
                  <Image 
                    src="/hero_app_ui.png" 
                    alt="Deekup App Interface" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  {/* Glossy Reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-30 pointer-events-none" />
                </motion.div>
                
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-12 top-24 glass rounded-2xl p-4 shadow-[0_0_30px_rgba(215,122,97,0.15)] flex items-center gap-3 border border-white/60 backdrop-blur-xl"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[color:var(--color-accent)] text-white shadow-lg shadow-[color:var(--color-accent)]/30">
                    <Percent className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-text-muted)]">Saved today</div>
                    <div className="text-xl font-medium font-heading text-[color:var(--color-text)]">$45.00</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="relative px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl shadow-[#1A6B5C]/5 border border-white/40">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-medium font-heading text-[color:var(--color-primary)] mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[color:var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works (Stepped Cards) */}
      <section className="px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="mb-10 md:mb-14 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-heading text-[color:var(--color-text)] mb-4">
              From discovery to dinner in minutes
            </h2>
            <p className="text-lg md:text-xl text-[color:var(--color-text-muted)]">
              Three simple steps to your next unforgettable meal. No hassle, just pure enjoyment.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3 relative">
            {/* Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-[3.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-[color:var(--color-primary)]/20 via-[color:var(--color-primary)]/40 to-[color:var(--color-primary)]/20 z-0" />

            {howItWorksSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15} className="relative z-10 group">
                <div className="h-full rounded-3xl bg-white p-6 md:p-8 shadow-lg shadow-[#1A6B5C]/5 border border-[#1A6B5C]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A6B5C]/30 hover:shadow-[#1A6B5C]/10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-[#F1ECDA] transition-colors group-hover:bg-[#1A6B5C] group-hover:text-white [&>svg]:group-hover:text-white">
                      {item.icon}
                    </div>
                    <div className="text-5xl md:text-6xl font-medium font-heading text-[#F1ECDA] transition-colors group-hover:text-[#1A6B5C]/10">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl md:text-2xl font-medium font-heading text-[color:var(--color-text)]">{item.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-[color:var(--color-text-muted)]">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* For Diners (Light Lifestyle Theme) */}
      <section className="px-6 py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <AnimatedSection direction="right" className="relative h-[380px] md:h-[480px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/diner_experience.png" 
                alt="Happy couple dining" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 md:p-8">
                <div className="glass rounded-xl p-3 w-full flex items-center gap-3 text-white">
                  <Star className="h-6 w-6 text-[#E8913A] fill-current" />
                  <div>
                    <div className="font-medium text-base md:text-lg">Unforgettable experiences</div>
                    <div className="text-xs md:text-sm opacity-80">Without the premium price tag.</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
              <div className="mb-3 inline-block rounded-full bg-[color:var(--color-accent)]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[color:var(--color-accent)] border border-[color:var(--color-accent)]/20">
                For Diners
              </div>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-medium font-heading text-[color:var(--color-text)] tracking-wide">
                The vibe you want. <br className="hidden md:block" /> The peace you seek.
              </h2>
              <p className="mb-8 text-base md:text-lg font-medium leading-relaxed text-[color:var(--color-text-muted)]">
                Unearth natural wines, organic bowls, and sun-drenched cafe spots at exclusive off-peak prices. An all-day retreat tailored for you.
              </p>
              
              <ul className="mb-10 space-y-4">
                {forDinersFeatures.map((f, i) => (
                  <motion.li 
                    key={f.title} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-accent)]/20 text-[color:var(--color-accent)] transition-all group-hover:bg-[color:var(--color-accent)] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,42,95,0.5)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[color:var(--color-text)] mb-2">{f.title}</h4>
                      <p className="text-base leading-relaxed text-[color:var(--color-text-muted)]">{f.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <Link
                href="/for-diners"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-8 py-4 text-lg font-medium text-white shadow-lg shadow-[color:var(--color-accent)]/40 transition-all hover:bg-[color:var(--color-accent-dark)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--color-accent)]/50"
              >
                Learn more for diners
                <ArrowRight className="h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* For Restaurants (Bright Earthy Theme) */}
      <section className="px-6 py-16 md:py-20 lg:py-24 bg-[color:var(--color-primary-dark)] text-white overflow-hidden relative">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <AnimatedSection direction="right" className="lg:order-2 relative h-[380px] md:h-[480px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-xl shadow-black/20">
              <Image 
                src="/restaurant_interior.png" 
                alt="Bright airy restaurant interior" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-primary-dark)]/80 via-transparent to-transparent" />
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="lg:order-1">
              <div className="mb-3 inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[color:var(--color-cream)]">
                For Restaurants
              </div>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-medium font-heading text-white tracking-wide">
                Fill the room. <br className="hidden md:block" /> Unearth new regulars.
              </h2>
              <p className="mb-8 text-base md:text-lg font-medium leading-relaxed text-white/80">
                You bring the wholesome vibe, we bring the community. Use Deekup to harmoniously turn quiet afternoons into bustling, lively gatherings.
              </p>
              
              <ul className="mb-10 space-y-4">
                {forRestaurantFeatures.map((f, i) => (
                  <motion.li 
                    key={f.title} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]/40 text-[color:var(--color-primary-light)] border border-[color:var(--color-primary)] transition-all group-hover:bg-[color:var(--color-primary)] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(26,107,92,0.8)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">{f.title}</h4>
                      <p className="text-base leading-relaxed text-white/60">{f.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <Link
                href="/for-restaurants"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-lg font-medium transition-all hover:bg-gray-200 hover:-translate-y-1 shadow-xl shadow-white/10"
              >
                Partner with Deekup
                <ArrowRight className="h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 md:py-20 lg:py-24 bg-[color:var(--color-cream-dark)]/30">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-heading text-[color:var(--color-text)] mb-3">
              Loved by diners and chefs alike
            </h2>
            <p className="text-lg md:text-xl text-[color:var(--color-text-muted)]">Real stories from our community.</p>
          </AnimatedSection>
          
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <AnimatedSection direction="up" delay={index * 0.15} key={t.name}>
                <div className="h-full rounded-3xl bg-white p-6 md:p-8 shadow-lg shadow-[#1A6B5C]/5 flex flex-col justify-between transition-transform hover:-translate-y-2 relative">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-[#F1ECDA] -z-0" />
                  <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-text)] mb-6 relative z-10 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 border-t border-[#F1ECDA] pt-6">
                    <div className="h-12 w-12 rounded-full bg-[color:var(--color-primary)]/10 flex items-center justify-center text-[color:var(--color-primary)] font-medium text-lg font-heading">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-base font-medium text-[color:var(--color-text)] font-heading">{t.name}</div>
                      <div className="text-sm font-medium text-[color:var(--color-text-muted)]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern App Download CTA */}
      <section className="relative px-6 py-16 md:py-24 lg:py-32 overflow-hidden bg-[color:var(--color-cream)]">
        <div className="absolute inset-0 opacity-40 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 lg:w-96 lg:h-96 bg-[color:var(--color-accent)] rounded-full blur-[100px] lg:blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 lg:w-96 lg:h-96 bg-[color:var(--color-primary)] rounded-full blur-[100px] lg:blur-[120px]" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <AnimatedSection direction="up" className="glass bg-white/60 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl border border-white backdrop-blur-2xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-wide text-[color:var(--color-text)] font-heading mb-4 lg:mb-6">
              Ready for your <br className="hidden md:block" /> effortless retreat?
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg lg:text-xl text-[color:var(--color-text-muted)] mb-8 lg:mb-12 leading-relaxed">
              Download Deekup free and discover sunny spots and unhurried dining near you with mindful pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/download"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-black px-6 md:px-8 py-4 text-white transition-all hover:bg-black/80 hover:-translate-y-1 shadow-xl shadow-black/20"
              >
                <Apple className="h-6 w-6 md:h-8 md:w-8 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-medium text-white/70 group-hover:text-white transition-colors">Download on the</div>
                  <div className="text-lg md:text-xl font-medium font-heading">App Store</div>
                </div>
              </Link>
              <Link
                href="/download"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-black px-6 md:px-8 py-4 text-white transition-all hover:bg-black/80 hover:-translate-y-1 shadow-xl shadow-black/20"
              >
                {/* Simplified Google Play icon placeholder representing Play Store */}
                <div className="relative h-6 w-6 md:h-8 md:w-8 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[15px] md:border-l-[18px] border-l-current border-b-[10px] md:border-b-[12px] border-b-transparent translate-x-1" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-medium text-white/70 group-hover:text-white transition-colors">GET IT ON</div>
                  <div className="text-lg md:text-xl font-medium font-heading">Google Play</div>
                </div>
              </Link>
            </div>
            <p className="mt-6 md:mt-8 text-xs md:text-sm font-medium text-[color:var(--color-text-muted)]/60">Available for iOS and Android. Free to download.</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

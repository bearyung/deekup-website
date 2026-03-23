import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Restaurants",
  description:
    "Partner with Deekup to fill off-peak tables with qualified diners. Earn real revenue from seats that would otherwise sit empty.",
};

const benefits = [
  {
    icon: "table",
    title: "Fill your quiet tables",
    description:
      "Monday to Thursday evenings. Early sittings. Shoulder season. Deekup turns your quietest times into consistent revenue by connecting you with food-motivated diners who want exactly what you offer.",
  },
  {
    icon: "control",
    title: "You control everything",
    description:
      "Set your own discount rate, choose specific nights and time windows, cap the number of covers per night. Deekup slots never conflict with your regular bookings — you decide how many to open.",
  },
  {
    icon: "loyal",
    title: "Grow a loyal customer base",
    description:
      "Deekup diners discover you during a quiet slot and come back at full price. We've seen partner restaurants convert over 30% of Deekup guests into returning customers within 90 days.",
  },
  {
    icon: "portal",
    title: "Simple merchant portal",
    description:
      "Create and manage offers in minutes from your laptop or tablet. See real-time booking counts, upcoming reservations, and payout summaries — all in one clean dashboard.",
  },
  {
    icon: "payout",
    title: "Fast, reliable payouts",
    description:
      "Revenue is settled within 2 business days after each dining session. No invoicing, no manual reconciliation — just a weekly payout summary and funds in your account.",
  },
  {
    icon: "cost",
    title: "Zero upfront cost",
    description:
      "There's no setup fee, no monthly subscription, and no contract lock-in. Deekup earns a small service commission only when a booking is completed and payment is made.",
  },
];

const howItWorksRestaurant = [
  {
    step: "01",
    title: "Apply to become a partner",
    description:
      "Fill in our restaurant partner application. Our team reviews your venue and responds within 3 business days. We work with established restaurants across all cuisines.",
  },
  {
    step: "02",
    title: "Set up your offers",
    description:
      "Log into the Deekup Merchant Portal and create your first offer. Choose the discount percentage, select time windows, and set the number of covers available.",
  },
  {
    step: "03",
    title: "Accept bookings",
    description:
      "Your offer goes live and Deekup members can discover and book it. You'll receive notifications as slots fill and can view all upcoming reservations from the portal.",
  },
  {
    step: "04",
    title: "Welcome your guests",
    description:
      "Deekup guests dine and pay with their Deekup Card. You receive the full discounted amount — no adjustments needed. Payment is processed automatically.",
  },
  {
    step: "05",
    title: "Get paid",
    description:
      "Revenue is settled and deposited to your nominated bank account within 2 business days. View full payout history and transaction breakdowns in your dashboard.",
  },
];

const testimonials = [
  {
    quote:
      "We opened 20 Deekup covers on Tuesday and Wednesday nights. They were consistently full within a day of listing. We now make more on those nights than we used to on Fridays.",
    name: "Chef Daniel R.",
    role: "Owner, Rosemary & Salt",
    city: "Melbourne",
  },
  {
    quote:
      "The Deekup portal is genuinely simple to use. I set up our first offer in about 10 minutes. Bookings started coming in the same afternoon.",
    name: "Jessica T.",
    role: "Restaurant Manager, The Oak Room",
    city: "Sydney",
  },
];

const faqs = [
  {
    q: "What percentage commission does Deekup charge?",
    a: "Deekup charges a service commission on each completed booking. See our pricing page for full details. There are no setup fees, no monthly fees, and no cancellation penalties.",
  },
  {
    q: "Can I control which nights and times to offer Deekup slots?",
    a: "Yes, completely. You choose the days, time windows, minimum and maximum covers, and the discount percentage for each offer. You can pause or close an offer at any time.",
  },
  {
    q: "What happens if a guest no-shows?",
    a: "Guests who no-show forfeit their booking guarantee. You won't be penalised for no-shows — Deekup manages the guest-side policy and we work to maintain a high show rate across the platform.",
  },
  {
    q: "Does Deekup affect our regular pricing or other bookings?",
    a: "No. Deekup slots are an addition to your normal booking flow, not a replacement. You set a separate cap for Deekup covers so they never crowd out full-price guests.",
  },
  {
    q: "How long does restaurant approval take?",
    a: "Our team reviews applications and responds within 3 business days. Once approved, you can create your first offer and go live the same day.",
  },
];

export default function ForRestaurantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A2E35] px-6 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">For Restaurants</div>
              <h1 className="text-5xl font-medium tracking-wide leading-tight">
                Empty tables are
                <br />
                <span className="text-[color:var(--color-primary)]">lost revenue.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Deekup helps premium restaurants fill off-peak covers with motivated, quality diners. Zero upfront cost. You set the terms. Payouts within 2 days.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#134f44]"
                >
                  See pricing
                </Link>
                <Link
                  href="#apply"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Apply to partner
                </Link>
              </div>
            </div>
            {/* Illustration placeholder */}
            <div className="flex items-center justify-center relative w-full max-w-[440px] mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="glow_white" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Abstract Background Arches */}
                <path d="M 50 400 A 150 150 0 0 1 350 400" fill="var(--color-primary)" opacity="0.15" />
                <path d="M 120 400 A 80 80 0 0 1 280 400" fill="var(--color-primary)" opacity="0.3" />

                {/* Pendant Lights */}
                <g transform="translate(140, 0)">
                  <line x1="0" y1="0" x2="0" y2="100" stroke="white" strokeWidth="2" opacity="0.4" />
                  <path d="M-20,100 L20,100 L10,130 L-10,130 Z" fill="var(--color-accent)" />
                  <path d="M-40,130 L40,130 L60,300 L-60,300 Z" fill="url(#glow)" />
                </g>
                <g transform="translate(260, 0)">
                  <line x1="0" y1="0" x2="0" y2="140" stroke="white" strokeWidth="2" opacity="0.4" />
                  <path d="M-20,140 L20,140 L10,170 L-10,170 Z" fill="var(--color-cream)" />
                  <path d="M-40,170 L40,170 L60,340 L-60,340 Z" fill="url(#glow_white)" />
                </g>

                {/* Abstract Table / Growth Chart */}
                <line x1="60" y1="340" x2="340" y2="340" stroke="var(--color-cream)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                
                <rect x="120" y="200" width="160" height="100" rx="16" fill="white" opacity="0.05" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
                
                {/* Growth Chart on Card */}
                <path d="M140,270 L170,250 L200,260 L240,220 L260,230" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="260" cy="230" r="6" fill="var(--color-cream)" />
                
                {/* UI Dots */}
                <circle cx="140" cy="220" r="4" fill="white" opacity="0.6" />
                <rect x="155" y="218" width="40" height="4" rx="2" fill="white" opacity="0.3" />
                
                {/* Floating "Seats" / Elements */}
                <rect x="80" y="240" width="60" height="30" rx="15" fill="var(--color-primary)" stroke="white" strokeOpacity="0.1" strokeWidth="2" />
                <circle cx="100" cy="255" r="6" fill="var(--color-cream)" />
                
                <rect x="250" y="160" width="70" height="30" rx="15" fill="var(--color-accent)" stroke="white" strokeOpacity="0.1" strokeWidth="2" />
                <circle cx="270" cy="175" r="6" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for restaurants */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">How it works for restaurants</h2>
            <p className="mt-4 text-lg text-[color:var(--color-text-muted)]">Go from application to first booking in under a week.</p>
          </div>
          <div className="relative">
            <div className="space-y-8">
              {howItWorksRestaurant.map((step, i) => (
                <div key={step.step} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-medium text-white">
                      {step.step}
                    </div>
                    {i < howItWorksRestaurant.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-[color:var(--color-primary)]/20" style={{ minHeight: 40 }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-medium text-[color:var(--color-text)]">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-[color:var(--color-text-muted)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[color:var(--color-cream)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">Built around how restaurants actually work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                  {b.icon === "table" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21V10" />
                      <path d="M18 21V10" />
                      <path d="M6 21V10" />
                      <rect x="3" y="10" width="18" height="4" />
                    </svg>
                  )}
                  {b.icon === "control" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="21" x2="4" y2="14" />
                      <line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" />
                      <line x1="20" y1="12" x2="20" y2="3" />
                      <line x1="2" y1="14" x2="6" y2="14" />
                      <line x1="10" y1="8" x2="14" y2="8" />
                      <line x1="18" y1="16" x2="22" y2="16" />
                    </svg>
                  )}
                  {b.icon === "loyal" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {b.icon === "portal" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="2" y1="20" x2="22" y2="20" />
                    </svg>
                  )}
                  {b.icon === "payout" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                      <path d="M12 14v4" />
                      <path d="M12 14a2 2 0 1 0-2-2" />
                    </svg>
                  )}
                  {b.icon === "cost" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </div>
                <h3 className="mb-3 text-lg font-medium text-[color:var(--color-text)]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--color-text-muted)]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchant portal preview */}
      <section className="bg-[#1A2E35] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">Merchant Portal</div>
              <h2 className="text-4xl font-medium tracking-wide">
                Your business. Your dashboard.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                The Deekup Merchant Portal gives you real-time visibility across all your offers, bookings, and earnings — on any device.
              </p>
              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" /> Create and manage offers in minutes</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" /> Real-time booking notifications</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" /> Weekly payout summaries</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" /> Slot availability controls</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" /> Guest booking history</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" /> Analytics: show rates, revenue, avg bill</li>
              </ul>
            </div>
            {/* Dashboard screenshot placeholder */}
            <div className="flex items-center justify-center">
              <svg width="512" height="320" viewBox="0 0 512 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <rect width="512" height="320" rx="16" fill="var(--color-primary-dark)" stroke="white" strokeOpacity="0.1"/>
                {/* Metric Tiles */}
                <rect x="24" y="24" width="140" height="80" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1"/>
                <text x="40" y="50" fill="white" fillOpacity="0.5" fontSize="12">Bookings</text>
                <text x="40" y="85" fill="white" fontSize="24" fontWeight="700">24</text>
                
                <rect x="186" y="24" width="140" height="80" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1"/>
                <text x="202" y="50" fill="white" fillOpacity="0.5" fontSize="12">Revenue</text>
                <text x="202" y="85" fill="white" fontSize="24" fontWeight="700">$3,840</text>
                
                {/* Bar Chart */}
                <rect x="24" y="128" width="302" height="168" rx="8" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.1"/>
                {[40, 60, 45, 80, 55, 70, 90].map((h, i) => (
                  <rect key={i} x={44 + i * 38} y={280 - h} width="24" height={h} rx="4" fill="var(--color-primary)" fillOpacity="0.8"/>
                ))}
                
                {/* Right side list */}
                <rect x="350" y="24" width="138" height="272" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1"/>
                <text x="366" y="48" fill="white" fillOpacity="0.5" fontSize="10">RECENT</text>
                {[68, 108, 148, 188].map((y, i) => (
                  <g key={i}>
                    <circle cx="376" cy={y} r="12" fill="white" fillOpacity="0.1"/>
                    <rect x="396" y={y-4} width="60" height="8" rx="2" fill="white" fillOpacity="0.2"/>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">What partner restaurants say</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-[color:var(--color-cream)] p-10">
                <p className="text-lg leading-relaxed text-[color:var(--color-text)]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-white font-medium text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[color:var(--color-text)]">{t.name}</div>
                    <div className="text-sm text-[color:var(--color-text-muted)]">{t.role} &middot; {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--color-cream)] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">Partner FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-8">
                <h3 className="font-medium text-[color:var(--color-text)]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-text-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="bg-[color:var(--color-primary)] px-6 py-20 text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-medium">Ready to fill more tables?</h2>
          <p className="mt-4 text-lg text-white/80">
            Apply to become a Deekup partner restaurant. Our team reviews every application within 3 business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:partners@deekup.com.au"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-cream)]"
            >
              Apply to partner &rarr;
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

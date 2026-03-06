import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="bg-[#1A2E35] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E8913A]">For Restaurants</div>
              <h1 className="text-5xl font-bold tracking-tight leading-tight">
                Empty tables are
                <br />
                <span className="text-[#1A6B5C]">lost revenue.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Deekup helps premium restaurants fill off-peak covers with motivated, quality diners. Zero upfront cost. You set the terms. Payouts within 2 days.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A6B5C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#134f44]"
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
            <div className="flex items-center justify-center">
              <svg width="320" height="380" viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <rect width="320" height="380" rx="40" fill="white" fillOpacity="0.05"/>
                {/* Tables and chairs */}
                <rect x="60" y="240" width="80" height="10" rx="2" fill="#E8913A" fillOpacity="0.8"/>
                <rect x="80" y="250" width="40" height="60" fill="#E8913A" fillOpacity="0.6"/>
                <rect x="50" y="260" width="20" height="50" rx="2" fill="#1A6B5C" fillOpacity="0.4"/>
                <rect x="150" y="260" width="20" height="50" rx="2" fill="#1A6B5C" fillOpacity="0.4"/>

                <rect x="180" y="200" width="80" height="10" rx="2" fill="#E8913A" fillOpacity="0.4"/>
                <rect x="200" y="210" width="40" height="60" fill="#E8913A" fillOpacity="0.2"/>
                
                {/* Warm lighting */}
                <circle cx="100" cy="100" r="40" fill="#E8913A" fillOpacity="0.1"/>
                <path d="M100 0V80" stroke="#E8913A" strokeOpacity="0.3" strokeWidth="2"/>
                <circle cx="220" cy="80" r="30" fill="#E8913A" fillOpacity="0.1"/>
                <path d="M220 0V65" stroke="#E8913A" strokeOpacity="0.3" strokeWidth="2"/>
                
                {/* Decorative lines */}
                <path d="M0 320C100 300 200 340 320 310" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for restaurants */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">How it works for restaurants</h2>
            <p className="mt-4 text-lg text-[#5a7a82]">Go from application to first booking in under a week.</p>
          </div>
          <div className="relative">
            <div className="space-y-8">
              {howItWorksRestaurant.map((step, i) => (
                <div key={step.step} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A6B5C] text-sm font-bold text-white">
                      {step.step}
                    </div>
                    {i < howItWorksRestaurant.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-[#1A6B5C]/20" style={{ minHeight: 40 }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-[#1A2E35]">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#5a7a82]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F1ECDA] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">Built around how restaurants actually work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A6B5C]/10 text-[#1A6B5C]">
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
                <h3 className="mb-3 text-lg font-bold text-[#1A2E35]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a7a82]">{b.description}</p>
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
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E8913A]">Merchant Portal</div>
              <h2 className="text-4xl font-bold tracking-tight">
                Your business. Your dashboard.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                The Deekup Merchant Portal gives you real-time visibility across all your offers, bookings, and earnings — on any device.
              </p>
              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#E8913A]" /> Create and manage offers in minutes</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#E8913A]" /> Real-time booking notifications</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#E8913A]" /> Weekly payout summaries</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#E8913A]" /> Slot availability controls</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#E8913A]" /> Guest booking history</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#E8913A]" /> Analytics: show rates, revenue, avg bill</li>
              </ul>
            </div>
            {/* Dashboard screenshot placeholder */}
            <div className="flex items-center justify-center">
              <svg width="512" height="320" viewBox="0 0 512 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <rect width="512" height="320" rx="16" fill="#1A2E35" stroke="white" strokeOpacity="0.1"/>
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
                  <rect key={i} x={44 + i * 38} y={280 - h} width="24" height={h} rx="4" fill="#1A6B5C" fillOpacity="0.8"/>
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
            <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">What partner restaurants say</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-[#F1ECDA] p-10">
                <p className="text-lg leading-relaxed text-[#1A2E35]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#1A6B5C] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A2E35]">{t.name}</div>
                    <div className="text-sm text-[#5a7a82]">{t.role} &middot; {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F1ECDA] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">Partner FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-8">
                <h3 className="font-bold text-[#1A2E35]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a7a82]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="bg-[#1A6B5C] px-6 py-20 text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold">Ready to fill more tables?</h2>
          <p className="mt-4 text-lg text-white/80">
            Apply to become a Deekup partner restaurant. Our team reviews every application within 3 business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:partners@deekup.com.au"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A6B5C] transition-colors hover:bg-[#F1ECDA]"
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

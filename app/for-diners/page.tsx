import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Diners",
  description:
    "Discover premium restaurant experiences at exclusive off-peak prices with the Deekup app. Save up to 50% at top restaurants near you.",
};

const benefits = [
  {
    icon: "discount",
    title: "Up to 50% off at premium restaurants",
    description:
      "These aren't chain restaurants or fast casual — Deekup partners with hatted restaurants, award-winning chefs, and signature dining rooms. The discount is real. The quality is unchanged.",
  },
  {
    icon: "card",
    title: "The Deekup Card",
    description:
      "Your Deekup Card is a virtual card stored in the app. When the bill comes, you tap your Deekup Card and the discount is applied automatically. No vouchers, no codes, no embarrassment.",
  },
  {
    icon: "booking",
    title: "Instant table confirmation",
    description:
      "Book your slot directly in the app. You'll receive an instant confirmation with all the details — restaurant address, your booking time, and the exact discount applied.",
  },
  {
    icon: "free",
    title: "Completely free to join",
    description:
      "There's no membership fee, no subscription, and no booking surcharge. Download the app, create your account, and start discovering restaurants immediately.",
  },
  {
    icon: "explore",
    title: "Curated, verified partners",
    description:
      "Every Deekup restaurant partner is reviewed and verified before listing. We maintain quality standards so you can book with confidence.",
  },
  {
    icon: "notify",
    title: "Get notified about new offers",
    description:
      "Enable notifications and be first to know when a new restaurant lists an offer near you. Popular slots fill fast.",
  },
];

const faqs = [
  {
    q: "Is the food or service different for Deekup bookings?",
    a: "No. When you dine through Deekup, you receive exactly the same menu, service, and experience as a full-price guest. Restaurants agree to this as part of our partner terms.",
  },
  {
    q: "What is the Deekup Card and how does it work?",
    a: "The Deekup Card is a virtual payment card loaded into your Deekup app. When you're ready to pay at the restaurant, you simply tap your phone or present the card number. The discount is calculated and deducted automatically at checkout.",
  },
  {
    q: "Are there any booking fees?",
    a: "None. Deekup is free to download and free to use. You only pay for your meal — at the discounted rate you booked.",
  },
  {
    q: "What happens if I need to cancel?",
    a: "You can cancel your booking through the app up to 2 hours before your reservation time. Late cancellations or no-shows may affect your booking privileges.",
  },
  {
    q: "How do I know the restaurant is good?",
    a: "Every restaurant on Deekup is hand-picked and quality-reviewed before listing. We focus on established restaurants with proven track records — not newcomers or lower-quality venues.",
  },
];

export default function ForDinersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[color:var(--color-cream)] px-6 pt-40 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">For Diners</div>
              <h1 className="text-5xl font-medium tracking-wide text-[color:var(--color-text)] leading-tight">
                Eat well.
                <br />
                <span className="text-[color:var(--color-primary)]">Spend less.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-text-muted)]">
                Stop saving great restaurants for special occasions. With Deekup, premium dining fits into your regular week — and your regular budget.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#134f44]"
                >
                  Download free
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-text)]/20 px-7 py-3.5 text-base font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[#1A2E35]/5"
                >
                  How it works
                </Link>
              </div>
            </div>
            {/* Illustration placeholder */}
            <div className="flex items-center justify-center relative w-full max-w-[400px] mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(26,107,92,0.15)]" xmlns="http://www.w3.org/2000/svg">
                {/* Abstract Background Blobs */}
                <circle cx="200" cy="200" r="160" fill="var(--color-primary)" opacity="0.08" />
                <circle cx="280" cy="120" r="80" fill="var(--color-accent)" opacity="0.12" />
                
                {/* Phone Frame */}
                <rect x="130" y="60" width="140" height="280" rx="24" fill="white" stroke="var(--color-text)" strokeWidth="6" />
                <rect x="140" y="70" width="120" height="260" rx="16" fill="var(--color-cream)" />
                
                {/* Phone Screen Content - Abstract App UI */}
                {/* Header */}
                <rect x="150" y="90" width="100" height="80" rx="12" fill="var(--color-primary)" />
                <circle cx="200" cy="130" r="20" fill="white" opacity="0.2" />
                
                {/* List Items */}
                <rect x="150" y="190" width="100" height="30" rx="8" fill="white" />
                <circle cx="165" cy="205" r="8" fill="var(--color-accent)" />
                <rect x="180" y="200" width="60" height="10" rx="4" fill="var(--color-text)" opacity="0.15" />

                <rect x="150" y="230" width="100" height="30" rx="8" fill="white" />
                <circle cx="165" cy="245" r="8" fill="var(--color-primary)" opacity="0.6"/>
                <rect x="180" y="240" width="45" height="10" rx="4" fill="var(--color-text)" opacity="0.15" />

                <rect x="150" y="270" width="100" height="30" rx="8" fill="white" />
                <circle cx="165" cy="285" r="8" fill="var(--color-accent)" opacity="0.6" />
                <rect x="180" y="280" width="55" height="10" rx="4" fill="var(--color-text)" opacity="0.15" />

                {/* Floating Elements (Plate, Fork, Wine) */}
                {/* Plate */}
                <g transform="translate(50, 200)">
                  <circle cx="0" cy="0" r="45" fill="white" stroke="var(--color-primary)" strokeWidth="4" />
                  <circle cx="0" cy="0" r="30" fill="transparent" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4" />
                </g>
                
                {/* Fork */}
                <g transform="translate(320, 160) rotate(15)">
                  <path d="M-10,-30 L-10,0 C-10,10 10,10 10,0 L10,-30" fill="transparent" stroke="var(--color-text)" strokeWidth="4" strokeLinecap="round" />
                  <line x1="0" y1="-30" x2="0" y2="5" stroke="var(--color-text)" strokeWidth="4" strokeLinecap="round" />
                  <line x1="0" y1="10" x2="0" y2="60" stroke="var(--color-text)" strokeWidth="6" strokeLinecap="round" />
                </g>

                {/* Abstract sparkles */}
                <path d="M80,80 L80,60 M70,70 L90,70" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
                <path d="M320,300 L320,280 M310,290 L330,290" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* The Deekup Card feature callout */}
      <section className="bg-[#1A2E35] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Card visual placeholder */}
            <div className="flex items-center justify-center">
              <svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <rect width="400" height="240" rx="20" fill="url(#card_grad)"/>
                <defs>
                  <linearGradient id="card_grad" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--color-primary)"/>
                    <stop offset="1" stopColor="var(--color-primary-dark)"/>
                  </linearGradient>
                </defs>
                <path d="M0 40C150 20 250 80 400 60V0H0V40Z" fill="white" fillOpacity="0.03"/>
                <path d="M0 200C100 220 300 160 400 180V240H0V200Z" fill="white" fillOpacity="0.03"/>
                <text x="32" y="44" fill="white" fontSize="20" fontWeight="700" style={{ letterSpacing: '0.05em' }}>deekup</text>
                <rect x="32" y="80" width="48" height="36" rx="6" fill="var(--color-accent)" fillOpacity="0.8"/>
                <path d="M32 92H80M32 104H80M48 80V116M64 80V116" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
                <text x="32" y="150" fill="white" fontSize="24" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>•••• •••• •••• 4829</text>
                <text x="32" y="195" fill="white" fillOpacity="0.5" fontSize="10" fontWeight="600">CARD HOLDER</text>
                <text x="32" y="210" fill="white" fontSize="14" fontWeight="600">SARAH MILLER</text>
                <text x="320" y="195" fill="white" fillOpacity="0.5" fontSize="10" fontWeight="600">EXPIRES</text>
                <text x="320" y="210" fill="white" fontSize="14" fontWeight="600">12/28</text>
              </svg>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">The Deekup Card</div>
              <h2 className="text-4xl font-medium tracking-wide">
                Your discount card. In your pocket.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                No vouchers. No awkward explanations at the table. The Deekup Card is a virtual payment card that handles everything automatically when you tap to pay.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  Contactless payment at participating restaurants
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  Discount applied instantly at checkout
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  Transaction history in the app
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  Secure and fraud-protected
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">
              Everything you need for a better dining life
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-[color:var(--color-cream)] p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                  {b.icon === "discount" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h.01M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    </svg>
                  )}
                  {b.icon === "card" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  )}
                  {b.icon === "booking" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <polyline points="9 16 11 18 15 14" />
                    </svg>
                  )}
                  {b.icon === "free" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  )}
                  {b.icon === "explore" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                  {b.icon === "notify" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
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

      {/* FAQ */}
      <section className="bg-[color:var(--color-cream)] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">
              Common questions
            </h2>
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

      {/* CTA */}
      <section className="bg-[color:var(--color-primary)] px-6 py-20 text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-medium">Start dining smarter today</h2>
          <p className="mt-4 text-lg text-white/80">Download Deekup free and book your first discounted table tonight.</p>
          <div className="mt-8">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-cream)]"
            >
              Download the app &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

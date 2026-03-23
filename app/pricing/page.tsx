import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Deekup is free for diners. Restaurants pay a small service commission per completed booking — no setup fees, no monthly subscription.",
};

const dinerPricing = [
  "Free to download",
  "Free to create an account",
  "Free to browse all restaurant offers",
  "Free to book a table",
  "No booking fees or surcharges",
  "You only pay for your meal — at the discounted rate",
];

const restaurantPricingFeatures = [
  "No setup fee",
  "No monthly subscription",
  "No contract or minimum term",
  "Create unlimited offers",
  "Full merchant portal access",
  "Analytics and payout reports",
  "Dedicated onboarding support",
  "Payout within 2 business days",
];

const comparisonRows = [
  { feature: "Setup fee", deekup: true, others: false, deekupText: "None", othersText: "Up to $500" },
  { feature: "Monthly fee", deekup: true, others: false, deekupText: "None", othersText: "$50–$200/month" },
  { feature: "Per-booking fee", deekup: true, others: false, deekupText: "Small % commission", othersText: "Flat fee + % commission" },
  { feature: "Payout speed", deekup: true, others: false, deekupText: "2 business days", othersText: "7–14 days" },
  { feature: "Contract lock-in", deekup: true, others: false, deekupText: "None", othersText: "12-month minimum" },
  { feature: "Customer acquisition", deekup: true, others: false, deekupText: "Included", othersText: "Not included" },
];

const faqs = [
  {
    q: "How exactly is the Deekup commission calculated?",
    a: "Deekup charges a percentage of the transaction value processed through the platform. The commission is calculated on the discounted price the guest pays, not the full menu price. Contact us for the current rate — it varies slightly by market.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. There are no setup fees, monthly fees, per-listing fees, or cancellation fees. You pay commission only when a booking completes and the guest pays.",
  },
  {
    q: "What if a guest cancels or no-shows?",
    a: "If a guest cancels before the restaurant's cut-off time, no commission is charged. For no-shows, Deekup's guest policy applies — contact our support team for specific scenarios.",
  },
  {
    q: "Can I trial Deekup before committing?",
    a: "Yes. There's no contract, so you can list your first offer, run it for a few weeks, and decide based on real results. Many partners start with 10–15 covers per week to test the demand.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--color-cream)] px-6 pt-40 pb-20 text-center">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20V50M30 20C30 15 35 10 35 10M30 20C30 15 25 10 25 10M30 50V90M30 50H25M30 50H35" stroke="#1A2E35" strokeWidth="1" strokeLinecap="round"/>
            <path d="M70 10V90M70 10C70 10 60 15 60 30C60 45 70 50 70 50" stroke="#1A2E35" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-5xl font-medium tracking-wide text-[color:var(--color-text)]">Simple, honest pricing</h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-text-muted)]">
            Free for diners. A small commission for restaurants — only when a booking completes.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Diner — free */}
            <div className="rounded-3xl bg-[color:var(--color-cream)] p-10">
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">For Diners</div>
              <h2 className="text-3xl font-medium text-[color:var(--color-text)]">Free</h2>
              <p className="mt-2 text-[color:var(--color-text-muted)]">Always free. No strings attached.</p>
              <div className="my-8 border-t border-[color:var(--color-text)]/10" />
              <ul className="space-y-4">
                {dinerPricing.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[color:var(--color-text)]">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/download"
                  className="block rounded-full bg-[color:var(--color-primary)] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#134f44]"
                >
                  Download free
                </Link>
              </div>
            </div>

            {/* Restaurant — commission */}
            <div className="relative rounded-3xl bg-[#1A2E35] p-10 text-white shadow-2xl ring-1 ring-white/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-[color:var(--color-accent)] px-4 py-1 text-xs font-medium uppercase tracking-wider text-white shadow-lg whitespace-nowrap">
                  Most Popular for Restaurants
                </span>
              </div>
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">For Restaurants</div>
              <h2 className="text-3xl font-medium text-white">Commission only</h2>
              <p className="mt-2 text-white/60">Pay nothing until a booking completes.</p>
              <div className="mt-6 rounded-2xl bg-white/5 p-6 border border-white/10">
                <div className="text-sm text-white/60">Service commission</div>
                <div className="mt-1 text-4xl font-medium text-[color:var(--color-accent)]">Contact us</div>
                <div className="mt-1 text-sm text-white/50">per completed booking &middot; varies by market</div>
              </div>
              <div className="my-8 border-t border-white/10" />
              <ul className="space-y-4">
                {restaurantPricingFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="mailto:partners@deekup.com.au"
                  className="block rounded-full bg-[color:var(--color-primary)] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#134f44]"
                >
                  Apply to partner &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[color:var(--color-cream)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-wide text-[color:var(--color-text)]">How we compare</h2>
            <p className="mt-3 text-[color:var(--color-text-muted)]">Deekup vs. typical restaurant marketing and booking platforms</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[color:var(--color-text)]/10 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-text)]/10 bg-[color:var(--color-cream)]">
                  <th className="px-6 py-4 text-left font-semibold text-[color:var(--color-text)]">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-[color:var(--color-primary)]">Deekup</th>
                  <th className="px-6 py-4 text-center font-semibold text-[color:var(--color-text-muted)]">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A2E35]/5">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-[color:var(--color-cream)]/50 transition-colors">
                    <td className="px-6 py-4 text-[color:var(--color-text)] font-medium">{row.feature}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6B5C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[10px] font-medium text-[color:var(--color-primary)] uppercase">{row.deekupText}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span className="text-[10px] font-medium text-[color:var(--color-text-muted)] uppercase">{row.othersText}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-wide text-[color:var(--color-text)]">Pricing FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-[#F1ECDA] bg-[color:var(--color-cream)] p-8">
                <h3 className="font-medium text-[color:var(--color-text)]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-text-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--color-primary)] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-medium">No upfront cost. No risk.</h2>
          <p className="mt-4 text-lg text-white/80">
            Start with a single offer and scale from there. Talk to our team to get started.
          </p>
          <div className="mt-8">
            <a
              href="mailto:partners@deekup.com.au"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--color-cream)]"
            >
              Get in touch &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

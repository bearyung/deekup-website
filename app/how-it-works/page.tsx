import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Deekup works for diners and restaurants — from discovering offers to booking tables and getting paid.",
};

const dinerSteps = [
  {
    step: "01",
    title: "Download the Deekup app",
    description:
      "Available free on iOS and Android. Sign up with your email — no credit card required at this stage.",
  },
  {
    step: "02",
    title: "Enable location access",
    description:
      "Deekup uses your location to show you offers at restaurants nearby. You can also browse by suburb or city if you prefer.",
  },
  {
    step: "03",
    title: "Discover today's offers",
    description:
      "The Explore tab shows you premium restaurants near you that have active Deekup slots. Each listing shows the restaurant name, cuisine, discount percentage, available time slots, and remaining covers.",
  },
  {
    step: "04",
    title: "Book your slot",
    description:
      "Tap a restaurant to see the full offer details. Select your preferred time slot and confirm your booking. You'll receive an instant in-app confirmation.",
  },
  {
    step: "05",
    title: "Dine as usual",
    description:
      "Arrive at your booking time and enjoy the complete dining experience. Order from the regular menu. Receive the same service as any other guest.",
  },
  {
    step: "06",
    title: "Pay with your Deekup Card",
    description:
      "When the bill arrives, present your Deekup Card at the restaurant POS terminal. Your discount is applied automatically — no vouchers, no codes, no awkward conversations with staff.",
  },
];

const restaurantSteps = [
  {
    step: "01",
    title: "Apply to become a partner",
    description:
      "Submit your restaurant details via our partner application form. Our team reviews your venue and responds within 3 business days.",
  },
  {
    step: "02",
    title: "Connect your Stripe account",
    description:
      "Deekup uses Stripe to process payments securely. You'll connect your existing Stripe account or create a new one — it takes about 5 minutes.",
  },
  {
    step: "03",
    title: "Create your first offer",
    description:
      "Log into the Merchant Portal and set up an offer. Specify: which nights, what time windows, how many covers are available, and what discount percentage you want to offer.",
  },
  {
    step: "04",
    title: "Go live",
    description:
      "Publish your offer and it appears immediately in the Deekup app for nearby diners. You can pause, edit, or close it at any time.",
  },
  {
    step: "05",
    title: "Manage reservations",
    description:
      "View all upcoming Deekup bookings in your portal dashboard. You'll receive push notifications as slots are booked so you can prepare accordingly.",
  },
  {
    step: "06",
    title: "Get paid",
    description:
      "After each dining session, payment is settled and deposited to your bank account within 2 business days. The Deekup service fee is deducted automatically — you receive the net amount.",
  },
];

const keyTerms = [
  {
    term: "Off-peak slot",
    definition:
      "A specific date and time window during which a restaurant offers a limited number of discounted covers to Deekup members. Restaurants define these slots themselves.",
  },
  {
    term: "Deekup Card",
    definition:
      "A virtual payment card stored in the Deekup app. Used to pay at partner restaurants — discount is applied automatically at checkout.",
  },
  {
    term: "Cover",
    definition:
      "A single seat or place at the table. A booking for 2 uses 2 covers. Restaurants set a maximum cover count per slot to control volume.",
  },
  {
    term: "Show Rate",
    definition:
      "The percentage of bookings where guests actually arrive and dine. Deekup tracks this per user to maintain platform quality.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[color:var(--color-cream)] px-6 pt-40 pb-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-medium tracking-wide text-[color:var(--color-text)]">How Deekup works</h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-text-muted)]">
            Deekup is a two-sided platform connecting premium restaurants with motivated diners. Here&apos;s exactly how it works — from both sides.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#diners" className="rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9762a]">
              For diners
            </a>
            <a href="#restaurants" className="rounded-full border border-[color:var(--color-text)]/20 px-6 py-3 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:bg-[#1A2E35]/5">
              For restaurants
            </a>
          </div>
        </div>
      </section>

      {/* For diners */}
      <section id="diners" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">For Diners</div>
            <h2 className="text-4xl font-medium tracking-wide text-[color:var(--color-text)]">From app to table in minutes</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dinerSteps.map((step) => (
              <div key={step.step} className="relative rounded-2xl bg-[color:var(--color-cream)] p-8">
                <div className="mb-4 text-[color:var(--color-primary)]">
                  {step.step === "01" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  )}
                  {step.step === "02" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  )}
                  {step.step === "03" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  )}
                  {step.step === "04" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  )}
                  {step.step === "05" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1v7c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V11l-2-2V2h10v6h1z"/><path d="M3 2v7c0 1.1.9 2 2 2h4V2"/><line x1="7" y1="2" x2="7" y2="5"/><line x1="3" y1="2" x2="3" y2="5"/><line x1="11" y1="2" x2="11" y2="5"/></svg>
                  )}
                  {step.step === "06" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M7 15h.01"/></svg>
                  )}
                </div>
                <div className="mb-4 text-4xl font-medium text-[color:var(--color-primary)]/20">{step.step}</div>
                <h3 className="mb-3 text-lg font-medium text-[color:var(--color-text)]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--color-text-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/download" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#134f44]">
              Download the app &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* For restaurants */}
      <section id="restaurants" className="bg-[#1A2E35] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">For Restaurants</div>
            <h2 className="text-4xl font-medium tracking-wide">From application to first payout</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {restaurantSteps.map((step) => (
              <div key={step.step} className="relative rounded-2xl bg-white/5 p-8 border border-white/10">
                <div className="mb-4 text-[color:var(--color-primary)]">
                  {step.step === "01" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  )}
                  {step.step === "02" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M12 14v4"/><path d="M12 14a2 2 0 1 0-2-2"/></svg>
                  )}
                  {step.step === "03" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  )}
                  {step.step === "04" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71z"/><path d="M12 15l3.5 3.5L22 12l-3.5-3.5L12 15z"/><path d="M9 15l3-3 4.5 4.5-3 3L9 15z"/><path d="M15 9l-3-3 4.5-4.5 3 3L15 9z"/></svg>
                  )}
                  {step.step === "05" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                  )}
                  {step.step === "06" && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="9" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/><circle cx="12" cy="14" r="2"/></svg>
                  )}
                </div>
                <div className="mb-4 text-4xl font-medium text-white/20">{step.step}</div>
                <h3 className="mb-3 text-lg font-medium text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/for-restaurants" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#134f44]">
              Apply to partner &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Key terms */}
      <section className="bg-[color:var(--color-cream)] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-wide text-[color:var(--color-text)]">Key terms explained</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {keyTerms.map((item) => (
              <div key={item.term} className="rounded-2xl bg-white p-6">
                <div className="mb-2 font-medium text-[color:var(--color-primary)]">{item.term}</div>
                <p className="text-sm leading-relaxed text-[color:var(--color-text-muted)]">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA split */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[color:var(--color-primary)] p-10 text-white text-center flex flex-col items-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6 opacity-80"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <h3 className="text-2xl font-medium">Ready to dine?</h3>
            <p className="mt-3 text-white/80">Download Deekup free and book your first table tonight.</p>
            <div className="mt-6">
              <Link href="/download" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] hover:bg-[color:var(--color-cream)]">
                Get the app
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-[#1A2E35] p-10 text-white text-center flex flex-col items-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6 opacity-80"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3z"/><path d="M19 21v-7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7"/></svg>
            <h3 className="text-2xl font-medium">Ready to partner?</h3>
            <p className="mt-3 text-white/80">Apply to list your restaurant on Deekup today.</p>
            <div className="mt-6">
              <Link href="/for-restaurants" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[#134f44]">
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

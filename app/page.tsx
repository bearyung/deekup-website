import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deekup — Fine Dining. Your Price.",
};

const stats = [
  { value: "500+", label: "Partner Restaurants" },
  { value: "50k+", label: "Happy Diners" },
  { value: "Up to 50%", label: "Off Peak Discounts" },
  { value: "4.9", label: "App Store Rating" },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Browse nearby offers",
    description:
      "Open the Deekup app and discover premium restaurants near you offering exclusive discounted time slots — tonight or this weekend.",
  },
  {
    step: "02",
    title: "Book your slot",
    description:
      "Choose your preferred time slot and secure your table in seconds. No credit card required until you arrive.",
  },
  {
    step: "03",
    title: "Dine and pay with Deekup",
    description:
      "Enjoy the full fine dining experience. When the bill arrives, tap your Deekup Card to pay at the discounted rate automatically.",
  },
];

const forDinersFeatures = [
  {
    title: "Real savings, real restaurants",
    description:
      "Save up to 50% at verified premium restaurants. Not food trucks or cafes — we're talking hatted restaurants, signature dining rooms, and culinary hotspots.",
  },
  {
    title: "The Deekup Card",
    description:
      "A sleek virtual card that automatically applies your discount when you tap to pay. No coupons. No awkward conversations with staff.",
  },
  {
    title: "Zero booking fees",
    description:
      "Download the app and book for free. You only pay for your meal — at the discounted price you booked.",
  },
];

const forRestaurantFeatures = [
  {
    title: "Fill off-peak tables",
    description:
      "Monday night? 5:30pm sitting? Convert empty tables into genuine revenue by offering Deekup slots at your chosen discount rate.",
  },
  {
    title: "You set the terms",
    description:
      "Choose which nights, which time windows, how many covers, and what discount to offer. Full control, always.",
  },
  {
    title: "Fast, reliable payouts",
    description:
      "Revenue lands in your account within 2 business days. No invoicing, no chasing payments — just clean weekly payouts.",
  },
];

const testimonials = [
  {
    quote:
      "I took my partner to a restaurant we'd been wanting to try for years. Saved $80 on a Tuesday night. The food and service were identical to what full-price guests received.",
    name: "Sarah M.",
    role: "Deekup member since 2024",
  },
  {
    quote:
      "We were losing money on Tuesday and Wednesday nights. Deekup turned those into consistent $3–4k nights with minimal effort on our part.",
    name: "Chef Marcus T.",
    role: "Head Chef, The Larder Melbourne",
  },
  {
    quote:
      "The app is incredibly simple. Found a restaurant, booked it, showed up. The Deekup Card just worked. I didn't have to explain anything to the waiter.",
    name: "James L.",
    role: "Deekup member since 2023",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F1ECDA] px-6 pb-24 pt-20 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1A6B5C]/10 px-4 py-1.5 text-sm font-medium text-[#1A6B5C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1A6B5C]" />
                Now available in Melbourne & Sydney
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#1A2E35] md:text-6xl lg:text-7xl">
                Fine dining.
                <br />
                <span className="text-[#1A6B5C]">Your price.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5a7a82]">
                Deekup connects food lovers with premium restaurants offering exclusive discounted slots during off-peak hours. The full experience. A fraction of the price.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A6B5C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#134f44]"
                >
                  Download free
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A2E35]/20 px-7 py-3.5 text-base font-semibold text-[#1A2E35] transition-colors hover:bg-[#1A2E35]/5"
                >
                  See how it works
                </Link>
              </div>
              <p className="mt-4 text-sm text-[#5a7a82]">Free to download. No subscription. No hidden fees.</p>
            </div>

            {/* Hero illustration placeholder — Gemini will create the SVG */}
            <div className="relative flex items-center justify-center">
              <div className="h-96 w-80 rounded-3xl bg-[#1A6B5C]/10 flex items-center justify-center">
                <p className="text-sm text-[#1A6B5C] font-medium">App mockup / illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1A6B5C] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (brief) */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">
              From discovery to dinner in minutes
            </h2>
            <p className="mt-4 text-lg text-[#5a7a82]">Three steps to your next unforgettable meal.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-[#F1ECDA] p-8">
                <div className="mb-4 text-5xl font-bold text-[#1A6B5C]/20">{item.step}</div>
                <h3 className="mb-3 text-xl font-bold text-[#1A2E35]">{item.title}</h3>
                <p className="text-[#5a7a82] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A6B5C] hover:text-[#134f44]"
            >
              See the full breakdown &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* For diners */}
      <section className="bg-[#F1ECDA] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E8913A]">For Diners</div>
              <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">
                Eat somewhere incredible. Every week.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5a7a82]">
                Stop saving special restaurants for birthdays. With Deekup, a Wednesday dinner can feel like an occasion — without the Friday night price tag.
              </p>
              <ul className="mt-8 space-y-6">
                {forDinersFeatures.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A6B5C]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A2E35]">{f.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-[#5a7a82]">{f.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/for-diners"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E8913A] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9762a]"
                >
                  Learn more for diners &rarr;
                </Link>
              </div>
            </div>
            {/* Illustration placeholder */}
            <div className="flex items-center justify-center">
              <div className="h-80 w-72 rounded-3xl bg-[#1A6B5C]/10 flex items-center justify-center">
                <p className="text-sm text-[#1A6B5C] font-medium">Diner illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For restaurants */}
      <section className="bg-[#1A2E35] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Illustration placeholder */}
            <div className="flex items-center justify-center">
              <div className="h-80 w-72 rounded-3xl bg-white/10 flex items-center justify-center">
                <p className="text-sm text-white/50 font-medium">Restaurant illustration</p>
              </div>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E8913A]">For Restaurants</div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Turn empty tables into real revenue.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Off-peak hours don&apos;t have to mean empty tables. Offer a limited number of discounted slots to Deekup members — fill your room, cover your overheads, grow your audience.
              </p>
              <ul className="mt-8 space-y-6">
                {forRestaurantFeatures.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A6B5C]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{f.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-white/60">{f.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/for-restaurants"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A6B5C] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#134f44]"
                >
                  Partner with Deekup &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A2E35]">Loved by diners and chefs alike</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#F1ECDA] bg-[#F1ECDA] p-8">
                <p className="text-[#1A2E35] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#1A6B5C]/20 flex items-center justify-center text-[#1A6B5C] font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A2E35]">{t.name}</div>
                    <div className="text-xs text-[#5a7a82]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-[#1A6B5C] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ready for your next great meal?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Download Deekup free and discover premium restaurants near you with exclusive off-peak pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              {/* App Store badge placeholder */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M14.5 10.5c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.7-1.5.1-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.2.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.7zM12.2 4c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.7-.9 1.6-.8 2.5 1 .1 2-.4 2.5-1.1z"/></svg>
              <span>
                <div className="text-[10px] text-white/70">Download on the</div>
                <div className="text-base">App Store</div>
              </span>
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M2.1 1.1L11 10 2.1 18.9A1 1 0 012 18V2c0-.4.1-.7.1-.9zm1.8-.3l10.4 6-2.4 2.4-8-8.4zm0 18.4l8-8.4 2.4 2.4-10.4 6zm11.3-9.2L17.4 11a1 1 0 010 1.8l-2.2 1L13 11.7l2.2-2.2 2.2 1.4-2.2-1.4z"/></svg>
              <span>
                <div className="text-[10px] text-white/70">Get it on</div>
                <div className="text-base">Google Play</div>
              </span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">Available for iOS and Android. Free to download.</p>
        </div>
      </section>
    </>
  );
}

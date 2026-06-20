"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// PRICING DATA SCHEMAS
// ==========================================
const bundledPackages = [
  {
    tier: "Starter",
    name: "Launch Pack",
    tag: "For new businesses ready to show up properly.",
    priceNgn: "₦210,000",
    priceUsd: "$350",
    period: "One-time project",
    features: [
      "Brand Identity (logo + colours + fonts + guidelines)",
      "Social media profile setup and management (1 platform)",
      "7 custom flyers",
      "2 rounds of revisions",
    ],
    theme: "bg-[#161310] border-[rgba(212,160,48,0.14)] text-[#FFF8F0]",
    btnStyle: "bg-[#D4A030] text-[#090806] hover:bg-[#F0BC40]",
    popular: false,
  },
  {
    tier: "Growth",
    name: "Scale Pack",
    tag: "For businesses ready to grow with intention.",
    priceNgn: "₦650,000",
    priceUsd: "$950",
    period: "One-time + 1 month support",
    features: [
      "Full Brand Identity System",
      "5-page custom website",
      "Landing page",
      "1 month social media management",
      "Brand video shoot",
      "3 ad creatives",
      "Full brand guidelines",
      "3 rounds of revisions",
    ],
    theme: "bg-[#D4A030] border-[#D4A030] text-[#090806]",
    btnStyle: "bg-[#090806] text-[#D4A030] hover:bg-[#1A1208]",
    popular: true,
  },
  {
    tier: "Premium",
    name: "Authority Pack",
    tag: "For established brands that want to dominate.",
    priceNgn: "₦1,200,000",
    priceUsd: "$1,800",
    period: "Project + 3 months retainer",
    features: [
      "Complete Brand Identity System",
      "Full Brand Strategy",
      "3 months social media management",
      "Professional video production",
      "Paid Ads setup + 1 month management",
      "CAC Registration included",
      "Unlimited revisions",
    ],
    theme: "bg-[#F06428] border-[#F06428] text-white",
    btnStyle: "bg-white text-[#F06428] hover:bg-[#FFF8F0]",
    popular: false,
  },
];

const alacarteServices = [
  {
    category: "Branding",
    name: "Logo & Visual Identity",
    desc: "Core guidelines, primary marks, custom color profiles.",
    ngn: "₦80,000+",
    usd: "$150+",
  },
  {
    category: "Branding",
    name: "Full Identity System",
    desc: "Complete assets, dynamic stationary, source files.",
    ngn: "₦180,000+",
    usd: "$300+",
  },
  {
    category: "Social Media",
    name: "Monthly Content Management",
    desc: "Graphics creation, copy grids, 3 automated platforms.",
    ngn: "₦150,000/mo",
    usd: "$250/mo",
  },
  {
    category: "Web Design",
    name: "High-Conversion Landing Page",
    desc: "Framer/Next.js single architecture layout framework.",
    ngn: "₦120,000+",
    usd: "$200+",
  },
  {
    category: "Web Design",
    name: "Premium 5-Page Website",
    desc: "Dynamic architecture, semantic database layer, full core SEO setup.",
    ngn: "₦350,000+",
    usd: "$600+",
  },
  {
    category: "Paid Ads",
    name: "Campaign Setup & Strategy",
    desc: "Pixel architecture tracking setup, lookalike audience deployment.",
    ngn: "₦90,000",
    usd: "$150",
  },
  {
    category: "Media Production",
    name: "Professional Brand Video Shoot",
    desc: "4K captured motion asset files, spatial lighting, editing workflow.",
    ngn: "₦250,000+",
    usd: "$450+",
  },
  {
    category: "Corporate",
    name: "CAC Legal Registration",
    desc: "Business name validation, certificate delivery, filling protocol.",
    ngn: "₦40,000",
    usd: "$75",
  },
  {
    category: "Support",
    name: "Premium Account Recovery",
    desc: "Professional platform diagnostics, continuous structural recovery.",
    ngn: "Case Basis",
    usd: "Case Basis",
  },
];

export default function PricingComponent() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [activeTab, setActiveTab] = useState<"packages" | "alacarte">(
    "packages",
  );

  return (
    <section
      id="pricing"
      className="bg-[#090806] text-[#FFF8F0] py-24 px-6 md:px-12 relative min-h-screen overflow-hidden select-none antialiased"
    >
      {/* PERSISTENT LIGHT FLUID GLOW BACKGROUNDS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,160,48,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(240,100,40,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* HEADER TRACK LAYER */}
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-[9px] tracking-[5px] uppercase text-[#D4A030] font-bold mb-3.5 flex items-center justify-center md:justify-start gap-3">
              <span className="w-6 h-[1px] bg-[#D4A030] hidden md:block" />{" "}
              Rates & Packaging
            </div>
            <h2 className="font-syne text-[clamp(32px,4.5vw,56px)] font-extrabold tracking-tight leading-[1.05] text-white">
              Transparent. Fair.
              <br />
              <span className="text-[#D4A030]">Built to Move.</span>
            </h2>
            <p className="text-sm font-light text-[rgba(255,248,240,0.55)] max-w-[460px] leading-relaxed mt-4">
              Choose an all-inclusive transformation bundle or build a custom
              solution completely aligned with your operational phase.
            </p>
          </div>

          {/* DUAL CORE NAVIGATION TABS AND CONTROLLERS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 self-center md:self-end">
            {/* VIEW SEGMENT SELECTOR */}
            <div className="flex bg-[#161310] border border-[rgba(212,160,48,0.14)] p-1 rounded-sm">
              <button
                onClick={() => setActiveTab("packages")}
                className={`px-5 py-2 text-[9px] tracking-[2px] uppercase font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "packages"
                    ? "bg-[#D4A030] text-[#090806]"
                    : "text-[rgba(255,248,240,0.4)] hover:text-white"
                }`}
              >
                Bundled Packages
              </button>
              <button
                onClick={() => setActiveTab("alacarte")}
                className={`px-5 py-2 text-[9px] tracking-[2px] uppercase font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === "alacarte"
                    ? "bg-[#D4A030] text-[#090806]"
                    : "text-[rgba(255,248,240,0.4)] hover:text-white"
                }`}
              >
                A La Carte
              </button>
            </div>

            {/* FINANCIAL CURRENCY CONTROLLER SWITCH */}
            <div className="flex bg-[#161310] border border-[rgba(212,160,48,0.14)] p-1 rounded-sm">
              <button
                onClick={() => setCurrency("NGN")}
                className={`px-4 py-2 text-[9px] tracking-[1.5px] uppercase font-bold transition-all duration-200 cursor-pointer ${
                  currency === "NGN"
                    ? "bg-[#F06428] text-white"
                    : "text-[rgba(255,248,240,0.3)] hover:text-white"
                }`}
              >
                NGN (₦)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-4 py-2 text-[9px] tracking-[1.5px] uppercase font-bold transition-all duration-200 cursor-pointer ${
                  currency === "USD"
                    ? "bg-[#F06428] text-white"
                    : "text-[rgba(255,248,240,0.3)] hover:text-white"
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* COMPONENT INTERACTION CONTAINER VIEWPORTS */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* VIEW A: THREE-TIER BUNDLED PACKAGES MATRIX */}
            {activeTab === "packages" && (
              <motion.div
                key="packages-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-1 items-stretch"
                id="pkgGrid"
              >
                {bundledPackages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`p-9 md:p-11 flex flex-col relative transition-transform duration-300 hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group ${pkg.theme}`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-black text-[#F06428] text-[7px] tracking-[3px] uppercase px-4 py-1.5 font-extrabold border border-[#F06428]/20 rounded-full">
                        Most Popular
                      </span>
                    )}

                    <span
                      className={`text-[8px] tracking-[4px] uppercase font-bold mb-3 ${idx === 1 ? "text-black/40" : "text-[rgba(255,248,240,0.3)]"}`}
                    >
                      {pkg.tier}
                    </span>
                    <h3 className="font-syne text-2xl font-extrabold tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs font-light leading-relaxed mb-6 min-h-[36px] ${idx === 1 ? "text-black/60" : "text-[rgba(255,248,240,0.55)]"}`}
                    >
                      {pkg.tag}
                    </p>

                    <div className="font-syne text-[36px] font-extrabold tracking-tight mt-auto flex items-baseline gap-1">
                      {currency === "NGN" ? pkg.priceNgn : pkg.priceUsd}
                    </div>
                    <span
                      className={`text-[9px] tracking-wide block mt-0.5 mb-6 ${idx === 1 ? "text-black/40" : "text-[rgba(255,248,240,0.4)]"}`}
                    >
                      {pkg.period}
                    </span>

                    <div
                      className={`h-[1px] w-full mb-6 ${idx === 1 ? "bg-black/10" : "bg-[rgba(212,160,48,0.14)]"}`}
                    />

                    <ul className="list-none flex flex-col gap-3.5 mb-10 flex-grow">
                      {pkg.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className={`text-xs font-light pl-5 relative before:content-['✓'] before:absolute before:left-0 before:font-bold ${
                            idx === 1
                              ? "text-black/80 before:text-black"
                              : "text-[rgba(255,248,240,0.65)] before:text-[#D4A030]"
                          }`}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-4 text-center text-[9px] tracking-[2.5px] uppercase font-extrabold border-none cursor-pointer transition-transform group-hover:scale-[1.01] ${pkg.btnStyle}`}
                    >
                      Get Started Pack &rarr;
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {/* VIEW B: HIGH-FIDELITY DETAILED A LA CARTE SPECIFICATION DIRECTORY */}
            {activeTab === "alacarte" && (
              <motion.div
                key="alacarte-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="bg-[#161310] border border-[rgba(212,160,48,0.14)] rounded-sm overflow-hidden shadow-2xl"
                id="priceList"
              >
                {/* DIRECTORY DESKTOP COLUMN CONTROLS HEADER */}
                <div className="hidden sm:grid grid-cols-4 gap-6 p-6 md:px-8 border-b border-[rgba(212,160,48,0.14)] bg-[#0d0b09]">
                  <span className="text-[9px] tracking-[2px] uppercase font-bold text-[rgba(255,248,240,0.3)]">
                    Category
                  </span>
                  <span className="text-[9px] tracking-[2px] uppercase font-bold text-[rgba(255,248,240,0.3)] col-span-2">
                    Service Deliverable
                  </span>
                  <span className="text-[9px] tracking-[2px] uppercase font-bold text-[rgba(255,248,240,0.3)] text-right">
                    Investment Cost
                  </span>
                </div>

                {/* DIRECTORY OBJECT ITERATION ROW ENGINE */}
                <div className="divide-y divide-[rgba(212,160,48,0.08)]">
                  {alacarteServices.map((item, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 p-6 md:px-8 items-center transition-colors duration-200 hover:bg-[rgba(212,160,48,0.02)]"
                    >
                      {/* CATEGORY BLOCK ANCHOR */}
                      <div>
                        <span className="text-[9px] tracking-[1.5px] uppercase px-2.5 py-1 bg-[rgba(212,160,48,0.06)] border border-[rgba(212,160,48,0.1)] text-[#D4A030] font-medium inline-block rounded-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* DESCRIPTION CAPABILITIES METRIC DATA */}
                      <div className="col-span-1 sm:col-span-2">
                        <h4 className="font-syne text-[15px] font-bold text-white mb-0.5">
                          {item.name}
                        </h4>
                        <p className="text-xs font-light text-[rgba(255,248,240,0.45)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* FINANCIAL RATE ALIGNMENT MATRIX */}
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <span className="font-syne text-base font-extrabold text-[#F06428] sm:text-white tracking-tight block">
                          {currency === "NGN" ? item.ngn : item.usd}
                        </span>
                        <span className="text-[9px] text-[rgba(255,248,240,0.25)] uppercase tracking-wider block sm:hidden">
                          Investment Rate
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM RETENTION FOOTNOTE CTA PANEL */}
                <div className="p-8 bg-[#0d0b09] border-t border-[rgba(212,160,48,0.14)] flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-xs font-light text-[rgba(255,248,240,0.55)] text-center sm:text-left max-w-[480px]">
                    {`Need custom continuous scaling architectures, multi-month
                    retainer packages, or rapid execution frameworks? Let's
                    formulate a direct bespoke specification timeline plan.`}
                  </p>
                  <button className="whitespace-nowrap bg-transparent border border-[#D4A030] text-[#D4A030] px-6 py-3 text-[9px] tracking-[2px] uppercase font-bold transition-all duration-200 hover:bg-[#D4A030] hover:text-[#090806] cursor-pointer">
                    Request Bespoke Proposal &rarr;
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

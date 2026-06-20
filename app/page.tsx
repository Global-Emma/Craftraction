"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  Variants,
} from "framer-motion";
import Image from "next/image";
import TypewriterPhrases from "@/components/TypingPhrases";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ==========================================
// DESIGN TOKEN DICTIONARY (Tailwind v4 Setup)
// ==========================================
const tokens = {
  colors: {
    black: "#090806",
    dark: "#100E0A",
    card: "#161310",
    card2: "#1D1910",
    gold: "#D4A030",
    gold2: "#F0BC40",
    orange: "#F06428",
    orange2: "#FF8040",
    red: "#E53520",
    white: "#FFFFFF",
    cream: "#FFF8F0",
    muted: "rgba(255, 248, 240, 0.55)",
    dim: "rgba(255, 248, 240, 0.28)",
    border: "rgba(212, 160, 48, 0.14)",
  },
  fonts: {
    syne: "Syne, sans-serif",
    dmSans: "'DM Sans', sans-serif",
  },
};

// ==========================================
// ANIMATION VARIANTS MATRIX
// ==========================================
const faderUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      delay: custom * 0.12,
    },
  }),
};

const revealSide = (dir: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ==========================================
// INTERACTIVE STAT TICKER MODULE
// ==========================================
interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  value,
  suffix = "",
  prefix = "",
}) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(countRef, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const roundedVal = useTransform(motionVal, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, {
        duration: 2,
        ease: [0.25, 1, 0.5, 1],
      });
      return controls.stop;
    }
  }, [inView, motionVal, value]);

  useEffect(() => {
    return roundedVal.on("change", (latest) => {
      if (countRef.current) {
        countRef.current.textContent = `${prefix}${latest.toLocaleString()}${suffix}`;
      }
    });
  }, [roundedVal, prefix, suffix]);

  return (
    <span
      ref={countRef}
      className="font-bold font-syne text-[38px] leading-none text-current"
    >
      0
    </span>
  );
};

// ==========================================
// PRINCIPAL HOMEPAGE ARCHITECTURE
// ==========================================
export default function Homepage() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Content Data Matrices
  const svcGridCells = [
    { title: "Branding", tag: "Identity that moves" },
    { title: "Web Design", tag: "Sites that convert" },
    { title: "Media & Ads", tag: "Campaigns that grow" },
    { title: "Content", tag: "Stories that engage" },
  ];

  const marqueeItems = [
    "Brand Identity",
    "Social Media",
    "Media Production",
    "Paid Ads",
    "CAC Registration",
    "Logo Design",
    "Flyer Design",
    "Graphic Design",
  ];

  const services = [
    {
      num: "01",
      icon: "✦",
      name: "Brand Identity",
      desc: "Logo, colour system, typography and the complete visual language of your brand. Built from scratch or refreshed for brands ready to level up.",
      tags: ["Logo Design", "Visual Identity", "Guidelines"],
    },
    {
      num: "02",
      icon: "📱",
      name: "Social Media Management",
      desc: "Monthly content creation, scheduling and community management across Instagram, TikTok, Facebook and more. We run your socials so you can run your business.",
      tags: ["Content", "Scheduling", "Reports"],
    },
    {
      num: "03",
      icon: "🌐",
      name: "Web Design",
      desc: "Custom websites that look stunning and perform seamlessly. Mobile-optimised, SEO-ready and built to convert visitors into paying clients.",
      tags: ["UI/UX", "Development", "SEO"],
    },
    {
      num: "04",
      icon: "⬡",
      name: "Paid Ads",
      desc: "Meta and Google campaigns built for real conversions, not just impressions. Strategic targeting, bold creatives and measurable results every time.",
      tags: ["Meta Ads", "Google Ads", "A/B Testing"],
    },
    {
      num: "05",
      icon: "🔄",
      name: "Account Recovery",
      desc: "Hacked or disabled social media accounts recovered professionally. We handle Instagram, TikTok, Facebook and more. Pricing based on severity of the case.",
      tags: ["Instagram", "TikTok", "Facebook"],
    },
    {
      num: "06",
      icon: "🎬",
      name: "Media Production",
      desc: "Professional photo and video production that stops the scroll and builds brand authority. From product shoots to brand films, we capture what makes your business worth watching.",
      tags: ["Video", "Photography", "Editing"],
    },
    {
      num: "07",
      icon: "◈",
      name: "Print & Press",
      desc: "Eye-catching flyers, social media graphics, banners and print materials that represent your brand professionally on every platform and medium.",
      tags: ["Flyers", "Graphics", "Print"],
    },
    {
      num: "08",
      icon: "📋",
      name: "CAC Registration",
      desc: "Business name or company registration with the Corporate Affairs Commission. We handle the entire process so your brand is legally recognised from day one.",
      tags: ["Business Name", "Company Reg", "CAC"],
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Done-For-You Digital",
      desc: "We don't consult and leave. We execute. Your entire digital presence is managed end to end, every day.",
    },
    {
      num: "02",
      title: "One Brand. 6 Services.",
      desc: "Stop juggling multiple vendors. From ads to video to CAC registration, everything handled in one place.",
    },
    {
      num: "03",
      title: "Built to Move",
      desc: "Wherever your audience lives, we meet them with something they can't ignore. Speed and momentum built into how we work.",
    },
    {
      num: "04",
      title: "Multi-Market Reach",
      desc: "Based in Lagos. Trusted across the UK, US, Ghana and South Africa. We understand each market and build for them.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      label: "Ideate.",
      barColor: "#D4A030",
      desc: "We deep dive into your business, your audience and your goals before a single pixel is touched. Strategy first. Always. We don't guess, we learn your brand and build from there.",
    },
    {
      num: "02",
      label: "Create.",
      barColor: "#F06428",
      desc: "Fast briefs, faster turnarounds, zero compromises on quality. Every visual, every word, every campaign is built with your growth in mind and executed with precision.",
    },
    {
      num: "03",
      label: "Shift.",
      barColor: "#FFF8F0",
      desc: "We launch, we monitor, we optimise. We keep pushing until your brand is moving the way it should. This is not a one-time delivery, this is momentum built and maintained every single day.",
    },
  ];

  const pricingPackages = [
    {
      tier: "Starter",
      name: "Launch Pack",
      tag: "For new businesses ready to show up properly.",
      priceNgn: "₦210k",
      priceUsd: "$350",
      period: "One-time project",
      list: [
        "Brand Identity (logo + colours + fonts + guidelines)",
        "Social media profile setup and management (1 platform)",
        "7 custom flyers",
        "2 rounds of revisions",
      ],
      theme: "bg-[#161310] text-[#FFF8F0] border-[rgba(212,160,48,0.14)]",
      btnStyle: "bg-[#D4A030] text-[#090806] hover:bg-[#F0BC40]",
      pop: false,
    },
    {
      tier: "Growth",
      name: "Scale Pack",
      tag: "For businesses ready to grow with intention.",
      priceNgn: "₦650k",
      priceUsd: "$950",
      period: "One-time + 1 month support",
      list: [
        "Full Brand Identity System",
        "5-page custom website",
        "Landing page",
        "1 month social media management",
        "Brand video shoot",
        "3 ad creatives",
        "Full brand guidelines",
        "3 rounds of revisions",
      ],
      theme: "bg-[#D4A030] text-[#090806]",
      btnStyle: "bg-[#090806] text-[#D4A030] hover:bg-[#1A1208]",
      pop: true,
    },
    {
      tier: "Premium",
      name: "Authority Pack",
      tag: "For established brands that want to dominate.",
      priceNgn: "₦1.2M",
      priceUsd: "$1,800",
      period: "Project + 3 months retainer",
      list: [
        "Complete Brand Identity System",
        "Full Brand Strategy",
        "3 months social media management",
        "Professional video production",
        "Paid Ads setup + 1 month management",
        "CAC Registration included",
        "Unlimited revisions",
      ],
      theme: "bg-[#F06428] text-[#FFFFFF]",
      btnStyle: "bg-[#FFFFFF] text-[#F06428] hover:opacity-90",
      pop: false,
    },
  ];

  const faqs = [
    {
      q: "How much does it cost to work with Craftraction?",
      a: "Our pricing starts from <strong>₦80,000</strong> for brand identity and logo design during our promo period. We have bundled packages starting at <strong>₦280,000</strong> for new businesses. International clients are quoted in USD. All prices are transparent, no hidden fees and no surprises.",
    },
    {
      q: "How long does a project take to complete?",
      a: "Timelines vary by project scope. A <strong>brand identity</strong> typically takes 4 to 7 working days. <strong>Social media management</strong> is ongoing from the moment we onboard you. Video projects depend on scope. If you need anything faster, we can accommodate rush requests.",
    },
    {
      q: "Do you work with businesses outside Nigeria?",
      a: "Yes. We actively work with clients across <strong>the UK, US, Ghana and South Africa</strong> in addition to Nigeria. International clients are quoted in USD and we accommodate different time zones. Our work is built to meet international standards regardless of where you're located.",
    },
    {
      q: "What do I need to get started?",
      a: "Very little upfront. We start with a <strong>free discovery call</strong> to understand your business, goals and budget. From there we send a clear proposal with scope, timeline and pricing. Once you approve and pay a deposit, we get to work. You don't need to have everything figured out before reaching out.",
    },
    {
      q: "Will I own everything you create for me?",
      a: "Yes, absolutely. Once final payment is made, <strong>all files, designs and creative assets</strong> belong to you in full. We hand over source files and editable formats. You're never locked in or dependent on us to access your own brand assets.",
    },
    {
      q: "Can you help me register my business with CAC?",
      a: "Yes. We offer <strong>CAC Registration</strong> as a standalone service starting from <strong>₦40,000</strong>. We handle the entire process for you, from business name search and reservation to full registration. Having a registered business also strengthens your brand credibility.",
    },
  ];

  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Contact", link: "#contact" },
    { label: "Services", link: "#services" },
    { label: "Process", link: "#process" },
    { label: "Pricing", link: "#pricing" },
    { label: "FAQs", link: "#faqs" },
  ];
  return (
    <div
      className="min-h-screen bg-[#090806] text-[#FFF8F0] overflow-x-hidden relative select-none antialiased selection:bg-[#D4A030] selection:text-[#090806]"
      style={{ fontFamily: tokens.fonts.dmSans }}
    >
      {/* BACKGROUND GRAPHIC GLOW LAYERS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[90%] h-[70%] bg-[radial-gradient(ellipse_90%_70%_at_65%_35%,rgba(200,70,15,0.22)_0%,#090806_60%)]" />
        <div className="absolute bottom-[20%] left-0 w-[60%] h-[50%] bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(220,90,20,0.12)_0%,transparent_55%)]" />
      </div>

      {/* FIXED NAVIGATION HEADER */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300 border-b border-[rgba(212,160,48,0.14)] ${isScrolled ? "bg-[#090806]/98 backdrop-blur-[20px]" : "bg-[#090806]/92 backdrop-blur-[20px]"}`}
      >
        <div
          className="cursor-pointer"
          onClick={() => (window.location.href = "#home")}
        >
          <Image
            src="/images/logo.png"
            alt="Craftraction"
            width={100}
            height={200}
            className="h-30 w-auto block mix-blend-screen -my-6 transition-transform hover:scale-95"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-9 list-none">
          {navLinks.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={item.link}
                className={`text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative py-2 group/link focus:outline-none focus:text-white`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#F06428] transition-all duration-300 group-hover/link:w-full group-focus/link:w-full`}
                />
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover/link:w-1/2 group-focus/link:w-1/2" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#D4A030] text-[#090806] border-none px-6 py-3 text-[9px] tracking-[2.5px] uppercase font-extrabold cursor-pointer transition-all duration-200 hover:bg-[#F0BC40] hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a Project &rarr;
          </button>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          className="flex md:hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1 z-[960]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block width-6 h-[2px] bg-[#FFF8F0] transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""} w-6 h-[2px] bg-[#FFF8F0]`}
          />
          <span
            className={`block width-6 h-[2px] bg-[#FFF8F0] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""} w-6 h-[2px] bg-[#FFF8F0]`}
          />
          <span
            className={`block width-6 h-[2px] bg-[#FFF8F0] transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""} w-6 h-[2px] bg-[#FFF8F0]`}
          />
        </button>
      </nav>

      {/* MOBILE EXPANDABLE FULLSCREEN MENU LAYER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 35 }}
            className="fixed inset-0 z-[950] bg-[radial-gradient(ellipse_80%_50%_at_70%_60%,rgba(200,70,15,0.15)_0%,transparent_60%)] bg-[#0c0907] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between p-7 border-b border-white/8">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                className="h-11.5 mix-blend-screen"
                alt="Craftraction"
              />
              <button
                className="bg-transparent border-none text-[#FFF8F0] text-3xl cursor-pointer p-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="flex items-center flex-col px-8 gap-8">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => scrollToSection(item.link)}
                >
                  <Link
                    href={item.link}
                    className="text-xm font-semibold text-center uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative py-2 group/link focus:outline-none focus:text-white"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F06428] transition-all duration-300 group-hover/link:w-full" />
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover/link:w-1/2" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="p-7 mb-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-5 bg-gradient-to-r from-[#F06428] to-[#c2511a] text-white border-none cursor-pointer rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO HERO COMPONENT SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 relative overflow-hidden max-w-full"
      >
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_30%,rgba(212,160,48,0.08)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(240,100,40,0.05)_0%,transparent_60%)]" />
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-full md:max-w-[95%]"
          >
            <motion.div
              variants={faderUp}
              custom={1}
              className="flex items-center gap-3.5 text-[9px] tracking-[5px] uppercase text-[#D4A030] mb-7 font-bold"
            >
              <span className="w-8 h-[2px] bg-[#D4A030] block" /> Full-Service
              Digital Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.95] z-50"
            >
              We Build Brands That <br className="sm:inline" />
              <span className="bg-linear-to-r h-22 md:h-45 from-[#F0BC40] via-[#F06428] to-[#E53520] pt-2 bg-clip-text text-transparent inline-flex text-start min-h-[1.1em] hover:scale-[1.02] transition-transform duration-500 cursor-default relative">
                <TypewriterPhrases />
                {/* Animated Typing Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-block ml-1 w-2 h-10 sm:h-16 md:h-20 bg-amber-500 align-middle self-start"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={faderUp}
              custom={3}
              className="text-base font-light text-[#f7f7f7ca] leading-relaxed max-w-[480px] mb-10"
            >
              We handle your entire digital presence, social media, content,
              advertising, branding, and more, so you can focus on what you do
              best: running your business.
            </motion.p>

            <motion.div
              variants={faderUp}
              custom={4}
              className="flex flex-wrap gap-3.5"
            >
              <button
                onClick={() => (window.location.href = "#contact")}
                className="bg-[#D4A030] text-[#090806] border-none px-8 py-4 text-[10px] tracking-[3px] uppercase font-extrabold cursor-pointer transition-all duration-200 hover:bg-[#F0BC40] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,160,48,0.3)]"
              >
                Start a Project &rarr;
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border border-white/20 text-[#FFF8F0] bg-transparent px-8 py-3.5 text-[10px] tracking-[3px] uppercase font-medium cursor-pointer transition-colors hover:border-[#F06428] hover:text-[#F06428]"
              >
                View Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* FLOATING ICON GRAPHIC LOGO BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute md:relative right-5 md:right-0 top-12 md:top-0 w-[240px] md:w-full max-w-[550px] mx-auto opacity-40 md:opacity-100 pointer-events-none flex items-center justify-center"
          >
            <motion.img
              animate={{ translateY: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/images/logo_icon.png"
              alt="Craftraction Emblem"
              className="w-full h-auto opacity-50 md:opacity-90 object-contain block max-w-70 md:max-w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* METRIC SUB GRID SERVICES BAR */}
      <div className="bg-black grid grid-cols-2 md:grid-cols-4 border-y border-[rgba(212,160,48,0.14)] z-10 relative">
        {svcGridCells.map((cell, idx) => (
          <div
            key={idx}
            className={`p-6 md:px-8 md:py-6 flex flex-col justify-start min-h-[120px] box-border ${idx % 2 === 0 ? "border-r" : "md:border-r border-none"} ${idx < 2 ? "border-b md:border-b-0" : ""} border-white/10`}
          >
            <div className="font-syne text-lg font-bold text-white mb-1.5 tracking-tight">
              {cell.title}
            </div>
            <div className="font-light text-[11px] text-[#666] tracking-wide">
              {cell.tag}
            </div>
          </div>
        ))}
      </div>

      {/* REVOLVING MARQUEE TICKER METRIC */}
      <div className="bg-white py-4 overflow-hidden border-y border-[#090806]/8 flex whitespace-nowrap z-10 relative group">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-0 pr-0 group-hover:[animation-play-state:paused]"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#F06428] px-9 opacity-85 select-none">
                {item}
              </span>
              <span className="text-[#F06428] text-[10px] font-bold">
                &bull;
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ABOUT COMPANY CORE INTRO MODULE */}
      <section
        id="about"
        className="bg-[#100E0A] py-24 px-6 md:px-12 border-y border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={faderUp}
              className="text-[9px] tracking-[5px] uppercase text-[#D4A030] font-semibold mb-3.5 flex items-center gap-3"
            >
              <span className="w-7 h-[2px] bg-[#D4A030] block" /> Who We Are
            </motion.div>
            <motion.h2
              variants={faderUp}
              className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-5"
            >
              Built for Busy
              <br />
              Business Owners.
            </motion.h2>
            <motion.p
              variants={faderUp}
              className="text-[15px] text-[rgba(255,248,240,0.55)] font-light leading-relaxed mb-4"
            >
              Craftraction is a full-service digital and creative brand that
              partners with business owners who are too busy running their
              company to manage their online presence.
            </motion.p>
            <motion.p
              variants={faderUp}
              className="text-[15px] text-[rgba(255,248,240,0.55)] font-light leading-relaxed mb-4"
            >
              We become your behind-the-scenes digital team, handling everything
              from social media and content, to advertising, branding,
              videography, and graphic design so you can focus on{" "}
              <strong className="text-[#FFF8F0] font-semibold">
                what you do best.
              </strong>
            </motion.p>
            <motion.div
              variants={faderUp}
              className="my-7 p-6 bg-[rgba(212,160,48,0.07)] border-l-3 border-[#D4A030] font-syne text-base font-bold text-[#D4A030] italic leading-snug"
            >
              {`"We don't just manage your social. We shift your entire digital
              identity."`}
            </motion.div>
            <motion.div variants={faderUp} className="mt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#D4A030] text-[#090806] border-none px-8 py-4 text-[10px] tracking-[3px] uppercase font-extrabold cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                Work With Us &rarr;
              </button>
            </motion.div>
          </motion.div>

          {/* HIGHLIGHT DATA BOARDS COUNTERS MATRIX */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealSide("right")}
            className="grid grid-cols-2 gap-1.5"
          >
            <div className="bg-[#D4A030] p-8 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 text-[#090806]">
              <AnimatedCounter value={50} suffix="+" />
              <div className="text-[10px] tracking-wider uppercase text-black/50 font-medium">
                Brands Transformed
              </div>
            </div>
            <div className="bg-[#F06428] p-8 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 text-[#090806]">
              <AnimatedCounter value={5} />
              <div className="text-[10px] tracking-wider uppercase text-black/50 font-medium">
                Countries Served
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 text-black">
              <AnimatedCounter value={8} />
              <div className="text-[10px] tracking-wider uppercase text-black/45 font-medium">
                Services Under One Roof
              </div>
            </div>
            <div className="bg-[#161310] border border-[rgba(212,160,48,0.14)] p-8 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 text-[#D4A030]">
              <div className="font-syne font-extrabold text-[26px] leading-none">
                &#8358;60k
              </div>
              <div className="text-[10px] tracking-wider uppercase text-[rgba(255,248,240,0.28)] font-medium">
                Starting Price
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE LISTINGS 8-CELL GRID ARCHITECTURE */}
      <section
        id="services"
        className="bg-[#090806] py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-14">
            <div className="text-[9px] tracking-[5px] uppercase text-[#D4A030] font-semibold mb-3">
              What We Do
            </div>
            <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-5">
              Everything Your Brand
              <br />
              Needs. <span className="text-[#D4A030]">One Roof.</span>
            </h2>
            <p className="text-[15px] text-[rgba(255,248,240,0.55)] font-light max-w-[520px] leading-relaxed">
              Stop juggling vendors. From your first logo to your first viral
              post to your first ad campaign, Craftraction handles every layer
              of your digital presence.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 relative z-10"
          >
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={faderUp}
                className="bg-[#161310] p-10 border border-[rgba(212,160,48,0.14)] relative overflow-hidden transition-all duration-300 hover:bg-[#1D1910] hover:-translate-y-1 group hover:border-[rgba(212,160,48,0.3)]"
              >
                <div className="font-syne text-[52px] font-extrabold text-[rgba(212,160,48,0.07)] leading-none mb-4.5 group-hover:text-[rgba(212,160,48,0.12)] transition-colors">
                  {svc.num}
                </div>
                <span className="text-2xl mb-3.5 block">{svc.icon}</span>
                <div className="font-syne text-[17px] font-bold text-[#FFF8F0] mb-3">
                  {svc.name}
                </div>
                <div className="text-xs text-[rgba(255,248,240,0.55)] font-light leading-relaxed min-h-[72px]">
                  {svc.desc}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {svc.tags.map((tg, idx) => (
                    <span
                      key={idx}
                      className="text-[8px] tracking-wider uppercase px-2.5 py-1 border border-[rgba(212,160,48,0.2)] text-[#D4A030] bg-[rgba(212,160,48,0.05)] font-medium"
                    >
                      {tg}
                    </span>
                  ))}
                </div>

                {/* BOTTOM BRAND GRADIENT STRIP REVEAL */}
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A030] to-[#F06428] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY US AND THE PILLARS ARCHITECTURE */}
      <section className="bg-[#100E0A] py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[9px] tracking-[5px] uppercase text-[#F06428] font-semibold mb-3.5 flex items-center gap-3">
            <span className="w-7 h-[2px] bg-[#F06428] block" /> Why Choose Us
          </div>
          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-12">
            Other agencies make content.
            <br />
            <span className="text-[#F06428]">We build momentum.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealSide("left")}
              className="text-[15px] text-[rgba(255,248,240,0.55)] font-light leading-relaxed space-y-4"
            >
              <p>
                The difference between a brand that drifts and a brand that
                moves is intentional creative force. We bring strategic thinking
                to every brief, bold execution to every project, and relentless
                energy to every platform.
              </p>
              <p>
                There are hundreds of agencies. Most over-promise and
                under-deliver. Craftraction was built around one belief: your
                business deserves a digital team that shows up every single day,
                with strategy, creativity and execution to back it up.
              </p>
              <p>
                {` We don't consult and leave. We execute. Your entire digital
                presence is managed, maintained and optimised by our team, end
                to end, every day.`}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Instagram", "TikTok", "Facebook", "Snapchat", "Google"].map(
                  (plat) => (
                    <span
                      key={plat}
                      className="px-3 py-1.5 border border-[rgba(212,160,48,0.14)] text-[9px] tracking-widest uppercase text-[#D4A030] bg-[rgba(212,160,48,0.05)] font-semibold hover:bg-[rgba(212,160,48,0.12)] transition-colors"
                    >
                      {plat}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealSide("right")}
              className="bg-[#D4A030] p-10 flex flex-col justify-between gap-6 shadow-xl"
            >
              <p className="font-syne text-[clamp(17px,2.2vw,22px)] font-extrabold text-[#090806] leading-snug italic">
                {`"Most businesses don't have a visibility problem. They have a
                consistency problem. We fix that."`}
              </p>
              <p className="text-[10px] tracking-[3px] uppercase text-black/45 font-bold">
                Craftraction &middot; Digital Media Brand
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {pillars.map((plr, i) => (
              <div
                key={i}
                className="p-8 border border-[rgba(212,160,48,0.14)] transition-all duration-300 hover:border-[rgba(212,160,48,0.4)] hover:bg-[#1D1910] hover:-translate-y-1 group"
              >
                <div className="font-syne text-3xl font-extrabold text-[#D4A030] mb-3.5">
                  {plr.num}
                </div>
                <div className="font-syne text-sm font-bold text-[#FFF8F0] mb-2">
                  {plr.title}
                </div>
                <div className="text-xs text-[rgba(255,248,240,0.55)] font-light leading-relaxed">
                  {plr.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PROCESS OPERATIONS MATRIX TIMELINE */}
      <section
        id="process"
        className="bg-[#090806] py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[9px] tracking-[5px] uppercase text-white font-semibold mb-3.5 flex items-center gap-3">
            <span className="w-7 h-[2px] bg-white block" /> How We Work
          </div>
          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-4">
            Ideate. Create. <span className="text-[#F06428]">Shift.</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,248,240,0.55)] font-light max-w-[520px] leading-relaxed mb-14">
            {`Every engagement starts with understanding what's holding your brand
            back. Then we move.`}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-[#161310] border border-[rgba(212,160,48,0.14)] p-12 relative overflow-hidden transition-all duration-300 hover:bg-[#1D1910] hover:border-[rgba(240,100,40,0.3)] hover:-translate-y-1 group"
              >
                <span className="absolute bottom-4 right-5 font-syne text-[64px] font-extrabold text-white/[0.03] leading-none select-none group-hover:scale-105 transition-transform">
                  {step.num}
                </span>
                <div
                  className="font-syne text-3xl font-extrabold tracking-tight mb-2"
                  style={{ color: step.barColor }}
                >
                  {step.label}
                </div>
                <div
                  className="w-12 h-[3px] mb-6 transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: step.barColor }}
                />
                <p className="text-sm text-[rgba(255,248,240,0.55)] font-light leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SYSTEM INTERACTIVE MODULE */}
      <section
        id="pricing"
        className="bg-[#100E0A] py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[9px] tracking-[5px] uppercase text-[#D4A030] font-semibold mb-3">
            Pricing
          </div>
          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-5">
            Transparent. Fair.
            <br />
            <span className="text-[#D4A030]">Built to Move.</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,248,240,0.55)] font-light max-w-[520px] leading-relaxed mb-10">
            Bundle services and save. Pick the package that matches where your
            brand is right now.
          </p>

          {/* CURRENCY CONTROLLER SWITCH */}
          <div className="flex border border-[rgba(212,160,48,0.14)] w-fit mb-10 overflow-hidden bg-[#090806]">
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-5 py-2.5 border-none cursor-pointer font-semibold text-[9px] tracking-[3px] uppercase transition-all duration-200 ${currency === "NGN" ? "bg-[#F06428] text-white" : "bg-transparent text-[rgba(255,248,240,0.28)] hover:text-white"}`}
            >
              NGN (&#8358;)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2.5 border-none cursor-pointer font-semibold text-[9px] tracking-[3px] uppercase transition-all duration-200 ${currency === "USD" ? "bg-[#F06428] text-white" : "bg-transparent text-[rgba(255,248,240,0.28)] hover:text-white"}`}
            >
              USD ($)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-stretch">
            {pricingPackages.map((pkg, i) => (
              <div
                key={i}
                className={`p-9 flex flex-col relative transition-transform hover:-translate-y-1 shadow-lg ${pkg.theme}`}
              >
                {pkg.pop && (
                  <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 bg-black text-[#F06428] text-[7px] tracking-[3px] uppercase px-3.5 py-1.5 font-extrabold whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                <span
                  className={`text-[8px] tracking-[4px] uppercase font-semibold mb-2.5 ${i === 1 ? "text-black/40" : i === 2 ? "text-white/60" : "text-[rgba(255,248,240,0.28)]"}`}
                >
                  {pkg.tier}
                </span>
                <div className="font-syne text-xl font-extrabold mb-1.5">
                  {pkg.name}
                </div>
                <p
                  className={`text-xs font-light mb-0 min-h-[32px] ${i === 1 ? "text-black/45" : i === 2 ? "text-white/60" : "text-[rgba(255,248,240,0.28)]"}`}
                >
                  {pkg.tag}
                </p>

                <div className="font-syne text-3xl font-extrabold mt-4 mb-1 tracking-tight">
                  {currency === "NGN" ? pkg.priceNgn : pkg.priceUsd}
                </div>
                <div
                  className={`text-[10px] mb-5 ${i === 1 ? "text-black/38" : i === 2 ? "text-white/50" : "text-[rgba(255,248,240,0.28)]"}`}
                >
                  {pkg.period}
                </div>

                <div
                  className={`h-[1px] w-full mb-5 ${i === 1 ? "bg-black/12" : i === 2 ? "bg-white/20" : "bg-[rgba(212,160,48,0.14)]"}`}
                />

                <ul className="list-none flex-1 flex flex-col gap-2.5">
                  {pkg.list.map((li, idx) => (
                    <li
                      key={idx}
                      className={`text-xs font-light pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-[10px] before:font-bold ${i === 1 ? "text-black/75 before:text-black" : i === 2 ? "text-white/80 before:text-white" : "text-[rgba(255,248,240,0.55)] before:text-[#D4A030]"}`}
                    >
                      {li}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection("contact")}
                  className={`mt-6 w-full py-3.5 text-center text-[9px] tracking-widest uppercase font-extrabold border-none cursor-pointer transition-opacity ${pkg.btnStyle}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        <Link href={"/pricing"}>
          <button
            onClick={() => scrollToSection("contact")}
            className={`mt-6 w-full py-3.5 text-center text-[9px] tracking-widest uppercase font-extrabold cursor-pointer transition-opacity border border-[#ffffffa5]`}
          >
            View Full Pricing &rarr;
          </button>
        </Link>
      </section>

      {/* FAQ INTERACTIVE COMPONENT EXPANDABLE */}
      <section
        id="faq"
        className="bg-black py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[9px] tracking-[5px] uppercase text-[#D4A030] font-semibold mb-3">
            FAQ
          </div>
          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-5">
            Questions We Get
            <br />
            <span className="text-[#D4A030]">Asked a Lot.</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,248,240,0.55)] font-light max-w-[520px] leading-relaxed mb-14">
            {`Everything you need to know before working with Craftraction. If
            your question isn't here, send us a message.`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-[#161310] border transition-colors duration-300 ${isOpen ? "border-[rgba(212,160,48,0.4)]" : "border-[rgba(212,160,48,0.14)]"}`}
                >
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex items-center justify-between p-6 md:p-7 cursor-pointer gap-4 bg-transparent hover:bg-[#1D1910] transition-colors select-none"
                  >
                    <span
                      className={`font-syne text-sm md:text-base font-bold leading-snug flex-1 transition-colors ${isOpen ? "text-[#D4A030]" : "text-[#FFF8F0]"}`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 flex-shrink-0 border border-[rgba(212,160,48,0.14)] rounded-full flex items-center justify-center text-sm font-light text-[rgba(255,248,240,0.28)] transition-all duration-300 ${isOpen ? "rotate-45 bg-[#D4A030] border-[#D4A030] text-[#090806]" : ""}`}
                    >
                      +
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden px-6 md:px-7"
                  >
                    <div
                      className="text-xs md:text-sm text-[rgba(255,248,240,0.55)] font-light leading-relaxed border-t border-[rgba(212,160,48,0.14)] pt-4 pb-6"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE CTA HIGH CONVERSION MODULE SECTION */}
      <section
        id="contact"
        className="bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107] py-28 px-6 md:px-12 text-center relative overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#DD4322] to-[#DD7107] z-0 pointer-events-none" />

        {/* HUGE BACKGROUND WATERMARK TYPOGRAPHY TEXT */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-syne text-[clamp(60px,12vw,150px)] font-black text-black/[0.04] tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
          GET TRACTION
        </div>

        <div className="max-w-[720px] mx-auto relative z-10">
          <p className="text-[9px] tracking-[5px] uppercase text-black/45 font-semibold mb-5">
            Ready to Gain Traction?
          </p>
          <h2 className="font-syne text-[clamp(32px,5vw,60px)] font-extrabold tracking-tight text-[#090806] leading-[1.04] mb-5">
            Built to Move.
            <br />
            <em className="font-normal text-white italic">Crafted to Last.</em>
          </h2>
          <p className="text-base text-black/80 max-w-[500px] mx-auto font-light leading-relaxed mb-4">
            {`Tell us about your business and what you're trying to build. We'll
            come back with a clear plan and honest pricing. No pressure. No
            fluff.`}
          </p>
          <p className="text-xs text-black/80 font-medium mb-10">
            Reach us on{" "}
            <strong className="text-black font-semibold">Instagram</strong>,{" "}
            <strong className="text-black font-semibold">TikTok</strong>,{" "}
            <strong className="text-black font-semibold">WhatsApp</strong> or{" "}
            <strong className="text-black font-semibold">email</strong>. Tell us
            {`where you are, we'll show you where you could be.`}
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link href={"https://wa.me/+2349023792627"}>
              <button className="bg-[#090806] text-[#D4A030] border-none px-9 py-4 text-[10px] tracking-[3px] uppercase font-extrabold cursor-pointer transition-colors hover:bg-[#1a1208]">
                Book a Free Discovery Call &rarr;
              </button>
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="border-2 border-black/25 text-[#090806] bg-transparent px-9 py-3.5 text-[10px] tracking-[3px] uppercase font-semibold cursor-pointer transition-colors hover:border-black"
            >
              View Our Work
            </button>
          </div>
          <div className="font-serif text-[clamp(22px,4vw,40px)] italic text-black/35 mt-10">
            {`Let's build yours.`}
          </div>
        </div>
      </section>

      {/* CORE STANDARD 4-COLUMN FOOTER */}
      <footer className="bg-[#060504] pt-20 pb-8 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-14">
            <div>
              <div
                className="mb-4 cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <img
                  src="/images/logo.png"
                  alt="Craftraction"
                  className="h-10 object-contain"
                />
              </div>
              <p className="text-xs text-[rgba(255,248,240,0.28)] font-light leading-relaxed">
                Design &middot; Brand &middot; Media &middot; Ads
                <br />
                Nigeria &middot; UK &middot; US &middot; Ghana &middot; South
                Africa
              </p>
            </div>

            <div>
              <div className="text-[9px] tracking-[3px] uppercase text-[#D4A030] font-semibold mb-4.5">
                Services
              </div>
              <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
                {[
                  "Brand Identity",
                  "Social Media",
                  "Web Design",
                  "Paid Ads",
                  "Account Recovery",
                  "Media Production",
                  "Print & Press",
                  "CAC Registration",
                ].map((item) => (
                  <li
                    key={item}
                    onClick={() => scrollToSection("services")}
                    className="text-xs text-[rgba(255,248,240,0.28)] cursor-pointer transition-colors hover:text-[#D4A030] font-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[9px] tracking-[3px] uppercase text-[#D4A030] font-semibold mb-4.5">
                Company
              </div>
              <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
                {["about", "services", "process", "pricing"].map((sec) => (
                  <li
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className="text-xs text-[rgba(255,248,240,0.28)] cursor-pointer transition-colors hover:text-[#D4A030] font-light capitalize"
                  >
                    {sec === "about"
                      ? "About Us"
                      : sec === "process"
                        ? "Our Work"
                        : sec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[9px] tracking-[3px] uppercase text-[#D4A030] font-semibold mb-4.5">
                Contact
              </div>
              <ul className="list-none flex flex-col gap-2.5 p-0 m-0 text-xs text-[rgba(255,248,240,0.28)] font-light">
                <li className="hover:text-[#D4A030] transition-colors">
                  <Link
                    href="mailto:craftraction@gmail.com"
                    className="text-inherit text-none"
                  >
                    craftraction@gmail.com
                  </Link>
                </li>
                <li className="hover:text-[#D4A030] transition-colors">
                  <Link
                    href="https://wa.me/2349023792627"
                    className="text-inherit text-none"
                  >
                    +234 902 379 2627
                  </Link>
                </li>
                {/* <li className="hover:text-[#D4A030] transition-colors">
                  @craftraction
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-[rgba(212,160,48,0.14)] pt-7 flex flex-wrap justify-between items-center gap-4">
            <p className="text-xs text-[rgba(255,248,240,0.28)] font-light">
              &copy; 2026 Craftraction. All rights reserved.
            </p>
            <div className="flex gap-5">
              {["Instagram", "TikTok", "Facebook"].map((soc) => (
                <span
                  key={soc}
                  className="text-[9px] tracking-widest uppercase text-[rgba(255,248,240,0.28)] cursor-pointer transition-colors hover:text-[#F06428] font-medium"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Layers,
  Paintbrush,
  Printer,
  Code,
  ShieldCheck,
  Megaphone,
  Cpu,
  Video,
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Menu,
  X,
  // Star,
} from "lucide-react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "@/components/marquee";
import TypewriterPhrases from "@/components/TypingPhrases";

// --- Types & Interfaces ---
interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export default function BrandShiftMediaHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  // const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- Mock Data ---
  const counters = [
    {
      value: "50+",
      label: "Brands Transformed",
      bg: "bg-[#DD7107]",
      text: "text-[#DD4322]",
    },
    {
      value: "5",
      label: "Countries Served",
      bg: "bg-[000000]",
      text: "text-[#D9A021]",
    },
    {
      value: "8",
      label: "Services Under One Roof",
      bg: "bg-[#D9A021]",
      text: "text-[#DD7107]",
    },
    {
      value: "80+",
      label: "Happy Clients",
      bg: "bg-[#DD4322]",
      text: "text-[#DD4322]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const navLinks: string[] = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Faq",
    // "Why Us",
    // "Process",
    "Contact",
  ];

  const processSteps = [
    {
      num: "01",

      label: "Ideate.",

      barColor: "#D9A021",

      desc: "We deep dive into your business, your audience and your goals before a single pixel is touched. Strategy first. Always. We don't guess, we learn your brand and build from there.",
    },

    {
      num: "02",

      label: "Create.",

      barColor: "#DD4322",

      desc: "Fast briefs, faster turnarounds, zero compromises on quality. Every visual, every word, every campaign is built with your growth in mind and executed with precision.",
    },

    {
      num: "03",

      label: "Shift.",

      barColor: "#DD7107",

      desc: "We launch, we monitor, we optimise. We keep pushing until your brand is moving the way it should. This is not a one-time delivery, this is momentum built and maintained every single day.",
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

  const services: Service[] = [
    {
      icon: Megaphone,
      name: "Social Media Management",
      description:
        "Data-driven organic growth, community building, and content architecture across premium channels.",
    },
    {
      icon: Paintbrush,
      name: "Branding & Graphics Design",
      description:
        "Iconic brand identity systems, logos, presentation collateral, and scalable vector architectures.",
    },
    {
      icon: Printer,
      name: "Printing Services",
      description:
        "High-fidelity production, luxury merchandise, corporate stationery, and wide-format prints.",
    },
    {
      icon: Code,
      name: "Website Design & Development",
      description:
        "Bespoke engineering utilizing Next.js, headless architectures, performance SEO, and smooth animations.",
    },
    {
      icon: ShieldCheck,
      name: "Meta Verification & Recovery",
      description:
        "Securing modern identity platforms, blue-badge applications, and enterprise account asset recovery.",
    },
    {
      icon: Layers,
      name: "Sponsored Ads & Campaigns",
      description:
        "High-ROI digital advertising funnels across Google, Meta, and TikTok optimized for performance.",
    },
    {
      icon: Cpu,
      name: "AI & Content Creation",
      description:
        "Next-generation generative workflows producing high-engagement visual assets at hyper-speed.",
    },
    {
      icon: Video,
      name: "Video Production & Editing",
      description:
        "Cinematic commercial structures, social-first reels, high-fidelity post-production processing.",
    },
    {
      icon: Briefcase,
      name: "Business Registration",
      description:
        "Streamlined corporate structuring, regulatory compliance compliance, and modern legal setup.",
    },
  ];

  const portfolioCategories = [
    "All",
    "Branding",
    "Web Development",
    "Digital Marketing",
  ];

  // const pricingPackages = [
  //   {
  //     tier: "Starter",
  //     name: "Launch Pack",
  //     tag: "For new businesses ready to show up properly.",
  //     priceNgn: "₦210k",
  //     priceUsd: "$350",
  //     period: "One-time project",
  //     list: [
  //       "Brand Identity (logo + colours + fonts + guidelines)",
  //       "Social media profile setup and management (1 platform)",
  //       "7 custom flyers",
  //       "2 rounds of revisions",
  //     ],
  //     theme: "bg-[#D9A02124] text-[#FFF8F0] border-[#DD4322]",
  //     btnStyle: "bg-[#D9A021] text-[#090806] hover:bg-[#F0BC40]",
  //     pop: false,
  //   },
  //   {
  //     tier: "Growth",
  //     name: "Scale Pack",
  //     tag: "For businesses ready to grow with intention.",
  //     priceNgn: "₦650k",
  //     priceUsd: "$950",
  //     period: "One-time + 1 month support",
  //     list: [
  //       "Full Brand Identity System",
  //       "5-page custom website",
  //       "Landing page",
  //       "1 month social media management",
  //       "Brand video shoot",
  //       "3 ad creatives",
  //       "Full brand guidelines",
  //       "3 rounds of revisions",
  //     ],
  //     theme: "bg-[#DD4322] text-[#090806]",
  //     btnStyle: "bg-[#090806] text-[#D9A021] hover:bg-[#1A1208]",
  //     pop: true,
  //   },
  //   {
  //     tier: "Premium",
  //     name: "Authority Pack",
  //     tag: "For established brands that want to dominate.",
  //     priceNgn: "₦1.2M",
  //     priceUsd: "$1,800",
  //     period: "Project + 3 months retainer",
  //     list: [
  //       "Complete Brand Identity System",
  //       "Full Brand Strategy",
  //       "3 months social media management",
  //       "Professional video production",
  //       "Paid Ads setup + 1 month management",
  //       "CAC Registration included",
  //       "Unlimited revisions",
  //     ],
  //     theme: "bg-[#DD7107] text-[#FFFFFF]",
  //     btnStyle: "bg-[#FFFFFF] text-[#F06428] hover:opacity-90",
  //     pop: false,
  //   },
  // ];

  const portfolioItems: PortfolioItem[] = [
    {
      title: "Shirt Branding",
      category: "Branding",
      image: "/images/projects/one.jpg",
    },
    {
      title: "Ascada Shirt Design",
      category: "Branding",
      image: "/images/projects/two.jpg",
    },
    {
      title: "Afro Event Branding",
      category: "Digital Marketing",
      image: "/images/projects/three.jpg",
    },
    {
      title: "Business Transform Media Logo Design",
      category: "Branding",
      image: "/images/projects/four.jpg",
    },
    {
      title: "Ezeari Logo Design",
      category: "Branding",
      image: "/images/projects/five.jpg",
    },
    {
      title: "Graphics Design",
      category: "Digital Marketing",
      image: "/images/projects/six.jpg",
    },
  ];

  const whyChooseUs = [
    {
      title: "Done-For-You Digital",
      desc: "We don't consult and leave. We execute. Your entire digital presence is managed end to end, every day.",
    },
    {
      title: "Fast Delivery",
      desc: "Agile project workflows guaranteeing strict milestone compliance without feature cuts.",
    },
    {
      title: "Strategic Branding",
      desc: "We map your market placement first, ensuring design drives functional conversions.",
    },
    {
      title: "Multi-Market Reach",
      desc: "Based in Lagos. Trusted across the UK, US, Ghana and South Africa. We understand each market and build for them.",
    },
  ];

  const workflow: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Deep-dive workshops unpacking business metrics, target personas, and current systemic roadblocks.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Engineering bespoke design pathways, advertising logic, and architectural blueprints for validation.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "High-fidelity mockups, premium brand aesthetics, user interfaces, and custom animation styling.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "Transforming layouts into accessible, production-grade logic optimized for all digital surfaces.",
    },
    {
      step: "05",
      title: "Launch & Growth",
      description:
        "System deployment backed by real-time performance analytics, conversion monitoring, and scaling.",
    },
  ];

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Branding & Creative Design Architecture",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    msg: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          success: true,
          msg: "✓ Request transmitted successfully!",
        });
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          service: "Branding & Creative Design Architecture",
          message: "",
        });
      } else {
        setFormStatus({
          success: false,
          msg: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        msg: `Network failure. Please try again. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
      setFormStatus(null);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#DD4322] selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* --- Dynamic Cinematic Background Canvas --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Red Abstract Light Vector */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-150 h-150 bg-[#DD4322]/10 rounded-full blur-[150px]"
        />
        {/* Floating Gold Abstract Light Vector */}
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 -right-20 w-125 h-125 bg-amber-500/5 rounded-full blur-[130px]"
        />
        {/* Fine Matrix Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#DD4322_1px,transparent_1px),linear-gradient(to_bottom,#D9A021_1px,transparent_1px)] bg-size:40px_40px" />
      </div>

      {/* --- Sticky Transparent Navigation Bar --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl bg-[#000000]/70 border-b border-white/5 transition-all duration-300 hover:border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none rounded-lg relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Image
                src="/images/logo.png"
                alt="craftraction_logo"
                width={250}
                height={250}
                loading="eager"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto transition-all duration-300 group-hover:brightness-110"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative py-2 group/link focus:outline-none focus:text-white"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DD4322] transition-all duration-300 group-hover/link:w-full" />
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover/link:w-1/2" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center"
          >
            <Link
              href="#contact"
              className="relative group px-5 py-2.5 lg:px-6 lg:py-3 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden border border-white/10 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="absolute inset-0 w-full h-full bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0" />
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                Start Your Project
              </span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#DD4322] rounded-full border border-transparent hover:border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-20 left-0 w-full bg-[#000000] border-b border-white/10 px-6 py-8 flex flex-col gap-2 md:hidden z-40 backdrop-blur-2xl overflow-hidden"
            >
              {navLinks.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item}
                >
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-gray-300 block py-3.5 border-b border-white/5 focus:outline-none focus:text-[#D9A021] hover:text-[#D9A021] hover:pl-4 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black text-center text-xs font-bold uppercase tracking-widest py-4 rounded-xl block hover:bg-[#DD4322]hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- 1. HERO SECTION --- */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 relative overflow-hidden max-w-full">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_30%,rgba(212,160,48,0.08)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(240,100,40,0.05)_0%,transparent_60%)]" />

        {/* <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10"> */}
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-white/10 text-white bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 relative group overflow-hidden">
              <span className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107] animate-pulse" />
              Bringing Your Brand To Life
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[0.95]"
          >
            We Build Brands That <br className="sm:inline" />
            <span className="bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107] bg-clip-text text-transparent inline-flex text-center items-center justify-center min-h-[1.1em] hover:scale-[1.02] transition-transform duration-500 cursor-default relative">
              <TypewriterPhrases />
              {/* Animated Typing Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block ml-1 w-2 h-10 sm:h-16 md:h-20 bg-amber-500 align-middle self-center"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
          >
            Craftraction is a creative and digital agency built for brands that
            refuse to be ignored. We shape your digital presence through
            branding, web development, digital marketing, and strategic
            advertising - generating traction that drives measurable
            results. We do not chase attention. We craft it.
          </motion.p>

          {/* Accessible Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-52 bg-[#DD4322] text-white font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-2 shadow-xl shadow-[#DD4322]/10 group focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span>Book Studio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-52 bg-transparent text-white border border-white/10 font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white/5 hover:border-white transition-all duration-500 flex items-center justify-center focus:outline-none relative overflow-hidden group"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107]" />
              View Work
            </Link>
          </motion.div>
        </div>

        {/* FLOATING ICON GRAPHIC LOGO BACKGROUND */}
        {/* <motion.div
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
          </motion.div> */}
        {/* </div> */}
      </section>

      {/* Bottom Horizontal Animated Border Line */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-px bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107] via-white/20 to-transparent"
      />

      {/* --- 2. ABOUT SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="about"
        className="py-32 px-6 max-w-7xl mx-auto border-b border-t border-white/5 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D9A021] text-[10px] font-bold uppercase tracking-[5px] block">
              Who we are
            </span>

            <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-[1.05]">
              Built for <br />
              <span className="text-[#D9A021]">Busy Business Owners.</span>
            </h2>

            <p className="text-gray-400 text-sm text-justify sm:text-base leading-relaxed max-w-2xl">
              We are built for busy business owners who are too busy running
              their company to manage their online presence. We become your
              behind-the-scenes digital team, handling everything from social
              media and content, to advertising, branding, videography, and
              graphic design so you can focus on what you do best.
            </p>

            {/* <span className="text-[#D9A021] text-[10px] font-bold uppercase tracking-widest block">
              What We Do
            </span>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              
            </p> */}

            <motion.div className="my-7 p-6 bg-[rgba(212,160,48,0.07)] border-l-3 border-brand-gold font-syne text-base font-bold text-brand-gold italic leading-snug">
              {`"We don't just manage your social. We shift your entire digital
              identity."`}
            </motion.div>
          </motion.div>

          {/* Interactive Metric Counter Display Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {counters.map((counter, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(234, 179, 8, 0.2)",
                }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`border ${counter.bg} border-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-start transition-all duration-300 relative text-white group`}
              >
                <div
                  className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full group-hover:bg-[#DD4322] transition-colors`}
                />
                <span className="text-4xl sm:text-5xl font-black tracking-tighter block mb-1">
                  {counter.value}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {counter.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Marquee />

      {/* --- 3. SERVICES SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="services"
        className="py-32 px-6 bg-[#030303] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.05),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-[#D9A021] text-[10px] font-bold uppercase tracking-[5px] block">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
              Everything Your Brand Needs.{" "}
              <span className="text-[#D9A021]">One Roof.</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">
              Stop juggling vendors. From your first logo to your first viral
              post to your first ad campaign, Craftraction handles every layer
              of your digital presence. Bridging cutting-edged creativity and
              predictable digital solutions. We step outside traditional agency
              architecture to create innovative digital solutions. We redefine
              hoe your customers interact wth your products by infusing hyper
              clean branding, enterprise website positioning, high-impact
              printing, brand visibility and strategic advertising into your
              daily framework.
            </p>
          </div>

          {/* Interactive Grid Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  key={index}
                  className="bg-white/1 border border-white/5 rounded-2xl p-8 hover:border-[#DD4322]/30 hover:bg-white/3 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none rounded-bl-full group-hover:from-amber-500/3 transition-all">
                    <Image src={"/images/logo_icon.png"} alt="icon" height={100} width={100} />
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#DD4322] group-hover:border-[#DD4322] group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                      <IconComp className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-amber-500 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* --- 4. PORTFOLIO SHOWCASE --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ delay: 1 * 0.05, duration: 0.5 }}
        whileHover={{ y: -6 }}
        id="portfolio"
        className="py-32 overflow-hidden bg-black relative"
      >
        {/* Ambient background glow focusing the marquee */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#DD4322]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[#D9A021] text-[10px] font-bold uppercase tracking-[5px] block">
              Our Selected Work{" "}
              <span className="text-[#D9A021]">Portfolio</span>
            </span>
            <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
              Visual Case{" "}
              <span className="text-[#D9A021]">Implementations</span>
            </h2>
          </div>

          {/* Filtering Navigation Container */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-white/5 md:border-none relative z-20"
            style={{ scrollbarWidth: "none" }}
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] font-bold uppercase tracking-widest px-6 py-3 cursor-pointer rounded-full border whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                  activeCategory === category
                    ? "bg-[#D9A021] text-black border-white shadow-lg"
                    : "bg-transparent text-gray-400 border-[#DD4322] hover:border-[#DD7107] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --- Infinite Marquee Track Wrappers --- */}
        <div className="flex overflow-hidden select-none group hover-pause border-y border-white/5 py-4 bg-zinc-950/30 relative z-10">
          {/* Track 1 */}
          <div className="flex shrink-0 items-stretch gap-8 min-w-full animate-marquee pr-8">
            {[
              ...filteredPortfolio,
              ...filteredPortfolio,
              ...filteredPortfolio,
            ].map((item, idx) => (
              <div
                key={`track1-${item.title}-${idx}`}
                className="w-[320px] sm:w-100 bg-white/1 border border-white/5 rounded-2xl overflow-hidden group/card hover:border-amber-500/30 hover:bg-white/3 transition-all duration-500 flex flex-col justify-between shrink-0"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={`Case representation for ${item.title}`}
                    className="object-cover w-full h-full transform group-hover/card:scale-105 transition-transform duration-700 opacity-70 group-hover/card:opacity-100"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#fffff] via-[#fffff] to-[#fffff] opacity-80" />
                </div>
                <div className="p-6 flex items-center justify-between gap-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-#D9A021 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover/card:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center focus:outline-none"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      }}
                      className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-white transition-all shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- 5. WHY CHOOSE US SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="why-us"
        className="py-32 px-6 bg-linear-to-r from-[#DD4322] to-[#DD7107] border-t border-b border-white/5 relative"
      >
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#000000] text-[10px] tracking-[5px] font-bold uppercase block">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-[1.05]">
              Other agencies make content.{" "}
              <span className="text-[#000000]">We build momentum.</span>
            </h2>
            <p className="text-[#000000b6] text-justify text-xs sm:text-sm leading-relaxed">
              The difference between a brand that drifts and a brand that moves
              is intentional creative force. We bring strategic thinking to
              every brief, bold execution to every project, and relentless
              energy to every platform. There are hundreds of agencies. Most
              over-promise and under-deliver. Craftraction was built around one
              belief: your business deserves a digital team that shows up every
              single day, with strategy, creativity and execution to back it up.
              We do not consult and leave. We execute. Your entire digital
              presence is managed, maintained and optimised by our team, end to
              end, every day.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-white/5 hover:border-white/10 p-6 rounded-2xl space-y-4 transition-all duration-300 relative group"
              >
                <div className="w-8 h-8 bg-white/2 text-[#DD4322] border border-white/10 rounded-lg flex items-center justify-center group-hover:text-[#ffffff] group-hover:border-[#DD4322]/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#D9A021] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#ffffffdc] text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Marquee />

      {/* --- 6. TESTIMONIALS SECTION --- */}
      {/* Testimonials section remained fully commented as per the source parameters rule */}

      {/* --- 7. PROCESS SECTION --- */}
      {/* <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="process"
        className="py-32 px-6 bg-[#000000] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-[#D9A021] text-[10px] font-bold uppercase tracking-widest block">
              Workflow Blueprint
            </span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white">
              How Do We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {workflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4 relative group"
              >
                <div className="text-5xl font-black text-white/5 group-hover:text-amber-500/20 transition-colors tracking-tighter font-mono border-b border-white/5 pb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#D9A021] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      <section
        id="process"
        className="bg-white/2 py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[10px] tracking-[5px] uppercase text-white font-semibold mb-3.5 flex items-center gap-3">
            <span className="text-[#D9A021] block"> How We Work</span>
          </div>

          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-4">
            Ideate. Create. <span className="text-[#D9A021]">Shift.</span>
          </h2>

          <p className="text-[15px] text-[rgba(255,248,240,0.55)] font-light max-w-[520px] leading-relaxed mb-14">
            {`Every engagement starts with understanding what's holding your brand

            back. Then we move.`}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`bg-black border border-white/2 p-12 relative overflow-hidden transition-all duration-30 hover:border-[${step.barColor}] hover:-translate-y-1 group`}
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

      {/* <section
        id="pricing"
        className="bg-black py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[9px] tracking-[5px] uppercase text-[#D9A021] font-semibold mb-3">
            Pricing
          </div>
          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-5">
            Transparent. Fair.
            <br />
            <span className="text-[#D9A021]">Built to Move.</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,248,240,0.55)] font-light max-w-[520px] leading-relaxed mb-10">
            Bundle services and save. Pick the package that matches where your
            brand is right now.
          </p>

          CURRENCY CONTROLLER SWITCH
          <div className="flex border rounded-xl border-[rgba(212,160,48,0.14)] w-fit mb-10 overflow-hidden bg-[#090806]">
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
                className={`p-9 flex rounded-xl flex-col relative transition-transform hover:-translate-y-1 shadow-lg ${pkg.theme}`}
              >
                {pkg.pop && (
                  <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 bg-black text-[#F06428] text-[7px] tracking-[3px] uppercase px-3.5 py-1.5 font-extrabold whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                <span
                  className={`text-[8px] tracking-widest uppercase font-semibold mb-2.5 ${i === 1 ? "text-black/40" : i === 2 ? "text-white/60" : "text-[rgba(255,248,240,0.28)]"}`}
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
                      className={`text-xs font-light pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-[10px] before:font-bold ${i === 1 ? "text-black/75 before:text-black" : i === 2 ? "text-white/80 before:text-white" : "text-[rgba(255,248,240,0.55)] before:text-[#D9A021]"}`}
                    >
                      {li}
                    </li>
                  ))}
                </ul>

                <Link href={"#contact"}>
                  <button
                    className={`mt-6 w-full py-3.5 text-center text-[9px] tracking-widest uppercase font-extrabold rounded-xl border-none cursor-pointer transition-opacity ${pkg.btnStyle}`}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Link href={"/pricing"}>
          <button
            className={`mt-6 w-full py-3.5 rounded-xl text-center text-[9px] tracking-widest uppercase font-extrabold cursor-pointer transition-opacity border border-[#ffffffa5]`}
          >
            View Full Pricing &rarr;
          </button>
        </Link>
      </section> */}

      {/* FAQ INTERACTIVE COMPONENT EXPANDABLE */}
      <section
        id="faq"
        className="bg-black/10 border-b border-white/5 py-24 px-6 md:px-12 border-t border-[rgba(212,160,48,0.14)] relative z-10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[9px] tracking-[5px] uppercase text-[#D9A021] font-semibold mb-3">
            FAQ
          </div>
          <h2 className="font-syne text-[clamp(28px,4vw,50px)] font-extrabold tracking-tight leading-[1.06] text-white mb-5">
            Questions We Get
            <br />
            <span className="text-[#D9A021]">Asked a Lot.</span>
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
                  className={`bg-[#161310] border rounded-xl transition-colors duration-300 ${isOpen ? "border-[rgba(212,160,48,0.4)]" : "border-[rgba(212,160,48,0.14)]"}`}
                >
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex items-center rounded-xl justify-between p-6 md:p-7 cursor-pointer gap-4 bg-transparent hover:bg-[#1D1910] transition-colors select-none"
                  >
                    <span
                      className={`font-syne text-sm md:text-base font-bold leading-snug flex-1 transition-colors ${isOpen ? "text-[#D9A021]" : "text-[#FFF8F0]"}`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 flex-shrink-0 border border-[rgba(212,160,48,0.14)] rounded-full flex items-center justify-center text-sm font-light text-[rgba(255,248,240,0.28)] transition-all duration-300 ${isOpen ? "rotate-45 bg-[#D9A021] border-[#D9A021] text-[#090806]" : ""}`}
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

      {/* --- 8. CALL TO ACTION (CTA) --- */}
      {/* <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        className="py-32 px-6 max-w-5xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-[#DD4322]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white max-w-3xl mx-auto leading-none"
          >
            Ready to{" "}
            <span className="text-[#D9A021] block sm:inline">
              Gain Traction?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xs sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your business and what you are trying to build. We
            will come back with a clear plan and honest pricing. No pressure. No
            fluff.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-52 bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-[#DD4322] hover:text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Book Strategy Session
            </a>
            <a
              href="mailto:craftraction@gmail.com"
              className="w-full sm:w-52 bg-transparent text-white border border-white/10 font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white/5 hover:border-white transition-colors duration-300 flex items-center justify-center focus:outline-none"
            >
              Direct Mail Setup
            </a>
          </motion.div>
        </div>
      </motion.section> */}

      {/* CORE CTA HIGH CONVERSION MODULE SECTION */}

      <section
        id="CTA"
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
              <button className="bg-[#090806] rounded-4xl text-[#D4A030] border-none px-9 py-4 text-[10px] tracking-[3px] uppercase font-extrabold cursor-pointer transition-colors hover:bg-[#1a1208]">
                Direct Message Setup &rarr;
              </button>
            </Link>

            <Link href={"#contact"}>
              <button className="border-2 rounded-4xl bg-white border-white text-[#090806] px-9 py-3.5 text-[10px] tracking-[3px] uppercase font-semibold cursor-pointer transition-colors hover:border-black">
                Book Strategy Session
              </button>
            </Link>
          </div>

          <div className="font-serif text-[clamp(22px,4vw,40px)] italic text-black/35 mt-10">
            {`Let's build yours.`}
          </div>
        </div>
      </section>

      {/* --- 9. CONTACT SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="contact"
        className="py-32 px-6 bg-[#030303] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest block">
                Contact Us
              </span>
              <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-none">
                Let&apos;s Launch <br /> <span className="text-[#D9A021]">Something Real.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9A021] group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    HQ Studio Address
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    5 Isaac John Street, Ikeja GRA, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9A021] group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    Phone Integration
                  </h4>
                  <a
                    href="tel:+2348151798442"
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors block mt-1"
                  >
                    +234 815 179 8442
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9A021] group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    Secure Transmission Email
                  </h4>
                  <a
                    href="mailto:craftraction@gmail.com"
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors block mt-1"
                  >
                    craftraction@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9A021] group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    Operational Framework Hours
                  </h4>
                  <div className="text-sm text-gray-400 mt-1 space-y-0.5">
                    <p>Monday: 6:00 AM – 10:30 PM</p>
                    <p>Tuesday – Sunday: 7:00 AM – 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Direct Messaging Channels Integration */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/2349023792627"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-black font-bold text-[10px] uppercase tracking-widest px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <FaWhatsapp className="w-4 h-4 fill-current" />
                {/* <MessageSquare  /> */}
                <span>WhatsApp Sync Channel</span>
              </motion.a>
            </div>
          </div>

          {/* Fully Styled Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white/1 border border-white/5 p-8 sm:p-10 rounded-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-[#DD4322] via-[#D9A021] to-[#DD7107]" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                  >
                    Individual/Company Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#DD4322] focus:ring-1 focus:ring-[#DD4322] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                  >
                    Secure Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#DD4322] focus:ring-1 focus:ring-[#DD4322] transition-all bg-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                >
                  Select Service Required *
                </label>
                <select
                  id="service"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#DD4322] focus:ring-1 focus:ring-[#DD4322] transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Branding & Creative Design Architecture</option>
                  <option>Web Development and management</option>
                  <option>Targeted Distribution Digital Ads Campaigns</option>
                  <option>Social Media Management</option>
                  <option>Printing</option>
                  <option>Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                >
                  Project Context Brief *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#DD4322] focus:ring-1 focus:ring-[#DD4322] transition-all resize-none bg-black"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#DD4322] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 border border-transparent hover:border-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Transmitting..." : "Transmit Project Request"}
              </motion.button>

              {formStatus && (
                <p
                  className={`text-xs font-semibold text-center mt-4 ${formStatus.success ? "text-green-400" : "text-[#D9A021]"}`}
                >
                  {formStatus.msg}
                </p>
              )}

              <AnimatePresence>
                {formSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-green-400 font-semibold text-center mt-4"
                  >
                    ✓ Message sent successfully. Our Team will connect with you
                    in 12 operational hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.section>

      {/* --- 10. PREMIUM ACCESSIBLE FOOTER --- */}
      <footer className="bg-[#000000] border-t border-white/5 pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Agency Bio Block */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none rounded-lg relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="craftraction_logo"
                  width={250}
                  height={250}
                  loading="eager"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                  className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto transition-all duration-300 group-hover:brightness-110"
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              Bespoke creative design patterns, scalable performance
              optimization, and deep enterprise visibility ecosystems. Built for
              global disruption.
            </p>
          </div>

          {/* Quick Architecture Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Ecosystem Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-[#DD4322] transition-colors w-max"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Strategic Services Shortcut Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Core Competencies
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="hover:text-white transition-colors">
                Branding & Graphics Architecture
              </li>
              <li className="hover:text-white transition-colors">
                Bespoke Headless Development
              </li>
              <li className="hover:text-white transition-colors">
                High-ROI Performance Marketing
              </li>
              <li className="hover:text-white transition-colors">
                Luxury High-Fidelity Printing
              </li>
            </ul>
          </div>

          {/* Social Platform Synchronization Link Block */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Sync Ecosystem Network
            </h4>
            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <Link
                href="https://tiktok.com/@craftraction"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 flex gap-2 transition-colors"
              >
                <FaTiktok /> @craftraction
              </Link>
              <Link
                href="https://instagram.com/@craftraction"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 flex gap-2 transition-colors"
              >
                <FaInstagramSquare /> @craftraction
              </Link>
              <Link
                href="mailto:craftraction@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 flex gap-2 transition-colors"
              >
                <BiLogoGmail /> craftraction@gmail.com
              </Link>
              <Link
                href="https://wa.me/2349023792627"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 flex gap-2 transition-colors"
              >
                <FaWhatsapp /> +234 902 379 2627
              </Link>
            </div>
          </div>
        </div>

        {/* Global Structural Copyright Row */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left relative z-10">
          <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
            © 2026 Craftraction. All rights reserved globally.
          </p>
          <div className="flex gap-6 text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
            <a href="#" className="hover:text-white transition-colors">
              System Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Operations
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

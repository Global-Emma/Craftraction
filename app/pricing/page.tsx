'use client';

import React, { useState, useRef } from 'react';

// --- DATA STRUCTURES FROM YOUR FILES ---
const INDIVIDUAL_SERVICES = [
  { id: 'brand-identity', name: 'Brand Identity', desc: 'Logo, colour, typography, guidelines and full visual identity.', price: '₦80k', note: 'up to ₦150k', tag: 'Promo Price', tagStyle: 'bg-[#D4A030] text-[#090806]' },
  { id: 'social-media', name: 'Social Media Management', desc: 'Monthly content, scheduling and community management.', price: '₦100k', note: 'up to ₦500k/mo', tag: null },
  { id: 'web-design', name: 'Web Design', desc: 'Custom website. Mobile-optimised, SEO-ready, built to convert.', price: '₦100k', note: 'per project', tag: null },
  { id: 'paid-ads', name: 'Paid Ads', desc: 'Meta and Google Ads management. Ad spend not included.', price: '₦80k', note: 'excl. ad spend', tag: null },
  { id: 'account-recovery', name: 'Account Recovery', desc: 'Hacked or disabled social accounts recovered professionally.', price: '₦85k', note: 'case dependent', tag: 'New', tagStyle: 'bg-[#F06428] text-white' },
  { id: 'media-production', name: 'Media Production', desc: 'Professional photo and video production per project.', price: '₦50k', note: 'per project', tag: null },
  { id: 'print-press', name: 'Print & Press', desc: 'Flyers, graphics, banners and print materials. Bulk orders discounted.', price: '₦10k', note: 'per design', tag: null },
  { id: 'cac-registration', name: 'CAC Registration', desc: 'Business name or company registration with the Corporate Affairs Commission.', price: '₦40k', note: 'flat fee', tag: 'New', tagStyle: 'bg-[#F06428] text-white' },
];

const BUNDLED_PACKAGES = [
  {
    id: 'pkg-launch',
    tier: 'Starter',
    name: 'Launch Pack',
    tagline: 'For new businesses ready to show up properly.',
    price: '₦210k',
    period: 'One-time project',
    features: [
      'Brand Identity (logo + colours + fonts + guidelines)',
      'Social media profile setup and management (1 platform)',
      '7 custom flyers',
      '2 rounds of revisions'
    ],
    cardStyle: 'bg-[#161310] border border-[#D4A030]/14 text-[#FFF8F0]',
    priceStyle: 'text-[#D4A030]',
    btnStyle: 'bg-[#D4A030] text-[#090806] hover:bg-[#F0BC40]',
    popular: false
  },
  {
    id: 'pkg-scale',
    tier: 'Growth',
    name: 'Scale Pack',
    tagline: 'For businesses ready to grow with intention.',
    price: '₦650k',
    period: 'One-time + 1 month support',
    features: [
      'Full Brand Identity System',
      '5-page custom website',
      '1 month social media management',
      'Brand video shoot',
      '3 ad creatives',
      'Full brand guidelines',
      '3 rounds of revisions'
    ],
    cardStyle: 'bg-[#D4A030] text-[#090806]',
    priceStyle: 'text-[#090806]',
    btnStyle: 'bg-[#090806] text-[#D4A030] hover:bg-[#1A1208]',
    popular: true
  },
  {
    id: 'pkg-authority',
    tier: 'Premium',
    name: 'Authority Pack',
    tagline: 'For established brands that want to dominate.',
    price: '₦1.2M',
    period: 'Project + 3 months retainer',
    features: [
      'Complete Brand Identity System',
      'Full Brand Strategy',
      '3 months social media management',
      'Professional video production',
      'Paid Ads setup + 1 month management',
      'CAC Registration included',
      'Unlimited revisions'
    ],
    cardStyle: 'bg-[#F06428] text-white',
    priceStyle: 'text-white',
    btnStyle: 'bg-white text-[#F06428] hover:bg-[#FFF8F0]',
    popular: false
  }
];

const ADDONS = [
  { id: 'addon-page', name: 'Extra Web Page', price: '₦30k', desc: 'Additional pages beyond your package' },
  { id: 'addon-refresh', name: 'Brand Refresh', price: '₦80k', desc: 'Update existing brand without full redesign' },
  { id: 'addon-deck', name: 'Pitch Deck Design', price: '₦60k', desc: 'Investor or sales deck designed on-brand' },
  { id: 'addon-creatives', name: 'Extra Ad Creatives', price: '₦25k/set', desc: 'Static or animated creative sets' },
  { id: 'addon-template', name: 'Email Template', price: '₦40k', desc: 'Branded email newsletter template' },
  { id: 'addon-rush', name: 'Rush Delivery', price: '+₦25k', desc: '24-48 hour turnaround on any project' },
];

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState('');
  const formRef = useRef<HTMLOptionElement>(null);

  // Smooth scroll and auto-populate form dropdown options dynamically
  const handleSelectService = (serviceValue: string) => {
    setSelectedService(serviceValue);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#090806] text-[#FFF8F0] min-h-screen selection:bg-[#F06428] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[50vh] flex items-center px-6 pt-40 pb-16 md:px-12 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_80%_30%,rgba(212,160,48,0.1)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(240,100,40,0.07)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 text-[9px] font-semibold tracking-[5px] uppercase text-[#D4A030] before:content-[''] before:w-8 before:h-[2px] before:bg-[#D4A030] before:block">
            Pricing
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-2.5px] leading-[1.03] text-white my-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Every service.<br />Every <span className="text-[#D4A030]">price.</span> <span className="text-[#F06428]">No surprises.</span>
          </h1>
          <p className="text-base sm:text-lg font-light leading-relaxed text-[#FFF8F0]/55 max-w-xl">
            Browse our full price list below, or jump straight to a bundled package if you would rather have everything sorted in one go.
          </p>
        </div>
      </section>

      {/* --- INDIVIDUAL PRICING ROWS --- */}
      <section className="bg-[#100E0A] px-6 py-24 border-t border-[#D4A030]/14 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-[9px] font-semibold tracking-[5px] uppercase text-[#D4A030] mb-4 flex items-center gap-3 before:content-[''] before:w-7 before:h-[2px] before:bg-[#D4A030]">
            Individual Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-2px] text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Pay for exactly<br />what you need.
          </h2>
          <p className="text-sm font-light text-[#FFF8F0]/55 max-w-xl mb-12">
            All prices are starting points. Final quotes depend on scope and are confirmed before any work begins.
          </p>

          <div className="grid grid-cols-1 gap-1">
            {INDIVIDUAL_SERVICES.map((svc) => (
              <div 
                key={svc.id}
                onClick={() => handleSelectService(svc.id)}
                className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center p-6 bg-[#161310] border border-[#D4A030]/14 border-l-3 border-l-transparent hover:border-l-[#D4A030] hover:bg-[#1D1910] transition-all cursor-pointer"
              >
                <div>
                  <div className="text-base font-bold text-[#FFF8F0] group-hover:text-[#D4A030] transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {svc.name}
                  </div>
                  <div className="text-xs text-[#FFF8F0]/28 mt-1">{svc.desc}</div>
                </div>
                <div className="sm:text-right min-w-[140px] flex flex-col sm:items-end">
                  <div className="text-[8px] tracking-[2px] uppercase text-[#FFF8F0]/28 mb-1">From</div>
                  <div className="text-xl font-extrabold text-[#D4A030]" style={{ fontFamily: "'Syne', sans-serif" }}>{svc.price}</div>
                  <div className="text-[10px] text-[#FFF8F0]/28 mt-0.5">{svc.note}</div>
                  {svc.tag && (
                    <span className={`inline-block mt-2 px-2 py-0.5 text-[7px] font-bold tracking-[2px] uppercase ${svc.tagStyle}`}>
                      {svc.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BUNDLED PACKAGES --- */}
      <section className="bg-[#090806] px-6 py-24 border-t border-[#D4A030]/14 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-[9px] font-semibold tracking-[5px] uppercase text-[#D4A030] mb-4 flex items-center gap-3 before:content-[''] before:w-7 before:h-[2px] before:bg-[#D4A030]">
            Bundled Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-1.5px] text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            More Value. One Price.
          </h2>
          <p className="text-xs font-light text-[#FFF8F0]/55 mt-2 mb-12">Bundle services and save absolute chunks setup capital.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {BUNDLED_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${pkg.cardStyle}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 bg-[#090806] text-[#F06428] text-[7px] tracking-[3px] font-extrabold uppercase px-3 py-1 whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <p className="text-[8px] tracking-[4px] uppercase font-semibold opacity-60 mb-2">{pkg.tier}</p>
                <h3 className="text-2xl font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>{pkg.name}</h3>
                <p className="text-xs font-light opacity-75 mt-1 min-h-[32px]">{pkg.tagline}</p>
                
                <div className={`text-4xl font-extrabold my-6 ${pkg.priceStyle}`} style={{ fontFamily: "'Syne', sans-serif" }}>
                  {pkg.price}
                </div>
                <p className="text-[10px] opacity-60 mb-6">{pkg.period}</p>
                
                <div className="h-[1px] bg-current opacity-15 mb-6" />
                
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="text-xs font-light pl-5 relative leading-relaxed">
                      <span className="absolute left-0 top-0 font-bold">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleSelectService(pkg.id)}
                  className={`w-full mt-8 p-3 text-[9px] tracking-[2px] font-extrabold uppercase transition-all ${pkg.btnStyle}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADD-ONS SECTION --- */}
      <section className="bg-[#100E0A] px-6 py-16 border-t border-[#D4A030]/14 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[9px] tracking-[4px] uppercase font-medium text-[#FFF8F0]/28 mb-6">Add-On Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {ADDONS.map((addon) => (
              <div 
                key={addon.id}
                onClick={() => handleSelectService(addon.id)}
                className="bg-[#161310] border border-[#D4A030]/14 p-6 hover:bg-[#1D1910] transition-colors cursor-pointer group flex flex-col justify-between gap-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="text-sm font-bold text-white group-hover:text-[#D4A030] transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {addon.name}
                  </span>
                  <span className="text-sm font-extrabold text-[#D4A030]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {addon.price}
                  </span>
                </div>
                <p className="text-xs text-[#FFF8F0]/55 font-light">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DYNAMIC ACTION-CONNECTED FORM SECTION --- */}
      <section ref={formRef} id="contact" className="bg-[#090806] px-6 py-24 border-t border-[#D4A030]/14 md:px-12 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          
          {/* Form Context Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[9px] font-semibold tracking-[5px] uppercase text-[#F06428] before:content-[''] before:w-7 before:h-[2px] before:bg-[#F06428] before:block">
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-2px] leading-[1.04] text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Let’s build something<br />that shifts gears.
            </h2>
            <p className="text-sm font-light leading-relaxed text-[#FFF8F0]/55 max-w-md">
              Have an upcoming project or need clarity on a custom quote? Drop us a line below. Your selected package or individual scope will pre-configure automatically.
            </p>
            
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-[2px] uppercase text-[#FFF8F0]/28">Direct Inquiries</span>
                <span className="text-base sm:text-lg font-bold text-[#D4A030]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  hello@craftraction.com
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-[2px] uppercase text-[#FFF8F0]/28">Operational Hours</span>
                <span className="text-base sm:text-lg font-bold text-[#D4A030]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Mon — Fri / 9:00 AM — 5:00 PM (WAT)
                </span>
              </div>
            </div>
          </div>

          {/* Fully Managed Dynamic Form */}
          <div className="bg-[#161310] border border-[#D4A030]/14 p-6 sm:p-10 relative shadow-2xl backdrop-blur-md">
            <form action="https://formspree.io/f/yourformspreeID" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[2px] uppercase text-[#D4A030] font-semibold" htmlFor="form-name">
                    Your Name
                  </label>
                  <input 
                    className="w-full bg-[#090806]/40 border border-[#D4A030]/14 p-4 text-[#FFF8F0] text-sm focus:outline-none focus:border-[#F06428] focus:bg-[#1D1910] transition-colors" 
                    type="text" 
                    id="form-name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[2px] uppercase text-[#D4A030] font-semibold" htmlFor="form-email">
                    Email Address
                  </label>
                  <input 
                    className="w-full bg-[#090806]/40 border border-[#D4A030]/14 p-4 text-[#FFF8F0] text-sm focus:outline-none focus:border-[#F06428] focus:bg-[#1D1910] transition-colors" 
                    type="email" 
                    id="form-email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>

                {/* Dynamically Synchronized Selection Box */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-[9px] tracking-[2px] uppercase text-[#D4A030] font-semibold" htmlFor="form-service">
                    Selected Scope / Package
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full bg-[#090806]/40 border border-[#D4A030]/14 p-4 text-[#FFF8F0] text-sm focus:outline-none focus:border-[#F06428] focus:bg-[#1D1910] transition-colors appearance-none cursor-pointer" 
                      id="form-service" 
                      name="service" 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                    >
                      <option value="" disabled className="bg-[#161310]">Select your preferred choice</option>
                      
                      <optgroup label="Bundled Value Packs" className="bg-[#161310] text-[#D4A030] font-bold">
                        {BUNDLED_PACKAGES.map(p => (
                          <option key={p.id} value={p.id} className="text-white">{p.name} — {p.price}</option>
                        ))}
                      </optgroup>

                      <optgroup label="Individual Operations" className="bg-[#161310] text-[#F06428] font-bold">
                        {INDIVIDUAL_SERVICES.map(s => (
                          <option key={s.id} value={s.id} className="text-white">{s.name} (Starts {s.price})</option>
                        ))}
                      </optgroup>

                      <optgroup label="Add-On Modules" className="bg-[#161310] text-[#FFF8F0]/50 font-bold">
                        {ADDONS.map(a => (
                          <option key={a.id} value={a.id} className="text-white">{a.name} (+{a.price})</option>
                        ))}
                      </optgroup>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#D4A030]">
                      <svg className="w-2.5 h-2.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 10 6">
                        <path d="M1 1l4 4 4-4"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Description Field */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-[9px] tracking-[2px] uppercase text-[#D4A030] font-semibold" htmlFor="form-msg">
                    Project Requirements &amp; Details
                  </label>
                  <textarea 
                    className="w-full bg-[#090806]/40 border border-[#D4A030]/14 p-4 text-[#FFF8F0] text-sm focus:outline-none focus:border-[#F06428] focus:bg-[#1D1910] transition-colors resize-none min-h-[140px]" 
                    id="form-msg" 
                    name="message" 
                    placeholder="Tell us about your operational milestones, target objectives, or unique custom specifications..." 
                    required
                  />
                </div>

              </div>
              
              <button 
                className="w-full bg-[#F06428] hover:bg-[#FF8040] text-white border-none p-[18px] text-[10px] tracking-[3px] uppercase font-extrabold cursor-pointer transition-all transform hover:-translate-y-[0.5px]" 
                type="submit"
              >
                Submit Briefing &rarr;
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
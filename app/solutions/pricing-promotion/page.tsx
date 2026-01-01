'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PricingPromotionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05152F] leading-tight">
              Elevate price precision and optimize pricing strategy
            </h1>
            <p className="text-lg text-[#05152F]/70 leading-relaxed">
              Unlock the power of data-driven pricing. Our AI helps you define the optimal price point for every product, maximizing margins while keeping customers happy.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-[#0077B6] text-white font-bold hover:bg-[#005f92] transition-colors shadow-lg"
               >
                   Get Started
               </Link>
               <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-white text-[#0077B6] border-2 border-[#0077B6] font-bold hover:bg-blue-50 transition-colors"
               >
                   View Video
               </Link>
            </div>
        </div>
        <div className="relative flex justify-center items-center">
            {/* Organic shape background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full opacity-70 blur-3xl -z-10" />
            <div className="relative z-10 w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                 <Image
                    src="/vectors/4.svg"
                    alt="Pricing Strategy"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                 />
            </div>
        </div>
      </section>

      {/* 2. BLUE WAVE / METRICS SECTION */}
      <section className="w-full bg-[#EAF6FA] py-20 relative overflow-hidden">
         {/* Decorative background visual */}
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Image src="/vectors/süsleme (6).svg" alt="decoration" width={600} height={600} className="w-full h-full object-cover" />
         </div>

         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#05152F] mb-12 max-w-3xl mx-auto">
                 Streamline pricing processes to maximize sales, profit, or volume
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#05152F] mb-2">Increase</h3>
                      <p className="text-[#05152F]/60">Profit Margins</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#05152F] mb-2">Grow</h3>
                      <p className="text-[#05152F]/60">Market Share</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#05152F] mb-2">Improve</h3>
                      <p className="text-[#05152F]/60">Price Perception</p>
                  </div>
              </div>
         </div>
      </section>

      {/* 3. FEATURE: PRECISE DECISIONS */}
      <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="lg:order-1 bg-slate-50 p-8 rounded-3xl flex justify-center items-center">
                 <Image src="/vectors/5.svg" alt="Precision" width={400} height={300} className="w-full h-auto" />
             </div>
             <div className="lg:order-2 space-y-6">
                 <h2 className="text-3xl font-bold text-[#05152F]">
                    Bee2 AI creates precise and informed pricing decisions
                 </h2>
                 <p className="text-[#05152F]/70 text-lg">
                    Our algorithms analyze historical data, competitor prices, and demand elasticity to recommend the perfect price. Stop guessing and start optimizing with scientific precision.
                 </p>
             </div>
          </div>
      </section>

      {/* 4. FEATURE: PRICING IMAGE */}
      <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="lg:order-2 bg-blue-50 p-8 rounded-3xl flex justify-center items-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50" />
                 <Image src="/vectors/6.svg" alt="Pricing Image" width={400} height={300} className="w-full h-auto relative z-10" />
             </div>
             <div className="lg:order-1 space-y-6">
                 <div className="text-blue-600 font-bold uppercase tracking-wider text-sm">Key Feature</div>
                 <h2 className="text-3xl font-bold text-[#05152F]">
                    Effortlessly shape the pricing image customers desire
                 </h2>
                 <p className="text-[#05152F]/70 text-lg">
                    Maintain your competitive edge without eroding margins. Define your brand&apos;s pricing strategy—whether premium, competitive, or discounter—and let AI handle the execution.
                 </p>
             </div>
          </div>
      </section>

      {/* 5. MARKET LEADERSHIP (Center Text) */}
      <section className="w-full bg-[#FAFCFE] py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#05152F] mb-6">
                  Improve retail pricing to achieve market leadership
              </h2>
              <p className="text-[#05152F]/60 mb-8 max-w-2xl mx-auto">
                  Take control of your category. Respond faster to market changes than your competitors.
              </p>
              <div className="flex justify-center gap-4">
                  <span className="px-6 py-2 rounded-full border border-slate-200 text-[#05152F] font-semibold">Base Price</span>
                  <span className="px-6 py-2 rounded-full border border-slate-200 text-[#05152F] font-semibold">Promotions</span>
                  <span className="px-6 py-2 rounded-full border border-slate-200 text-[#05152F] font-semibold">Markdowns</span>
              </div>
          </div>
      </section>

      {/* 6. QUOTE / TEAM */}
      <section className="w-full bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-serif italic text-[#05152F]">
                      &quot;Add to your team&apos;s pricing brilliance&quot;
                  </h3>
                  <p className="text-[#05152F]/70">
                      Empower your pricing analysts with tools that automate the routine and surface the strategic. Turning data into profitable action has never been easier.
                  </p>
              </div>
              <div className="w-48 h-48 rounded-full bg-slate-200 overflow-hidden relative border-4 border-white shadow-lg">
                   <Image src="/vectors/7.svg" alt="Team" width={200} height={200} className="w-full h-full object-cover" />
              </div>
          </div>
      </section>

      {/* 7. WARNING / VALUE (Blue Blob) */}
      <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#DEEFF7] skew-y-3 transform origin-top-left -z-10" />
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                   <div className="w-64 h-64 md:w-80 md:h-80 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-6xl shadow-2xl relative z-10 rotate-12">
                       -15%
                   </div>
                   <div className="absolute top-10 left-10 w-full h-full bg-white/30 rounded-full blur-2xl -z-10" />
              </div>
              <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#05152F]">
                      The price is right, but at what cost?
                  </h2>
                  <p className="text-[#05152F]/70 text-lg">
                      Blindly matching competitors or slashing prices destroys value. Our holistic approach considers costs, demand, and cross-item effects to ensure every price move contributes to your bottom line.
                  </p>
                  <Link href="/contact" className="inline-block px-6 py-3 rounded-lg border-2 border-[#0077B6] text-[#0077B6] font-bold hover:bg-[#0077B6] hover:text-white transition-colors">
                      Learn the True Cost
                  </Link>
              </div>
          </div>
      </section>

       {/* 9. BOTTOM CTA (Blue Banner) */}
       <div className="w-full px-4 mb-20">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0077B6] to-[#0096C7] rounded-3xl p-12 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">See beyond the blind spots generated by machine learning that actually works</h2>
                     <Link
                         href="/contact"
                         className="bg-white text-[#0077B6] px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                     >
                         Book a Demo
                     </Link>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
       </div>

    </main>
  );
}

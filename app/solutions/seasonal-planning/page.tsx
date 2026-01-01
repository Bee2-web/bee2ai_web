'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SeasonalPlanningPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="space-y-8">
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Seasonal planning solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05152F] leading-tight">
              Pinpoint clearance opportunities for higher turnover and better margins
            </h1>
            <p className="text-lg text-[#05152F]/70 leading-relaxed">
              Generate optimal pricing for seasonal, promotional, or end-of-lifecycle products. 
              Our AI maximizes revenue while clearing inventory efficiently.
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
                   Request Demo
               </Link>
            </div>
        </div>
        <div className="relative flex justify-center items-center">
             {/* Visual */}
             <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-blue-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/vectors/12.svg"
                            alt="Seasonal Planning"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                   </div>
                   {/* Floating Chart Card */}
                   <div className="absolute top-10 right-0 w-48 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-float-slow">
                        <div className="h-2 w-full bg-slate-100 rounded mb-2" />
                        <div className="h-2 w-2/3 bg-slate-100 rounded mb-4" />
                        <div className="flex items-end justify-between h-16 gap-1">
                             <div className="w-full bg-blue-100 rounded-t h-[40%]" />
                             <div className="w-full bg-blue-200 rounded-t h-[60%]" />
                             <div className="w-full bg-blue-300 rounded-t h-[30%]" />
                             <div className="w-full bg-blue-400 rounded-t h-[80%]" />
                             <div className="w-full bg-blue-500 rounded-t h-[50%]" />
                        </div>
                   </div>
            </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Circles) */}
      <section className="w-full bg-white py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#05152F] mb-12 max-w-3xl mx-auto">
                 Generate optimal pricing for seasonal, promotional, or end-of-lifecycle products
            </h2>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="#EAF4F9" strokeWidth="16" fill="transparent" />
                            <circle cx="96" cy="96" r="80" stroke="#0077B6" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="0" />
                        </svg>
                        <span className="absolute text-4xl font-bold text-[#05152F]">100%</span>
                    </div>
                    <p className="text-[#05152F] font-bold">Clearance Forecast Accuracy</p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                         <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="#EAF4F9" strokeWidth="16" fill="transparent" />
                            <circle cx="96" cy="96" r="80" stroke="#FDB955" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="281" />
                        </svg>
                        <span className="absolute text-4xl font-bold text-[#05152F]">44%</span>
                    </div>
                    <p className="text-[#05152F] font-bold">Inventory Reduction</p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" r="80" stroke="#EAF4F9" strokeWidth="16" fill="transparent" />
                            <circle cx="96" cy="96" r="80" stroke="#0077B6" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="125" />
                        </svg>
                        <span className="absolute text-4xl font-bold text-[#05152F]">75%</span>
                    </div>
                    <p className="text-[#05152F] font-bold">Time Saved vs Manual</p>
                </div>
            </div>
      </section>

      {/* 3. OPTIMIZATION FEATURE (Left Image, Right Text) */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                 <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10">
                     <Image src="/vectors/3.svg" alt="Clearance" width={600} height={500} className="w-full h-auto bg-slate-50" />
                 </div>
                 {/* Floating circular element */}
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
                     <div className="text-center">
                         <div className="text-2xl font-bold text-blue-600">AI</div>
                         <div className="text-xs text-slate-500">Optimized</div>
                     </div>
                 </div>
             </div>
             
             <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-[#05152F] leading-tight">
                    &quot;When running out of stock, promote sell-out of lifecycle inventory. Maximize margins and inventory turnover.&quot;
                 </h2>
                 <p className="text-[#05152F]/70 text-lg">
                     AI-driven forecasting ensures you don&apos;t discount too early or too late. 
                     Align your clearance strategy with actual demand signals to recover maximum value.
                 </p>
                 <Link href="/contact" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                     Learn about Clearance Optimization <span>→</span>
                 </Link>
             </div>
        </div>
      </section>

      {/* 4. RELEX/AI FEATURE (Center Focus) */}
      <section className="w-full bg-[#f8fbfe] py-24">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
              <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">Key Feature</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05152F]">
                  Bee2 AI offers AI-driven clearance optimization
              </h2>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                   <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                       <div className="w-3 h-3 rounded-full bg-red-400" />
                       <div className="w-3 h-3 rounded-full bg-yellow-400" />
                       <div className="w-3 h-3 rounded-full bg-green-400" />
                       <span className="text-sm font-bold text-slate-400 ml-auto">Clearance Dashboard</span>
                   </div>
                   {/* Simplified Chart Visual */}
                   <div className="relative h-64 w-full">
                       <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                           {/* Grid lines */}
                           <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                           <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" />
                           <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                           
                           {/* Lines */}
                           <path d="M0,45 Q20,40 40,30 T80,10 T100,5" fill="none" stroke="#22c55e" strokeWidth="1" />
                           <path d="M0,10 Q30,20 50,35 T100,48" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="1,1" />
                       </svg>
                       <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded shadow text-xs">
                           <span className="text-green-600 font-bold">↑ Optimized</span>
                       </div>
                   </div>
              </div>

              <div className="space-y-8 text-left">
                   <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-[#05152F]">Automated Price Adjustments</h3>
                           <p className="text-[#05152F]/70">System suggests price cuts based on remaining inventory and time left in the season.</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-[#05152F]">Margin Protection</h3>
                           <p className="text-[#05152F]/70">Define floor prices to ensure you never sell below cost unless absolutely necessary.</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <div className="w-6 h-6 bg-blue-500 rounded-sm" />
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-[#05152F]">Stock Consolidation</h3>
                           <p className="text-[#05152F]/70">Smart recommendations to move remaining stock to stores with higher sell-through rates.</p>
                       </div>
                   </div>
              </div>
          </div>
      </section>
      
      {/* 5. GRID FEATURES (Proactively Identify) */}
      <section className="w-full bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
               <h2 className="text-3xl font-bold text-[#05152F] text-center mb-16">
                   Proactively identify clearance needs and generate optimal prices
               </h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[
                       { title: "Fast, intuitive set up", desc: "Easily define rules for seasonal products and promotions. Launch campaigns in minutes, not days." },
                       { title: "Monitor automatically, respond immediately", desc: "Real-time tracking of sales velocity. If a product isn't moving, the system alerts you instantly." },
                       { title: "Avoid markdown too late or too early", desc: "Timing is everything. Our AI identifies the sweet spot for maximum revenue recovery." },
                       { title: "Protect margins across channels", desc: "Coordinate pricing between online and offline channels to prevent channel conflict." },
                       { title: "Simplify compliance & localized pricing", desc: "Manage regional price differences and tax rules automatically." },
                       { title: "AI-driven stock balancing", desc: "Move stock where it sells best before marking it down." }
                   ].map((item, i) => (
                       <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                           </div>
                           <div>
                               <h3 className="text-lg font-bold text-[#05152F] mb-2">{item.title}</h3>
                               <p className="text-[#05152F]/70 text-sm leading-relaxed">{item.desc}</p>
                           </div>
                       </div>
                   ))}
               </div>
          </div>
      </section>

      {/* 6. BLUE WAVE (Custom without specific content) */}
      <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#05152F] to-[#1e3a66] py-24 text-white">
             {/* Abstract background shapes */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-blue-400 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] bg-indigo-500 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold">
                      Take control of seasonal planning
                  </h2>
                   <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
                      Don&apos;t let seasonal inventory become a liability. Turn end-of-season stock into cash with intelligent planning and automated execution.
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="bg-white text-[#05152F] px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Start Optimization
                        </Link>
                     </div>
            </div>
      </section>

    </main>
  );
}

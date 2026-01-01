'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InventoryPlanningPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#6388A8] text-sm font-semibold mb-2">
            End-to-End Inventory Planning
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05152F] leading-tight">
            Optimize inventory <span className="text-[#6388A8]">across the entire</span> supply chain
          </h1>
          <p className="text-lg text-[#05152F]/70 leading-relaxed max-w-lg">
            Ensure high availability while minimizing stock-outs and spoilage. Our unified platform balances stock levels from factory to shelf.
          </p>
          <div className="flex gap-4 pt-4">
             <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#05152F] text-white font-bold transition-transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Visual Content (Worker Image Placeholder) */}
        <div className="relative z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#EAF4F9] rounded-full opacity-60 blur-3xl -z-10" />
             <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder for worker image */}
                <div className="w-full h-[400px] bg-slate-100 flex items-center justify-center relative">
                   <Image 
                        src="/vectors/8.svg" 
                        alt="Inventory System" 
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover opacity-80" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200">
                          <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                              <span className="font-bold text-[#05152F]">System Optimized</span>
                          </div>
                      </div>
                   </div>
                </div>
             </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#05152F] mb-16">Increase stock availability and turnover</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="flex flex-col items-center group">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#EAF4F9" strokeWidth="12" fill="transparent" />
                            <circle cx="80" cy="80" r="70" stroke="#6388A8" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="308" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <span className="absolute text-3xl font-bold text-[#05152F]">30%</span>
                    </div>
                    <p className="text-[#05152F] font-semibold text-lg">Inventory Reduction</p>
                </div>

                 {/* Stat 2 */}
                 <div className="flex flex-col items-center group">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#EAF4F9" strokeWidth="12" fill="transparent" />
                            <circle cx="80" cy="80" r="70" stroke="#FDB955" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="57" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <span className="absolute text-3xl font-bold text-[#05152F]">87%</span>
                    </div>
                    <p className="text-[#05152F] font-semibold text-lg">Availability</p>
                </div>

                 {/* Stat 3 */}
                 <div className="flex flex-col items-center group">
                    <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="#EAF4F9" strokeWidth="12" fill="transparent" />
                            <circle cx="80" cy="80" r="70" stroke="#05152F" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="66" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <span className="absolute text-3xl font-bold text-[#05152F]">85%</span>
                    </div>
                    <p className="text-[#05152F] font-semibold text-lg">Less Fresh Spoilage</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. DIAGRAM SECTION */}
      <section className="w-full bg-[#FAFCFE] py-24">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Text */}
             <div className="lg:order-2 space-y-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#05152F]">
                    Optimize inventory flows across the entire network
                </h2>
                <div className="prose prose-lg text-[#05152F]/70">
                    <p>
                        Connect every node in your supply chain. From warehouses to distribution centers to stores, our AI ensures optimal stock levels everywhere.
                    </p>
                    <ul className="space-y-4 pt-4 list-none pl-0">
                         <li className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF4F9] flex items-center justify-center text-[#6388A8]">1</span>
                            <span>Multi-echelon inventory optimization</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF4F9] flex items-center justify-center text-[#6388A8]">2</span>
                            <span>Dynamic safety stock calculations</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF4F9] flex items-center justify-center text-[#6388A8]">3</span>
                            <span>Automatic replenishment triggers</span>
                        </li>
                    </ul>
                </div>
             </div>
             
            {/* Visual (Diagram Placeholder) */}
            <div className="lg:order-1 relative">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex items-center justify-center min-h-[400px]">
                    <Image 
                        src="/vectors/9.svg" 
                        alt="Inventory Flow Diagram" 
                        width={500} 
                        height={400} 
                        className="w-full h-auto" 
                    />
                </div>
            </div>
         </div>
      </section>

        {/* 4. DASHBOARD/FEATURES SECTION */}
      <section className="w-full bg-white py-24">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
                     <Image 
                        src="/vectors/10.svg" 
                        alt="Inventory Dashboard" 
                        width={600} 
                        height={400} 
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Content */}
             <div className="space-y-8">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#05152F]">
                    Manage inventory automatically
                </h2>
                <ul className="space-y-6">
                    {[
                        { title: 'Replenishment', desc: 'Automate order proposals based on accurate demand forecasts.' },
                        { title: 'Allocations', desc: 'Distribute scarcity or push promotions effectively.' },
                        { title: 'Transfers', desc: 'Balance stock between stores to prevent aging and stock-outs.' }
                    ].map((feature, i) => (
                         <li key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="font-bold text-[#05152F]">{feature.title}</h3>
                                <p className="text-sm text-[#05152F]/70">{feature.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
             </div>
         </div>
      </section>

       {/* 6. GROCERY/PRODUCE SECTION (Blue Wave) */}
       <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#05152F] to-[#1e3a66] py-24 text-white">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-blue-400 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
               {/* Visual (Round Cropped Image Placeholder) */}
               <div className="relative flex justify-center">
                   <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-slate-200 overflow-hidden border-8 border-white/10 relative">
                        {/* Using SVG as placeholder for produce image */}
                        <div className="absolute inset-0 bg-white flex items-center justify-center">
                            <Image 
                                src="/vectors/11.svg" 
                                alt="Fresh Produce" 
                                width={500} 
                                height={500} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                   </div>
                   {/* Floating Label */}
                   <div className="absolute top-10 right-10 bg-white text-[#05152F] px-4 py-2 rounded-full font-bold shadow-lg">
                       Reduce Waste
                   </div>
               </div>

               {/* Content */}
               <div className="space-y-6">
                   <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                       The Right Cause of Grocery Food Waste: Confirming Freshness Begins with Better Stores
                   </h2>
                   <p className="text-blue-100/80 text-lg">
                       Fresh food is difficult. Spoilage is distinct. Minimize waste while maintaining high availability for fresh goods.
                   </p>
                   <Link
                      href="/contact" 
                      className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-[#05152F] font-bold hover:bg-blue-50 transition-colors"
                    >
                      View Case Study
                   </Link>
               </div>
          </div>
       </section>

            
       <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-[#05152F] to-[#25456b] rounded-3xl p-12 text-white relative overflow-hidden mb-20">
                <div className="relative z-10">
                     <h2 className="text-3xl font-bold mb-6 text-center">Ready to transform your supply chain & retail planning?</h2>
                     <div className="flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition-colors shadow-lg"
                        >
                            Let&apos;s Talk
                        </Link>
                        <Link
                             href="/contact"
                             className="bg-white text-[#05152F] px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
                        >
                            Request Demo
                        </Link>
                     </div>
                </div>
       </div>
    </main>
  );
}

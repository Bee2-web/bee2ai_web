'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import Lottie from 'lottie-react';
import marketingAnimation from '@/public/lotties/marketing.json';
import dashboardAnimation from '@/public/lotties/dashboard.json';
import dataAnimation from '@/public/lotties/data.json';
import graphAnimation from '@/public/lotties/graph.json';

export default function CentralHero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-start overflow-hidden bg-white pt-32 pb-20">
      {/* Background Curves - Relex Style */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left Curve */}
        <div className="absolute top-0 left-[-10%] w-[40%] h-[80%] bg-[#EAF4F9] rounded-br-[100%] rounded-bl-[20%] opacity-60 blur-3xl transform -rotate-12" />
        {/* Right Curve */}
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[90%] bg-[#EAF4F9] rounded-tl-[100%] rounded-bl-[30%] opacity-60 blur-3xl" />
      </div>

      {/* Decorative Assets */}
      <div className="absolute top-[50px] left-[-50px] w-[300px] md:w-[400px] rotate-180 z-0 opacity-40 pointer-events-none">
        <Image src="/vectors/decoration-1.svg" alt="" width={400} height={400} />
      </div>
      <div className="absolute top-[80px] right-[-80px] w-[250px] md:w-[350px] rotate-[15deg] z-0 opacity-40 pointer-events-none">
        <Image src="/vectors/decoration-2.svg" alt="" width={350} height={350} />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        {/* Text Content */}
        <div className="max-w-5xl mx-auto space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-[#05152F] tracking-tight leading-[1.1]">
            {t('title')}
            <br className="hidden md:block" />
            <span className="text-[#05152F]">{t('titleSub')}</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#05152F]/70 leading-relaxed font-medium">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#FDB955] text-[#05152F] font-bold text-lg transition-all hover:scale-105 hover:shadow-xl shadow-lg hover:bg-[#FAB040]"
            >
              {t('ctaText')}
            </Link>
            <Link
              href="/solutions/demand-forecasting"
              className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-white border-2 border-[#05152F]/10 text-[#05152F] font-bold text-lg transition-all hover:scale-105 hover:bg-gray-50 hover:border-[#05152F]/20 shadow-md"
            >
              {t('secondaryCtaText')}
            </Link>
          </div>
        </div>

        {/* Central Visual Composition */}
        <div className="relative w-full max-w-[1200px] h-[600px] mx-auto perspective-[1000px]">
          
          {/* Center Logo (Person Replacement) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 border-4 border-[#EAF4F9]">
               <Image
                src="/logo.svg"
                alt="Bee2 AI Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            {/* Glow/Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400/10 animate-ping" />
          </div>

          {/* Floating Lottie Widgets - Satellite Positions */}
          
          {/* Top Left - Dashboard */}
          <div className="absolute top-[10%] left-[5%] md:left-[15%] w-48 md:w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-500 animate-float-slow">
            <div className="text-xs font-semibold text-slate-500 mb-1 px-2">{t('badges.retailAnalytics')}</div>
            <Lottie animationData={dashboardAnimation} loop={true} />
          </div>

          {/* Top Right - Graph */}
          <div className="absolute top-[15%] right-[5%] md:right-[15%] w-40 md:w-56 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-500 animate-float-medium">
             <div className="text-xs font-semibold text-slate-500 mb-1 px-2">{t('badges.salesForecast')}</div>
            <Lottie animationData={graphAnimation} loop={true} />
          </div>

          {/* Bottom Left - Marketing/Data */}
          <div className="absolute bottom-[10%] left-[5%] md:left-[10%] w-56 md:w-72 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-500 animate-float-fast">
             <div className="text-xs font-semibold text-slate-500 mb-1 px-2">{t('badges.inventoryOpt')}</div>
            <Lottie animationData={marketingAnimation} loop={true} />
          </div>

          {/* Bottom Right - Processing */}
          <div className="absolute bottom-[15%] right-[5%] md:right-[10%] w-48 md:w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 p-2 transform hover:scale-105 transition-transform duration-500 animate-float-slow">
             <div className="text-xs font-semibold text-slate-500 mb-1 px-2">{t('badges.smartReplenish')}</div>
            <Lottie animationData={dataAnimation} loop={true} />
          </div>

        </div>
      </div>
    </section>
  );
}

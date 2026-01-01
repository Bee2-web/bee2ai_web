

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export default async function SolutionPage({ params }: Props) {
  const { slug, locale } = await params;
  
  // Enable static rendering and set request locale context
  setRequestLocale(locale);

  // Validate slug
  const validSlugs = ['demand-forecasting', 'inventory-planning', 'pricing-promotion', 'seasonal-planning'];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: `Solutions.${slug}` });

  // Icon mapping (since we can't put image imports in JSON translations easily, we map them here)
  const icons: Record<string, string> = {
    'demand-forecasting': '/icons/demand.svg',
    'inventory-planning': '/icons/inventory.svg',
    'pricing-promotion': '/icons/price.svg',
    'seasonal-planning': '/icons/season.svg'
  };

  const iconPath = icons[slug] || '/icons/demand.svg'; // Fallback

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white pt-32 pb-20">
      
      {/* Background Ambience - Consistent Relex Style */}
      <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[120%] bg-[#EAF4F9] rounded-br-[40%] rounded-tr-[20%] opacity-60 blur-3xl transform -rotate-6" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pl-4">
          <Link href="/" className="text-sm font-medium text-[#6388A8] hover:text-[#05152F] transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-6 border border-slate-100">
            <Image 
              src={iconPath} 
              alt={t('title')} 
              width={48} 
              height={48} 
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#05152F] tracking-tight mb-4">
            {t('title')}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-[#6388A8] mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-lg text-[#05152F]/70 leading-relaxed max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Features & Benefits Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          
          {/* Key Features */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6388A8] to-[#05152F]" />
            <h3 className="text-2xl font-bold text-[#05152F] mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#EAF4F9] flex items-center justify-center text-[#05152F] text-sm">✓</span>
              Key Capabilities
            </h3>
            <ul className="space-y-4">
              {[0, 1, 2, 3, 4].map((idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 min-w-[20px] h-[20px] rounded-full border border-[#6388A8] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#6388A8] rounded-full" />
                  </div>
                  <span className="text-[#05152F]/80 font-medium text-lg">{t(`features.${idx}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#05152F] mb-6 px-2">Business Impact</h3>
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#EAF4F9]/40 border border-[#EAF4F9] hover:bg-[#EAF4F9] transition-colors duration-300">
                <h4 className="text-lg font-bold text-[#05152F] mb-2">{t(`benefits.${idx}.title`)}</h4>
                <p className="text-[#05152F]/70 leading-relaxed">
                  {t(`benefits.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto bg-[#05152F] rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#FDB955] rounded-full opacity-20 blur-3xl" />
          <div className="absolute right-10 top-10 w-32 h-32 bg-[#6388A8] rounded-full opacity-20 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">See {t('title')} in Action</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo to see how our AI engine can solve your specific challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#FDB955] text-[#05152F] font-bold text-lg hover:bg-[#FAB040] transition-transform hover:scale-105 shadow-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

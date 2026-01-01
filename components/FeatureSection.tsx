import Link from 'next/link';
import Image from 'next/image';

import { featureSections } from '@/data/siteContent';

export default function FeatureSection() {
  return (
    <section className='w-full bg-white py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-6 space-y-24'>
        {featureSections.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col gap-12 items-center ${
              section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className='flex-1 space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#05152F] font-sans'>
                {section.title}
              </h2>
              <p className='text-lg text-[#05152F]/80 leading-relaxed font-figtree'>
                {section.description}
              </p>
              <div>
                <Link
                  href={section.ctaLink}
                  className='inline-flex items-center justify-center rounded-full bg-[#FDB955] px-8 py-3 text-sm font-bold text-[#05152F] transition-all hover:bg-[#e0a844] hover:shadow-md'
                >
                  {section.ctaText}
                </Link>
              </div>
            </div>
            <div className='flex-1 w-full'>
              <div className='aspect-video relative rounded-2xl overflow-hidden bg-[#EAF4F9] shadow-lg flex items-center justify-center group hover:shadow-xl transition-all'>
                 {/* Placeholder for service visuals - using icons or simple text for now */}
                 {section.illustration ? (
                    <Image 
                      src={section.illustration} 
                      alt={section.title}
                      fill
                      className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-500" 
                    />
                 ) : (
                    <span className='text-6xl'>{['📊', '📦', '💰', '🏷️', '🗓️'][index % 5]}</span>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

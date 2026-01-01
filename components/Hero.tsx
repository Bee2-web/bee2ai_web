'use client';
import Link from 'next/link';

import { heroContent } from '@/data/siteContent';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section className='curved-border--bottom has-background relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-[#EAF4F9] pt-28 md:pt-32 flex flex-col justify-start'>
      {/* Background blobs */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-40 bottom-[-120px] h-[320px] w-[360px] rounded-[55%] bg-linear-to-tr from-blue to-[#7fb7ff] opacity-70' />
        <div className='absolute -right-40 top-[-80px] h-[380px] w-[420px] rounded-[55%] bg-linear-to-bl from-blue to-[#7fb7ff] opacity-60' />
      </div>

      <div className='container relative mx-auto px-4 md:px-6 z-10 h-full flex flex-col'>
        {/* Copy and CTAs */}
        <div className='text-center mb-8'>
          <div>
            <h1 className='mx-auto -font-figtree font-sans max-w-4xl text-navy text-3xl font-bold sm:text-4xl md:text-[40px] lg:text-[53px]'>
              {heroContent.title}
              <br />
              {heroContent.titleSub}
            </h1>
            <p className='mx-auto mt-5 max-w-3xl text-base text-[#0a3256] text-[18px]'>
              {heroContent.description}
            </p>
          </div>
          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center '>
            <Link
              href={heroContent.ctaLink}
              className='inline-flex h-11 items-center text-[18px] justify-center rounded-full bg-[#FDB955] px-8 text-sm font-semibold text-[#05152F] shadow-sm transition hover:bg-[#e0a844] md:h-12 md:px-10'
            >
              {heroContent.ctaText}
            </Link>
            <Link
              href={heroContent.secondaryCtaLink}
              className='inline-flex h-11 items-center text-[18px] justify-center rounded-full border-2 border-[#05152F]/20 bg-white/50 px-8 text-sm font-bold text-[#05152F] shadow-sm transition hover:bg-white hover:border-[#05152F] md:h-12 md:px-10'
            >
              {heroContent.secondaryCtaText}
            </Link>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center sm:flex-row sm:justify-center '>
          <div className='w-1/3 flex flex-col items-center justify-center'>
            <h1 className='text-navy bg-white p-2 min-w-[250px] rounded-full text-center text-[18px] font-figtree font-bold'>
              {heroContent.heroPills[0].label}
            </h1>
            <DotLottieReact
              src='https://lottie.host/adbdfbc8-0a97-4dcb-9b12-62b9fe1a42e7/OnaV9vripH.lottie'
              loop
              autoplay
              className='mt-[-25px] w-[400px]'
            />
            <h1 className='text-navy bg-white p-2 min-w-[250px] rounded-full text-center text-[18px] font-figtree font-bold'>
              {heroContent.heroPills[1].label}
            </h1>
            <DotLottieReact
              src='https://lottie.host/adbdfbc8-0a97-4dcb-9b12-62b9fe1a42e7/OnaV9vripH.lottie'
              loop
              autoplay
              className='mt-[-25px] w-[400px]'
            />
          </div>
          <div className='w-1/3  mx-[-180px]'>
            <DotLottieReact
              src='https://lottie.host/19df5392-a3b6-40e1-83f6-a753299a7a1b/eGLGSufYmN.lottie'
              loop
              autoplay
            />
          </div>
          <div className='w-1/3 flex flex-col items-center justify-center'>
            <h1 className='text-navy bg-white p-2 min-w-[250px] rounded-full text-center text-[18px] font-figtree font-bold'>
              {heroContent.heroPills[2].label}
            </h1>
            <DotLottieReact
              src='https://lottie.host/adbdfbc8-0a97-4dcb-9b12-62b9fe1a42e7/OnaV9vripH.lottie'
              loop
              autoplay
              className='mt-[-25px] w-[400px]'
            />
            <h1 className='text-navy bg-white p-2 min-w-[250px] rounded-full text-center text-[18px] font-figtree font-bold'>
              {heroContent.heroPills[3].label}
            </h1>
            <DotLottieReact
              src='https://lottie.host/adbdfbc8-0a97-4dcb-9b12-62b9fe1a42e7/OnaV9vripH.lottie'
              loop
              autoplay
              className='mt-[-25px] w-[400px]'
            />
          </div>
        </div>
      </div>
      {/* Curved decorative border */}
      <div className="curved-mask-bottom"></div>
    </section>
  );
}

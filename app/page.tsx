

import CentralHero from '@/components/CentralHero';
import ValueChain from '@/components/kokonutui/ValueChain';
import LogoCarousel from '@/components/kokonutui/LogoCarousel';
import FeatureSection from '@/components/FeatureSection';
import { trustedBy } from '@/data/siteContent';

export default function Home() {
  const logosForCarousel = trustedBy.map(client => ({
    id: client.name,
    name: client.name,
    image: client.logo || '',
    height: client.height || 'h-10'
  }));

  return (
    <div className='flex min-h-screen flex-col bg-white'>

      <main className='flex-1'>
        <CentralHero />
        <ValueChain />
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
             <div className="container mx-auto px-4 md:px-6 mb-8">
                <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Trusted by industry leading retailers and manufacturers
                </h3>
            </div>
            <LogoCarousel logos={logosForCarousel} />
        </section>
        <FeatureSection />
      </main>
    </div>
  );
}

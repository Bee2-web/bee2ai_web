import Link from 'next/link';
import Image from 'next/image';
import { featureSections } from '@/data/siteContent';
import { ArrowRight, BarChart3, LineChart, PieChart, ShoppingCart, Truck } from 'lucide-react';

const icons = {
  'demand-forecasting': LineChart,
  'inventory-planning': BarChart3,
  'price-optimization': PieChart,
  'retail-ops': ShoppingCart,
  'distribution-supply': Truck,
};

export default function ValueChain() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-[#05152F] sm:text-4xl md:text-5xl mb-4">
            Explore how Bee2 AI supports the entire retail value chain
          </h2>
          <p className="text-slate-600 text-lg">
            From demand forecasting to shelf availability, our integrated modules work together to optimize every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureSections.map((feature) => {
             const Icon = icons[feature.id as keyof typeof icons] || LineChart;
             return (
              <Link 
                key={feature.id} 
                href={feature.ctaLink}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  {feature.icon ? (
                    <Image 
                      src={feature.icon} 
                      alt={feature.title} 
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain" 
                    />
                  ) : (
                    <Icon className="w-7 h-7 text-[#05152F]" />
                  )}
                </div>
                
                <h3 className="font-bold text-[#05152F] mb-2 leading-tight">
                  {feature.title}
                </h3>
                
                <div className="mt-auto pt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
              </Link>
             );
          })}
        </div>
      </div>
    </section>
  );
}

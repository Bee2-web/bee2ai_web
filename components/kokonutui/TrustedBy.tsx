import { trustedBy } from '@/data/siteContent';

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by industry leading retailers and manufacturers
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
          {trustedBy.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
               {/* Placeholder for actual logos, keeping text for now with stylized font */}
               <span className="text-xl md:text-2xl font-bold text-slate-400 font-serif">
                 {client.name}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { industriesData } from '../data/content';

const Expertise: React.FC = () => {
  return (
    <div className="flex-1 px-6 md:px-10 lg:px-40 py-12 md:py-20 w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <ScrollReveal className="mb-20 max-w-[960px]">
        <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-navy-900/60">Our Expertise</span>
        <h1 className="text-5xl md:text-7xl font-black text-navy-900 tracking-[-0.033em] leading-[1.1] mb-8">
          Deep Market Intelligence.
        </h1>
        <p className="text-xl md:text-2xl text-navy-900/70 font-light leading-relaxed max-w-3xl">
          Our sector expertise drives your strategic advantage. We provide the clarity needed to navigate complex industries through rigorous analysis and forward-looking insights.
        </p>
      </ScrollReveal>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {industriesData.map((sector, idx) => (
          <ScrollReveal key={sector.id} delay={idx * 50}>
            <Link to={`/expertise/${sector.id}`} className="group flex flex-col justify-between min-h-[280px] p-8 border border-border bg-white hover:border-navy-900 transition-all duration-300 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-mono text-navy-900/40">0{idx + 1}</span>
                  <span className="material-symbols-outlined text-navy-900/30 group-hover:text-gold-600 transition-colors scale-125">{sector.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:translate-x-1 transition-transform duration-300">{sector.title}</h3>
                <div className="h-px w-8 bg-navy-900/20 mb-6 group-hover:w-full group-hover:bg-gold-600 transition-all duration-500"></div>
                <p className="text-navy-900/70 text-sm leading-relaxed">
                  {sector.shortDesc}
                </p>
              </div>
              <div className="mt-8 flex items-center text-navy-900 text-sm font-bold">
                <span className="mr-2 group-hover:underline decoration-gold-600 decoration-1 underline-offset-4 transition-all">Explore Sector</span>
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1 group-hover:text-gold-600">arrow_forward</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
};

export default Expertise;
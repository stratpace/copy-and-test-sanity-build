import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData } from '../data/content';

const Capabilities: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 pt-12 pb-24">
      {/* Hero */}
      <ScrollReveal>
        <section className="mb-24 lg:mb-32 max-w-4xl">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-4 block">Services & Expertise</span>
          <h1 className="text-navy-900 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            Our Capabilities
          </h1>
          <p className="text-body text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            Precision market intelligence and strategic growth advisory for the modern enterprise. We translate complex data into clear, actionable mandates.
          </p>
        </section>
      </ScrollReveal>

      <div className="w-full h-px bg-gold-600/60 mb-16"></div>

      {/* Sections */}
      {servicesData.map((section, index) => (
        <React.Fragment key={section.id}>
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-20">
            <div className="md:col-span-4 lg:col-span-3">
              <ScrollReveal className="sticky top-32">
                <span className="text-gold-600 text-sm font-mono mb-2 block">{section.id}</span>
                <h2 className="text-3xl font-bold text-navy-900 tracking-tight leading-tight">
                  {section.title}
                </h2>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-10 lg:pl-12">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-body">
                    {section.intro}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 border-t border-border pt-8">
                {section.subServices.map((sub, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100}>
                    <div>
                      <h3 className="text-navy-900 font-semibold text-lg mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-600 text-xl">{sub.icon}</span>
                        {sub.title}
                      </h3>
                      <p className="text-sm text-muted-text mb-4 leading-relaxed">
                        {sub.desc}
                      </p>
                      <ul className="space-y-2">
                        {sub.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-sm text-body flex items-center">
                            <span className="w-1.5 h-1.5 bg-gold-600 rotate-45 mr-3"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
          {index < servicesData.length - 1 && <div className="w-full h-px bg-gold-600/60 mb-16"></div>}
        </React.Fragment>
      ))}

      <div className="w-full h-px bg-gold-600/60 mb-20"></div>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="rounded-xl bg-navy-900 overflow-hidden relative isolate shadow-2xl">
           <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
           <div className="px-6 py-16 md:px-12 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Ready to define the future?</h2>
               <p className="text-gray-300 text-lg font-light leading-relaxed">
                 Start a conversation with our partners to discuss your strategic needs. We typically reply within 24 hours.
               </p>
             </div>
             <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
               <Link to="/contact" className="bg-gold-600 hover:bg-[#bfa032] text-navy-900 font-bold py-4 px-8 rounded transition-all hover:scale-105 hover:shadow-lg text-sm uppercase tracking-wider text-center">
                 Contact Advisory
               </Link>
             </div>
           </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Capabilities;
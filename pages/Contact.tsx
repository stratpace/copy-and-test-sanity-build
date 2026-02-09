import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-600">Direct Inquiry</span>
              <h1 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tight leading-[1.1]">
                Connect with our Strategists.
              </h1>
              <p className="text-muted-text text-lg leading-relaxed max-w-md mt-2">
                Reach out to discuss your strategic needs or schedule a private consultation with our advisory board.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="mt-8 space-y-10 border-t border-border pt-10">
            <div className="grid gap-1 group">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-text mb-2">Office</h3>
              <p className="text-navy-900 font-medium text-base">10 Hudson Yards, Suite 3400</p>
              <p className="text-navy-900 font-medium text-base">New York, NY 10001</p>
              <a href="#" className="text-sm text-gold-600 underline mt-1 block group-hover:text-navy-900 transition-colors">Get Directions</a>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-text mb-2">Email</h3>
              <a href="mailto:advisory@stratpace.com" className="text-navy-900 font-medium text-base hover:text-gold-600 transition-colors">advisory@stratpace.com</a>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-text mb-2">Phone</h3>
              <a href="tel:+12125550199" className="text-navy-900 font-medium text-base hover:text-gold-600 transition-colors">+1 (212) 555-0199</a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 lg:pl-10">
          <ScrollReveal delay={300}>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-border hover:shadow-xl transition-shadow duration-500">
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col gap-2 group">
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Full Name</span>
                    <input type="text" className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 placeholder-gray-400 transition-colors text-navy-900" placeholder="e.g. Jane Doe" required />
                  </label>
                  <label className="flex flex-col gap-2 group">
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Work Email</span>
                    <input type="email" className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 placeholder-gray-400 transition-colors text-navy-900" placeholder="name@company.com" required />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col gap-2 group">
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Company Name</span>
                    <input type="text" className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 placeholder-gray-400 transition-colors text-navy-900" placeholder="Enter company name" />
                  </label>
                  <label className="flex flex-col gap-2 group">
                    <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Inquiry Type</span>
                    <div className="relative">
                      <select className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 text-navy-900 appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Strategic Consultation</option>
                        <option>Partnership Opportunity</option>
                        <option>Media & Press</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-navy-900">
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                      </div>
                    </div>
                  </label>
                </div>
                <label className="flex flex-col gap-2 mt-2 group">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Message</span>
                  <textarea className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 placeholder-gray-400 transition-colors text-navy-900 resize-none" rows={4} placeholder="Tell us about your strategic needs..."></textarea>
                </label>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-500 max-w-xs text-center sm:text-left">
                    By submitting this form, you agree to our <a href="#" className="underline hover:text-navy-900">Privacy Policy</a>.
                  </p>
                  <button type="submit" className="flex items-center justify-center h-12 px-8 bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold tracking-wide rounded transition-all transform active:scale-95 shadow-lg shadow-navy-900/10 w-full sm:w-auto">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Visual Element (Map placeholder) */}
      <ScrollReveal className="mt-24 w-full h-[400px] rounded-lg overflow-hidden relative bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-50"></div>
        <img 
          src="https://picsum.photos/1200/400?grayscale" 
          alt="Office Location" 
          className="object-cover w-full h-full opacity-80 mix-blend-multiply"
        />
        <div className="absolute bottom-6 left-6 bg-white p-4 rounded shadow-lg max-w-xs animate-fade-in-up">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-navy-900 mt-1">location_on</span>
            <div>
              <p className="text-sm font-bold text-navy-900">Headquarters</p>
              <p className="text-xs text-muted-text mt-1">Hudson Yards, NYC</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design System | Stratpace',
  description: 'Internal visual reference for the Stratpace Advisory design system.',
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <section>
          <h1 className="text-5xl font-black text-navy-900 mb-4">Design System</h1>
          <p className="text-xl text-muted-text">
            Visual tokens, components, and patterns for Stratpace Advisory.
          </p>
          <div className="h-1 w-20 bg-gold-600 mt-8"></div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-border pb-2">1. Color Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorCard name="Navy 900" hex="#0B1C2D" bg="bg-navy-900" text="text-white" />
            <ColorCard name="Navy 800" hex="#12263A" bg="bg-navy-800" text="text-white" />
            <ColorCard name="Navy 700" hex="#1B3A57" bg="bg-navy-700" text="text-white" />
            <ColorCard name="Gold 600" hex="#C9A24D" bg="bg-gold-600" text="text-navy-900" />
            <ColorCard name="Background" hex="#F8FAFC" bg="bg-background" text="text-navy-900" border />
            <ColorCard name="Muted" hex="#F1F5F9" bg="bg-muted" text="text-navy-900" />
            <ColorCard name="Border" hex="#E2E8F0" bg="bg-border" text="text-navy-900" />
            <ColorCard name="Muted Text" hex="#64748B" bg="bg-white" text="text-muted-text" />
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-border pb-2">2. Typography (Sora)</h2>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-muted-text mb-2">Display H1</p>
              <h1 className="text-6xl md:text-7xl font-black text-navy-900 tracking-tighter">Clarity in Complexity</h1>
            </div>
            <div>
              <p className="text-xs text-muted-text mb-2">Heading H2</p>
              <h2 className="text-4xl font-bold text-navy-900 tracking-tight">Strategic Intelligence</h2>
            </div>
            <div>
              <p className="text-xs text-muted-text mb-2">Heading H3</p>
              <h3 className="text-2xl font-bold text-navy-900">Market Dynamics</h3>
            </div>
            <div>
              <p className="text-xs text-muted-text mb-2">Subtitle / Lead</p>
              <p className="text-xl text-muted-text font-light">Data-driven strategic advisory for the world's leading enterprises.</p>
            </div>
            <div>
              <p className="text-xs text-muted-text mb-2">Body Text</p>
              <p className="text-base text-body max-w-2xl leading-relaxed">
                We decode volatility into actionable growth. In an era of information overload, clarity is the ultimate asset. Our Market Intelligence practice cuts through the noise to deliver granular insights.
              </p>
            </div>
             <div>
              <p className="text-xs text-muted-text mb-2">Label / Overline</p>
              <span className="text-xs font-bold tracking-widest text-gold-600 uppercase">Strategic Services</span>
            </div>
          </div>
        </section>

        {/* Buttons & Links */}
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-border pb-2">3. Interactive Elements</h2>
          <div className="flex flex-wrap gap-8 items-center">
            
            {/* Primary Button */}
            <button className="flex items-center justify-center h-12 px-8 bg-navy-900 text-white text-sm font-bold tracking-wide hover:bg-navy-800 hover:-translate-y-0.5 transition-all rounded-sm shadow-md hover:shadow-lg">
              Primary Button
            </button>

            {/* Secondary Button */}
             <button className="flex items-center justify-center h-12 px-8 border border-navy-900 text-navy-900 text-sm font-bold tracking-wide hover:bg-navy-900 hover:text-white transition-colors rounded-sm">
              Secondary Button
            </button>

             {/* Gold Button */}
            <button className="flex items-center justify-center h-12 px-8 bg-gold-600 text-navy-900 text-sm font-bold tracking-wide hover:opacity-90 transition-all rounded-sm shadow-sm">
              Accent Button
            </button>

            {/* Text Link */}
            <a href="#" className="text-sm font-bold text-navy-900 flex items-center gap-1 group transition-all hover:text-gold-600">
               Text Link <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-border pb-2">4. Cards & Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Standard Service Card */}
            <div className="group flex flex-col gap-4 p-6 border border-border hover:border-gold-600/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-background rounded-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm rounded-sm mb-2 text-gold-600">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <h4 className="text-xl font-bold text-navy-900">Service Card</h4>
              <p className="text-muted-text text-sm leading-relaxed">
                Standard content card used for features or services. Supports hover lift and border transition.
              </p>
            </div>

            {/* Industry Card */}
             <div className="group relative block p-8 border border-border bg-white hover:border-navy-900 transition-all duration-300 h-full">
              <div className="flex justify-between items-start">
                <span className="text-2xl font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">Industry</span>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-gold-600 transition-colors">north_east</span>
              </div>
              <p className="mt-4 text-sm text-muted-text">
                Minimalist card for industry or category selection.
              </p>
            </div>

            {/* Dark Card */}
             <div className="bg-navy-900 p-8 rounded-sm text-white shadow-xl">
               <span className="text-gold-600 text-xs font-bold uppercase tracking-wider mb-2 block">Featured</span>
               <h3 className="text-2xl font-bold mb-4">Dark Mode Card</h3>
               <p className="text-gray-400 text-sm mb-6">
                 Used for featured reports or call-to-action blocks.
               </p>
               <button className="text-white border-b border-gold-600 pb-1 text-sm font-bold hover:text-gold-600 transition-colors">
                 Action
               </button>
             </div>
          </div>
        </section>

         {/* Forms */}
         <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-border pb-2">5. Form Elements</h2>
          <div className="max-w-md space-y-6">
             <label className="flex flex-col gap-2 group">
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Input Label</span>
                <input type="text" className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 placeholder-gray-400 transition-colors text-navy-900 outline-none" placeholder="Placeholder text" />
              </label>

              <label className="flex flex-col gap-2 group">
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wide group-focus-within:text-gold-600 transition-colors">Select Input</span>
                <div className="relative">
                  <select className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-navy-900 focus:ring-0 px-0 py-3 text-navy-900 appearance-none cursor-pointer outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-navy-900">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
              </label>
          </div>
        </section>

      </div>
    </div>
  );
}

function ColorCard({ name, hex, bg, text, border }: { name: string, hex: string, bg: string, text: string, border?: boolean }) {
  return (
    <div className={`p-4 rounded-md ${bg} ${border ? 'border border-border' : ''} shadow-sm flex flex-col justify-between h-32`}>
      <span className={`font-bold ${text}`}>{name}</span>
      <span className={`text-xs opacity-80 ${text}`}>{hex}</span>
    </div>
  )
}
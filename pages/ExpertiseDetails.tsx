import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { industriesData } from '../data/content';

const ExpertiseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the specific industry data
  const data = industriesData.find(ind => ind.id === id);

  if (!data) {
    return <Navigate to="/expertise" replace />;
  }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Editorial Hero */}
      <section className="bg-navy-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link to="/expertise" className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-6 inline-flex items-center hover:opacity-80">
              <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
              Back to Expertise
            </Link>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
              {data.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Main Content */}
        <div className="lg:col-span-8">
          <ScrollReveal>
            <div className="prose prose-lg prose-headings:font-sora prose-headings:font-bold prose-p:text-body max-w-none">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">The Strategic Imperative</h2>
              <p className="text-lg leading-loose mb-8 text-muted-text">
                {data.content}
              </p>
              
              <h3 className="text-2xl font-bold text-navy-900 mt-12 mb-6">Core Challenges</h3>
              <ul className="space-y-4 list-none pl-0">
                {data.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start p-4 border border-border rounded-sm bg-white hover:border-gold-600 transition-colors">
                    <span className="material-symbols-outlined text-gold-600 mr-4 mt-0.5">check_circle</span>
                    <span className="text-navy-900 font-medium">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-16 pt-10 border-t border-border">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Related Intelligence</h3>
              <div className="flex flex-col gap-4">
                <Link to="/reports" className="flex items-center group">
                  <span className="w-12 h-12 bg-white border border-border flex items-center justify-center mr-4 group-hover:border-navy-900 transition-colors">
                    <span className="material-symbols-outlined text-navy-900">description</span>
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors">Q3 Sector Outlook</span>
                    <span className="text-xs text-muted-text">PDF Download • 2.4MB</span>
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Sidebar Stats */}
        <div className="lg:col-span-4">
          <ScrollReveal delay={200} className="sticky top-32">
            <div className="bg-white p-8 border-t-4 border-gold-600 shadow-xl rounded-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-8">Impact at a Glance</h3>
              <div className="grid gap-8">
                {data.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-black text-navy-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-text font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <button className="w-full mt-10 bg-navy-900 text-white font-bold py-4 px-6 hover:bg-navy-800 transition-colors text-sm uppercase tracking-wide">
                  Schedule Briefing
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseDetails;
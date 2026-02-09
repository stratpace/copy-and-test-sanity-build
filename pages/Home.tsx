import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData, industriesData, reportsData } from '../data/content';

const Home: React.FC = () => {
  // Get featured report and next 2 latest reports
  const featuredReport = reportsData.find(r => r.featured) || reportsData[0];
  const sideReports = reportsData.filter(r => r.id !== featuredReport.id).slice(0, 2);

  // Get top 6 industries for the grid
  const displayedIndustries = industriesData.slice(0, 6);

  // Get Services for the summary section
  const displayedServices = servicesData;

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <ScrollReveal className="max-w-4xl flex flex-col gap-8">
            <div className="w-16 h-[2px] bg-gold-600 mb-4"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-navy-900 leading-[0.9]">
              Clarity in a <br/>
              <span className="text-gray-400">Complex Market.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-text max-w-xl font-light leading-relaxed">
              Data-driven strategic advisory for the world's leading enterprises. We decode volatility into actionable growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/reports">
                <button className="flex items-center justify-center h-12 px-8 bg-navy-900 text-white text-base font-bold tracking-wide hover:opacity-90 hover:-translate-y-0.5 transition-all rounded-sm shadow-md hover:shadow-lg focus:ring-2 focus:ring-navy-900 focus:ring-offset-2">
                  Explore Our Reports
                </button>
              </Link>
              <Link to="/capabilities">
                <button className="flex items-center justify-center h-12 px-8 border border-navy-900 text-navy-900 text-base font-bold tracking-wide hover:bg-gray-100 transition-colors rounded-sm focus:ring-2 focus:ring-navy-900 focus:ring-offset-2">
                  Our Methodology
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
        {/* Abstract Graphic Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-1/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-navy-200/20 to-transparent rounded-l-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-xs font-bold tracking-widest text-gold-600 uppercase mb-3">Our Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Strategic Services</h3>
              </div>
              <p className="text-muted-text max-w-md text-sm md:text-base">
                Comprehensive market analysis and strategic guidance tailored for decision makers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {displayedServices.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <div className="group flex flex-col gap-4 p-6 border border-border hover:border-gold-600/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-background rounded-sm h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm rounded-sm mb-2 text-gold-600 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900">{service.title}</h4>
                  <p className="text-muted-text text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Link to="/capabilities" className="mt-auto pt-4 text-sm font-bold text-navy-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">Industries We Serve</h2>
              <div className="w-full h-[1px] bg-border"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {displayedIndustries.map((industry, index) => (
               <ScrollReveal key={industry.id} delay={index * 50}>
                <Link to={`/expertise/${industry.id}`} className="group relative block p-8 border-r border-b border-border hover:bg-white transition-colors h-full">
                  <div className="flex justify-between items-start">
                    <span className="text-2xl font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">{industry.title}</span>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-gold-600 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">north_east</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.shortDesc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight">Latest Insights</h2>
              <Link to="/reports" className="text-sm font-semibold text-navy-900 border-b border-navy-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">View all reports</Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Featured Article */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal>
                <Link to="/reports" className="group block">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm bg-gray-100 mb-6 group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      alt={featuredReport.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src={featuredReport.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-gold-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider mb-2 inline-block rounded-sm">Featured Report</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-sm text-muted-text">
                      <span className="font-medium text-navy-900">{featuredReport.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{featuredReport.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-navy-900 leading-tight group-hover:text-gold-600 transition-colors">
                      {featuredReport.title}
                    </h3>
                    <p className="text-muted-text line-clamp-3">
                      {featuredReport.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>

            {/* Side Articles */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-6 lg:border-l border-border">
              {sideReports.map((article, index) => (
                <ScrollReveal key={article.id} delay={200 + index * 100}>
                  <Link to="/reports" className="flex flex-col gap-3 group">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gold-600 mb-1">
                      <span>{article.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-text leading-relaxed line-clamp-2">
                      {article.desc}
                    </p>
                    <span className="text-xs text-gray-400 mt-1">{article.date} • {article.readTime || '5 min read'}</span>
                  </Link>
                  {index === 0 && <div className="w-full h-[1px] bg-border my-2"></div>}
                </ScrollReveal>
              ))}

              <ScrollReveal delay={400}>
                <div className="mt-auto bg-background p-6 rounded-sm border border-border">
                  <h4 className="font-bold text-navy-900 mb-2">Weekly Briefing</h4>
                  <p className="text-xs text-muted-text mb-4">Get our latest analysis directly to your inbox.</p>
                  <div className="flex gap-2">
                    <input type="email" placeholder="Email address" className="flex-1 text-sm px-3 py-2 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-navy-900 transition-colors" />
                    <button className="bg-navy-900 text-white px-3 py-2 rounded-sm text-sm font-bold hover:bg-navy-800 transition-colors">
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
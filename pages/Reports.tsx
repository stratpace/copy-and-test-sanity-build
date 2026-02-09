import React, { useState, useMemo } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { reportsData } from '../data/content';

const Reports: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Extract unique values for filters
  const industries = ['All', ...Array.from(new Set(reportsData.map(r => r.category))).sort()];
  const years = ['All', ...Array.from(new Set(reportsData.map(r => r.year))).sort().reverse()];
  const regions = ['All', ...Array.from(new Set(reportsData.map(r => r.region))).sort()];

  // Filtering Logic
  const filteredReports = useMemo(() => {
    return reportsData.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            report.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === 'All' || report.category === selectedIndustry;
      const matchesYear = selectedYear === 'All' || report.year === selectedYear;
      const matchesRegion = selectedRegion === 'All' || report.region === selectedRegion;

      return matchesSearch && matchesIndustry && matchesYear && matchesRegion;
    });
  }, [searchQuery, selectedIndustry, selectedYear, selectedRegion]);

  const featuredReport = reportsData.find(r => r.featured) || reportsData[0];
  const listReports = filteredReports.filter(r => r.id !== featuredReport.id);

  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <ScrollReveal className="mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900 mb-4">
            Research Library
          </h1>
          <p className="text-lg text-muted-text leading-relaxed">
            Actionable intelligence for the modern strategist. Browse our archive of proprietary research, white papers, and quarterly outlooks.
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Report */}
      {!searchQuery && selectedIndustry === 'All' && selectedYear === 'All' && selectedRegion === 'All' && (
        <ScrollReveal className="mb-16">
          <div className="group cursor-pointer relative overflow-hidden rounded-xl bg-navy-900 text-white shadow-lg grid md:grid-cols-2 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.005]">
            <div className="p-8 md:p-12 flex flex-col justify-center relative z-10 order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4 text-white/40">
                <span className="bg-gold-600 text-navy-900 px-2 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">Featured Report</span>
                <span className="text-xs font-medium">{featuredReport.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-gold-600 transition-colors duration-300">
                {featuredReport.title}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {featuredReport.desc}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-white transition-colors">
                Read Full Analysis 
                <span className="material-symbols-outlined text-[1.2rem] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
            <div className="relative h-64 md:h-auto bg-navy-800 order-1 md:order-2 overflow-hidden">
              <img src={featuredReport.image} alt="Featured" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-navy-900 via-navy-900/40 to-transparent"></div>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Sticky Toolbar */}
      <div className="sticky top-[72px] z-30 py-4 mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 shadow-sm">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search */}
          <div className="relative w-full md:max-w-md group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-navy-900 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-3 py-2.5 border border-border bg-white rounded-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-navy-900 focus:border-navy-900 shadow-sm transition-all" 
              placeholder="Search reports..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <div className="relative">
              <select 
                className="appearance-none pl-4 pr-8 py-2 bg-white border border-border rounded-sm hover:border-navy-900 text-sm font-medium text-navy-900 transition-colors focus:outline-none focus:ring-1 focus:ring-navy-900 cursor-pointer"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industries.map(i => <option key={i} value={i}>{i === 'All' ? 'All Industries' : i}</option>)}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-lg pointer-events-none text-gray-500">expand_more</span>
            </div>

            <div className="relative">
              <select 
                className="appearance-none pl-4 pr-8 py-2 bg-white border border-border rounded-sm hover:border-navy-900 text-sm font-medium text-navy-900 transition-colors focus:outline-none focus:ring-1 focus:ring-navy-900 cursor-pointer"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map(y => <option key={y} value={y}>{y === 'All' ? 'All Years' : y}</option>)}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-lg pointer-events-none text-gray-500">expand_more</span>
            </div>

            <div className="relative">
              <select 
                className="appearance-none pl-4 pr-8 py-2 bg-white border border-border rounded-sm hover:border-navy-900 text-sm font-medium text-navy-900 transition-colors focus:outline-none focus:ring-1 focus:ring-navy-900 cursor-pointer"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map(r => <option key={r} value={r}>{r === 'All' ? 'All Regions' : r}</option>)}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-lg pointer-events-none text-gray-500">expand_more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Report Grid */}
      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* If searching or filtering, show all results. If not, show list without featured (to avoid dupe) */}
          {(searchQuery || selectedIndustry !== 'All' || selectedYear !== 'All' || selectedRegion !== 'All' ? filteredReports : listReports).map((report, idx) => (
            <ScrollReveal key={report.id} delay={idx * 50}>
              <article className="flex flex-col bg-white border border-border rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${report.image}')` }}></div>
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-navy-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">{report.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-muted-text">{report.date}</span>
                    <span className="material-symbols-outlined text-gray-300 text-[1.2rem] hover:text-gold-600 cursor-pointer transition-colors">bookmark_border</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3 leading-snug group-hover:text-gold-600 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sm text-muted-text mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {report.desc}
                  </p>
                  <div className="mt-auto inline-flex items-center text-sm font-bold text-navy-900 group-hover:gap-2 transition-all">
                    Read Report
                    <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-border rounded-sm">
          <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">search_off</span>
          <p className="text-lg text-navy-900 font-medium">No reports found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedIndustry('All'); setSelectedYear('All'); setSelectedRegion('All'); }}
            className="mt-4 text-sm text-gold-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
      
      <div className="mt-16 flex justify-center">
        <button className="group flex items-center gap-2 px-8 py-4 bg-white border border-border rounded-sm hover:border-navy-900 text-sm font-bold text-navy-900 transition-all hover:shadow-md">
          Load Archived Reports
          <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform">expand_more</span>
        </button>
      </div>
    </div>
  );
};

export default Reports;
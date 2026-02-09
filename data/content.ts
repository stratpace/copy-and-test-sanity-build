export interface SubService {
  icon: string;
  title: string;
  desc: string;
  points: string[];
}

export interface Service {
  id: string;
  slug: string; // e.g., 'market-intelligence'
  title: string;
  shortDesc: string; // For homepage
  intro: string;
  icon: string; // For homepage
  subServices: SubService[];
}

export interface Industry {
  id: string;
  title: string;
  icon: string;
  shortDesc: string; // For grid cards
  subtitle: string; // For details hero
  content: string; // Full description
  stats: { label: string; value: string }[];
  challenges: string[];
}

export interface Report {
  id: string;
  title: string;
  date: string;
  category: string;
  region: string;
  year: string;
  image: string;
  desc: string;
  readTime?: string;
  featured?: boolean;
}

// --- CAPABILITIES (SERVICES) DATA ---
export const servicesData: Service[] = [
  {
    id: '01',
    slug: 'market-intelligence',
    title: 'Market Intelligence',
    shortDesc: 'Deep dive analysis into market trends, consumer behavior, and emerging opportunities to position your brand effectively.',
    intro: 'In an era of information overload, clarity is the ultimate asset. Our Market Intelligence practice cuts through the noise to deliver granular insights on competitor movements, consumer shifts, and emerging threats.',
    icon: 'analytics',
    subServices: [
      {
        icon: 'travel_explore',
        title: 'Competitive Landscaping',
        desc: 'Deep-dive analysis of competitor positioning, product roadmaps, and market share dynamics.',
        points: ['Share of Voice Analysis', 'Feature Gap Identification', 'Pricing Strategy Audits']
      },
      {
        icon: 'psychology',
        title: 'Consumer Sentiment',
        desc: 'Real-time tracking of brand perception and behavioral shifts across digital and physical touchpoints.',
        points: ['Brand Health Tracking', 'Customer Journey Mapping', 'Sentiment NLP Analysis']
      }
    ]
  },
  {
    id: '02',
    slug: 'growth-strategy',
    title: 'Growth Strategy',
    shortDesc: 'Actionable strategies for sustainable growth, operational efficiency, and long-term value creation.',
    intro: 'Growth is rarely accidental. It requires a rigorous blueprint that balances ambition with operational reality. We partner with leadership teams to design go-to-market engines, optimize revenue streams, and identify high-value expansion vectors.',
    icon: 'strategy',
    subServices: [
      {
        icon: 'rocket_launch',
        title: 'Go-to-Market Planning',
        desc: 'Structured launch frameworks for new products and market entries, minimizing time-to-value.',
        points: ['Segment Targeting', 'Channel Strategy', 'Launch Quarter Execution']
      },
      {
        icon: 'trending_up',
        title: 'Revenue Optimization',
        desc: 'Diagnosing funnel leakage and implementing high-impact adjustments to maximize CLTV.',
        points: ['Pricing Elasticity Models', 'Upsell/Cross-sell Matrices', 'Sales Enablement']
      }
    ]
  },
  {
    id: '03',
    slug: 'advisory',
    title: 'Advisory & Consultation',
    shortDesc: 'Benchmarking against key industry players to identify gaps, strengths, and areas for differentiation.',
    intro: 'Beyond singular projects, we serve as long-term strategic counsel for boards and executive committees. We provide the external perspective necessary to navigate complex transformations, mergers, and periods of high volatility.',
    icon: 'diversity_3',
    subServices: [
      {
        icon: 'diversity_3',
        title: 'Executive Workshops',
        desc: 'Facilitated sessions designed to align leadership teams on vision, mission, and strategic priorities.',
        points: ['Vision Setting', 'OKRs & KPI Development', 'Change Management']
      },
      {
        icon: 'gavel',
        title: 'Risk Assessment',
        desc: 'Proactive identification of macro and micro risks that could derail strategic objectives.',
        points: ['Regulatory Impact Analysis', 'Supply Chain Vulnerability', 'Crisis Simulation']
      }
    ]
  }
];

// --- EXPERTISE (INDUSTRIES) DATA ---
export const industriesData: Industry[] = [
  { 
    id: 'financial-services', 
    icon: 'account_balance', 
    title: 'Financial Services', 
    shortDesc: 'Navigating regulatory shifts and fintech disruption in global markets with precise capital allocation strategies.',
    subtitle: 'Navigating the convergence of traditional banking and decentralized finance.',
    content: 'The financial landscape is undergoing a tectonic shift. As interest rates stabilize and digital asset adoption matures, institutions must balance legacy infrastructure optimization with aggressive innovation. Our advisory helps global banks, asset managers, and fintechs navigate regulatory fragmentation while capturing value in emerging payment rails.',
    stats: [
      { label: 'Assets Advised', value: '$45B+' },
      { label: 'Regulatory Audits', value: '120+' },
      { label: 'Markets Covered', value: '35' }
    ],
    challenges: ['Legacy System Modernization', 'Cross-Border Compliance', 'DeFi Integration']
  },
  { 
    id: 'healthcare', 
    icon: 'medical_services', 
    title: 'Healthcare & Life Sciences', 
    shortDesc: 'Strategic insights for biopharma, payers, and provider systems adapting to value-based care models.',
    subtitle: 'Accelerating innovation in a value-based care ecosystem.',
    content: 'From digital therapeutics to personalized genomics, the pace of clinical innovation is outstripping operational readiness. We work with payers and providers to restructure care delivery models that prioritize patient outcomes while maintaining margin discipline in an inflationary environment.',
    stats: [
      { label: 'Clinical Pathways', value: '200+' },
      { label: 'Hospitals Optimized', value: '50+' },
      { label: 'Cost Savings', value: '18%' }
    ],
    challenges: ['Interoperability', 'Value-Based Care Transition', 'Staff Retention']
  },
  { 
    id: 'technology', 
    icon: 'memory', 
    title: 'Technology & Media', 
    shortDesc: 'From SaaS valuation to the impact of generative AI on enterprise workflows and digital infrastructure.',
    subtitle: 'Strategic foresight for the platform economy.',
    content: 'The generative AI revolution is redefining competitive moats. We guide enterprise software leaders and media conglomerates in restructuring revenue models, protecting IP, and navigating the antitrust landscape across the US and EU markets.',
    stats: [
      { label: 'M&A Due Diligence', value: '$12B' },
      { label: 'SaaS Pivots', value: '25+' },
      { label: 'Growth Rate', value: '3x' }
    ],
    challenges: ['AI Governance', 'Data Sovereignty', 'Monetization Strategy']
  },
  { 
    id: 'energy', 
    icon: 'factory', 
    title: 'Energy & Industrials', 
    shortDesc: 'Decarbonization strategies, renewable integration, and supply chain resilience for modern industry.',
    subtitle: 'Decarbonizing the industrial base without compromising output.',
    content: 'The energy transition is not just an environmental imperative but a capital allocation challenge. We assist heavy industry and utility majors in stress-testing net-zero roadmaps, securing supply chains for critical minerals, and financing renewable infrastructure.',
    stats: [
      { label: 'GW Renewable', value: '150+' },
      { label: 'Carbon Abated', value: '50MT' },
      { label: 'Projects', value: '85' }
    ],
    challenges: ['Grid Modernization', 'Supply Chain Security', 'Regulatory Cap-Ex']
  },
  { 
    id: 'consumer', 
    icon: 'shopping_bag', 
    title: 'Consumer Goods', 
    shortDesc: 'Evolving brand loyalty, omnichannel retail experiences, and direct-to-consumer economics.',
    subtitle: 'Adapting to the fragmented, omnichannel consumer journey.',
    content: 'Brand loyalty is at an all-time low. We help FMCG and luxury brands rebuild connection through direct-to-consumer data strategies, hyper-personalized marketing, and agile supply chain networks that respond to micro-trends in real time.',
    stats: [
      { label: 'DTC Launches', value: '40+' },
      { label: 'Market Entry', value: '12' },
      { label: 'Retention Lift', value: '22%' }
    ],
    challenges: ['CAC Inflation', 'Supply Chain Agility', 'Sustainability Claims']
  },
  { 
    id: 'real-estate', 
    icon: 'apartment', 
    title: 'Real Estate', 
    shortDesc: 'Commercial asset repricing, the future of workspace, and sustainable urban development trends.',
    subtitle: 'Repurposing the built environment for a hybrid world.',
    content: 'The office asset class is in discovery mode. We provide data-driven valuation models for commercial landlords and developers, identifying opportunities for adaptive reuse, mixed-use precinct activation, and smart building integration.',
    stats: [
      { label: 'Sq Ft Managed', value: '25M' },
      { label: 'Adaptive Reuse', value: '15' },
      { label: 'Asset Value', value: '$8B' }
    ],
    challenges: ['Asset Repricing', 'ESG Retrofitting', 'Tenant Experience']
  }
];

// --- REPORTS DATA ---
export const reportsData: Report[] = [
  { 
    id: '1',
    title: 'Supply Chain 2025: The "China Plus One" Strategy in Practice', 
    date: 'Oct 15, 2024', 
    category: 'Logistics', 
    region: 'APAC',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=10', 
    desc: 'An analysis of how Fortune 500 manufacturers are diversifying production hubs across Vietnam, India, and Mexico to mitigate geopolitical risk.',
    readTime: '8 min read',
    featured: true
  },
  { 
    id: '2',
    title: 'The Tokenization of Real World Assets: Institutional Roadmap', 
    date: 'Sep 28, 2024', 
    category: 'FinTech', 
    region: 'Global',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=11', 
    desc: 'With BlackRock and Fidelity entering the space, we map the trajectory for on-chain treasury bills and private credit markets through 2026.',
    readTime: '12 min read'
  },
  { 
    id: '3',
    title: 'Commercial Real Estate: The Post-Remote Work Correction', 
    date: 'Sep 15, 2024', 
    category: 'Real Estate', 
    region: 'North America',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=12', 
    desc: 'Analyzing vacancy rates in Tier-1 cities across North America and the implications for REIT performance and asset repricing.',
    readTime: '6 min read'
  },
  { 
    id: '4',
    title: 'AI Governance: EU AI Act vs. US Executive Orders', 
    date: 'Aug 30, 2024', 
    category: 'Technology', 
    region: 'EU/US',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=13', 
    desc: 'A comparative framework for enterprise compliance officers navigating the diverging regulatory landscapes of the West.',
    readTime: '15 min read'
  },
  { 
    id: '5',
    title: 'Green Hydrogen: Viability for Heavy Industry Decarbonization', 
    date: 'Aug 12, 2024', 
    category: 'Energy', 
    region: 'Global',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=14', 
    desc: 'Assessing the unit economics of green hydrogen adoption in steel and cement manufacturing against current carbon credit pricing.',
    readTime: '10 min read'
  },
  { 
    id: '6',
    title: 'Luxury Retail Outlook: Consumer Behavior in High-Interest Economies', 
    date: 'Jul 22, 2024', 
    category: 'Retail', 
    region: 'Europe',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=15', 
    desc: 'While aspirational shoppers pull back, UHNW consumption remains resilient. We analyze the bifurcation of the luxury market.',
    readTime: '7 min read'
  },
  { 
    id: '7',
    title: 'Emerging Markets: The Rise of the Indonesian Digital Economy', 
    date: 'Jun 10, 2024', 
    category: 'Macro Economy', 
    region: 'APAC',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=16', 
    desc: 'Venture capital flows and demographic dividends positioning Indonesia as the next major growth engine in Southeast Asia.',
    readTime: '9 min read'
  },
  { 
    id: '8',
    title: 'Cybersecurity Insurance: The Evolving Underwriting Model', 
    date: 'May 18, 2024', 
    category: 'Technology', 
    region: 'North America',
    year: '2024',
    image: 'https://picsum.photos/400/300?random=17', 
    desc: 'How ransomware evolution is forcing insurers to rewrite policy exclusions and increase premium baselines for mid-market enterprises.',
    readTime: '11 min read'
  },
  { 
    id: '9',
    title: '2023 Retrospective: The Year of Efficiency', 
    date: 'Dec 15, 2023', 
    category: 'Macro Economy', 
    region: 'Global',
    year: '2023',
    image: 'https://picsum.photos/400/300?random=18', 
    desc: 'A look back at how interest rate hikes reshaped corporate balance sheets and operational priorities across the S&P 500.',
    readTime: '14 min read'
  }
];
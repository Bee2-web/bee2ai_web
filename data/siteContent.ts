// Centralized static content and data for the site

// Navigation Types
export type MenuItem = {
  label: string;
  href: string;
};

export type NavItemWithDropdown = {
  label: string;
  dropdown: MenuItem[];
  href?: undefined;
  sections?: never;
};

export type NavSection = {
  title: string;
  items: MenuItem[];
};

export type NavItemWithSections = {
  label: string;
  sections: NavSection[];
  href?: undefined;
  dropdown?: never;
};

export type NavItemSimple = {
  label: string;
  href?: string;
  dropdown?: never;
  sections?: never;
};

export type NavItem = NavItemWithDropdown | NavItemWithSections | NavItemSimple;

// Navigation Data
export const navItems: NavItem[] = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'demandForecasting',
    href: '/solutions/demand-forecasting',
  },
  {
    label: 'inventoryPlanning',
    href: '/solutions/end-to-end-inventory-planning',
  },
  {
    label: 'pricingPromotion',
    href: '/solutions/pricing-promotion',
  },
  {
    label: 'seasonalPlanning',
    href: '/solutions/seasonal-planning',
  },
  {
    label: 'aboutUs',
    href: '/about',
  },
];

// Hero Content
export const heroContent = {
  title: 'Empowering Businesses with',
  titleSub: 'Intelligent AI Solutions',
  description:
    'Bee2 AI specializes in AI-based forecasting and smart inventory management for retail and e-commerce. We help you increase revenue and reduce waste by solving stock-out and overstock problems with 99% forecast accuracy and real-time, data-driven insights.',
  ctaText: 'Get Started',
  ctaLink: '/contact',
  secondaryCtaText: 'Learn More',
  secondaryCtaLink: '/solutions/demand-forecasting',
  heroPills: [
    { id: 'demand-forecasting', label: 'Demand Forecasting' },
    { id: 'inventory-planning', label: 'End-to-End Inventory' },
    { id: 'pricing-promotion', label: 'Pricing & Promotion' },
    { id: 'seasonal-planning', label: 'Seasonal Planning' },
  ],
};

// Feature Section Type
export type FeatureSection = {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  icon?: string;
  illustration?: string;
  reverse: boolean;
};

// Home page feature sections (below the hero)
export const featureSections: FeatureSection[] = [
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting',
    description:
      'Generate highly accurate demand forecasts on a SKU and store basis. Our AI models predict how much and when each product will sell, adapting to daily, weekly, and seasonal trends to ensure availability.',
    ctaText: 'Explore Forecasting',
    ctaLink: '/solutions/demand-forecasting',
    icon: '/icons/icon-ai.svg',
    illustration: '/vectors/feature-1.svg',
    reverse: false,
  },
  {
    id: 'pricing-promotion',
    title: 'Pricing & Promotion Forecasting',
    description:
      'Predict the impact of price changes on sales, revenue, and margins. Identify the most profitable discount rates and forecast promotion uplifts to maximize campaign ROI.',
    ctaText: 'Optimize Pricing',
    ctaLink: '/solutions/pricing-promotion',
    icon: '/icons/icon-chart.svg',
    illustration: '/vectors/feature-2.svg',
    reverse: true,
  },
  {
    id: 'inventory-planning',
    title: 'End-to-End Inventory Planning',
    description:
      'Calculate optimal stock levels to prevent stock-outs and overstocking. Get automated recommendations for reorder timing and quantities to maintain a healthy inventory balance.',
    ctaText: 'Plan Inventory',
    ctaLink: '/solutions/end-to-end-inventory-planning',
    icon: '/icons/icon-data.svg',
    illustration: '/vectors/feature-4.svg',
    reverse: false,
  },
  {
    id: 'seasonal-planning',
    title: 'Seasonal Planning',
    description:
      'Pinpoint clearance opportunities and generate optimal pricing for seasonal, promotional, or end-of-lifecycle products. Maximize turnover and margins with AI-driven insights.',
    ctaText: 'View Seasonal Planning',
    ctaLink: '/solutions/seasonal-planning',
    icon: '/icons/icon-market.svg',
    illustration: '/vectors/feature-3.svg',
    reverse: true,
  },
];

// Solutions Data for Dynamic Pages
export const solutionsData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  icon: string;
}> = {
  'demand-forecasting': {
    title: 'Demand Forecasting',
    subtitle: 'Predict Every Sale with 99% Accuracy',
    description: 'Transform your planning with AI-powered demand forecasting that adapts to market volatility. Our engine analyzes thousands of variables—from seasonality to local events—to predict SKU-level demand with precision.',
    icon: '/icons/icon-ai.svg',
    features: [
      'SKU/Store Level Granularity',
      'Daily, Weekly, and Monthly Forecasts',
      'Seasonality & Trend Analysis',
      'New Product Introduction (NPI) Forecasting',
      'Cannibalization Detection'
    ],
    benefits: [
      { title: 'Reduce Stock-outs', desc: 'Ensure products are available when customers want them, boosting revenue.' },
      { title: 'Minimize Waste', desc: 'Avoid over-ordering perishables or fast-fashion items.' },
      { title: 'Automated Insights', desc: 'Let AI handle the complex calculations so your team can focus on strategy.' }
    ]
  },
  'inventory-planning': {
    title: 'End-to-End Inventory Planning',
    subtitle: 'Balance Stock for Maximum Profitability',
    description: 'Maintain the perfect inventory levels across your entire supply chain. Our solution calculates safety stocks, reorder points, and transfer recommendations to free up working capital.',
    icon: '/icons/icon-data.svg',
    features: [
      'Automated Replenishment',
      'Safety Stock Optimization',
      'Multi-Echelon Inventory Optimization (MEIO)',
      'ABC/XYZ Segmentation',
      'Slow-Moving Stock Alerts'
    ],
    benefits: [
      { title: 'Working Capital Efficiency', desc: 'Reduce capital tied up in excess inventory.' },
      { title: 'Higher Service Levels', desc: 'Maintain high availability without bloating your warehouse.' },
      { title: 'Dynamic Responsiveness', desc: 'Automatically adjust to changing lead times and demand spikes.' }
    ]
  },
  'pricing-promotion': {
    title: 'Pricing & Promotion Forecasting',
    subtitle: 'Optimize Margins with Smart Pricing',
    description: 'Stop guessing what discounts work. Simulate price changes and promotion scenarios to predict their impact on volume, revenue, and gross margin before execution.',
    icon: '/icons/icon-chart.svg',
    features: [
      'Price Elasticity Modeling',
      'Promotion Uplift Prediction',
      'Markdown Optimization',
      'Scenario Simulation (What-if Analysis)',
      'Competitor Price Monitoring'
    ],
    benefits: [
      { title: 'Maximize ROI', desc: 'Run only the promotions that generate real profit.' },
      { title: 'Effective Markdowns', desc: 'Clear inventory at the best possible price point.' },
      { title: 'Strategic Pricing', desc: 'Set prices that align with your brand positioning and margin goals.' }
    ]

  },
  'seasonal-planning': {
    title: 'Seasonal Planning',
    subtitle: 'Maximize Turnover & Margins',
    description: 'Pinpoint clearance opportunities and generate optimal pricing for seasonal, promotional, or end-of-lifecycle products.',
    icon: '/icons/icon-market.svg',
    features: [
      'Clearance Optimization',
      'Automated Markdowns',
      'Seasonal Demand Forecasting',
      'Inventory Balancing',
      'Margin Protection'
    ],
    benefits: [
      { title: 'Higher Turnover', desc: 'Move seasonal stock fast before it loses value.' },
      { title: 'Optimized Margins', desc: 'Find the perfect price point to clear stock without giving away margin.' },
      { title: 'Automated Execution', desc: 'Save time with AI-driven price recommendations.' }
    ]
  }
};

export const siteMeta = {
  title: 'Bee2 AI - Intelligent Forecasting & Inventory Management',
  description:
    'Bee2 AI provides AI-driven demand forecasting, inventory planning, and price optimization for retailers. Achieve 99% forecast accuracy and reduce stock-outs by 85%.',
  icons: {
    icon: '/logo.svg',
  },
};

export const trustedBy = [
  { name: 'CarrefourSA', logo: '/logos/carrefoursa.png', height: 'h-8' },
  { name: 'Enerjisa', logo: '/logos/enerjisa.png', height: 'h-8' },
  { name: 'Bilyoner', logo: '/logos/bilyoner.svg', height: 'h-8' },
  { name: '44A Labs', logo: '/logos/4a-labs.png', height: 'h-8' },
  { name: 'Tericsoft', logo: '/logos/tericsoft.jpg', height: 'h-10' },
  { name: 'Partner', logo: '/logos/logo-en.png', height: 'h-8' },
];

'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface CategoryItem {
  label: string;
  icon: string;
}

interface Category {
  title: string;
  items: CategoryItem[];
}

interface DetailsContent {
  title: string;
  description: string[];
  categories: Category[];
}

const SalesSteps = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>('');

  const valueChain = [
    {
      id: 'raw-material',
      label: 'Raw material',
      icon: '/factory.svg',
      hasDropdown: false,
    },
    {
      id: 'manufacturers',
      label: 'Manufacturers',
      icon: '/factory.svg',
      hasDropdown: true,
    },
    {
      id: 'distributors',
      label: 'Distributors',
      icon: '/distributors.svg',
      hasDropdown: true,
    },
    {
      id: 'retailers',
      label: 'Retailers',
      icon: '/retailrs.svg',
      hasDropdown: true,
    },
    {
      id: 'consumers',
      label: 'Consumers',
      icon: '/consumer.svg',
      hasDropdown: false,
    },
  ];

  const detailsContent: Record<string, DetailsContent> = {
    manufacturers: {
      title: 'End-to-end supply chain planning solutions',
      description: [
        'RELEX enables global manufacturers to balance supply with demand through seamless master planning integration and end-to-end visibility, accelerating decision-making while maintaining profitability. The platform ensures smooth data flow across all supply chain tiers for accurate demand predictions, optimized inventory levels, and efficient production schedules.',
        'AI-driven scenario planning, real-time visibility, and automated replenishment help world-class supply chains align operations from suppliers to stores, reducing costs while improving service levels across the entire supply chain network.',
      ],
      categories: [
        {
          title: 'Manufacturing Planning',
          items: [
            { label: 'Master planning', icon: '🔄' },
            { label: 'Production scheduling', icon: '⏰' },
            { label: 'Distribution planning', icon: '📦' },
          ],
        },
        {
          title: 'Strategic Planning',
          items: [
            { label: 'IBP', icon: '📊' },
            { label: 'S&OE and S&OP', icon: '📋' },
            { label: 'MFP/OTB', icon: '💼' },
          ],
        },
        {
          title: 'Collaboration',
          items: [{ label: 'Supply chain collaboration', icon: '🤝' }],
        },
        {
          title: 'Diagnostics',
          items: [{ label: 'Diagnostics', icon: '🔍' }],
        },
      ],
    },
    distributors: {
      title: 'Fulfill demand efficiently in every channel',
      description: [
        'Wholesalers and distributors face demand from multiple channels with little room for error due to low margins, inventory waste and spoilage, supply delays, and storage capacity issues.',
        'The RELEX platform allows wholesalers and distributors to anticipate and fulfill demand in every channel with maximum service levels while minimizing spoilage and waste.',
      ],
      categories: [
        {
          title: 'Demand Planning',
          items: [
            { label: 'Demand planning', icon: '📈' },
            { label: 'Demand sensing', icon: '👁️' },
          ],
        },
        {
          title: 'Diagnostics',
          items: [{ label: 'Diagnostics', icon: '🔍' }],
        },
        {
          title: 'Manufacturing Planning',
          items: [{ label: 'Distribution planning', icon: '📦' }],
        },
        {
          title: 'Pricing & Promotions',
          items: [
            { label: 'Promotion planning', icon: '🎯' },
            { label: 'Price optimization', icon: '💰' },
            { label: 'Seasonal planning', icon: '🗓️' },
          ],
        },
        {
          title: 'Collaboration',
          items: [{ label: 'Supply chain collaboration', icon: '🤝' }],
        },
        {
          title: 'Retail Operations',
          items: [{ label: 'Predictive inventory', icon: '🔮' }],
        },
      ],
    },
    retailers: {
      title: 'Automate and optimize planning across your supply chain',
      description: [
        'Retailers face siloed planning with disconnected systems, low automation levels, and a lack of continuous visibility across their end-to-end supply chain.',
        'With RELEX, retailers can achieve continuous visibility and automation with actionable insights for efficient and accurate end-to-end supply chain planning. Our unified platform is designed specifically for adaptability, so users can configure the tool for their specific business needs and drive growth.',
      ],
      categories: [
        {
          title: 'Demand Planning',
          items: [
            { label: 'Demand planning', icon: '📈' },
            { label: 'Demand sensing', icon: '👁️' },
          ],
        },
        {
          title: 'Inventory & Replenishment',
          items: [
            { label: 'End-to-end inventory', icon: '📦' },
            { label: 'Fresh inventory', icon: '🥬' },
            { label: 'Automatic replenishment & allocation', icon: '🔄' },
            { label: 'Channel planning', icon: '🌐' },
          ],
        },
        {
          title: 'Collaboration',
          items: [{ label: 'Supply chain collaboration', icon: '🤝' }],
        },
        {
          title: 'Diagnostics',
          items: [{ label: 'Diagnostics', icon: '🔍' }],
        },
        {
          title: 'Space & Assortment',
          items: [
            { label: 'Assortment planning', icon: '📋' },
            { label: 'Planogram optimization', icon: '🗺️' },
            { label: 'Retail floor planning', icon: '🏬' },
          ],
        },
        {
          title: 'Retail Operations',
          items: [
            { label: 'Store execution', icon: '🏪' },
            { label: 'Predictive inventory', icon: '🔮' },
            { label: 'Workload forecasting', icon: '📅' },
          ],
        },
        {
          title: 'Strategic Planning',
          items: [
            { label: 'IBP', icon: '📊' },
            { label: 'S&OE and S&OP', icon: '📋' },
            { label: 'MFP/OTB', icon: '💼' },
          ],
        },
        {
          title: 'Pricing & Promotions',
          items: [
            { label: 'Price optimization', icon: '💰' },
            { label: 'Promotion planning', icon: '🎯' },
            { label: 'Seasonal planning', icon: '🗓️' },
          ],
        },
      ],
    },
  };

  return (
    <>
      <div className='mb-12'>
        <h3 className='text-[48px] font-bold text-navy text-center mb-12'>
          Explore how Bee2AI supports the
          <br />
          entire consumer goods value chain
        </h3>

        {/* Value Chain Cards */}
        <div className='flex justify-center gap-0 max-w-6xl mx-auto mb-8'>
          {valueChain.map((item, index) => (
            <div key={item.id} className='flex'>
              <div
                className={`flex flex-col items-center rounded-xl min-w-[200px] transition-all duration-300 cursor-pointer card-animate-${index} ${
                  selectedCard === item.id ? 'shadow-2xl' : 'hover:shadow-2xl'
                }`}
                onClick={() => item.hasDropdown && setSelectedCard(item.id)}
              >
                {/* Top half - Icon */}
                <div className='w-full bg-linear-to-br from-blue-50 to-blue-100/50  p-8 flex items-center justify-center border border-blue-100/50 border-b-0 '>
                  <div className='bg-white rounded-2xl p-4 shadow-sm'>
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={64}
                      height={64}
                      className='w-16 h-16'
                    />
                  </div>
                </div>

                {/* Bottom half - Text */}
                <div
                  className={`w-full h-full rounded-b-xl p-6 border border-blue-100/50 border-t-0 transition-colors duration-300 ${
                    selectedCard === item.id ? 'bg-blue-100' : 'bg-white'
                  }`}
                >
                  <div className='text-base font-bold text-navy text-center mb-3'>
                    {item.label}
                  </div>
                  {item.hasDropdown && (
                    <button className='text-sm text-blue font-semibold hover:underline flex items-center gap-1 mx-auto'>
                      View solutions
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        className={`inline-block transition-transform duration-300 ${
                          selectedCard === item.id ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d='M3 4.5L6 7.5L9 4.5'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Arrow between cards */}
              {index < valueChain.length - 1 && (
                <div
                  className={`flex items-center mx-[-15px] justify-center px-3 z-5 `}
                >
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 24 24'
                    fill='none'
                    className={`text-black bg-white rounded-full h-[30px] w-[30px] shadow-2xl transition-all duration-300 arrow-animate-${index}`}
                  >
                    <path
                      d='M9 18L15 12L9 6'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Details Panel */}
        {selectedCard && detailsContent[selectedCard] && (
          <div className='max-w-6xl mx-auto bg-blue-50/50 rounded-3xl p-8 border border-blue-100 animate-fadeIn'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Left column - Description */}
              <div className='lg:col-span-1'>
                <h4 className='text-2xl font-bold text-navy mb-4'>
                  {detailsContent[selectedCard].title}
                </h4>
                {detailsContent[selectedCard].description.map((para, idx) => (
                  <p
                    key={idx}
                    className='text-sm text-navy mb-4 leading-relaxed'
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Right columns - Categories */}
              <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {detailsContent[selectedCard].categories.map(
                  (category, idx) => (
                    <div key={idx}>
                      <h5 className='text-lg font-bold text-navy mb-3'>
                        {category.title}
                      </h5>
                      <ul className='space-y-2'>
                        {category.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className='flex items-center text-sm text-navy'
                          >
                            <span className='mr-2'>{item.icon}</span>
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SalesSteps;

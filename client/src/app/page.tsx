'use client';

import { motion } from 'framer-motion';
import WaitlistForm from '@/components/WaitlistForm';
import FeatureCard from '@/components/FeatureCard';
import Hero from '@/components/Hero';

const features = [
  {
    title: 'Early Access',
    description: 'Get first dibs when we launch',
    icon: '🚀',
  },
  {
    title: 'Special Offers',
    description: 'Exclusive deals for waitlist members',
    icon: '💎',
  },
  {
    title: 'Updates',
    description: 'Stay informed about our progress',
    icon: '📫',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Hero />
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
import React from 'react';
import { FeatureType } from '../types';
import * as LucideIcons from 'lucide-react';

interface FeatureCardProps {
  feature: FeatureType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  // Dynamically select the icon based on the feature's icon name
  const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons];

  return (
    <div className="bg-amber-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
      <div className="bg-amber-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
        {IconComponent && <IconComponent className="h-8 w-8 text-amber-800" />}
      </div>
      <h3 className="text-xl font-bold text-amber-900 mb-2">{feature.title}</h3>
      <p className="text-gray-700">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
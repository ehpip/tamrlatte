import React from 'react';
import { StoreLocationType } from '../types';
import { MapPin, Clock } from 'lucide-react';

interface StoreCardProps {
  store: StoreLocationType;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg">
      <h3 className="text-lg font-bold text-amber-900 mb-2">{store.name}</h3>
      <div className="flex items-start mb-2">
        <MapPin className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-gray-700">{store.address}</p>
          <p className="text-gray-700">{store.city}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Clock className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
        <p className="text-gray-600 text-sm">{store.hours}</p>
      </div>
    </div>
  );
};

export default StoreCard;
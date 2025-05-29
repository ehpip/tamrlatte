import React, { useState } from 'react';
import StoreCard from '../components/StoreCard';
import { storeLocations } from '../data/data';
import { Search, MapPin } from 'lucide-react';

const StoreLocator: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const filteredStores = storeLocations.filter(store => 
    store.name.toLowerCase().includes(query.toLowerCase()) ||
    store.city.toLowerCase().includes(query.toLowerCase()) ||
    store.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="find" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Find TamrLatte Near You</h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            TamrLatte is available at select premium grocery stores and cafes nationwide
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by city or store name..."
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStores.length > 0 ? (
            filteredStores.map(store => (
              <StoreCard key={store.id} store={store} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <MapPin className="h-12 w-12 text-amber-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-amber-900 mb-2">No stores found</h3>
              <p className="text-amber-700">
                Try searching for a different location or store name
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-amber-800">
            Don't see a location near you? <a href="#" className="text-amber-600 hover:underline font-medium">Contact us</a> to request TamrLatte at your favorite store.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
import React from 'react';
import { MapPin, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SettingsSidebar } from './SettingsSidebar';

export function LocationSettings() {
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    switch (tab) {
      case 'location':
        navigate('/LocationSettings');
        break;
      case 'shipping':
        navigate('/ShippingSettings');
        break;
      case 'payment':
        navigate('/PaymentSettings');
        break;
      case 'notifications':
        navigate('/NotificationSettings');
        break;
      case 'security':
        navigate('/SecuritySettings');
        break;
      case 'connections':
        navigate('/ConnectionSettings');
        break;
      case 'general':
        navigate('/StoreSettings');
        break;
    }
  };

  return (
    <div className="flex">
      <SettingsSidebar activeTab="location" setActiveTab={handleTabChange} />
      
      <div className="flex-1 p-8">
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/StoreSettings')}
            className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Voltar para Configurações</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Location Settings</h2>
          
          <div className="space-y-6">
            {/* Store Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Store Address
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apt, Suite, etc. (optional)"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* City, State, ZIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  State/Province
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ZIP/Postal Code
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Country
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                <option value="BR">Brazil</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Map Preview */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Map Preview
              </label>
              <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p>Map preview will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Service Area
              </label>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="serviceArea"
                    id="radius"
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="radius" className="text-gray-700 dark:text-gray-300">
                    Within radius
                  </label>
                  <input
                    type="number"
                    placeholder="Distance"
                    className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <option value="km">km</option>
                    <option value="mi">mi</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="serviceArea"
                    id="specific"
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="specific" className="text-gray-700 dark:text-gray-300">
                    Specific regions
                  </label>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
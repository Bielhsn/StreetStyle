import React from 'react';
import { Store, MapPin, Truck, CreditCard, Bell, Shield, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function SettingsSidebar({ activeTab, setActiveTab }: SettingsSidebarProps) {
  const navigate = useNavigate();

  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Settings</h2>
        <nav className="space-y-2">
          <button 
            onClick={() => navigate('/StoreSettings')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'general' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <Store className="h-5 w-5 mr-3" />
            General
          </button>
          <button 
            onClick={() => setActiveTab('location')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'location' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <MapPin className="h-5 w-5 mr-3" />
            Location
          </button>
          <button 
            onClick={() => setActiveTab('shipping')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'shipping' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <Truck className="h-5 w-5 mr-3" />
            Shipping
          </button>
          <button 
            onClick={() => setActiveTab('payment')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'payment' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <CreditCard className="h-5 w-5 mr-3" />
            Payment
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'notifications' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <Bell className="h-5 w-5 mr-3" />
            Notifications
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'security' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <Shield className="h-5 w-5 mr-3" />
            Security
          </button>
          <button 
            onClick={() => setActiveTab('connections')}
            className={`w-full flex items-center px-4 py-2 ${
              activeTab === 'connections' 
                ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            } rounded-lg`}
          >
            <Link className="h-5 w-5 mr-3" />
            Connections
          </button>
        </nav>
      </div>
    </div>
  );
} 
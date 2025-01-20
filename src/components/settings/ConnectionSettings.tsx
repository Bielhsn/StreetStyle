import React from 'react';
import { Link, Instagram, Facebook, Twitter, Youtube, Globe, Share2, Plus, ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SettingsSidebar } from './SettingsSidebar';

export function ConnectionSettings() {
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
      <SettingsSidebar activeTab="connections" setActiveTab={handleTabChange} />
      
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

        {/* Social Media Connections */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Social Media Connections</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Connect your store with social media platforms</p>
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                Add Connection
              </button>
            </div>

            <div className="space-y-4">
              {/* Instagram */}
              <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Instagram</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connected as @yourstorename</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/50 rounded-lg text-sm font-medium transition-colors">
                  Disconnect
                </button>
              </div>

              {/* Facebook */}
              <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Facebook</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Not connected</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
                  Connect
                </button>
              </div>

              {/* Twitter */}
              <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Twitter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Twitter</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Not connected</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>

          {/* API Integration */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">API Integration</h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">API Key</h3>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                    Generate New Key
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value="sk_live_xxxxxxxxxxxxxxxxxxxxx"
                    readOnly
                    className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
                    Copy
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Never share your API key. Reset it immediately if exposed.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Webhook URL</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">https://yourstore.com/api/webhook</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third-party Apps */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connected Apps</h2>
            
            <div className="space-y-4">
              {/* Analytics App */}
              <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Share2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Analytics Pro</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Advanced analytics and reporting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Active
                  </span>
                  <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Marketing App */}
              <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Marketing Suite</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email and social media marketing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Trial
                  </span>
                  <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500">
              <Plus className="h-5 w-5 mr-2" />
              Connect New App
            </button>
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
  );
}
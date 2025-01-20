import React from 'react';
import { CreditCard, DollarSign, Wallet, Building2, Plus, Lock, Shield, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SettingsSidebar } from './SettingsSidebar';

export function PaymentSettings() {
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
      default:
        navigate('/StoreSettings');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-8">
        <div className="flex">
          <SettingsSidebar activeTab="payment" setActiveTab={handleTabChange} />
          
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

            {/* Payment Methods */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
                <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </button>
              </div>

              <div className="space-y-4">
                {/* Credit Card */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Credit Card Payments</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Accept Visa, Mastercard, American Express</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* PayPal */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Wallet className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">PayPal</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Accept PayPal payments</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bank Transfer</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Accept direct bank transfers</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Currency Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Currency Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Default Currency
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <input
                    type="checkbox"
                    id="autoConvert"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="autoConvert" className="text-sm text-gray-700 dark:text-gray-300">
                    Automatically convert prices to customer's local currency
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Security */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Payment Security</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="font-medium text-blue-900 dark:text-blue-300">SSL Certificate</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400">Your store is secured with SSL encryption</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <Lock className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="font-medium text-green-900 dark:text-green-300">PCI Compliance</h3>
                    <p className="text-sm text-green-700 dark:text-green-400">Your payment processing is PCI compliant</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                  <div>
                    <h3 className="font-medium text-yellow-900 dark:text-yellow-300">Fraud Protection</h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">Advanced fraud detection is active</p>
                  </div>
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
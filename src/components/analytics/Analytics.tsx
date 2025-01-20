import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, TrendingUp, Users, ShoppingBag, DollarSign, 
  ArrowUpRight, ArrowDownRight, Clock, Globe, ShoppingCart,
  Calendar, Activity, Target, UserCheck, Package, CreditCard
} from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, BarChart, 
  Bar, PieChart, Pie, Cell 
} from 'recharts';

// Dados expandidos para mais detalhes
const monthlyData = [
  { name: 'Jan', sales: 4000, visitors: 2400, orders: 180, revenue: 12000 },
  { name: 'Feb', sales: 3000, visitors: 1398, orders: 150, revenue: 9000 },
  { name: 'Mar', sales: 5000, visitors: 3800, orders: 210, revenue: 15000 },
  { name: 'Apr', sales: 4500, visitors: 3908, orders: 190, revenue: 13500 },
  { name: 'May', sales: 6000, visitors: 4800, orders: 250, revenue: 18000 },
  { name: 'Jun', sales: 5500, visitors: 3800, orders: 220, revenue: 16500 },
  { name: 'Jul', sales: 7000, visitors: 5200, orders: 280, revenue: 21000 },
  { name: 'Aug', sales: 6500, visitors: 4900, orders: 260, revenue: 19500 },
  { name: 'Sep', sales: 5800, visitors: 4300, orders: 230, revenue: 17400 },
  { name: 'Oct', sales: 6200, visitors: 4600, orders: 240, revenue: 18600 },
  { name: 'Nov', sales: 7500, visitors: 5500, orders: 300, revenue: 22500 },
  { name: 'Dec', sales: 8000, visitors: 6000, orders: 320, revenue: 24000 },
];

const customerSegments = [
  { name: 'New Customers', value: 30 },
  { name: 'Returning', value: 45 },
  { name: 'Loyal', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const hourlyTraffic = [
  { hour: '00:00', visitors: 120 },
  { hour: '03:00', visitors: 80 },
  { hour: '06:00', visitors: 150 },
  { hour: '09:00', visitors: 450 },
  { hour: '12:00', visitors: 650 },
  { hour: '15:00', visitors: 550 },
  { hour: '18:00', visitors: 780 },
  { hour: '21:00', visitors: 350 },
];

const categoryPerformance = [
  { category: 'Clothing', sales: 4500, growth: 15 },
  { category: 'Accessories', sales: 2800, growth: 8 },
  { category: 'Footwear', sales: 3200, growth: 12 },
  { category: 'Electronics', sales: 5600, growth: 20 },
  { category: 'Home & Living', sales: 2100, growth: 5 },
];

export function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
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

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                12% vs last month
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$197,426</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Target: $250,000</span>
              <span>75% Achieved</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8% vs last month
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2,856</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-600 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Target: 3,000</span>
              <span>85% Achieved</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <UserCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                15% vs last month
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12,856</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Active Customers</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>New</span>
              <span>30%</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Returning</span>
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                5% vs last month
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8.5%</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</p>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Industry avg: 3.2%</span>
              <span className="text-green-500">+5.3%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3B82F6" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hourly Traffic */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hourly Traffic</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyTraffic}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitors" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Customer Segments and Category Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Customer Segments */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Segments</h2>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {customerSegments.map((segment, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {segment.name} ({segment.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category Performance</h2>
          <div className="space-y-4">
            {categoryPerformance.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {category.category}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ${category.sales.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(category.sales/6000)*100}%` }}
                  ></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-green-500">+{category.growth}% growth</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                <ShoppingCart className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  New order #12345
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Order value: $156.00
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              2 minutes ago
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  New customer registration
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Customer ID: #89012
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              15 minutes ago
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Package className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Order #12344 shipped
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tracking ID: TRK789012
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              1 hour ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
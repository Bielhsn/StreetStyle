import { useState } from 'react';
import { ShoppingCart as CartIcon, Sun, Moon, Search, ChevronDown } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { products } from './data/products';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const categories = {
    all: 'All Products',
    tshirts: 'T-shirts',
    shoes: 'Shoes',
    shorts: 'Shorts'
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ShopHub</h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? 
                    <Moon size={24} className="text-gray-800 dark:text-white" /> : 
                    <Sun size={24} className="text-gray-800 dark:text-white" />
                  }
                </button>
                {!isCheckingOut && (
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <CartIcon size={24} className="text-gray-800 dark:text-white" />
                  </button>
                )}
              </div>
            </div>

            {/* Navigation and Search */}
            <div className="flex items-center justify-between">
              {/* Navigation Links */}
              <nav className="flex items-center gap-6">
                <a href="#" 
                   className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                   onClick={() => setSelectedCategory('all')}
                >
                  Home
                </a>
                <div className="relative">
                  <button
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                  >
                    Products
                    <ChevronDown size={16} />
                  </button>
                  {isProductsMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                      {Object.entries(categories).map(([key, value]) => (
                        <button
                          key={key}
                          className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => {
                            setSelectedCategory(key);
                            setIsProductsMenuOpen(false);
                          }}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              {/* Search Bar */}
              <div className="relative flex-1 max-w-md ml-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                           focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                           focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {isCheckingOut ? (
        <Checkout />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {categories[selectedCategory as keyof typeof categories]}
          </h2>
          
          <div className="flex gap-8">
            {/* Products Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isCartOpen ? 'w-2/3' : 'w-full'}`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No products found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            {isCartOpen && (
              <div className="w-1/3">
                <Cart onCheckout={() => setIsCheckingOut(true)} />
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
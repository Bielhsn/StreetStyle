import { useState, useEffect } from 'react';
import { ShoppingCart as CartIcon, Sun, Moon, Search, ChevronDown, User as UserIcon } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { products } from './data/products';

function AppContent() {
  const { cart } = useCart(); // Usando o contexto para obter os itens do carrinho
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const categories = {
    all: 'All Products',
    tshirts: 'T-shirts',
    shoes: 'Shoes',
    shorts: 'Shorts',
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calcular total de itens no carrinho
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileOpen && !(event.target as Element).closest('.profile-dropdown')) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileOpen]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">StreetStyle</h1>
            <div className="flex items-center gap-4 relative">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={24} className="text-gray-800 dark:text-white" />
                ) : (
                  <Sun size={24} className="text-gray-800 dark:text-white" />
                )}
              </button>

              {/* Ícone do perfil e dropdown */}
              <div className="relative profile-dropdown">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <UserIcon size={24} className="text-gray-800 dark:text-white" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-4 z-50">
                    <div className="px-4">
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mb-3"></div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">John Doe</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">john.doe@example.com</p>
                      </div>
                      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Ícone do carrinho */}
              <div className="relative">
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <CartIcon size={24} className="text-gray-800 dark:text-white" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {isCheckingOut ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Cart onBackToShopping={() => setIsCheckingOut(false)} />
        </main>
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {categories[selectedCategory as keyof typeof categories]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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

import { useState, useEffect } from "react";
import {
  ShoppingCart as CartIcon,
  Sun,
  Moon,
  UserCircle,
} from "lucide-react";
import { CartProvider, useCart } from "./context/CartContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ProductCreate } from "./components/products/ProductCreate";
import { Profile } from "./components/Profile";
import { StoreSettings } from './components/StoreSettings';
import { LocationSettings } from './components/settings/LocationSettings';
import { ShippingSettings } from './components/settings/ShippingSettings';
import { PaymentSettings } from './components/settings/PaymentSettings';
import { NotificationSettings } from './components/settings/NotificationSettings';
import { SecuritySettings } from './components/settings/SecuritySettings';
import { ConnectionSettings } from './components/settings/ConnectionSettings';
import { ProductEdit } from './components/products/ProductEdit';
import { Analytics } from './components/analytics/Analytics';
import { Login } from './components/auth/Login';
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function AppContent() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [products, setProducts] = useState<Product[]>([]); // Estado para os produtos
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { theme, toggleTheme } = useTheme();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null); // Dados do perfil GitHub
  const username = "Bielhsn";

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileMenuOpen && !(event.target as Element).closest(".profile-menu")) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileMenuOpen]);

  // Buscar produtos do back-end
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  // Buscar dados do perfil do GitHub
  useEffect(() => {
    if (isProfileOpen && !profile) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error("Erro ao buscar o perfil do GitHub:", error));
    }
  }, [isProfileOpen, profile, username]);

  const categories = {
    all: "All Products",
    tshirts: "T-shirts",
    shoes: "Shoes",
    shorts: "Shorts",
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileOpen && !(event.target as Element).closest(".profile-dropdown")) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">StreetStyle</h1>
            <form className="form relative">
              <input
                className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search..."
              />
            </form>
            <div className="flex items-center gap-4 relative">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon size={24} className="text-gray-800 dark:text-white" />
                ) : (
                  <Sun size={24} className="text-gray-800 dark:text-white" />
                )}
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <CartIcon size={24} className="text-gray-800 dark:text-white" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
              </div>
              {/* Ícone do perfil e dropdown */}
              <div className="relative profile-menu">
                <button
                  onClick={toggleProfileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <UserCircle size={24} className="text-gray-800 dark:text-white" />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => navigate("/Profile")}
                    >
                      Visit Profile
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => navigate("/ProductCreate")}
                    >
                      Create Product
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
              {/* Ícone do GitHub */}
              <div className="relative">
                <button
                  onClick={() => window.open("https://github.com/Bielhsn/StreetStyle", "_blank")}
                  className="group p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 15 15"
                    className="w-5 text-white"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      fill="currentColor"
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isCheckingOut ? (
          <Cart onBackToShopping={() => setIsCheckingOut(false)} />
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {categories[selectedCategory as keyof typeof categories]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/ProductCreate" element={<ProductCreate />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/StoreSettings" element={<StoreSettings />} />
            <Route path="/LocationSettings" element={<LocationSettings />} />
            <Route path="/ShippingSettings" element={<ShippingSettings />} />
            <Route path="/PaymentSettings" element={<PaymentSettings />} />
            <Route path="/NotificationSettings" element={<NotificationSettings />} />
            <Route path="/SecuritySettings" element={<SecuritySettings />} />
            <Route path="/ConnectionSettings" element={<ConnectionSettings />} />
            <Route path="/ProductEdit" element={<ProductEdit />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

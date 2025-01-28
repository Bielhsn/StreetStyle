import { useState, useEffect } from "react";
import { ShoppingCart as CartIcon, Sun, Moon, UserCircle } from "lucide-react";
import { CartProvider, useCart } from "./context/CartContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { ProductCreate } from "./components/products/ProductCreate";
import { Profile } from "./components/Profile";
import { StoreSettings } from "./components/StoreSettings";
import { LocationSettings } from "./components/settings/LocationSettings";
import { ShippingSettings } from "./components/settings/ShippingSettings";
import { PaymentSettings } from "./components/settings/PaymentSettings";
import { NotificationSettings } from "./components/settings/NotificationSettings";
import { SecuritySettings } from "./components/settings/SecuritySettings";
import { ConnectionSettings } from "./components/settings/ConnectionSettings";
import { ProductEdit } from "./components/products/ProductEdit";
import { Analytics } from "./components/analytics/Analytics";
import { Login } from "./components/auth/Login";
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
      if (
        isProfileMenuOpen &&
        !(event.target as Element).closest(".profile-menu")
      ) {
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
        .catch((error) =>
          console.error("Erro ao buscar o perfil do GitHub:", error)
        );
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
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isProfileOpen &&
        !(event.target as Element).closest(".profile-dropdown")
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/public/img/icon.png"
        alt="Logo"
        className="h-16 w-auto mr-1 " // Adiciona 'ml-2' para margem à esquerda
        />
    </div>

    {/* Barra de pesquisa centralizada */}
    <div className="flex-1 mx-4 relative mr-8">
      <input
        type="search"
        placeholder="Search Item"
        aria-label="Search Item"
        className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
      />
      <div className="absolute inset-y-0 right-3 flex items-center">
        <button
          type="submit"
          aria-label="Submit"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
        >
          <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Ícones alinhados à direita */}
    <div className="flex items-center gap-4 ">
      {/* Ícone do carrinho */}
      <div className="group relative">
        <button
          onClick={() => setIsCheckingOut(true)}
          className="text-gray-800 dark:text-white"
        >
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
          >
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Ícone do perfil */}
      <div className="relative">
        <button
          onClick={toggleProfileMenu}
          className="text-gray-800 dark:text-white"
        >
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            ></path>
          </svg>
        </button>
      </div>

      {/* Ícone do GitHub */}
      <div className="ml-1">
        <button
          onClick={() => window.open("https://github.com/Bielhsn/StreetStyle", "_blank")}
          className="text-gray-800 dark:text-white"
        >
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
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
      <div className="fixed bottom-4 left-4 z-50">
  <label className="inline-flex items-center relative">
    {/* Input para alternância de tema */}
    <input
      className="peer hidden"
      id="toggle"
      type="checkbox"
      checked={theme === "dark"}
      onChange={toggleTheme} // Função que alterna entre temas
    />
    {/* Corpo do toggle */}
    <div
      className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full 
      after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r 
      from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 
      after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] 
      peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
    ></div>

    {/* Ícone de Sol (Tema Claro) */}
    <svg
      height="0"
      width="100"
      viewBox="0 0 24 24"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
    >
      <path
        d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
      ></path>
    </svg>

    {/* Ícone de Lua (Tema Escuro) */}
    <svg
      height="512"
      width="512"
      viewBox="0 0 24 24"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
    >
      <path
        d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
      ></path>
    </svg>
  </label>
</div>

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
            <Route
              path="/NotificationSettings"
              element={<NotificationSettings />}
            />
            <Route path="/SecuritySettings" element={<SecuritySettings />} />
            <Route
              path="/ConnectionSettings"
              element={<ConnectionSettings />}
            />
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

import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.variants?.[0]?.color || '');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // Define a imagem atual com base na cor selecionada
  const currentImage =
  product.variants?.find((variant) => variant.color === selectedColor)?.image ||
  `http://localhost:5000${product.image}`; // Usa o caminho da imagem principal como fallback

return (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors hover:scale-105">
    {/* Imagem do produto */}
    <img
      src={`http://localhost:5000${currentImage}`} // Adiciona o caminho do servidor
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">{product.description}</p>
      <div className="flex space-x-2 mt-4">
        {product.variants?.map((variant) => (
          <button
            key={variant.color}
            onClick={() => handleColorChange(variant.color)}
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === variant.color ? 'border-blue-500' : 'border-gray-300'
            }`}
            style={{ backgroundColor: variant.color }}
            aria-label={variant.color}
          ></button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              image: currentImage, // Garante que o carrinho receba a imagem correta
              quantity: 1,
            })
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

};
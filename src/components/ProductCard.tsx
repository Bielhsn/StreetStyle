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
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
  {/* Imagem do produto */}
  <img
    src={`http://localhost:5000${currentImage}`} // Adiciona o caminho do servidor
    alt={product.name}
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
    {/* Nome do Produto */}
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {product.name}
    </h3>
    {/* Descrição */}
    <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
      {product.description}
    </p>
    {/* Cores Variantes */}
    <div className="flex space-x-2 mt-4">
      {product.variants?.map((variant) => (
        <button
          key={variant.color}
          onClick={() => handleColorChange(variant.color)}
          className={`w-6 h-6 rounded-full border-2 ${
            selectedColor === variant.color
              ? "border-blue-500"
              : "border-gray-300"
          }`}
          style={{ backgroundColor: variant.color }}
          aria-label={variant.color}
        ></button>
      ))}
    </div>
    {/* Rodapé */}
    <div className="mt-4 flex items-center justify-between">
      {/* Preço */}
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        ${product.price.toFixed(2)}
      </span>
      {/* Botão para adicionar ao carrinho */}
      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: currentImage, // Adiciona a imagem correta ao carrinho
            quantity: 1,
          })
        }
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
      >
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
          <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
          <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
        </svg>
        Add to Cart
      </button>
    </div>
  </div>
</div>


);

};
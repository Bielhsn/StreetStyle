import React from 'react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onBackToShopping: () => void;
}

export function Cart({ onBackToShopping }: CartProps) {
  const { cart, removeFromCart } = useCart(); // Certifique-se de que o contexto inclui o método removeFromCart

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
        <button
          onClick={onBackToShopping}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4"
            >
              <div className="flex items-center space-x-4">
                {/* Exibindo a imagem do produto */}
                <img
                  src={item.image} // Certifique-se de que o objeto do item inclui 'image'
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  {/* Exibindo os detalhes do produto */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 dark:text-white">Quantity: {item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)} // Removendo item do carrinho
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

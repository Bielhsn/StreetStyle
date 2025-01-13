import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartProps {
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const { state, dispatch } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border dark:border-gray-700 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                    })}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Minus size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <span className="w-8 text-center text-gray-800 dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: item.quantity + 1 }
                    })}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Plus size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                    className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full ml-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center text-xl font-bold text-gray-900 dark:text-white">
              <span>Total:</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
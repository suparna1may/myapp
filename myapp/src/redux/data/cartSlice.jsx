import { createSlice } from '@reduxjs/toolkit'
import products from '../../pages/Home/ProductsImage';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    items: products,
    totalQuantity: 0,
    totalPrice: 0,
  };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

      //Product Info Page
      
      addItemToCart: (state, action) => {
        let find = state.cart.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          state.cart[find].quantity += 1;
        } else {
          state.cart.push(action.payload);
        }

        localStorage.setItem('cart', JSON.stringify(state.cart));

      },

     

        //Cart Page

      addToCart: (state, action) => {
        let find = state.cart.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          state.cart[find].quantity += 1;
        } else {
          state.cart.push(action.payload);
        }

        localStorage.setItem('cart', JSON.stringify(state.cart));

      },

      getCartTotal: (state) => {
        let { totalQuantity, totalPrice } = state.cart.reduce(
          (cartTotal, cartItem) => {
            console.log("carttotal", cartTotal);
            console.log("cartitem", cartItem);
            
            const { price, quantity } = cartItem;
            console.log(price, quantity);
            const itemTotal = price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
          },
          {
            totalPrice: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrice = totalPrice;
        state.totalQuantity = totalQuantity;
      },

      removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },

      increaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },

      decreaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
 


      },
    
});

export const { addItemToCart, addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
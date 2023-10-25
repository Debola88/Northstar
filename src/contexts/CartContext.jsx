import { createContext, useState, useEffect, useMemo } from "react";


// Context is created by defining the functions and state to be used within the context
export const CartContext = createContext({
  shopProducts: [],
  setShopProducts: () => null,
  cartItems: [],
  setCartItems: () => null, // () => null means a function that returns null
  addItemToCart: () => {}, // () => {} means a function that returns an object or basically a value
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  emptyCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});



// creating some of the independent / helper functions that will be used within the context
const addCartItem = (cartItems, itemToAdd, sizeToAdd) => {

  // First check if the item exists in the cart array
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
   
  // if the item exists map the cartItem array and when you get to the item with the same id, increase the quantity by one
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  // if the item does not exist, add the item to the cart array
  return [...cartItems, { ...itemToAdd, quantity: 1 , size: sizeToAdd || 'medium'}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // if the item exists and the quantity is equal to one, remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // if the item exists and the quantity is greater than one, reduce the quantity by one
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
}



// Create a Context Provider to pass the context down to the components
// When creating the provider, pass the state values and functions that will be used as if they will affect the state. so in the end the functions have to either set state or not.
export const CartProvider = ({ children }) => {
  const [shopProducts, setShopProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState( 
    () => {
      const storedCartItems = localStorage.getItem('cartItems') || '[]';
      if (storedCartItems) {
        const parsedValue = JSON.parse(storedCartItems);
        return parsedValue;
      }
      return [];
    }
  );
  



  // useEffect to get the shop products
  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        const response = await fetch('/data/productData.json');
        const data = await response.json();
        setShopProducts(data.productData);
      } catch (error) {
        console.error('Error fetching shop products:', error);
      }
    };

    fetchShopProducts();
  }, []);


  // function to store the cart items in local storage
  useEffect(() => {
    const storeCartItems = () => localStorage.setItem('cartItems', JSON.stringify(cartItems));
    storeCartItems();
  }, [cartItems]);
  
  // This useMemo will run everytime a product is added or removed from the cart, hence the dependency array [cartItems]
  useMemo(() => {
    setTotalQuantity(cartItems.reduce((total, item) => total + item.quantity, 0));
    setTotalPrice(cartItems.reduce((total, item) =>  total + item.quantity * item.price, 0));
  }, [cartItems]);



  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
    setTotalPrice(cartItems.reduce((total, item) =>  total + item.quantity * item.price, 0));
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
    setTotalPrice(cartItems.reduce((total, item) =>  total + item.quantity * item.price, 0));
  }

  const deleteItemFromCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems, cartItemToDelete));
    setTotalPrice(cartItems.reduce((total, item) =>  total + item.quantity * item.price, 0));
  }

  const emptyCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  }

  // These values must correlate with the context that was created in the beginning
  const values = {
    shopProducts,
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    emptyCart,
    totalQuantity,
    totalPrice
  }


  // return the context provider component that will serve as the parent component
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}


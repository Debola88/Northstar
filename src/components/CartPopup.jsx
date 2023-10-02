import React, { useMemo } from 'react';
import { FaMinus, FaTimes, FaTrash, FaPlus } from 'react-icons/fa';


const CartPopup = ({ setShowCart, cartData, setCartData }) => {
    //Memoize the cartData to prevent unnecessary re-renders
  const memoizedCartData = useMemo(() => cartData, [cartData]);

  //increase item quantity
  const handleIncrease = (id) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1  } : item
      )
    );
  };

  //decrease item quantity
  const handleDecrease = (id) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  //remove item from cart
  const handleDelete = (id) => {
    setCartData((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //total price for cartData
  const totalPrice = cartData.reduce((accumulator, product) => {
    return accumulator + product.price * product.qty;
  }, 0);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black/90 z-[100] py-8 pt-12 fixed top-0 overflow-y-scroll">
      {memoizedCartData.length >= 1 ? (
        <article className="bg-white w-[350px] p-4 rounded-t-2xl z-[2000] absolute top-12 mb-2">
            <div className='flex justify-between items-center flex-row-reverse mb-2'>
                <div className='cursor-pointer'>
                    <FaTimes className='text-red-500 cursor-pointer text-2xl font-montserrat hover:text-gray-700' onClick={() => setShowCart((prev) => !prev)}/>
                </div>
                <div className=''>
                    <p className='text-black font-montserrat text-xl font-semibold'>{`Cart(${cartData.length})`}</p>
                </div>
            </div>

          <ul className='flex flex-col gap-y-4'>
            {cartData.map((item) => (
              <li key={item.id} className='border rounded-lg shadow-lg px-2 py-2'>

                <div className='flex justify-between gap-x-4 items-center'>
                  <div className=''>
                    <img src={item.image} alt='shoe' className='w-1/2 h-1/2 rounded-lg'></img>
                  </div>
                  <div className=''>
                    <div className=''>
                      <h1 className='font-semibold font-montserrat text-base'>{item.name}</h1>
                      <p className='text-xs font-montserrat text-gray-500'>{item.status}</p>
                    </div>
                    <div>
                      <h1 className='font-semibold font-montserrat text-base'>{`$${item.price}`}</h1>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between items-center mt-4 mb-2'>
                  <div onClick={() => handleDelete(item.id)} className='flex items-start gap-x-2 cursor-pointer'>
                    <FaTrash className='text-red-500'/>
                    <span className='hidden md:inline-block font-semibold text-red-500'>Remove</span>
                  </div>
                  <div className='flex gap-x-2'>
                    <button disabled={item.qty <= 0} className='p-2 border border-red-500 hover:scale-105 duration-100 ease-in-out transition-all cursor-pointer' onClick={() => handleDecrease(item.id)}>
                      <FaMinus className='text-red-500 cursor-pointer'/>
                    </button>
                    <p className='text-black font-montserrat text-sm'>{item.qty}</p>
                    <button className='p-2 border border-green-500 hover:scale-105 duration-100 ease-in-out transition-all cursor-pointer' onClick={() => handleIncrease(item.id)}>
                      <FaPlus className='text-green-500 cursor-pointer'/>
                    </button>
                  </div>
                </div>

              </li>
            ))}
          </ul>
          <div className='w-full p-4'>
            <div className='font-semibold font-montserrat flex items-center justify-center text-xl'>Total Price: <span className='px-2 text-red-500'>{`$${totalPrice.toFixed(2)}`}</span>
            </div>
          </div>
        </article>
      ) : (
        <div className='bg-white w-[350px] p-8 rounded-t-2xl z-[2000] absolute top-12 mb-2' onClick={() => setShowCart((prev) => !prev)}>
            <p className='flex items-center justify-center font-montserrat font-semibold text-xl'>No Item added to cart</p>
            <div className='cursor-pointer absolute top-2 right-4' onClick={() => setShowCart((prev) => !prev)}>
                    <FaTimes className='text-red-500 cursor-pointer text-2xl font-montserrat hover:text-gray-700' onClick={() => setShowCart((prev) => !prev)}/>
                </div>
        </div>
        
      )}
    </div>
  );
};

export default CartPopup;

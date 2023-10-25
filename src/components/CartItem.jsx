import { useContext } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoIosClose } from 'react-icons/io'
import { IoIosRemove } from "react-icons/io";
import { CartContext } from '../contexts/CartContext';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


const CartItem = ({ cartItemInfo }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
  const { image, name, price, quantity } = cartItemInfo;

  return (
    <div className='flex items-center shadow-lg mb-10 p-5 rounded-md text-gray-700 w-auto min-h-[160px]'>
      <SnackbarProvider />
      <div className='sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] h-20 w-auto text-left'>
        <img src={image} alt='' className='w-auto h-full object-cover' />
      </div>
      <div className=' w-full ml-2'>
        <div className='flex justify-between items-start'>
          <h2 className='text-black font-semibold text- md:text-2xl sm:text-base'>{name}</h2>
          <div className='flex'>
            <span
              className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'
              onClick={() => { enqueueSnackbar('Your Product is deleted!', { variant: 'success' }, { autoHideDuration: 2000 }); deleteItemFromCart(cartItemInfo) }} >
              <IoIosClose />
            </span>
          </div>

        </div>
        <div className=' flex flex-col justify-between sm:flex-row sm:mt-12 sm:ml-2'>
          <div className='sm:flex flex-none text-left'>
            <div className='text-base max-sm: font-semibold text-black mr-4'>Qty : <span className=''>{quantity}</span></div>
            <div className='text-base font-semibold text-black'>Price : <span className=''>{(price * quantity).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span></div>
          </div>
          <div className='flex gap-10 justify-between max-sm:mt-4'>
            <span
              className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'
              onClick={() => addItemToCart(cartItemInfo)}
            >
              <IoIosAdd />
            </span>
            <span
              className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'
              onClick={() => removeItemFromCart(cartItemInfo)}
            >
              <IoIosRemove />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
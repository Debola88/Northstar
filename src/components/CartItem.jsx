import { useContext } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoIosClose } from 'react-icons/io'
import { IoIosRemove } from "react-icons/io";
import { CartContext } from '../contexts/CartContext';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { Link } from 'react-router-dom'


const CartItem = ({ cartItemInfo }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
  const { image, name, price, quantity, discount, id } = cartItemInfo;

  return (
    <div>
      <div className='flex items-center shadow-lg mb-5 p-5 rounded-md bg-white text-gray-700 w-auto min-h-[160px]'>
        <SnackbarProvider />
        <div className='sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] h-28 w-auto text-left'>
          <Link
            to={`/product/${id}`}
            state={cartItemInfo}
          >
            <img src={image} alt='' className='w-auto h-full object-cover cursor-pointer' />
          </Link>
        </div>
        <div className=' w-full ml-2'>
          <div className='flex justify-between items-start'>
            <Link
              to={`/product/${id}`}
              state={cartItemInfo}
            >
              <h2 className='text-black font-semibold text- md:text-2xl sm:text-base cursor-pointer'>{name}</h2>
            </Link>
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
              <div className='text-base max-sm: md:font-semibold text-black mr-4'>Qty : <span className=''>{quantity}</span></div>
              <div className='text-base md:font-semibold text-black'>Price : <span className=''>{(price * quantity).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span></div>
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
    </div >
  )
}

export default CartItem
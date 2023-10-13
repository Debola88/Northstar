import { useContext } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


function ProductCard({ productInfo }) {

  const { addItemToCart, cartItems } = useContext(CartContext)

  const { name, image, price, description, discount } = productInfo

  const handleAddToCart = (product) => {
    addItemToCart(product)
  }

  // this specific snackbar will disappear after 3 seconds


  return (
    <div className='w-full'>
      <div className='bg-white text-gray-700 min-w-[8rem] shadow-lg rounded-lg overflow-hidden'>
        <div className='h-48'>
          <img src={image} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='p-5 flex-col flex gap-2'>
          <div className='flex items-center gap-2'>
            <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>stock ready</span>
            <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>official store</span>
          </div>
          <h2 className="text-left font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap text-black" title='Plain white shirt'>
            {name}
          </h2>
          <div>
            <span className='text-lg font-bold'>
              <h3 className='text-left'>{(price - (price * (discount / 100))).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</h3>
            </span>
            <div className='flex items-center gap-2 mt-1' >
              <span className='text-sm text-slate-400 line-through'>
                {price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
              </span>
              <span className='bg-green-500 px-1.5 py-0.5 rounded-md text-xs text-white uppercase font-bold'>
                save {discount}%
              </span>
            </div>
          </div>
          <span className='flex items-center mt-1 gap-1 text-sm text-yellow-500'>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <span className='text-xs ml-2 text-gray-500'>
              20k reviews
            </span>
          </span>
          <SnackbarProvider
            autoHideDuration={5000} variant="success" />
          <button onClick={() => {
            handleAddToCart(productInfo); enqueueSnackbar('Successfully added to cart!', {autoHideDuration: 2000}, { variant: 'success' })
          }} className='bg-[#024E82] text-xs uppercase rounded-full sm:px-8 py-3 px-5 text-white hover:bg-[#022b82] hover:text-white transition'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

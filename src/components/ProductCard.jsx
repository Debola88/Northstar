import { useContext, useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

import { Link } from 'react-router-dom'


function ProductCard({ productInfo }) {

  const { addItemToCart } = useContext(CartContext)

  const { name, image, price, discount, id } = productInfo

  const handleAddToCart = (product) => {
    addItemToCart(product)
  }

  const newPrice = price - (price * (discount / 100))

  // this specific snackbar will disappear after 3 seconds

  useEffect(() => {
    AOS.init()
  }, [])

  return (

    <div className='w-full'>
      <SnackbarProvider variant="success" />
      <div className='bg-white text-gray-700 min-w-[8rem] shadow-lg rounded-lg overflow-hidden' data-aos="fade-up">
        <Link 
          to={`/product/${id}`}
          state={productInfo}
        >        
          <div className='h-48'>
            <img src={image} alt={image} className='w-full h-full object-cover cursor-pointer' />
          </div>
        </Link>
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
              <h3 className='text-left'>{newPrice.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</h3>
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
          <button onClick={() => {
            handleAddToCart({...productInfo, price: newPrice}); enqueueSnackbar('Product added successfully!', { autoHideDuration: 2000 }, { variant: 'success' })
          }} className='bg-[#024E82] text-xs uppercase rounded-full sm:px-8 py-3 px-5 text-white hover:bg-[#022b82] hover:text-white transition'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

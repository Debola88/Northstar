import { useContext} from 'react'
import ProductCard from './ProductCard'
import { CartContext } from '../contexts/CartContext'


function NewProducts() {

  const { shopProducts } = useContext(CartContext)

  return (
    <div className='px-5 sm:px-16 py-6'>
      <h1 className='text-center text-3xl font-bold text-black'>Disover NEW Arrivals</h1>
      <p className='pb-16'>Recently added shirts!</p>
      <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        {
          shopProducts.slice(0, 8).map((product) => (<ProductCard key={product.id} productInfo={product} />
          ))
        }
      </div>
    </div>
  )
}

export default NewProducts
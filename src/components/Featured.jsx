import { useState, useMemo } from "react"
import { FaHeart, FaStar } from "react-icons/fa"

const Featured = ({ data, cartData, setCartData }) => {
    const [favorites, setFavorites] = useState([]);

    // Add to cart with functional update
    const handleAddToCart = (id) => {
        setCartData((prevCartData) => [...prevCartData, data.find((el) => el.id === id)]);
    };

    // Add item to favorites with functional update
    const handleAddToFavorites = (id) => {
        setFavorites((prevFavorites) => [...prevFavorites, data.find((el) => el.id === id)]);
    };

    //memoized data to avoid re-rendering
    const memoizedData = useMemo(() => data, [data]);

    // Memoized favorites to avoid re-rendering
    const memoizedFavorites = useMemo(() => favorites, [favorites]);

  return (
    <section>
        {memoizedData.length >= 1 ? (
                    <div className="flex flex-col gap-y-8 px-16">

                    <div>
                        <h1 className="text-black text-2xl font-bold font-montserrat">Featured</h1>
                    </div>

                    <ul className="grid grid-cols-4 gap-4">
                        {data.map((item) => (
                            <li key={item.id} className="shadow-xl rounded-t-xl relative">

                                <img src={item.image} alt="imageAlt" className="rounded-t-xl mb-2"></img>

                                <div className="absolute right-2 top-4 p-2 rounded-full bg-white cursor-pointer" onClick={() => handleAddToFavorites(item.id)}>
                                    <FaHeart className="text-red-500 cursor-pointer" onClick={() => handleAddToFavorites(item.id)}/>
                                </div>

                                <div className="absolute left-2 top-4">
                                    <p className="text-white text-xs font-montserrat bg-red-500 p-2 rounded-lg">{`${item.discount}% OFF`}</p>
                                </div>

                                <div className="flex flex-col">

                                    <div className="flex items-center justify-around mb-2">
                                        <h1 className="text-base font-montserrat font-semibold">{item.name}</h1>
                                        <p className="text-red-500 text-sm font-montserrat font-semibold">{`$${item.price}`}</p>
                                    </div>

                                    <div className="mb-2 flex items-center justify-center">
                                        <div className="flex gap-x-1 text-sm">
                                            <FaStar className=""/>
                                            <span className="font-montserrat text-gray-500">45</span>
                                        </div>
                                    </div>

                                    <button className="mx-2 my-2 rounded-xl py-2 px-4 bg-green-500 text-white" onClick={() => handleAddToCart(item.id)}>Add to Cart</button>

                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
        ) : (
            <p className="flex items-center justify-center text-2xl font-montserrat">No data in featured component</p>
        )}

    </section>
  )
}

export default Featured
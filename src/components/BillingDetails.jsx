import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


const BillingDetails = () => {
    const { emptyCart } = useContext(CartContext);
    const navigate = useNavigate()
    const { totalPrice, cartItems } = useContext(CartContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('');
    const [phone, setPhone] = useState('');
    const button = useState('PLACE ORDER');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleTownChange = (event) => {
        setTown(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }


    const handleClick = () => {
        // clear input value
        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setTown('');
    };


    const placeOrder = () => {
        handleClick();

        if (email === '') {
            enqueueSnackbar('Fill all information properly', { variant: "info" })
        }
        else {
            emptyCart()
            navigate('ordersummary');
        }
    }


    return (
        <div>
            <SnackbarProvider variant="info" autoHideDuration={3000} />
            <div className='px-5 sm:px-16 py-20'>
                <div className='flex uppercase text-left font-semibold text-sm cursor-pointer'>
                    <span className='text-gray-500'>Home /</span>
                    <span> CHECKOUT</span>
                </div>
                <h1 className='text-left sm:text-4xl text-xl text-black font-bold py-10'>Billing Details</h1>

                <div className=''>
                    <div className='shadow-lg rounded-md bg-white text-gray-700 min-h-[200px] overflow-hidden p-10'>
                        <h1 className='border-b pb-4 text-[#024E82] sm:text-3xl text-xl font-bold text-left justify-start top-0'>Your Order</h1>
                        <div className='flex justify-between pt-4 font-semibold'>
                            <span className='text-black sm:text-xl text-base'>Product</span>
                            <span className='text-black sm:text-xl text-base'>Total</span>
                        </div>
                        <div>
                            {cartItems.map((cartItem) => <div key={cartItem.id} className='flex justify-between pt-4 text-gray-500'>
                                <span className=''>{cartItem.name}</span>
                                <span className=''>{(cartItem.price).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                            </div>)}

                        </div>
                        <div className='flex justify-between pt-4 text-gray-500'>
                            <span className=''>Subtotal</span>
                            <span className=''>{totalPrice.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                        </div>
                        <div className='flex justify-between pt-4'>
                            <span className='text-black'></span>
                            <span className='text-[#024E82] sm:text-2xl text-lg'>{(totalPrice + 1000).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                        </div>
                    </div>
                </div>  
                <div className='py-6 pt-10 overflow-hidden'>
                    <form className='space-y-4 overflow-hidden justify-start' onSubmit={placeOrder}>
                        <div className='text-left flex flex-col'>
                            <label className=''>Full Name</label>
                            <input type="text" value={name} onChange={handleNameChange} className='text-left w-[500px] p-2 h-10 outline-none' required/>
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Street address</label>
                            <input type="text" value={address} onChange={handleAddressChange} className='text-left w-[500px] p-2 h-10 outline-none' placeholder='House number and street name' required/>
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Town / City</label>
                            <input type="text" value={town} onChange={handleTownChange} className='text-left w-[500px] p-2 h-10 outline-none' required/>
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Phone</label>
                            <input type="tel" value={phone} onChange={handlePhoneChange} className='text-left w-[500px] p-2 h-10 outline-none' required/>
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Email address</label>
                            <input type="email" value={email} onChange={handleEmailChange} className='text-left w-[500px] p-2 h-10 outline-none' required/>
                        </div>
                        <div className='sm:text-left sm:left-0 text-left left-0 py-4'>
                            <input value='PLACE ORDER' type='submit' className='bg-[#024E82] text-sm uppercase py-3 px-6 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition'/>
                        </div>
                    </form>
                </div>
                <div className='mt-6 text-left text-sm border border-gray-300 text-gray-500 bg-slate-200'>
                    <p className='p-5'>Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements, delivery charges has been added already.</p>
                </div>
            </div>
        </div >
    )
}

export default BillingDetails
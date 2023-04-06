import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(item => item._id === tshirt._id);
        if(exists){
            toast("You already added this product")
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }
    const handleRemoveFromCart = id => {
        const remaining = cart.filter(item => item._id !== id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <TShirt tShirt = {tShirt} key={tShirt._id} handleAddToCart= {handleAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart} handleRemoveFromCart = {handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;
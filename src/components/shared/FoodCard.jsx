import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodCard({ item }) {

    return (

        <div className='rounded-2xl bg-slate-50 p-2'>
            <Link to={`/food/${item.id}`}>
                <img className='w-full' src={item.image} alt="" />
            
            <h1 className='lg:text-3xl text-2xl text-secondary font-semibold mt-3'>{item.title}</h1>
            <p className=' text-secondary font-thin w-64 mt-3'>{item.description}</p>
            <h1 className='text-secondary text-2xl mt-3 mb-2'>${item.price} </h1>
            </Link>
            <button className='bg-secondary px-10 font-semibold py-2 rounded-full text-white'>Order Now</button>

        </div>
        

    )
}


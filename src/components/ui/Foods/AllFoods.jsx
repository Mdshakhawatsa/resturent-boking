import React, { useEffect, useState } from 'react'
import FoodCard from '../../shared/FoodCard';
import { Search } from 'lucide-react';

export default function AllFoods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then(data => setFoods(data.foods))
    // .then(data => console.log(data))

  }, [])

  return (
    <div>

      <div className='lg:flex justify-between'>
        <h1 className='lg:text-4xl text-3xl font-semibold'>Explore <span className='text-primary'>Yummy Recipe </span></h1>

        <div className='flex border lg:w-[400px] px-2 py-1 rounded-full'>
          <input className='w-full py-1 px-2 outline-none' type="text" placeholder='Search food' />
          <button className='bg-primary text-white w-10  h-9 flex items-center justify-center rounded-full'>
            <Search />
          </button>
        </div>
      </div>


      <div className='lg:grid lg:grid-cols-4 gap-7 mb-10 mt-20'>
        {
          foods.map((item, index) => <FoodCard key={index} item={item} />)
        }

      </div>

    </div>
  )
}

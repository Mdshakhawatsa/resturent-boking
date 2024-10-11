import { ChevronDown, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FoodCard from '../../shared/FoodCard';
import { useNavigate } from 'react-router-dom';

export default function FoodSection() {
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then(data => setFoods(data.foods))
    // .then(data => console.log(data))

  }, [])


  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='lg:text-5xl text-3xl font-semibold'>Explore <span className='text-primary'> Yummy Recipe</span></h1>
        <button onClick={() => navigate('/foods')} className='flex items-start hover:text-primary duration-200'>See All<ChevronRight /></button>
      </div>

      {/* api calling */}
      <div className='lg:grid lg:grid-cols-4 gap-7 mb-10 mt-20'>
        {
          foods.slice(0,4).map((item, index) => <FoodCard  key={index} item={item}/>)
        }

      </div>



    </div>
  )
}

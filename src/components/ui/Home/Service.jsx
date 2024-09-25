import React from 'react'
import image from "/public/service.png"
import { Calendar, ChefHat, Computer, CookingPot, HandPlatter, Timer, TimerIcon, Watch } from 'lucide-react'
import { BsPcDisplayHorizontal } from 'react-icons/bs'

import { FaKitchenSet } from 'react-icons/fa6'

export default function Service() {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-2 lg:p-20 gap-10 items-center lg:mt-28'>

                <div>
                    <img className='' src={image} alt="" />
                </div>

                <div className='space-y-10'>
                    <h1 className='lg:text-5xl text-3xl mt-10 text-secondary font-semibold'>We are  <span className='text-primary'>more</span> than multiple service</h1>
                    <p className='lg:w-[600px] text-secondary  font-thin '>This is a type of resturent which typically serves food and drink, in addition to light  refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
                    {/* service section */}

                    <div className='flex space-x-9'>


                        <div className=' '>
                            <div className='flex items-center gap-3 font-bold'>
                                <BsPcDisplayHorizontal />
                                <h1 >Online Trading</h1>
                            </div>

                            <div className='flex items-center mt-6 mb-6 gap-3 font-bold'>
                                <Calendar />
                                <h1 >Advanced Reservations</h1>
                            </div>
                            <div className='flex items-center gap-3 font-bold'>
                                <ChefHat />
                                <h1 >Top Chefs</h1>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='flex items-center gap-3 font-bold'>
                                < TimerIcon />
                                <h1 >24/7 Availability</h1>
                            </div>


                            <div className='flex items-center mt-6 mb-6 gap-3 font-bold'>
                                <HandPlatter />
                                <h1 >Curated Dining Spaces</h1>
                            </div>
                            <div className='flex items-center gap-3 font-bold'>
                                <CookingPot />
                                <h1 >Immaculate Kitchens</h1>
                            </div>

                        </div>
                    </div>

                    {/* <div className='flex space-x-10'>
                      

                      

                    </div> */}

                    {/*  */}
                </div>
            </div>





        </div>



    )
}

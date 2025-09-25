import React from 'react'
import Penthouse from './desireStays/Penthouse'
import Desirecourtyard from './desireStays/Desirecourtyard'
import Dreamdesire from './desireStays/Dreamdesire'

const Services = () => {
    return (
        <div className='dark:bg-white'>
            <div className='py-5'>
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    Desire Stays
                </h2>
                <p className='text-center py-2 dark:text-black'>Experience luxury, comfort, and serenity with stylish penthouses, family-friendly retreats, <br /> and peaceful courtyards for unforgettable getaways.</p>
            </div>
            <Penthouse />
            <Desirecourtyard />
            <Dreamdesire />
        </div>
    )
}

export default Services
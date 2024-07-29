"use client"
import { useState } from 'react'
import Image from 'next/image'
import { calculateCarRent, generateCatImageUrl } from '@/utils'
import { Button } from './ui/button'
import CarDetails from './CarDetails'

const CarCard = ({ cars }) => {

    const { city_mpg, year, make, model, transmission, drive } = cars

    const carRent = calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='flex flex-col p-6 justify-center items-start
     text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>

            <div className='w-full flex justify-between items-start gap-2'>
                <h2 className='text-[22px] leading-[26px] font-bold capitalize'>{make} {model}</h2>
                <p className='flex mt-6 text-[32px] font-bold'>
                    <span className='self-start text-[14px] font-semibold'>
                        $
                    </span>
                    {carRent}
                    <span className='self-end text-[14px] font-medium'>
                        /day
                    </span>
                </p>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src={generateCatImageUrl(cars)} alt='car display' fill priority className='object-contain' />
                </div>
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray-400'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/tire.svg" width={20} height={20} alt='tire' />
                        <p className='text-[14px] leading-[17px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/gas.svg" width={20} height={20} alt='gas' />
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className='hidden group-hover:flex absolute bottom-0 z-10'>
                    <Button className="w-[330px] bg-blue-700 h-11 text-white rounded-full hover:bg-blue-700"
                     onClick={() => setIsOpen(true)}>
                        View More
                        <div className='ml-5'>
                            <Image src="/right-arrow.svg" width={20} height={20} alt='right arrow' />
                        </div>
                    </Button>
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={cars} />
        </div>
    )
}

export default CarCard

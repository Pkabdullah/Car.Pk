
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>

             

            <nav className='max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 mr-4'>
                <Link href={"/"} className='flex justify-center items-center  '>
                <div className='-ml-20'>
                    
                 <Image src={"/logo.png"} width={250} height={18} alt='logo' className='object-contain'
                 

                    />
                    </div>


                </Link>
                <div className='  flex  justify-between items-center  '>
                    <button className='  bg-white w-28 h-11  bg-primary-blue text-blue-500 rounded-full'>Sign up</button>
                </div>

               

            </nav>

        </header>
    )
}

export default Navbar
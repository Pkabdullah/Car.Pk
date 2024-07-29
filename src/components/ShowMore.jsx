"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';
import { Button } from './ui/button';

const ShowMore = ({ pageNumber, isNext }) => {
    const router = useRouter("");
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit",`${newLimit}`);
        router.push(newPathName,{scroll: false})
        
    }
    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                // <CustomButton
                //     title="Show More"
                //     onClick={handleNavigation}

                // />
                <Button className="w-[330px] bg-blue-700 h-11 text-white rounded-full hover:bg-blue-700"
                onClick={handleNavigation}>
                   Show More
                  
               </Button>
            )}
        </div>
    )
}

export default ShowMore
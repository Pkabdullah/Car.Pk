"use client"
import React from 'react'


const CustomButton = ({title }) => {
  return (
    <div>
        <button
        disabled={false}
        className={`flex flex-row relative justify-between items-center  outline-none 
           bg-blue-700 w-32 h-11 bg-primary-blue text-white rounded-full mt-5  ` }
     
        >
            <span className={`flex-1`}>{title} </span>
          
        </button>
    </div>
  )
}

export default CustomButton

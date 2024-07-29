"use client"
import React from 'react'
import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherclasses }) => {
  return (
    <div>
      <button className={`-ml-3 z-10 bg-white ${otherclasses}`}>
        <Image src="/magnifying-glass.svg" width={40} height={40} alt="search here " className='object-contain' />

      </button>
    </div>
  )
}


const SearchBar = () => {

  const [manufacturer, setManuFacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();

  function handlesearch(e) {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      alert("Please Fil in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }
  const updateSearchParams = (model, manufacturer) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (model) {
      searchParams.set("model", model)
    }
    else { searchParams.delete("model") };

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer)
    } else {
      searchParams.delete("manufacturer")
    }
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname,{scroll: false})
  }

  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'
      onSubmit={handlesearch}>

      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>

        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherclasses={`sm:hidden  bg-white`} />

      </div>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>

        <Image src="/model-icon.png" width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt="model icon" />
        <input
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Fortuner"
          className="w-full h-[48px] pl-12 p-4 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherclasses={"sm:hidden bg-white"} />
      </div>
      <SearchButton otherclasses={"max-sm:hidden  bg-white"} />

    </form>
  )
}
export default SearchBar
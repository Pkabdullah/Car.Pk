import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const SearchButton = ({otherclasses}) => {
  return (
    <div>
        <Button className={`-ml-3 z-10 ${otherclasses} ` }>
            <Image src= "/magnifying-glass.svg" width={40} height={40} alt= "search here "/>
    
        </Button>
    </div>
  )
}

export default SearchButton
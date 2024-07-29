// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'cff2e56deamsh125a8e0ee7fb0b2p1da683jsn64e13bbf5c4b',
// 		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

import { fuels } from "@/app/Constants";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

                                        ////// car detail api ////

export async function fetchCars(filters){
    const {manufacturer,year,model,limit,fuel}= filters
    console.log("filter", manufacturer,year,model,limit,fuel)

    const headers = {
        method:"GET",
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers: {
            'x-rapidapi-key': 'cff2e56deamsh125a8e0ee7fb0b2p1da683jsn64e13bbf5c4b',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    });
    const result = await response.json()
    return result;
}

                                    ///// Rent per day calculation////////

export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

 
                                   //////// car image api///////////



 export const generateCatImageUrl =(cars,angle )=>{
    
    const url = new URL("http://cdn.imagin.studio/getimage")
    const {make, year, model}=  cars ;
    url.searchParams.append("customer",(process.env.NEXT_PUBLIC_IMAGIN_API_KEY))
    url.searchParams.append("make", make)
    url.searchParams.append("modelFamily", model.split('',[0]))
    url.searchParams.append("zoomType", "fullScreen")
    url.searchParams.append("modelYear",` ${year}`)
    url.searchParams.append("angle", `${angle}`)
    return `${ url}`
    

}



// const url = 'https://all-cars-names-image-and-variants-info.p.rapidapi.com/vehicles/Audi/audi_r8_coupe/Ibis_white.png';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'cff2e56deamsh125a8e0ee7fb0b2p1da683jsn64e13bbf5c4b',
// 		'x-rapidapi-host': 'all-cars-names-image-and-variants-info.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// export async function fetchCarImages() {
//     const apiKey = "DLcMqHqswvOyePMmI0gCg7SM9tCYqUTBqfLrZIbWh4DW6owkLS6lkCLS";
//     const url = 'https://api.pexels.com/v1/search?query=cars&per_page=1';

//     try {
//         const response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 'Authorization': apiKey
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         return result;

//     } catch (error) {
//         console.error("Failed to fetch car images:", error);
//         return null; // Or handle error as appropriate for your use case
//     }
// }

//pixels api    DLcMqHqswvOyePMmI0gCg7SM9tCYqUTBqfLrZIbWh4DW6owkLS6lkCLS

export const updateSearchParams = (type,fuels ) => {
   
    if (typeof window === 'undefined') {
      throw new Error('updateSearchParams should only be called in the browser environment.');
    }
  
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given fuels
    searchParams.set(type, fuels);
  
    // Construct the new pathname with updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };


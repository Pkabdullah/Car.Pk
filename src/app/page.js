import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "./Constants";
import ShowMore from "@/components/ShowMore";

export default async function Home({ searchParams }) {

  const AllCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })
  console.log("cars", AllCars)
  const isemptyData = !Array.isArray(AllCars) || AllCars.length < 1 || !AllCars
  return (
    <main className="overflow-hidden">

      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">

        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100;">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>

          <p>Explore the Car you might like</p>

        </div>
        <div className=" mt-12 w-full flex-between  items-center flex-wrap gap-5">
          <SearchBar />


          <div className=" flex justify-end flex-wrap items-center gap-2;">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options= {yearsOfProduction} />
        </div>
        

        </div>

        {
          !isemptyData ? (
            <section>
              We have Cars
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14;">
                {AllCars.map((car) => (
                  <CarCard  key={car} cars={car} />
                ))}

              </div>

              <ShowMore
              pageNumber= {(searchParams.limit||10)/10}
              isNext={(searchParams.limit || 10)>AllCars.length}
              />
            </section>

          ) : (
            <div className="mt-16 flex justify-center items-center flex-col gap-2">
              <h2 className="text-black text-xl font-bold">Opps no result</h2>
              <p>{AllCars?.message}</p>
            </div>
          )
        }
      </div>
    </main>
  );
}

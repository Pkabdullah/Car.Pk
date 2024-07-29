"use client"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {

    function handleScroll() {

    }

    return (
        <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">

            <div className="flex-1 pt-36 padding-x">

                {/* hero is the block  */}
                {/* title is element */}
                <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold;">Find, book, or <br /> rent  a car  -- <br /> quickly <br /> and easily!</h1>
                <p className="text-[27px] text-black-100 font-light mt-5;">Streamline  your car rental experiance with <br /> our effortless booking process.  </p>
                <CustomButton

                    title="Explore cars"

                    handleClick={handleScroll}
                />

            </div>

            <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;">
                <div className=" relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;">
                    <Image src={"/hero.png"} alt="car" fill className="object-contain" />
                </div>
                <div className="apply absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"

                >
                    <Image src={"/hero-bg.png"} width={1440} height={200} alt= "bg of hero image"/></div>


            </div>
        </div>
    )
}
export default Hero
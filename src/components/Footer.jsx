import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/app/Constants"

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-300">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6 ">
                    <Image src={"/logo.png"} width={200} height={100} className="" alt ="logo" />
                    <p className="text-base text-gray-600 ml-16 ">Car.Pk 2024<br />All rights reserved &copy;
                    </p>

                </div>

                <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-40 ">
                    {
                        footerLinks.map((link) => (
                            <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]  ">
                                <h3 className="font-bold">{link.title}</h3>

                                {
                                    link.links.map((item) => (
                                        <div className="text-gray-400" key={item.title}>
                                            <Link href={item.url}
                                                key={item.title}
                                                className=""
                                            >
                                                {item.title}


                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="flex justify-between items-start flex-wrap  mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p className="text-gray-400">@2024 Car.Pk All Rights Reserved</p>
                <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                    <Link href={"/"} className="text-gray-400">Privacy Policy</Link>
                    <Link href={"/"} className="text-gray-400">M Abdullah</Link>

                </div>

            </div>

        </footer>
    )
}

export default Footer

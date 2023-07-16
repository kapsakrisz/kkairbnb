import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";


function Search () {

    const router=useRouter();
    const {location,startDate,endDate,noOfGuests} =router.query;
    


    return(
        <div>
                <Header/>
                <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                        <p className="text-xs">
                            300+ Stays for {noOfGuests} guests
                        </p>

                        <h1 className="text-3xl font-semibold mt-2 mb-6 ">stays in {location}</h1>

                        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-700 whitespace-nowrap">
                            <p className="button">Cancelation Flexibility</p>
                            <p className="button">Type of Place</p>
                            <p className="button">Price</p>
                            <p className="button">Rooms and Beds</p>
                            <p className="button">More filters</p>
                            
                        </div>
                    </section>
                </main>

                <Footer/>
        </div>
    )
}

export default Search
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";


function Search () {
    return(
        <div>
                <Header/>
                <main className="flex">
                    <section>
                        <p className="text-xs">
                            300+ Stays for 5 number of guests
                        </p>

                        <h1 className="text-3xl font-semibold mt-2 mb-6 ">stays somewhere</h1>
                    </section>
                </main>

                <Footer/>
        </div>
    )
}

export default Search
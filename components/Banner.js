import Image from "next/image";




function Banner () {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h[500px] xl:h-[600px] 2xl:h-[700px]">
<Image src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1441&q=80"

layout="fill"
objectFit="cover"
/>

<div className="absolute top-7 w-full text-center">
    <p className="text-sm sm:text-lg">
        where would u like to go?
    </p>

    <button className="text-green-500 my-3 hover:shadow-xl bg-white px-10 py-4 shadow-md rounded-full active:scale-90 transition duration-150">anywhere</button>
</div>
        
        </div>
    )
}

export default Banner
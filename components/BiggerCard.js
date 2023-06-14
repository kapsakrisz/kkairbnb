import react from 'react';
import Image from 'next/image';

function BiggerCard ({img,title,description})  {
    return (
            <div className='relative py-16 cursor-pointer'>
                <div className='relative h-96 min-w-[300px]'>
                    <Image src={img} layout="fill" objectFit='cover'
                    className='rounded-2xl'/>
                </div>
            </div>
    )
}


export default BiggerCard;
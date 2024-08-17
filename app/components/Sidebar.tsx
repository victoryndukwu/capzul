import React from 'react'
import Image from 'next/image'
import { poppins } from '@/app/utils/font';


function Sidebar() {
    return (
        <aside className={`md:grid place-items-center hidden relative bg-primary col-span-2 md:px-20 ${poppins.className} `}>
            <p className="text-white text-[28px] font-semibold text-center my-5">Social media shared today, tomorrow or by location</p>
            <div className='flex justify-center items-center'>
                <Image
                    src="/images/phone.png"
                    alt="Auth image"
                    width={255}
                    height={480}
                    className="object-cover z-20 relative left-[110px] h-[300px] w-[484px]"
                />
                <Image
                    src="/images/phone.png"
                    alt="Auth image"
                    width={300}
                    height={600}
                    className="object-cover z-50 w-[332px] h-[400px]"
                />
                <Image
                    src="/images/phone.png"
                    alt="Auth image"
                    width={300}
                    height={600}
                    className="object-cover z-20 relative right-[110px] h-[300px] w-[484px]"
                />
            </div>
        </aside>
    )
}

export default Sidebar
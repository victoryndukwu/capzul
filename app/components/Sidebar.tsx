import React from 'react'
import Image from 'next/image'
import { poppins } from '@/app/utils/font';


function Sidebar() {
    return (
        <aside className={`md:grid place-items-center hidden relative bg-primary col-span-2 md:px-20 ${poppins.className} bg-gradient-to-br from-darkBlue to-primary`}>
            <p className="text-white text-[28px] font-semibold text-center my-5">Social media shared today, tomorrow or by location</p>
            <div className='flex justify-center items-center bg-gradient-to-br from-primary to-darkBlue rounded-full'>
                <Image
                    src="/images/phone.png"
                    alt="Auth image"
                    width={255}
                    height={480}
                    className="object-cover z-20 relative left-[125px] h-[300px] w-[484px]"
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
                    className="object-cover z-20 relative right-[125px] h-[300px] w-[484px]"
                />
            </div>

            <div className='flex gap-2'>
                <div className="w-[10px] h-[10px] border border-white rounded-full bg-inherit"></div>
                <div className="w-[10px] h-[10px] border border-white rounded-full bg-white"></div>
                <div className="w-[10px] h-[10px] border border-white rounded-full bg-transparent"></div>
            </div>
        </aside>
    )
}

export default Sidebar
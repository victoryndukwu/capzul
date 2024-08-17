import React from 'react'
import Image from 'next/image'
import { poppins } from '../utils/font';

function Logo() {
    return (
        <div className={`${poppins.className} flex gap-2 items-center w-[115px]`}>
            <Image src='/images/capzul.png' alt={'Logo image'} width={48} height={48} />
            <p className='text-[18px] font-semibold'>Capzul</p>
        </div>
    )
}

export default Logo
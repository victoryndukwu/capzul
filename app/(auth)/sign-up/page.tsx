import SignupForm from '@/app/components/forms/SignupForm'
import React from 'react'
import { poppins } from '@/app/utils/font';

function page() {
    return (
        <aside className={`${poppins.className}`}>
            <p className='text-[28px] font-semibold text-darkGray'>Create account</p>
            <p className='text-sm font-normal text-gray'>For business, band or celebrity.</p>
            <SignupForm />
        </aside>
    )
}

export default page
'use client'
import React from 'react'
import InputField from '../inputs/InputField'
import PasswordField from '../inputs/PasswordField'

function SignupForm() {
    return (
        <form>
            <div className='grid grid-cols-2 grid-rows-3 gap-6 mt-10 mb-4'>
                <InputField label='First name' />
                <InputField label='Last name' />
                <InputField label='Email or phone number' />
                <PasswordField label='Password' />
                <PasswordField label='Confirm Password' />

            </div>

        </form>
    )
}

export default SignupForm
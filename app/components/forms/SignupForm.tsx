'use client'
import React from 'react'
import InputField from '../inputs/InputField'
import PasswordField from '../inputs/PasswordField'
import GoogleAuthButton from '../buttons/GoogleAuthButton'
import BaseButton from '../buttons/BaseButton'

function SignupForm() {
    return (
        <form>
            <div className='md:grid md:grid-cols-2 md:grid-rows-3 gap-6 mt-10 mb-4 flex flex-col'>
                <InputField label='First name' />
                <InputField label='Last name' />
                <InputField label='Email or phone number' />
                <PasswordField label='Password' />
                <PasswordField label='Confirm Password' />

            </div>

            <div className='flex gap-6'>
                <BaseButton>Create account</BaseButton>
                <GoogleAuthButton> Sign-in with google</GoogleAuthButton>
            </div>

        </form>
    )
}

export default SignupForm
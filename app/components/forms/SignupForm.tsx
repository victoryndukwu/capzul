'use client'
import React from 'react'
import Image from 'next/image'
import InputField from '../inputs/InputField'
import PasswordField from '../inputs/PasswordField'
import GoogleAuthButton from '../buttons/GoogleAuthButton'
import BaseButton from '../buttons/BaseButton'
import CustomLink from '../typography/CustomLink'
import DatePicker from '../inputs/DatePicker'

function SignupForm() {
    return (
        <form>
            <div className='md:grid md:grid-cols-2 md:grid-rows-3 gap-6 mt-10 mb-4 flex flex-col'>
                <InputField label='First name' />
                <InputField label='Last name' />
                <InputField label='Email or phone number' />
                <DatePicker label='Date of birth (MM/DD/YY)' />
                <PasswordField label='Password' />
                <PasswordField label='Confirm Password' />
            </div>

            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 mb-10'>
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" name="" id="" className='w-5 h-5 border-lightGray border-[1.5px] bg-primary active:bg-primary hover:bg-primary hover:cursor-pointer' />
                        <p className='text-sm font-normal text-gray'>Remember me</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" name="" id="" className='w-5 h-5 border-lightGray border bg-primary active:bg-primary hover:bg-primary hover:cursor-pointer' />
                        <p className='text-sm font-normal text-gray'>I agree to all the <CustomLink href={''}>Terms </CustomLink> and <CustomLink href={''}>Privacy policy</CustomLink> </p>
                    </div>
                </div>

                <div>
                    <CustomLink href={''}>Forgot password?</CustomLink>
                </div>
            </div>

            <div className='flex gap-6 mb-10'>
                <BaseButton>Create account</BaseButton>
                <GoogleAuthButton> Sign-in with google</GoogleAuthButton>
            </div>

            <div className='flex justify-center items-center'>
                <p className='text-sm text-gray font-normal'>Don’t have an account? {' '}
                    <CustomLink href={''}>
                        Log In
                    </CustomLink>
                </p>
            </div>

            <div className='flex gap-3 mt-10'>
                <Image
                    src="/images/google.svg"
                    alt="Get it on Google play"
                    className="cursor-pointer"
                    width={134}
                    height={38}
                    priority
                />
                <Image
                    src="/images/apple.svg"
                    alt="Download on the App store"
                    className="cursor-pointer"
                    width={134}
                    height={38}
                    priority
                />
            </div>
        </form>
    )
}

export default SignupForm
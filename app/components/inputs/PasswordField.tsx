'use client'

import React, { Fragment, InputHTMLAttributes, useState } from 'react'
import { cn } from '@/app/utils/helpers';
import { poppins } from '@/app/utils/font';


type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    labelClass?: string,
    inputClass?: string
    hasError?: boolean
    helperText?: string
}

function PasswordField({ inputClass, labelClass, helperText, label, hasError, ...props }: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleBlur = () => {
        setShowPassword(false)
    }
    return (
        <div className={`flex flex-col gap-2 ${poppins.className} `}>
            <label htmlFor="" className={cn('text-gray font-normal text-sm', labelClass)}>{label}</label>
            <div className="relative w-full">
                <input
                    type={showPassword ? "text" : "password"}
                    onBlur={handleBlur}
                    {...props} className={cn('rounded-[5px] px-5 py-3 border-[1.5px] focus:outline-none focus:ring-[0.2px] border-lightGray focus:ring-primary focus:border-primary text-gray w-full text-sm',
                        {
                            "border-error placeholder-pinkLight focus:border-error focus:ring-[0.2px] focus:ring-error": hasError,
                        },
                        inputClass)} />
            </div>

            {!!hasError && (
                <Fragment>
                    <p className='text-error text-sm'>{helperText}</p>
                </Fragment>
            )}
        </div>
    )
}

export default PasswordField
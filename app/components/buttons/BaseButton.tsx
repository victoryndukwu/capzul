'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '@/app/utils/helpers';
import { poppins } from '@/app/utils/font';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string,
    children: React.ReactNode,
    variant?: 'primary' | 'white' | 'pink' | 'disabled',
}

function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
    return (
        <button {...props} className={cn('py-3 px-6 rounded-[5px] font-semibold text-sm transition ease-in duration-200 text-white w-full',
            {
                "bg-primary hover:bg-darkBlue": variant === 'primary',
            }
            ,
            `${poppins.className}`,
            className)}>
            {children}
        </button>
    )
}

export default Button
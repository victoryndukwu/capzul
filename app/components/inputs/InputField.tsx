import React, { Fragment, InputHTMLAttributes } from 'react';
import { cn } from '@/app/utils/helpers';
import { poppins } from '@/app/utils/font';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelClass?: string;
    inputClass?: string;
    hasError?: boolean;
    helperText?: string;
    placeholder?: string;
};

function InputField({
    inputClass,
    labelClass,
    helperText,
    label,
    hasError,
    width,
    height,
    placeholder,
    ...props
}: InputFieldProps) {
    return (
        <div className={`flex flex-col gap-2 ${poppins.className} `}>
            <label htmlFor="" className={cn('text-gray font-normal text-sm', labelClass)}>
                {label}
            </label>
            <input
                type="text"
                {...props}
                placeholder={placeholder}
                className={cn(
                    'rounded-[5px] px-5 py-3 border-[1.5px] focus:outline-none focus:ring-[0.2px] transition border-lightGray focus:ring-primary focus:border-primary text-gray text-sm',
                    {
                        'border-error placeholder-pinkLight focus:border-error focus:ring-[0.2px] focus:ring-error': hasError,
                    },
                    inputClass
                )}
            />
            {!!hasError && (
                <Fragment>
                    <p className="text-error text-sm">{helperText}</p>
                </Fragment>
            )}
        </div>
    );
}

export default InputField;

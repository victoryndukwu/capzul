// components/DatePicker.tsx
import React, { useState, InputHTMLAttributes } from 'react';
import { cn } from '@/app/utils/helpers';
import { poppins } from '@/app/utils/font';
import { HiOutlineCalendar } from "react-icons/hi";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

type DatePickerProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelClass?: string;
    inputClass?: string;
    hasError?: boolean;
    helperText?: string;
    placeholder?: string;
};

export default function CustomDatePicker({
    inputClass,
    labelClass,
    helperText,
    label,
    hasError,
    width,
    height,
    placeholder,
    ...props
}: DatePickerProps) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <div className={`flex flex-col gap-2 ${poppins.className} `}>
            <label htmlFor="" className={cn('text-gray font-normal text-sm', labelClass)}>
                {label}
            </label>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className={`rounded-[5px] py-5 px-5 border-[1.5px] focus:outline-none focus:ring-[0.2px] h-12 transition border-lightGray focus:ring-primary focus:border-primary text-gray text-sm w-full cursor-pointer ${poppins.className}`}
            />
            {/* <HiOutlineCalendar className='h-5 w-5 text-lightGray relative bottom-[43px] left-[250px] cursor-pointer' /> */}
        </div>
    );
}

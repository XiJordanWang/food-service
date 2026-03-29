"use client";

import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react"; // Eye logo for show/hide password

interface InputProps {
    id: string,
    label: string,
    name: string,
    type: string,
    placeholder: string
}

export function Input({ id, label, name, type, placeholder }: InputProps) {
    return (<div className="space-y-2">
        <label
            htmlFor={id}
            className="block text-sm font-bold text-[#32343E] tracking-widest
                placeholder:text-[#CCCCCC]"
        >
            {label.toUpperCase()}
        </label>
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            required
            className="block w-full h-14 rounded-xl border border-gray-200 bg-[#F0F5FA] px-4 py-3 
                placeholder:text-[#A0A5BA] placeholder:text-lg
                text-[#32343E]"
        ></input>
    </div>)
}

export function PasswordInput({ id, label, name }: { id: string, label: string, name: string }) {
    const [showPassword, setShowPassword] = useState(false);

    return (<div className="space-y-2">
        <label
            htmlFor={id}
            className="block text-sm font-bold text-[#32343E] tracking-widest"
        >
            {label.toUpperCase()}
        </label>
        <div className="relative flex items-center">
            <input
                id={id}
                name={name}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                className="block w-full h-14 rounded-xl border border-gray-200 bg-[#F0F5FA] px-4 py-3 
                placeholder:text-[#A0A5BA] placeholder:text-lg
                text-[#32343E]"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A5BA]"
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    </div>)
}

export function Button({ text }: { text: string }) {
    return (<button
        type="submit"
        className="w-full h-14 rounded-xl bg-[#FF7622] text-white font-bold text-lg tracking-widest hover:bg-[#FF7622]/90 transition-colors duration-300 mt-6"
    >
        {text}
    </button>)
}

export function ErrorMessage({ message }: { message: string }) {
    return (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm">
            <AlertCircle size={18} />
            <span>{message}</span>
        </div>
    )
}
import React, { useState, useRef } from 'react';

const InputField: React.FC<{ 
    label?: string, 
    placeholder?: string, 
    icon?: React.ReactNode | string, 
    defaultValue?: string, 
    type?: string,
    id?: string
}> = ({ label, placeholder, icon, defaultValue, type = "text", id }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    
    // Generate a unique ID if none is provided
    const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
        <div className="w-full">
            {label && (
                <label 
                    htmlFor={uniqueId} 
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                </label>
            )}
            <div 
                className={`flex items-center border-b py-2 transition-all duration-200 ${
                    isFocused 
                        ? 'border-[#83bf48] bg-white' 
                        : 'border-gray-300 hover:border-gray-400'
                }`}
            >
                {icon && <div className="text-gray-500 mr-2 flex-shrink-0">{typeof icon === 'string' ? <span className="text-lg">{icon}</span> : icon}</div>}
                <input
                    id={uniqueId}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className="w-full focus:outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={inputRef}
                />
            </div>
        </div>
    );
};

export default InputField;
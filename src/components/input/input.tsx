import React from 'react';
import '../font.css';

export interface InputProps {
  type: 'text' | 'email' | 'password' | 'select' | 'file' | 'search';
  label?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  onChange?:  (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, options , onChange, value}) => {
  return (
    <div className="flex flex-col font-outfit">
      <label className="mb-2 text-[1vw] font-light text-black">{label}</label>

      {type === 'select' ? (
        <select
          className="appearance-none p-[1.302vw] border rounded-lg text-[0.9vw] w-full border-black border-opacity-50 outline-none"
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <div className="p-[3vw] border border-black border-opacity-50 rounded-[1vw]">
              <img
                src="/upload.svg"
                alt="Upload"
                className="w-[1.823vw] h-[1.823vw]"
              />
            </div>
            <input id="file-upload" type="file" className="hidden" />
          </label>
        </div>
      ) : type === 'search' ? (
        <div className="border-[0.1vw] border-light-dark px-[1.5vw] py-[1vw] rounded-[1vw] flex items-center space-x-[1vw]">
          <img src="/search.svg" alt="" className="w-[1.5vw] h-auto"/>
          <input type="text" className=" w-full border-transparent outline-none text-[1vw] text-dark placeholder:text-[1vw]" placeholder={placeholder}  onChange={onChange} value={value}/>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="p-[1.302vw] border rounded-lg placeholder:text-[0.9vw] text-[0.9vw] w-full border-black border-opacity-50 outline-none"
        />
      )}
    </div>
  );
};

export default Input;

import React from 'react';
import '../font.css';

export interface InputProps {
  type: 'text' | 'email' | 'password' | 'select' | 'file'; // Tambahkan "file"
  label: string;
  placeholder?: string; // Opsional, tidak relevan untuk tipe file atau select
  options?: { value: string; label: string }[]; // Digunakan hanya untuk tipe select
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, options }) => {
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
            <div className=" p-[3vw] border border-black border-opacity-50 rounded-[1vw]">
              <img
                src="/upload.svg"
                alt="Upload"
                className="w-[1.823vw] h-[1.823vw]"
              />
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className=" p-[1.302vw] border rounded-lg placeholder:text-[0.9vw] text-[0.9vw] w-full border-black border-opacity-50 outline-none"
        />
      )}
    </div>
  );
};

export default Input;

import React from 'react';
import fontSizeScale from './fontSize';
import '../font.css';
import '../../app/globals.css'

interface TextProps {
  size: number;
  weight: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  color: 'main' | 'dark' | 'light-dark' | 'white';
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size, weight, color, children, className }) => { // Tambahkan `color` di sini
  
  const fontWeight = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight];

  const TextColor = {
    main: 'text-main',
    dark: 'text-dark',
    'light-dark': 'text-light-dark',
    white: 'text-white',
  }[color];

  const fontSize = fontSizeScale[size] || 1; 

  return (
    <p
      className={`font-outfit ${fontWeight} ${TextColor} ${className || ''}`}
      style={{
        fontSize: `${fontSize}vw`, 
      }}
    >
      {children}
    </p>
  );
};

export default Text;

import React from 'react';

interface ButtonProps {
  type?: 'button';
  size?: 'mobile' | 'desktop' | 'tools';
  variant?: 'full' | 'outline' | 'with-arrow' | 'fullWhite';
  onClick?: () => void;
  href?: string; // Menggunakan href untuk tautan biasa
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'desktop',
  variant = 'full',
  onClick,
  href, // Menambahkan prop `href`
  children,
}) => {
  // Kelas ukuran berdasarkan prop `size`
  const sizeClasses = {
    mobile: 'px-3 py-1 text-sm',
    desktop: 'px-[2.083vw] py-[1.042vw] text-[1.042vw]',
    tools: 'px-[2.083vw] py-[0.521vw] text-[0.729vw] font-normal',
  }[size];

  // Kelas warna berdasarkan prop `variant`
  const variantClasses = {
    full: 'bg-main text-white rounded-[0.521vw]',
    outline: 'border border-main text-main rounded-[0.521vw]',
    'with-arrow': 'border border-main text-main flex items-center gap-[0.5vw] rounded-[0.521vw]',
    fullWhite: 'bg-white text-main rounded-[0.521vw]',
  }[variant];

  const ButtonContent = (
    <button
      type={type}
      onClick={onClick}
      className={`font-outfit ${sizeClasses} ${variantClasses} rounded focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {children}
      {variant === 'with-arrow' && <span className="font-inter">→</span>}
    </button>
  );

  if (href) {
    return (
      <a href={href}>
        {ButtonContent} {/* Membungkus button dengan <a> untuk tautan biasa */}
      </a>
    );
  }

  return ButtonContent;
};

export default Button;

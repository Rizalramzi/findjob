// components/Card.tsx
import React from 'react';
import Text from '../text/text'; // Pastikan path-nya sesuai

interface CardProps {
  type: 'category' | 'job';
  profilePicture?: string;
  name?: string;
  price?: string;
  location?: string;
  date?: string;
  title: string;
  imageUrl: string;
  description?: string; // Hanya ada pada card job
}

const Card: React.FC<CardProps> = ({ type = 'category', title, imageUrl, description }) => {
  return (
    <div className="w-full">
      {type === 'category' ? (
        <button className="max-w-[17.708vw] min-w-[17.708vw] max-h-[6.771vw] min-h-[6.771vw] px-[4vw] py-[2.083vw] flex items-center justify-center bg-main space-x-[1vw] rounded-[0.521vw] hover:bg-white group duration-300 transition-all ease-in-out">
        <img src={imageUrl} alt={title} className="w-[1.823vw] h-[1.823vw] group-hover:filter group-hover:invert group-hover:hue-rotate-180 duration-300 transition-all ease-in-out" />
        <Text size={24} weight="semibold" color="white" className="group-hover:text-dark duration-300 transition-all ease-in-out">
          {title}
        </Text>
      </button>
      
      ) : (
        <div className="w-[17.708vw] h-[6.771vw] flex flex-col items-center justify-center bg-gray-200 space-y-2 rounded-[0.521vw]">
          <img src={imageUrl} alt={title} className="w-[2.5vw] h-[2.5vw]" />
          <Text size={24} weight="semibold" color="dark">
            {title}
          </Text>
          {description && (
            <Text size={16} weight="light" color="dark">
              {description}
            </Text>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;

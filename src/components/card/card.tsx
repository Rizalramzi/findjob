import React from 'react';
import Text from '../text/text'; // Pastikan path-nya sesuai
import Button from '../button/button'; // Pastikan path-nya sesuai

interface CardProps {
  type: 'category' | 'job' | 'job-list'; // Tambahkan 'job-list'
  profilePicture?: string;
  name?: string;
  price?: string;
  location?: string;
  date?: string;
  title: string;
  imageUrl?: string;
  description?: string; // Hanya ada pada card job
  skills?: string[]; // skills sebagai array string
}

const Card: React.FC<CardProps> = ({ 
  type, 
  title, 
  imageUrl, 
  description, 
  date, 
  location, 
  price, 
  skills 
}) => {
  return (
    <div className="w-full">
      {type === 'category' ? (
        <button className="max-w-[17.708vw] min-w-[17.708vw] max-h-[6.771vw] min-h-[6.771vw] px-[4vw] py-[2.083vw] flex items-center justify-center bg-main space-x-[1vw] rounded-[0.521vw] hover:bg-white group duration-300 transition-all ease-in-out">
          <img src={imageUrl} alt={title} className="w-[1.823vw] h-[1.823vw] group-hover:filter group-hover:invert group-hover:hue-rotate-180 duration-300 transition-all ease-in-out" />
          <Text size={24} weight="semibold" color="white" className="group-hover:text-dark duration-300 transition-all ease-in-out">
            {title}
          </Text>
        </button>
      ) : type === 'job' ? (
        <div className="w-[17.708vw] h-[6.771vw] flex flex-col items-center justify-center bg-gray-200 space-y-2 rounded-[0.521vw]">
          <img src={imageUrl} alt={title} className="w-[2.5vw] h-[2.5vw]" />
          <Text size={24} weight="semibold" color="dark">{title}</Text>
          {description && <Text size={16} weight="light" color="dark">{description}</Text>}
        </div>
      ) : type === 'job-list' && (
        <div className="max-w-[46.354vw] pb-[2vw] border-b-[0.052vw] space-y-[1.2vw]">
          <div className="space-y-[0.5vw]">
            <Text size={16} weight="light" color="dark">{date}</Text>
            <Text size={24} weight="medium" color="dark">{title}</Text>
          </div>
          <Text size={16} weight="light" color="dark">{description}</Text>
          {skills && (
            <div className="space-x-[1vw]">
              {skills.map((skill, idx) => (
                <Button key={idx} type="button" size="tools" variant="full" children={skill}></Button>
              ))}
            </div>
          )}
          <div className="flex items-center space-x-[1vw]">
            <div className="flex items-center space-x-[0.5vw]">
              <img src="/location.svg" alt="" className="w-auto h-[1.302vw]" />
              <Text size={14} weight="regular" color="dark">{location}</Text>
            </div>
            <div className="flex items-center space-x-[0.5vw]">
              <img src="/price.svg" alt="" className="w-auto h-[1.302vw]" />
              <Text size={14} weight="regular" color="dark">{price}</Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

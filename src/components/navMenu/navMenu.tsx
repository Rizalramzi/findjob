// components/NavMenu.tsx
import React from 'react';
import Text from '../text/text';

interface NavMenuProps {
  items: { label: string; size: number; weight: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'; }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-[1.563vw]">
      {items.map((item, index) => (
        <a key={index} href="#" className="">
          <Text size={item.size} weight={item.weight} color="dark">
            {item.label}
          </Text>
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;

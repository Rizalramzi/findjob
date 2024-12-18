// components/NavMenu.tsx
import React from 'react';
import Text from '../text/text';
import { link } from 'fs';

interface NavMenuProps {
  items: { label: string; size: number; weight: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'; link?: string  }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-[1.563vw]">
      {items.map((item, index) => (
        <a key={index} href={item.link} className="">
          <Text size={item.size} weight={item.weight} color="dark">
            {item.label}
          </Text>
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;

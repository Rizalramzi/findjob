// components/NavMenu.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavMenu from './navMenu';
import '../../app/globals.css';

export default {
  title: 'Components/NavMenu',
  component: NavMenu,
  argTypes: {
    items: {
      control: 'object',
    },
  },
} as Meta;

const Template: StoryFn<typeof NavMenu> = (args) => <NavMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', size: 16, weight: 'medium' },
    { label: 'About', size: 16, weight: 'medium' },
    { label: 'Services', size: 16, weight: 'medium' },
    { label: 'Contact', size: 16, weight: 'medium' },
  ],
};

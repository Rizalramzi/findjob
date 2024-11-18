// components/Text.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text from './text';
import '../../app/globals.css'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [14, 16, 18, 20, 24, 32, 48, 64],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['main', 'dark', 'light-dark', 'white']
    },
    children: {
      control: { type: 'text' },  // Kontrol untuk teks yang bisa diganti
    },
  },
} as Meta;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 16,
  weight: 'regular',
  color: 'main',
  children: 'Text Here',
  className: ''
};

// components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './button';
import '../../app/globals.css'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mobile', 'desktop'],
    },
    variant: {
      control: { type: 'select' },
      options: ['full', 'outline', 'with-arrow'],
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Click Me',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'desktop',
  variant: 'full',
  children: 'Click Me',
};

export const MobileOutline = Template.bind({});
MobileOutline.args = {
  size: 'mobile',
  variant: 'outline',
  children: 'Outline Button',
};

export const DesktopWithArrow = Template.bind({});
DesktopWithArrow.args = {
  size: 'desktop',
  variant: 'with-arrow',
  children: 'With Arrow',
};

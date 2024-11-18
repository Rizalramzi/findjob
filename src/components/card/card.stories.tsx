// components/Card/Card.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';  // Import StoryFn dari '@storybook/react'
import Card from './card';  // Sesuaikan path-nya dengan lokasi Card.tsx

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['category', 'job'],
      },
    },
    title: {
      control: 'text',
    },
    imageUrl: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} as Meta<typeof Card>;  // Update tipe Meta sesuai dengan komponen Card

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;  // Gunakan StoryFn untuk menandai tipe story

export const CategoryCard = Template.bind({});
CategoryCard.args = {
  type: 'category',
  title: 'Digital Business',
  imageUrl: '/category-icon.svg',  // Pastikan gambar tersedia
};

export const JobCard = Template.bind({});
JobCard.args = {
  type: 'job',
  title: 'Front-End Developer',
  description: 'Mencari pengembang front-end dengan pengalaman React.js.',
  imageUrl: '/job-icon.svg',  // Pastikan gambar tersedia
};

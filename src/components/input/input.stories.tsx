import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './input';

// Metadata untuk story
const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'email', 'password', 'select', 'file'], // Tambahkan "file"
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    options: { control: 'object' }, // Untuk select
  },
};

export default meta;

// Template untuk membuat story
const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

// Story untuk input teks
export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  label: 'Text Input',
  placeholder: 'Enter text...',
};

// Story untuk input email
export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  label: 'Email Input',
  placeholder: 'Enter your email...',
};

// Story untuk input password
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  label: 'Password Input',
  placeholder: 'Enter your password...',
};

// Story untuk input select
export const SelectInput = Template.bind({});
SelectInput.args = {
  type: 'select',
  label: 'Select Option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

// Story untuk input file
export const FileInput = Template.bind({});
FileInput.args = {
  type: 'file',
  label: 'Upload File',
};

// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonProps } from './Button.types';
import Button from './Button';
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Button',
    primary:true,
    disabled:false,
    onClick:()=>{},
    size:'md'
  },
};
export const Seconadry: Story = {
    args: {
      text: 'Danger',
    },
  };
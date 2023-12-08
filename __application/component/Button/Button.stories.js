import Button from '../../../Button/index';

export default {
  title: 'Fe-Theme/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Primary',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
  },
};

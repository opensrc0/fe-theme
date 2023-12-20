import Chip from './Chip';

export default {
  title: 'Fe-Theme/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'This is a chip component',
  },
};

export const PrimaryChip = {
  args: {
    children: 'This is a primary chip component',
  },
};

export const SecondaryChip = {
  args: {
    children: 'This is a secondary chip component',
    styleProps: {
      border: '1px solid #03567b',
      borderRadius: '2rem',
      color: '#03567b',
      backgroundColor: 'rgba(3, 86, 123, 0.3)',
    },
  },
};

export const CustomChip = {
  args: {
    children: 'This is a custom chip component',
    styleProps: {
      border: '1px solid rgb(49, 129, 46)',
      borderRadius: '2rem',
      color: 'rgb(49, 129, 46)',
      backgroundColor: 'rgb(239, 252, 245)',
    },
  },
};

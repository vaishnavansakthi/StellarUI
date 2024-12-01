import React from 'react';
import Button from './Button';
import { ButtonProps } from '../../interface/Button';
import { StoryFn, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'TEXT',
  onClick: () => alert('Primary Button Clicked'),
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'CONTAINED',
  onClick: () => alert('Contained Button Clicked'),
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'OUTLINED',
  onClick: () => alert('Outlined Button Clicked'),
  variant: 'outlined',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'TEXT',
//   onClick: () => alert('Secondary Button Clicked'),
//   variant: 'text',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: 'Disabled Button',
//   onClick: () => alert('Disabled Button Clicked'),
//   disabled: true,
// };

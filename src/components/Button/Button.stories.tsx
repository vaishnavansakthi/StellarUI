import React from 'react';
import { Button, ButtonProps } from './Button';
import { StoryFn, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary Button Clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary Button Clicked'),
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('Disabled Button Clicked'),
  disabled: true,
};

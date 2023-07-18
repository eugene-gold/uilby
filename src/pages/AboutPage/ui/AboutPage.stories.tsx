import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Normal: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {  
  },
};

  export const Dark: Story = {
    args: {
    
    },
    decorators: [ThemeDecorator(Theme.DARK)]
    
  };

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title 1',
    text: 'Title 2',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title 1',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Title 2',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title 1',
    text: 'Title 2',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title 1',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Title 2',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title 1',
    text: 'Title 2',
    theme: TextTheme.ERROR,
};

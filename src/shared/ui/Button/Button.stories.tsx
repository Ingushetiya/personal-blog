import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
export const Outline = Template.bind({});

Secondary.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

import { addDecorator } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/StoryDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorators } from '../../src/shared/config/storybook/StoryDecorator/StyleDecorators';
import { ThemeDecorator } from '../../src/shared/config/storybook/StoryDecorator/ThemeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorators);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);

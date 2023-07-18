import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators: [StyleDecorator]  
};

export default preview;

export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator]

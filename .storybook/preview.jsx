import * as DocBlock from "@storybook/blocks";

export const parameters = {
  docs: {
    page: () => <>
    <DocBlock.Title />
    <DocBlock.Description />
    <DocBlock.Controls />
    <DocBlock.Stories />
    </>
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  viewport: {
    defaultViewport: 'responsive',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Developers', 'Components'],
    },
  }
}
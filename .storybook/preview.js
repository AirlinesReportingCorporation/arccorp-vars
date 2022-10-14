export const parameters = {
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
}
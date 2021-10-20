import "../_site/static/assets/styles/main.min.css";

export const parameters = {
   actions: { argTypesRegex: "^on[A-Z].*" },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};

import Button from "../_includes/components/atoms/buttons/button.njk";

export default {
   title: "Design System/Atoms/Button",
   argTypes: {
      label: { control: "text" },
      isStorybook: {
         control: false,
         description: "Only used to display Macro in preview",
         type: { default: true },
      },
   },
};

const Template = ({ label, isStorybook }) => {
   return Button({ label, isStorybook });
};

export const Text = Template.bind({});
Text.args = {
   label: "Hello",
   isStorybook: true,
};

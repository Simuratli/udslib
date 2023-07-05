import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icons";

export default {
  title: "Components/Icons",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

// Reuse that template for creating different stories
export const Home = Template.bind({});
Home.args = { name:"home" };

export const Smile = Template.bind({});
Smile.args = { name:"smile" };

export const Dropdown = Template.bind({});
Dropdown.args = { name:"dropdown" };

export const Cancel = Template.bind({});
Cancel.args = { name:"cancel" };
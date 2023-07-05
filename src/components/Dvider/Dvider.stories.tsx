import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dvider from "./Dvider";

export default {
  title: "Components/Dvider",
  component: Dvider,
} as ComponentMeta<typeof Dvider>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Dvider> = (args) => <Dvider {...args} />;
export const Basic = Template.bind({});
// Reuse that template for creating different stories
export const Dashed = Template.bind({});
Dashed.args = {dashed:true };


export const WithText = Template.bind({});
WithText.args = {text:"Dvider" };


export const Vertical = Template.bind({});
Vertical.args = {type:"vertical" };
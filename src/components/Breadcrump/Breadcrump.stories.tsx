import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Breadcrump from "./Breadcrump";
import Icon from "../Icons";

export default {
    title:'Components/Breadcrump',
    component: Breadcrump,
    argTypes: {
        textColor: { control: 'color' },
    },
}

const Template: ComponentStory<typeof Breadcrump> = (args) => <Breadcrump {...args} />;

const simpleItems =[
    {
      title: 'Home',
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: 'An Application',
    },
  ]

export const Simple = Template.bind({});
Simple.args = { items:simpleItems,separator:"/" };


const withIcon =[
    {
      title: <Icon name="home" />,
    },
    {
      title: <>
      <Icon name="smile" />
        <a href="">Application Center</a>
      </>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: 'An Application',
    },
  ]

export const WithIcon = Template.bind({});
WithIcon.args = { items:withIcon, separator:"/" };
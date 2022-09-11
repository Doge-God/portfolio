import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

import RoundedButton from "../components/utilities/RoundedButton";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export default {
    title: "RoundedButton",
    Component: RoundedButton,
    argTypes: {
        handleClick: {action: "button clicked"}
    },
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        }
    }
}

const Template = args => <RoundedButton {...args}/>

export const ButtonTest = Template.bind({})
ButtonTest.args = {
    id:'test',
    text:'Test Button'
}



import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../redux/store";
import {within, userEvent} from '@storybook/testing-library';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import NavBar from "../components/NavBar";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export default {
    title: "NavBar",
    Component: NavBar,
    decorators: [
        (Story) => ( <Provider store={store}> <Story/> </Provider> )
    ],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        }
    }
}

const Template = (args) => <NavBar/>

export const navbarTest = () => <NavBar/>
export const toggleMobileMenu = () => <NavBar/>

toggleMobileMenu.parameters= {
    viewport: {
        defaultViewport: 'iphone12'
    }
}
toggleMobileMenu.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const menuButton = await canvas.getByTestId('menuButton')
    
    await sleep(500)
    await userEvent.click(menuButton)
    await sleep(500)
    await userEvent.click(menuButton)
}
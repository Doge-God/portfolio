import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

import WelcomePanel from "../components/WelcomePanel";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export default {
    title: "WelcomePanel",
    Component: WelcomePanel,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        }
    }
}


export const welcomePanelTest = () => <WelcomePanel id='test'/>

export const mobileTest = () => <WelcomePanel id='test'/>
mobileTest.parameters= {
    viewport: {
        defaultViewport: 'iphone12'
    }
}

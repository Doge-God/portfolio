import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../redux/store";
import {within, userEvent} from '@storybook/testing-library';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import ContactPanel from "../components/ContactPanel";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export default {
    title: "ContactPanel",
    Component: ContactPanel,
    decorators: [
        (Story) => ( <Provider store={store}> <Story/> </Provider> )
    ],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        },
    }
}

export const ContactPanelTest = () => <ContactPanel/>
export const invalidEmailTest = () => <ContactPanel/>

invalidEmailTest.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const nameField = canvas.getByTestId('name')
    const emailField = canvas.getByTestId('email')
    const messageField = canvas.getByTestId('message')
    const button = canvas.getByText('Submit')

    await userEvent.type(nameField,'Joe',{delay:15})
    await userEvent.type(emailField,'joemail.mail.com',{delay:15})
    await userEvent.type(messageField,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',{delay:15})
    
    await userEvent.click(button)
}



import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import ProjectCard from "../components/utilities/ProjectCard";
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import SkillBadge from "../components/utilities/SkillBadge";
import { FaApple } from "react-icons/fa";




export default {
    title: "SkillBadge",
    Component: SkillBadge,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        }
    }
}


export const testSkillBadge = () => <SkillBadge icon={<FaApple/>} text='test badge'/>
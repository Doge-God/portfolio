import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import ProjectCard from "../components/utilities/ProjectCard";
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

const portfolioPic = require('../resources/Portfolio.png')

export default {
    title: "ProjectCard",
    Component: ProjectCard,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        }
    }
}


export const ProjectCardTest = () => <ProjectCard title="Test Project" imgSrc={portfolioPic} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}/>

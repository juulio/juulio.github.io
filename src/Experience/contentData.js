import { element } from "three/examples/jsm/nodes/Nodes.js";

export default [
    {
        domElement: 'header',
        className: '',
        domElements: 
        [
            {
                domElement: 'div',
                className: 'mainTitle',
                domElements: 
                [
                    {
                        domElement: 'h1',
                        content: 'julio del valle'
                    },
                    {
                        domElement: 'h2',
                        content: '3D web developer'
                    }
                ]
            },
            {
                domElement: 'div',
                className: 'projectDescription',
            },
            {
                domElement: 'ul',
                className: 'projects',
                domElements:
                [
                    {
                        domElement: 'li',
                        projectName: 'project01',
                        content: 'Description for project 01'
                    },
                    {
                        domElement: 'li',
                        projectName: 'project02',
                        content: 'Description for project 02'
                    },
                    {
                        domElement: 'li',
                        projectName: 'project03',
                        content: 'Description for project 03'
                    }
                ]
            },

        ]
        
    },
]
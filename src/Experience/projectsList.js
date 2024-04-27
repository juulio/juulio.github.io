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
                domElement: 'ul',
                className: 'projectList',
                domElements:
                [
                    {
                        domElement: 'li',
                        className: 'project',
                        content: 'project01'
                    },
                    {
                        domElement: 'li',
                        className: 'project',
                        content: 'project02'
                    },
                    {
                        domElement: 'li',
                        className: 'project',
                        content: 'project03'
                    }
                ]
            }
        ]
        
    },
]
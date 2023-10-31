import type { DocumentationLink } from "./";


const nodeJsDescription =
`
As an asynchronous event-driven JavaScript runtime, Node.js is designed to 
build scalable network applications.
`;

const nodeJs: DocumentationLink = {
    name: 'Node.js',
    category: 'Documentation',
    linkUrl: 'https://nodejs.org/en/docs/',
    description: nodeJsDescription,
};

export default nodeJs;
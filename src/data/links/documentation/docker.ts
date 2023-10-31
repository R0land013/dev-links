import type { DocumentationLink } from "./";


const dockerDescription =
`
Docker provides a suite of development tools, services, trusted content, and 
automations, used individually or together, to accelerate the delivery of 
secure applications.
`;

const docker: DocumentationLink = {
    name: 'Docker',
    category: 'Documentation',
    linkUrl: 'https://docs.docker.com/',
    description: dockerDescription,
};

export default docker;
import type { DocumentationLink } from "./";


const kubernetesDescription =
`
Kubernetes, also known as K8s, is an open-source system for automating 
deployment, scaling, and management of containerized applications.
`;

const kubernetes: DocumentationLink = {
    name: 'Kubernetes (K8s)',
    category: 'Documentation',
    linkUrl: 'https://kubernetes.io/docs/home/',
    description: kubernetesDescription,
};

export default kubernetes;
import type { ProjectManagementLink } from ".";


const AzureDevOpsDescription =
`
Azure DevOps is an end-to-end software development platform that offers
an assortment of capabilities intended to organize and accelerate development
efforts across the entire application lifecycle, like requirements management,
project management, Version control, Automated builds, Reporting, testing and
release management.
`;

const AzureDevOps: ProjectManagementLink = {
    name: 'Azure DevOps',
    category: 'Project management',
    linkUrl: 'https://azure.microsoft.com/en-us/products/devops/',
    description: AzureDevOpsDescription,
};

export default AzureDevOps;
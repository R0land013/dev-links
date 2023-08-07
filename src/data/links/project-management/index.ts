import type { Link, LinkCategory, LinkCategoryName } from '../index';
import AzureDevOps from './azure-devops';
import Taiga from './taiga';


type ProjectManagementCategoryName = Extract<LinkCategoryName, 'Project management'>;


export type ProjectManagementLink = Omit<Link, 'category'> & {
    category: ProjectManagementCategoryName
};


const ProjectManagementCategoryLinks: Array<ProjectManagementLink> = [
    AzureDevOps,
    Taiga,
];


const projectManagementCategory: LinkCategory = {
    name: 'Project management',
    links: ProjectManagementCategoryLinks
};


export default projectManagementCategory;
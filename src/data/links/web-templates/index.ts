import type { Link, LinkCategory, LinkCategoryName } from '../index';
import AstroThemes from './astro-themes';
import Statichunt from './statichunt';


type WebTemplatesCategoryName = Extract<LinkCategoryName, 'Web templates'>;


export type WebTemplatesLink = Omit<Link, 'category'> & {
    category: WebTemplatesCategoryName
};


const WebTemplatesCategoryLinks: Array<WebTemplatesLink> = [
    AstroThemes,
    Statichunt,
];


const webTemplatesCategory: LinkCategory = {
    name: 'Web templates',
    links: WebTemplatesCategoryLinks
};


export default webTemplatesCategory;
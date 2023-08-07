import type { Link, LinkCategory, LinkCategoryName } from '../index';
import Contentful from './contentful';
import Keystone from './keystone';
import Saleor from './saleor';
import Sanity from './sanity';
import Shopify from './shopify';
import Strapi from './strapi';
import Wagtail from './wagtail';
import Wordpress from './wordpress';


type CMSCategoryName = Extract<LinkCategoryName, 'CMS'>;


export type CMSLink = Omit<Link, 'category'> & {
    category: CMSCategoryName
};


const CMSCategoryLinks: Array<CMSLink> = [
    Contentful,
    Keystone,
    Saleor,
    Sanity,
    Shopify,
    Strapi,
    Wagtail,
    Wordpress,
];


const CMSCategory: LinkCategory = {
    name: 'CMS',
    links: CMSCategoryLinks
};


export default CMSCategory;
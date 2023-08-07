import type { Link, LinkCategory, LinkCategoryName } from '../index';
import Contabo from './contabo';
import DigitalOcean from './digitalocean';
import FreeHostingNoAds from './free-hosting-no-ads';
import Hetzner from './hetzner';
import Hostinger from './hostinger';
import Netlify from './netlify';
import pythonanywhere from './pythonanywhere';
import Vercel from './vercel';


type WebHostingCategoryName = Extract<LinkCategoryName, 'Web hosting'>;


export type WebHostingLink = Omit<Link, 'category'> & {
    category: WebHostingCategoryName
};


const webHostingCategoryLinks: Array<WebHostingLink> = [
    Contabo,
    DigitalOcean,
    FreeHostingNoAds,
    Hetzner,
    Hostinger,
    Netlify,
    pythonanywhere,
    Vercel,
];


const webHostingCategory: LinkCategory = {
    name: 'Web hosting',
    links: webHostingCategoryLinks
};


export default webHostingCategory;
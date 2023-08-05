import Lordicon from "./lordicon";
import SvgRepo from "./svg-repo";
import type { Link, LinkCategory, LinkCategoryName } from '../index';


type IconsCategoryName = Extract<LinkCategoryName, 'Icons'>;


export type IconsLink = Omit<Link, 'category'> & {
    category: IconsCategoryName
};


const iconsCategoryLinks: Array<IconsLink> = [
    Lordicon,
    SvgRepo
];


const iconsCategory: LinkCategory = {
    name: 'Icons',
    links: iconsCategoryLinks
};


export default iconsCategory;
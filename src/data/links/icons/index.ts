import Lordicon from "./lordicon";
import SvgRepo from "./svg-repo";
import type { Link, LinkCategory, LinkCategoryName } from '../index';


type IconsCategoryType = Extract<LinkCategoryName, 'Icons'>;


export type IconsLinkType = Omit<Link, 'category'> & {
    category: IconsCategoryType
};


const iconsCategoryLinks: Array<IconsLinkType> = [
    Lordicon,
    SvgRepo
];


const iconsCategory: LinkCategory = {
    name: 'Icons',
    links: iconsCategoryLinks
};


export default iconsCategory;
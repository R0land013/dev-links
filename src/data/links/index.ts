import fontsCategory from "./fonts";
import iconsCategory from "./icons";


export type LinkCategoryName = 'Fonts' | 'Icons';


export type LinkCategory = {
    name: LinkCategoryName;
    links: Array<Link>
};


export type Link = {
    name: string;
    category: LinkCategoryName;
    linkUrl: string;
    description: string;
};


const linksByCategory: Array<LinkCategory> = [
    fontsCategory,
    iconsCategory
];




export default linksByCategory;
import colorsCategory from "./colors";
import fontsCategory from "./fonts";
import iconsCategory from "./icons";
import logoCreationCategory from "./logo-creation";


export type LinkCategoryName = 'Colors' | 'Fonts' | 'Icons' | 'Logo creation';


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
    colorsCategory,
    fontsCategory,
    iconsCategory,
    logoCreationCategory,
];




export default linksByCategory;
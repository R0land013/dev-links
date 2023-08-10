import CMSCategory from "./cms";
import colorsCategory from "./colors";
import formsCategory from "./forms";
import fontsCategory from "./fonts";
import iconsCategory from "./icons";
import logoCreationCategory from "./logo-creation";
import webHostingCategory from "./web-hosting";
import webTemplatesCategory from "./web-templates";
import projectManagementCategory from "./project-management";
import picturesCategory from "./pictures";


export type LinkCategoryName = 'CMS' | 'Colors' | 'Forms' | 'Fonts' | 'Icons' | 'Logo creation' | 'Pictures' | 'Project management' | 'Web hosting' | 'Web templates';


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
    CMSCategory,
    colorsCategory,
    formsCategory,
    fontsCategory,
    iconsCategory,
    logoCreationCategory,
    picturesCategory,
    projectManagementCategory,
    webHostingCategory,
    webTemplatesCategory,
];




export default linksByCategory;
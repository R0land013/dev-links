import CMSCategory from "./cms";
import colorsCategory from "./colors";
import documentationCategory from "./documentation";
import formsCategory from "./forms";
import fontsCategory from "./fonts";
import iconsCategory from "./icons";
import logoCreationCategory from "./logo-creation";
import webHostingCategory from "./web-hosting";
import webTemplatesCategory from "./web-templates";
import projectManagementCategory from "./project-management";
import picturesCategory from "./pictures";
import imageCompressionCategory from "./image-compression";
import learningCategory from "./learning";
import paaSCategory from "./paas";


export type LinkCategoryName = 'CMS' | 'Colors' | 'Documentation' | 'Favorites' | 'Forms' | 'Fonts' | 'Icons' | 'Image compression' | 'Learning' | 'Logo creation' | 'PaaS' | 'Pictures' | 'Project management' | 'Web hosting' | 'Web templates';


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
    documentationCategory,
    formsCategory,
    fontsCategory,
    iconsCategory,
    imageCompressionCategory,
    learningCategory,
    logoCreationCategory,
    paaSCategory,
    picturesCategory,
    projectManagementCategory,
    webHostingCategory,
    webTemplatesCategory,
];




export default linksByCategory;
import type { Link, LinkCategory, LinkCategoryName } from "..";
import FontSpace from "./font-space";
import GoogleFont from "./google-fonts";


type FontsCategoryType = Extract<LinkCategoryName, 'Fonts'>;


export type FontsLinkType = Omit<Link, 'category'> & {
    category: FontsCategoryType
};


const fontsCategoryLinks: Array<FontsLinkType> = [
    FontSpace,
    GoogleFont,
];


const fontsCategory: LinkCategory = {
    name: 'Fonts',
    links: fontsCategoryLinks
};


export default fontsCategory;
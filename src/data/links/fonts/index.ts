import type { Link, LinkCategory, LinkCategoryName } from "..";
import FontSpace from "./font-space";
import GoogleFonts from "./google-fonts";


type FontsCategoryName = Extract<LinkCategoryName, 'Fonts'>;


export type FontsLink = Omit<Link, 'category'> & {
    category: FontsCategoryName
};


const fontsCategoryLinks: Array<FontsLink> = [
    FontSpace,
    GoogleFonts,
];


const fontsCategory: LinkCategory = {
    name: 'Fonts',
    links: fontsCategoryLinks
};


export default fontsCategory;
import type { Link, LinkCategory, LinkCategoryName } from "..";
import _1001FreeFonts from "./1001-free-fonts";
import BEFonts from "./befonts";
import Dafont from "./dafont";
import FontSpace from "./font-space";
import GoogleFonts from "./google-fonts";
import MyFonts from "./myfonts";
import WhatFontIs from "./what-font-is";


type FontsCategoryName = Extract<LinkCategoryName, 'Fonts'>;


export type FontsLink = Omit<Link, 'category'> & {
    category: FontsCategoryName
};


const fontsCategoryLinks: Array<FontsLink> = [
    _1001FreeFonts,
    BEFonts,
    Dafont,
    FontSpace,
    GoogleFonts,
    MyFonts,
    WhatFontIs,
];


const fontsCategory: LinkCategory = {
    name: 'Fonts',
    links: fontsCategoryLinks
};


export default fontsCategory;
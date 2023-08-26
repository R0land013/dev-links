import type { Link, LinkCategory, LinkCategoryName } from '../index';
import ColorHunt from './color-hunt';
import ColorsAndFonts from './colors-and-fonts';
import Coolors from './coolors';
import fffuel from './fffuel';


type ColorsCategoryName = Extract<LinkCategoryName, 'Colors'>;


export type ColorsLink = Omit<Link, 'category'> & {
    category: ColorsCategoryName
};


const colorsCategoryLinks: Array<ColorsLink> = [
    ColorHunt,
    ColorsAndFonts,
    Coolors,
    fffuel,
];


const colorsCategory: LinkCategory = {
    name: 'Colors',
    links: colorsCategoryLinks
};


export default colorsCategory;
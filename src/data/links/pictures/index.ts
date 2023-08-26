import type { Link, LinkCategory, LinkCategoryName } from '../index';
import Magdeleine from './magdeleine';
import NegativeSpace from './negative-space';
import Pexels from './pexels';
import Picspree from './picspree';
import pixabay from './pixabay';
import PxHere from './px-here';
import RealisticShots from './realistic-shots';
import unDraw from './undraw';
import Unsplash from './unsplash';

type PicturesCategoryName = Extract<LinkCategoryName, 'Pictures'>;


export type PicturesLink = Omit<Link, 'category'> & {
    category: PicturesCategoryName
};


const PicturesCategoryLinks: Array<PicturesLink> = [
    Magdeleine,
    NegativeSpace,
    Pexels,
    Picspree,
    pixabay,
    PxHere,
    RealisticShots,
    unDraw,
    Unsplash,
];


const picturesCategory: LinkCategory = {
    name: 'Pictures',
    links: PicturesCategoryLinks
};


export default picturesCategory;
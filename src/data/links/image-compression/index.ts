import type { Link, LinkCategory, LinkCategoryName } from '../index';
import compressImageIo from './compressimage-io';
import Compressor from './compressor';
import SVGminify from './svgminify';
import SVGOMG from './svgomg';
import TinyPNG from './tinypng';


type ImageCompressionCategoryName = Extract<LinkCategoryName, 'Image compression'>;


export type ImageCompressionLink = Omit<Link, 'category'> & {
    category: ImageCompressionCategoryName
};


const ImageCompressionCategoryLinks: Array<ImageCompressionLink> = [
    compressImageIo,
    Compressor,
    SVGminify,
    SVGOMG,
    TinyPNG,
];


const imageCompressionCategory: LinkCategory = {
    name: 'Image compression',
    links: ImageCompressionCategoryLinks
};


export default imageCompressionCategory;
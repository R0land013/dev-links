import type { ImageCompressionLink } from "./";


const SVGminifyDescription =
`
This tool removes superfluous information, thereby reducing
the size of your SVG files.
`;


const SVGminify: ImageCompressionLink = {
    name: 'SVGminify',
    category: 'Image compression',
    linkUrl: 'https://www.svgminify.com/',
    description: SVGminifyDescription,
};

export default SVGminify;
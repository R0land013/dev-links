import type { DocumentationLink } from "./";


const mdnDescription =
`
MDN docs - the only resource a developer needs for CSS, HTML, and JavaScript.
`;

const mdn: DocumentationLink = {
    name: 'MDN',
    category: 'Documentation',
    linkUrl: 'https://developer.mozilla.org/',
    description: mdnDescription,
};

export default mdn;
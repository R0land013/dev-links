import type { CMSLink } from "./";


const WagtailDescription =
`
It is a free and open source content management system
written in Python. It is popular with websites that use
the Django framework.
`;


const Wagtail: CMSLink = {
    name: 'Wagtail',
    category: 'CMS',
    linkUrl: 'https://wagtail.org/',
    description: WagtailDescription,
};

export default Wagtail;
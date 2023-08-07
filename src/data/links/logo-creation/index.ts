import type { Link, LinkCategory, LinkCategoryName } from '../index';
import AdobeExpressLogoMaker from './adobe-express-logo-maker';
import Brandmark from './brandmark';
import Logoai from './logoai';
import Logopony from './logopony';
import Looka from './looka';
import SmashingLogo from './smashing-logo';


type LogoCreationCategoryName = Extract<LinkCategoryName, 'Logo creation'>;


export type LogoCreationLink = Omit<Link, 'category'> & {
    category: LogoCreationCategoryName
};


const logoCreationCategoryLinks: Array<LogoCreationLink> = [
    AdobeExpressLogoMaker,
    Brandmark,
    Logoai,
    Logopony,
    Looka,
    SmashingLogo
];


const logoCreationCategory: LinkCategory = {
    name: 'Logo creation',
    links: logoCreationCategoryLinks
};


export default logoCreationCategory;
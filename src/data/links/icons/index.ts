import Lordicon from "./lordicon";
import SvgRepo from "./svg-repo";
import type { Link, LinkCategory, LinkCategoryName } from '../index';
import FontAwesome from "./font-awesome";
import Boxicons from "./boxicons";
import Iconify from "./iconify";
import icons8 from "./icons8";
import Iconscout from "./iconscout";
import SimpleIcons from "./simple-icons";
import TablerIcons from "./tabler-icons";


type IconsCategoryName = Extract<LinkCategoryName, 'Icons'>;


export type IconsLink = Omit<Link, 'category'> & {
    category: IconsCategoryName
};


const iconsCategoryLinks: Array<IconsLink> = [
    Boxicons,
    FontAwesome,
    Iconify,
    Iconscout,
    icons8,
    Lordicon,
    SimpleIcons,
    SvgRepo,
    TablerIcons,
];


const iconsCategory: LinkCategory = {
    name: 'Icons',
    links: iconsCategoryLinks
};


export default iconsCategory;
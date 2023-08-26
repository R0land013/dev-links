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
import IconStore from "./iconstore";
import FreeIcons from "./freeicons";
import Iconfinder from "./iconfinder";
import flaticon from "./flaticon";
import uxwing from "./uxwing";
import reshot from "./reshot";


type IconsCategoryName = Extract<LinkCategoryName, 'Icons'>;


export type IconsLink = Omit<Link, 'category'> & {
    category: IconsCategoryName
};


const iconsCategoryLinks: Array<IconsLink> = [
    Boxicons,
    flaticon,
    FontAwesome,
    FreeIcons,
    Iconfinder,
    Iconify,
    icons8,
    Iconscout,
    IconStore,
    Lordicon,
    reshot,
    SimpleIcons,
    SvgRepo,
    TablerIcons,
    uxwing,
];


const iconsCategory: LinkCategory = {
    name: 'Icons',
    links: iconsCategoryLinks
};


export default iconsCategory;
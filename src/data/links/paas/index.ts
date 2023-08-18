import type { Link, LinkCategory, LinkCategoryName } from '../index';
import Adaptable from './adaptable';
import ControlPlane from './control-plane';
import Cyclic from './cyclic';
import DenoDeploy from './deno-deploy';
import Deta from './deta';
import fl0 from './fl0';
import Flyio from './fly-io';
import Glitch from './glitch';
import Northflank from './northflank';
import Qoddi from './qoddi';
import Railway from './railway';
import Render from './render';


type PaaSCategoryName = Extract<LinkCategoryName, 'PaaS'>;


export type PaaSLink = Omit<Link, 'category'> & {
    category: PaaSCategoryName
};


const paaSCategoryLinks: Array<PaaSLink> = [
    Adaptable,
    ControlPlane,
    Cyclic,
    DenoDeploy,
    Deta,
    fl0,
    Flyio,
    Glitch,
    Northflank,
    Qoddi,
    Railway,
    Render,
];


const paaSCategory: LinkCategory = {
    name: 'PaaS',
    links: paaSCategoryLinks
};


export default paaSCategory;
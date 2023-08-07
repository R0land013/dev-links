import type { Link, LinkCategory, LinkCategoryName } from '../index';
import Getform from './getform';
import Tally from './tally';

type FormsCategoryName = Extract<LinkCategoryName, 'Forms'>;


export type FormsLink = Omit<Link, 'category'> & {
    category: FormsCategoryName
};


const FormsCategoryLinks: Array<FormsLink> = [
    Getform,
    Tally,
];


const formsCategory: LinkCategory = {
    name: 'Forms',
    links: FormsCategoryLinks
};


export default formsCategory;
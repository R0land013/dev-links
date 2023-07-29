import { Storage } from "@plasmohq/storage";
import { type Link } from '../data/links/index';


const storage = new Storage();
const FAVORITE_LINKS = 'FAVORITE_LINKS';


export const getFavoriteLinks = async (): Promise<Array<Link>> => {
    const value = await storage.get(FAVORITE_LINKS);
    
    if(value) {
        return JSON.parse(value) as Array<Link>;
    }

    return [];
};

export const addNewFavoriteLink = async (aLink: Link) => {

    const links = await getFavoriteLinks();
    links.push(aLink);
    
    const sortedLinks = links.sort((a, b) => a.name > b.name ? 1 : -1);

    await storage.set(FAVORITE_LINKS, JSON.stringify(sortedLinks));

};


export const removeFavoriteLink = async (linkToRemove: Link) => {

    const links = await getFavoriteLinks();
    const linksWithAfterRemoval = links.filter(aLink => aLink.name !== linkToRemove.name);

    await storage.set(FAVORITE_LINKS, JSON.stringify(linksWithAfterRemoval));
};
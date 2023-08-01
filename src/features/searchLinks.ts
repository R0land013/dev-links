import MiniSearch, { type SearchResult} from 'minisearch';
import linksByCategory, { type Link, type LinkCategory } from "~data/links";


const searchIndex = new MiniSearch<Link & {id: string}>({
    fields: ['name', 'description'],
    storeFields: ['name', 'description', 'category', 'linkUrl'],
    searchOptions: {
        prefix: true,
        combineWith: 'AND'
    }
});



linksByCategory.forEach((aCategory) => {

    aCategory.links.forEach((aLink) => {
        searchIndex.add({...aLink, id: aLink.name});
    });
});



/**
 * This class allows to search links by name or description.
 * The constructor receives a callback that will be called
 * after a search have successfully done.
 * 
 * For searching, the instance method 'searchLinks' can be used.
 */
class LinkSearcher {

    private foundCallback: (foundLinksByCategory: Array<LinkCategory>) => void;
    private lastSearchPromise: Promise<Array<LinkCategory>>;

    constructor(foundCallback: (foundLinksByCategory: Array<LinkCategory>) => void) {
        this.foundCallback = foundCallback;
    }

    /**
     * This method recieves the user input for searching links.
     * You can call this every time the user modified the search input.
     * If some searches are being executed, at the same time, for avoiding
     * race conditions and rare behaviors, only the last search request will
     * trigger the call to the callback passed to LinkSearcher constructor.
     * 
     * @param searchText the user input for searching links
     */
    async searchLinks(searchText: string) {
        const currentSearchPromise = new Promise<Array<LinkCategory>>((resolve) => {
            const searchedLinksByCategory = searchLinks(searchText);
            resolve(searchedLinksByCategory);
        });
        this.lastSearchPromise = currentSearchPromise;

        const searchedLinksByCategory = await currentSearchPromise;

        if (currentSearchPromise === this.lastSearchPromise) {
            this.foundCallback(searchedLinksByCategory);
        }

    }

}


const searchLinks = (searchText: string) => {

    const query = constructQueryString(searchText);

    const results = searchIndex.search(query);

    const resultLinks = results.map((aResult: SearchResult & Link) => {
        return {
            name: aResult.name,
            category: aResult.category,
            linkUrl: aResult.linkUrl,
            description: aResult.description,
        };
    });

    return groupLinksByCategory(resultLinks);

};


const constructQueryString = (searchText: string) => {
    const words = searchText.split(' ');
    let queryString = '';

    words.forEach((word) => {
        if (word) {
            queryString = `${queryString} ${word}`;
        }
    });
    
    return queryString.trim();
};


const groupLinksByCategory = (links: Array<Link>) => {

    const linkCategories: Array<LinkCategory> = [];
    const foundCategories: Set<string> = new Set();

    links.forEach((aLink) => {

        if (!foundCategories.has(aLink.category)) {
            foundCategories.add(aLink.category);
            linkCategories.push({
                name: aLink.category,
                links: [],
            });
        }

        const categoryForAddingLink = linkCategories.find(category => category.name === aLink.category);
        categoryForAddingLink.links.push(aLink);

    });

    // Sort links alphabetically within each category
    linkCategories.forEach((aCategory) => {
        aCategory.links = aCategory.links.sort((a, b) => a.name > b.name ? 1 : -1);
    });

    // Sort categories alphabetically by name
    const sortedCategories = linkCategories.sort((a, b) => a.name > b.name ? 1 : -1);

    return sortedCategories;
};


export default LinkSearcher;
import lunr from "lunr";
import linksByCategory, { type Link, type LinkCategory } from "~data/links";


const searchIndex = lunr(function () {

    this.field('name');
    this.field('description');

    linksByCategory.forEach((aCategory) => {

        aCategory.links.forEach((aLink) => {
            this.add({
                id: aLink.name,
                ...aLink
            });
        });
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

        if(currentSearchPromise === this.lastSearchPromise) {
            this.foundCallback(searchedLinksByCategory);
        }

    }

}


const searchLinks = (searchText: string) => {

    const queryString = constructQueryString(searchText);

    const results = searchIndex.search(queryString);

    const resultLinkNames: Array<string> = results.map(aResult => aResult.ref);
    const resultLinks = extractLinkFromCategoriesUsingLinkNames(resultLinkNames);

    return groupLinksByCategory(resultLinks);

};


/**
 * Create a query where all words must be present in the document.
 * The words can be incomplete. For example user could write
 * 'hop', and a document with 'hopping' should match.
 * 
 * @param searchText - The text the user wrote for searching.
 * @returns A string with wildcard representing the query.
 */
const constructQueryString = (searchText: string) => {
    const words = searchText.split(' ');
    let queryString = '';

    words.forEach((word) => {
        if(word) {
            queryString = `${queryString} +*${word}*`;
        }
    });

    return queryString.trim();
};

const extractLinkFromCategoriesUsingLinkNames = (linkNames: Array<string>) => {

    const links: Array<Link> = [];

    linksByCategory.forEach((aCategory: LinkCategory) => {
        aCategory.links.forEach((aLink) => {

            if (linkNames.includes(aLink.name)) {
                links.push(aLink);
            }
        });
    });

    return links;
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
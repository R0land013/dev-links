import Card from "../Card";
import CategoryMenu from "../CategoryMenu";
import MenuDivider from "../MenuDivider";
import SearchBar from "../SearchBar";
import linkCategories, { type LinkCategory } from "~data/links";
import { useContext, useState, useRef, useCallback } from 'react';
import FavoriteLinksContext from "~context/favoriteLinks";
import LinkSearcher from "~features/searchLinks";


interface NavigationMenuProps {
    id?: string;
    className?: string
}

const NavigationMenu = (props: NavigationMenuProps) => {

    const { favoriteLinks } = useContext(FavoriteLinksContext);

    const [loading, setLoading] = useState(false);
    const [linksByCategory, setLinksByCategory] = useState<Array<LinkCategory>>(linkCategories);
    const [visibleFavoriteLinks, setVisibleFavoriteLinks] = useState(true);

    const linkSearcherRef = useRef(new LinkSearcher((searchedLinksByCategory) => {
        setLinksByCategory(searchedLinksByCategory);
        setLoading(false);
    }));

    const searchLinks = useCallback((searchText: string) => {

        if (searchText.trim()) {
            setVisibleFavoriteLinks(false);
            linkSearcherRef.current.searchLinks(searchText);
            setLoading(true);
        }
        else {
            setVisibleFavoriteLinks(true);
            setLinksByCategory(linkCategories);
            setLoading(false);
        }


    }, [linkSearcherRef]);


    return (

        <Card
            id="nav-menu"
            className={`rounded-none h-[100vh] md:static md:w-[40%] md:flex flex-col items-center w-[70vw] fixed right-[105vw] z-10 ${props.className ?? ''}`}>

            <SearchBar
                className="w-[80%] mb-2"
                onChangeText={searchLinks} />

            <div className="flex flex-col items-center w-full mt-2 pr-2 overflow-y-auto">

                {loading ? (

                    <div className="text-action-color text-[0.75rem]">Loading...</div>

                ) : (
                    <>
                        {visibleFavoriteLinks && favoriteLinks && favoriteLinks.length > 0 && (
                            <div
                                key={'Favorites'}
                                className="w-full flex flex-col items-center">

                                <CategoryMenu
                                    category={{
                                        name: 'Favorites',
                                        links: favoriteLinks,
                                    }} />

                                <MenuDivider className="w-[95%] mt-3 mb-3" />

                            </div>
                        )}

                        {linksByCategory.map((aCategory, index) => (

                            <div
                                key={aCategory.name}
                                className="w-full flex flex-col items-center">

                                <CategoryMenu
                                    category={aCategory} />

                                {index !== linksByCategory.length - 1 ?

                                    <MenuDivider className="w-[95%] mt-3 mb-3" />

                                    : undefined}

                            </div>
                        ))}
                    </>
                )}

            </div>

        </Card>

    );
};

export default NavigationMenu;
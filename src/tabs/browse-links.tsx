import "./../style.css";
import LinkCard from "~components/LinkCard";
import SelectedLinkContext from "~context/selectedLink";
import { useState, useEffect } from "react";
import type { Link, LinkCategory } from "~data/links";
import FavoriteLinksContext from "~context/favoriteLinks";
import { addNewFavoriteLink, getFavoriteLinks, removeFavoriteLink } from "~features/favoriteLinks";
import WelcomeInfo from "~components/WelcomeInfo";
import NavigationMenu from "~components/NavigationMenu";
import MainContainer from "~components/MainContainer";
import SelectedLinkCategoryContext from "~context/selectedCategory";
import CategoryCard from "~components/CategoryCard";


const BrowseLinks = () => {

    const [selectedLinkCategory, setSelectedLinkCategory] = useState<LinkCategory | undefined>();
    const [selectedLink, setSelectedLink] = useState<Link | undefined>();
    const [favoriteLinks, setFavoriteLinks] = useState<Array<Link> | undefined>();

    useEffect(() => {
        getFavoriteLinks().then((links) => setFavoriteLinks(links));
    });

    const addFavoriteLink = async (aLink: Link) => {
        await addNewFavoriteLink(aLink);
        const favoriteLinks = await getFavoriteLinks();
        setFavoriteLinks(favoriteLinks);
    };

    const removeLinkFromFavorites = async (aLink: Link) => {
        await removeFavoriteLink(aLink);
        const favoriteLinks = await getFavoriteLinks();
        setFavoriteLinks(favoriteLinks);
    };



    return (
        <FavoriteLinksContext.Provider
            value={{
                favoriteLinks,
                addNewFavoriteLink: addFavoriteLink,
                removeLinkFromFavorites,
            }}>

            <SelectedLinkCategoryContext.Provider value={{
                selectedLinkCategory,
                setSelectedLinkCategory: (category) => setSelectedLinkCategory(category)
            }}>

                <SelectedLinkContext.Provider value={{
                    selectedLink,
                    setSelectedLink: (aSelectedLink) => setSelectedLink(aSelectedLink),
                }}>

                    <div className="w-full flex flex-row flex-grow h-[100vh] items-start">

                        <NavigationMenu />


                        <MainContainer>

                            {!selectedLink && !selectedLinkCategory && (
                                <WelcomeInfo className="mt-24" />

                            )}

                            {selectedLinkCategory && (
                                <CategoryCard/>
                            )}

                            {selectedLink && (
                                <LinkCard link={selectedLink} />
                            )}

                        </MainContainer>

                    </div>
                </SelectedLinkContext.Provider>
            </SelectedLinkCategoryContext.Provider>

        </FavoriteLinksContext.Provider>
    );
};

export default BrowseLinks;
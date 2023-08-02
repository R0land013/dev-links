import Header from "./../components/Header";
import "./../style.css";
import LinkCard from "~components/LinkCard";
import SelectedLinkContext from "~context/selectedLink";
import { useState, useEffect } from "react";
import type { Link } from "~data/links";
import FavoriteLinksContext from "~context/favoriteLinks";
import { addNewFavoriteLink, getFavoriteLinks, removeFavoriteLink } from "~features/favoriteLinks";
import WelcomeInfo from "~components/WelcomeInfo";
import NavigationMenu from "~components/NavigationMenu";


const BrowseLinks = () => {

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

            <SelectedLinkContext.Provider value={{
                selectedLink,
                setSelectedLink: (aSelectedLink) => setSelectedLink(aSelectedLink),
            }}>

                <div className="w-full flex flex-row flex-grow h-[100vh] items-start">

                    <NavigationMenu/>

                    <div className="flex flex-col w-full h-[100vh] overflow-y-auto">
                        
                        <Header />

                        {!selectedLink && (
                            <WelcomeInfo/>
                        )}

                        {selectedLink && (
                            <LinkCard link={selectedLink} />
                        )}

                    </div>

                </div>
            </SelectedLinkContext.Provider>
        </FavoriteLinksContext.Provider>
    );
};

export default BrowseLinks;
import NavigationMenu from "~components/NavigationMenu";
import Header from "./../components/Header";
import "./../style.css";
import LinkCard from "~components/LinkCard";
import SelectedLinkContext from "~context/selectedLink";
import { useState } from "react";
import type { Link } from "~data/links";


const BrowseLinks = () => {
    const [selectedLink, setSelectedLink] = useState<Link | undefined>(undefined);
    
    return (
        <SelectedLinkContext.Provider value={{
            selectedLink,
            setSelectedLink: (aSelectedLink) => setSelectedLink(aSelectedLink),
        }}>

            <div className="w-full flex flex-row flex-grow h-[100vh] items-start">

                <NavigationMenu />

                <div className="flex flex-col w-full h-[100vh] overflow-y-auto">
                    <Header />

                    {selectedLink && (
                        <LinkCard link={selectedLink}/>
                    )}
                    
                </div>

            </div>
        </SelectedLinkContext.Provider>
    );
};

export default BrowseLinks;
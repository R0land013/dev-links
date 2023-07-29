import Card from "./Card";
import NonFavoriteIcon from "data-base64:~assets/icons/general/non-favorite.svg";
import FavoriteIcon from "data-base64:~assets/icons/general/favorite.svg";
import LinkChainImage from "data-base64:~assets/icons/general/link-chain.svg";
import Button from "./Button";
import { type Link } from "~data/links";
import { useCallback, useContext } from "react";
import FavoriteLinksContext from "~context/favoriteLinks";


type CardLinkProps = {
    link: Link
}



const LinkCard = (props: CardLinkProps) => {

    const {favoriteLinks, addNewFavoriteLink, removeLinkFromFavorites} = useContext(FavoriteLinksContext);

    const isFavoriteLink = useCallback(() => {
        const foundLink = favoriteLinks?.find(aLink => aLink.name === props.link.name);
        return !!foundLink;
    }, [props.link, favoriteLinks]);

    const isFavorite = isFavoriteLink();

    return (
        <Card className="flex flex-col p-8 pt-5 m-5">

            <div className="w-full flex flex-row items-center justify-between">

                <div className="flex items-center justify-start">
                    <img src={`https://www.google.com/s2/favicons?domain=${props.link.linkUrl}&sz=64`} className="h-8" />
                    <h3 className="text-header-color font-bold text-2xl ml-1">
                        {props.link.name}
                    </h3>
                </div>

                <button
                    onClick={() => {
                        if(isFavorite) {
                            removeLinkFromFavorites(props.link);
                        }
                        else {
                            addNewFavoriteLink(props.link);
                        }
                    }}>
                    <img
                        src={isFavorite ? FavoriteIcon : NonFavoriteIcon}
                        className="w-10" />
                </button>

            </div>
            

            <div className="mt-5">
                
                <Button
                    onClick={() => {
                        window.open(props.link.linkUrl);
                    }}>
                    
                    <span className="font-bold text-lg">
                        Open Link
                    </span>
                    
                    <img
                        src={LinkChainImage}
                        className="w-7"/>
                </Button>

            </div>

            <div className="w-full mt-5">
                <p className="text-text-color text-base">
                    {props.link.description}
                </p>
            </div>
        </Card>
    );
};

export default LinkCard;
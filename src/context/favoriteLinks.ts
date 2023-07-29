import { createContext } from "react";
import type { Link } from "~data/links";

type FavoriteLinksContextType = {
    favoriteLinks?: Array<Link>
    addNewFavoriteLink: (aLink: Link) => void;
    removeLinkFromFavorites: (aLink: Link) => void
}

const FavoriteLinksContext = createContext<FavoriteLinksContextType>(undefined);

export default FavoriteLinksContext;
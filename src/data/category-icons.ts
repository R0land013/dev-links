import type { LinkCategoryName } from "./links";
import FontsCategoryIcon from "data-base64:~assets/icons/categories/fonts.svg";
import IconsCategoryIcon from "data-base64:~assets/icons/categories/icons.svg";
import ColorsCategoryIcon from "data-base64:~assets/icons/categories/colors.svg";
import FavoriteIcon from "data-base64:~assets/icons/categories/favorite.svg";


export const getIconForLinkCategory = (category: LinkCategoryName | 'Favorites') => {

    switch (category) {

    case 'Fonts':
        return FontsCategoryIcon;

    case 'Icons':
        return IconsCategoryIcon;
        
    case 'Colors':
        return ColorsCategoryIcon;

    default:
        return FavoriteIcon;
    }

};
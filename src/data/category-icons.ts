import type { LinkCategoryName } from "./links";
import CMSCategoryIcon from "data-base64:~assets/icons/categories/cms.svg";
import ColorsCategoryIcon from "data-base64:~assets/icons/categories/colors.svg";
import FormsCategoryIcon from "data-base64:~assets/icons/categories/forms.svg";
import FontsCategoryIcon from "data-base64:~assets/icons/categories/fonts.svg";
import IconsCategoryIcon from "data-base64:~assets/icons/categories/icons.svg";
import LogoCreationCategoryIcon from "data-base64:~assets/icons/categories/logo-creation.svg";
import WebHostingCategoryIcon from "data-base64:~assets/icons/categories/web-hosting.svg";
import WebTemplatesCategoryIcon from "data-base64:~assets/icons/categories/web-templates.svg";
import FavoriteIcon from "data-base64:~assets/icons/categories/favorite.svg";


export const getIconForLinkCategory = (category: LinkCategoryName | 'Favorites') => {

    switch (category) {

    case 'CMS':
        return CMSCategoryIcon;

    case 'Colors':
        return ColorsCategoryIcon;

    case 'Forms':
        return FormsCategoryIcon;

    case 'Fonts':
        return FontsCategoryIcon;

    case 'Icons':
        return IconsCategoryIcon;

    case 'Logo creation':
        return LogoCreationCategoryIcon;

    case 'Web hosting':
        return WebHostingCategoryIcon;
    
    case 'Web templates':
        return WebTemplatesCategoryIcon;

    default:
        return FavoriteIcon;
    }

};
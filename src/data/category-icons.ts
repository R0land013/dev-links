import type { LinkCategoryName } from "./links";
import CMSCategoryIcon from "data-base64:~assets/icons/categories/cms.svg";
import ColorsCategoryIcon from "data-base64:~assets/icons/categories/colors.svg";
import documentationCategoryIcon from "data-base64:~assets/icons/categories/documentation.svg";
import FormsCategoryIcon from "data-base64:~assets/icons/categories/forms.svg";
import FontsCategoryIcon from "data-base64:~assets/icons/categories/fonts.svg";
import IconsCategoryIcon from "data-base64:~assets/icons/categories/icons.svg";
import ImageCompressionCategoryIcon from "data-base64:~assets/icons/categories/image-compression.svg";
import LearningCategoryIcon from "data-base64:~assets/icons/categories/learning.svg";
import LogoCreationCategoryIcon from "data-base64:~assets/icons/categories/logo-creation.svg";
import LogoPaaSCategoryIcon from "data-base64:~assets/icons/categories/paas.svg";
import PicturesCategoryIcon from "data-base64:~assets/icons/categories/pictures.svg";
import ProjectManagementCategoryIcon from "data-base64:~assets/icons/categories/project-management.svg";
import WebHostingCategoryIcon from "data-base64:~assets/icons/categories/web-hosting.svg";
import WebTemplatesCategoryIcon from "data-base64:~assets/icons/categories/web-templates.svg";
import FavoriteIcon from "data-base64:~assets/icons/categories/favorite.svg";


export const getIconForLinkCategory = (category: LinkCategoryName) => {

    switch (category) {

    case 'CMS':
        return CMSCategoryIcon;

    case 'Colors':
        return ColorsCategoryIcon;
    
    case 'Documentation':
        return documentationCategoryIcon;

    case 'Forms':
        return FormsCategoryIcon;

    case 'Fonts':
        return FontsCategoryIcon;

    case 'Icons':
        return IconsCategoryIcon;
        
    case 'Image compression':
        return ImageCompressionCategoryIcon;
    
    case 'Learning':
        return LearningCategoryIcon;
    
    case 'Logo creation':
        return LogoCreationCategoryIcon;
    
    case 'PaaS':
        return LogoPaaSCategoryIcon;
    
    case 'Pictures':
        return PicturesCategoryIcon;
    
    case 'Project management':
        return ProjectManagementCategoryIcon;

    case 'Web hosting':
        return WebHostingCategoryIcon;
    
    case 'Web templates':
        return WebTemplatesCategoryIcon;

    default:
        return FavoriteIcon;
    }

};
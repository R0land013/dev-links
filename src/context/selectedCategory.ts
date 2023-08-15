import { createContext } from "react";
import type { LinkCategory } from "~data/links";

type SelectedLinkCategoryContextType = {
    selectedLinkCategory?: LinkCategory;
    setSelectedLinkCategory?: (selectedLink?: LinkCategory) => void
}

const SelectedLinkCategoryContext = createContext<SelectedLinkCategoryContextType>(undefined);

export default SelectedLinkCategoryContext;
import { createContext } from "react";
import type { Link } from "~data/links";

type SelectedLinkContextType = {
    selectedLink?: Link;
    setSelectedLink?: (selectedLink: Link) => void
}

const SelectedLinkContext = createContext<SelectedLinkContextType>(undefined);

export default SelectedLinkContext;
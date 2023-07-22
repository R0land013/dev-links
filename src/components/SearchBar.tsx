import SearchIcon from "data-base64:~assets/search.svg";
import { useState } from "react";

interface SearchBarProps {
    className?: string;
}

const SearchBar = (props: SearchBarProps) => {
    
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const focusColor = isFocused ? 'bg-focus-color' : '';
    
    return (
        <div
            className={`border-2 border-action-color rounded-2xl w-full p-1 pl-2 pr-2 flex flex-row ${focusColor} ${props.className}`}>
            
            <input
                className="border-none focus:outline-none focus:bg-focus-color w-full h-full text-text-color text-base"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type="text"/>
            
            <img
                src={SearchIcon}
                className="w-6"/>

        </div>
    );
};

export default SearchBar;
import SearchIcon from "data-base64:~assets/icons/general/search.svg";
import { useState } from "react";


interface SearchBarProps {
    className?: string;
    onChangeText: (text: string) => void
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
                autoFocus={true}
                onBlur={() => setIsFocused(false)}
                onChange={(event) => props.onChangeText(event.target.value)}
                type="text"/>
            
            <img
                src={SearchIcon}
                className="w-6"/>

        </div>
    );
};

export default SearchBar;
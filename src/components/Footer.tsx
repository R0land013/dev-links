import React from 'react';

interface FooterProps {
    className?: string
}

const Footer = (props: FooterProps) => {
    return (
        <div className={`flex flex-col justify-center items-center text-base text-header-color pb-3 ${props.className}`}>
            <span className="mt-2">
                Made with 💜 by <a href="https://r0land013.github.io/">Rolando Rio Garaboa</a>
            </span>

            <span className="mt-1">
                <a href="https://www.buymeacoffee.com/rolandorio">Buy me a coffee ☕</a>
            </span>
        </div>
    );
};

export default Footer;
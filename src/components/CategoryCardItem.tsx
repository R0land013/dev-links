import type { Link } from '~data/links';
import Button from './Button';
import LinkChainImage from "data-base64:~assets/icons/general/link-chain.svg";
import { useState } from 'react';


interface CardCategoryItemProps {
    onClick: () => void;
    onClickOpenLink: () => void;
    link: Link
}

const CategoryCardItem = (props: CardCategoryItemProps) => {
    const [isMouseHovering, setIsMouseHovering] = useState(false);

    return (
        <div
            className='flex flex-row w-full p-2 items-center justify-start rounded-lg hover:bg-focus-color cursor-pointer'
            onClick={props.onClick}
            onMouseEnter={() => setIsMouseHovering(true)}
            onMouseLeave={() => setIsMouseHovering(false)}>

            <img
                src={`https://www.google.com/s2/favicons?domain=${props.link.linkUrl}&sz=64`}
                className='h-8' />

            <div className='flex flex-col w-full justify-start items-start truncate'>

                <div className='flex flex-row justify-center items-center'>
                    <h4 className='text-header-color text-base font-semibold ml-2'>
                        {props.link.name}
                    </h4>

                    {isMouseHovering && (

                        <Button
                            onClick={() => {
                                props.onClickOpenLink();
                            }}
                            className='ml-2 rounded-md pl-1 pr-1'>

                            <span className="font-bold text-base">
                                Open Link
                            </span>

                            <img
                                src={LinkChainImage}
                                className="h-5" />
                        </Button>
                    )}
                </div>

                <p className='text-header-color text-sm font-thin text-start ml-2'>
                    {props.link.description}
                </p>
            </div>

        </div>
    );
};

export default CategoryCardItem;
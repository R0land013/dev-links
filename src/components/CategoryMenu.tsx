import { useState } from 'react';
import NonFavoriteImage from "data-base64:~assets/non-favorite.svg";

interface CategoryMenuProps {
    categoryName: string;
    items?: Array<string>;
}

const QUANTITY_OF_ITEMS_TO_SHOW = 5;

const CategoryMenu = (props: CategoryMenuProps) => {

    const [quantityOfShownItems, setQuantityOfShownItems] = useState<number>(
        QUANTITY_OF_ITEMS_TO_SHOW > props.items.length ? props.items.length : QUANTITY_OF_ITEMS_TO_SHOW
    );

    const showMoreItems = () => {
        
        setQuantityOfShownItems(quantityOfShownItems + QUANTITY_OF_ITEMS_TO_SHOW >= props.items.length
            ? props.items.length : quantityOfShownItems + QUANTITY_OF_ITEMS_TO_SHOW
        );
    };

    return (
        <div className='flex flex-col items-start w-full'>

            <div className='flex flex-row justify-start items-center'>

                <img
                    src={NonFavoriteImage}
                    className='w-6' />

                <span
                    className='text-header-color text-lg ml-3 font-medium'>

                    {props.categoryName}
                </span>
            </div>


            <div className='flex flex-col ml-7'>

                {props.items?.map((anItem, index) => index < quantityOfShownItems && (
                    <button
                        key={anItem}
                        className='flex flex-row justify-start items-center mt-1 hover:bg-focus-color p-1 pl-3 pr-3 rounded-lg'>

                        <img
                            src={NonFavoriteImage}
                            className='w-5' />

                        <span
                            className='text-header-color text-base ml-2'>

                            {anItem}
                        </span>
                    </button>
                ))}

            </div>


            {quantityOfShownItems < props.items.length && (
                
                <div className='w-full flex flex-col items-center justify-center mt-2'>
                    
                    <button
                        className='border-none bg-none text-action-color text-[0.75rem]'
                        onClick={showMoreItems}>
                        
                        Show more...
                    </button>
                
                </div>
            )}




        </div>
    );
};

export default CategoryMenu;
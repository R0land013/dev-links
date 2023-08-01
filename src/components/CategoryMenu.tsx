import { useState, useContext, useEffect } from 'react';
import type { LinkCategory, LinkCategoryName } from '~data/links';
import SelectedLinkContext from '~context/selectedLink';
import { getIconForLinkCategory } from '~data/category-icons';

interface CategoryMenuProps {
    category: Omit<LinkCategory, 'name'> & {
        name: LinkCategoryName | 'Favorites'
    }
}

const QUANTITY_OF_ITEMS_TO_SHOW = 5;

const CategoryMenu = (props: CategoryMenuProps) => {

    const links = props.category.links;

    const selectedLinkContext = useContext(SelectedLinkContext);

    const [quantityOfShownItems, setQuantityOfShownItems] = useState<number>(
        QUANTITY_OF_ITEMS_TO_SHOW > links.length ? links.length : QUANTITY_OF_ITEMS_TO_SHOW
    );

    const showMoreItems = () => {
        
        setQuantityOfShownItems(quantityOfShownItems + QUANTITY_OF_ITEMS_TO_SHOW >= props.category.links.length
            ? links.length : quantityOfShownItems + QUANTITY_OF_ITEMS_TO_SHOW
        );
    };

    useEffect(() => {
        setQuantityOfShownItems(QUANTITY_OF_ITEMS_TO_SHOW > links.length ? links.length : QUANTITY_OF_ITEMS_TO_SHOW);
    }, [links.length]);

    return (
        <div className='flex flex-col items-start w-full'>

            <div className='flex flex-row justify-start items-center'>

                <img
                    src={getIconForLinkCategory(props.category.name)}
                    className='w-6' />

                <span
                    className='text-header-color text-lg ml-3 font-medium'>

                    {props.category.name}
                </span>
            </div>


            <div className='flex flex-col ml-7'>

                {links.map((aLink, index) => index < quantityOfShownItems && (
                    <button
                        key={aLink.linkUrl}
                        className={`flex flex-row justify-start items-center mt-1 hover:bg-focus-color p-1 pl-3 pr-3 rounded-lg ${ selectedLinkContext.selectedLink === aLink ? 'bg-focus-color border-2 border-action-color' : ''}`}
                        onClick={() => selectedLinkContext.setSelectedLink(aLink)}>

                        <img
                            src={`https://www.google.com/s2/favicons?domain=${aLink.linkUrl}&sz=64`}
                            className='w-5' />

                        <span
                            className='text-header-color text-base ml-2'>

                            {aLink.name}
                        </span>
                    </button>
                ))}

            </div>


            {quantityOfShownItems < links.length && (
                
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
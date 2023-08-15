import { useState, useContext, useEffect } from 'react';
import type { LinkCategory } from '~data/links';
import SelectedLinkContext from '~context/selectedLink';
import { getIconForLinkCategory } from '~data/category-icons';
import { hideNavigationMenu } from './NavigationMenu';
import SelectedLinkCategoryContext from '~context/selectedCategory';

interface CategoryMenuProps {
    category: LinkCategory
}

const QUANTITY_OF_ITEMS_TO_SHOW = 5;

const CategoryMenu = (props: CategoryMenuProps) => {

    const links = props.category.links;

    const selectedLinkContext = useContext(SelectedLinkContext);
    const {setSelectedLinkCategory} = useContext(SelectedLinkCategoryContext);
    
    const [quantityOfShownItems, setQuantityOfShownItems] = useState<number>(
        QUANTITY_OF_ITEMS_TO_SHOW > links.length ? links.length : QUANTITY_OF_ITEMS_TO_SHOW
    );
    const [isHoveringCategoryName, setIsHoveringCategoryName] = useState(false);

    const showMoreItems = () => {
        
        setQuantityOfShownItems(quantityOfShownItems + QUANTITY_OF_ITEMS_TO_SHOW >= props.category.links.length
            ? links.length : quantityOfShownItems + QUANTITY_OF_ITEMS_TO_SHOW
        );
    };

    useEffect(() => {
        setQuantityOfShownItems(QUANTITY_OF_ITEMS_TO_SHOW > links.length ? links.length : QUANTITY_OF_ITEMS_TO_SHOW);
    }, [links.length]);

    return (
        <div
            className={`flex flex-col items-start w-full p-2 rounded-lg ${isHoveringCategoryName ? 'bg-focus-color' : undefined}`}>

            <button
                className='flex flex-row justify-start items-center w-full'
                onMouseEnter={() => setIsHoveringCategoryName(true)}
                onMouseLeave={() => setIsHoveringCategoryName(false)}
                onClick={() => {
                    hideNavigationMenu();
                    selectedLinkContext.setSelectedLink(undefined);
                    setSelectedLinkCategory(props.category);
                }}>

                <img
                    src={getIconForLinkCategory(props.category.name)}
                    className='w-6' />

                <span
                    className='text-header-color text-lg ml-3 font-medium text-start'>

                    {props.category.name}
                </span>
            </button>


            <div className='flex flex-col w-full'>

                {links.map((aLink, index) => index < quantityOfShownItems && (
                    <button
                        key={aLink.linkUrl}
                        className={`flex flex-row justify-start pl-6 items-center w-full mt-1 hover:bg-focus-color p-1 rounded-lg border-2 ${ selectedLinkContext.selectedLink?.name === aLink.name ? 'bg-focus-color border-action-color' : 'border-transparent'}`}
                        onClick={() => {
                            hideNavigationMenu();
                            setSelectedLinkCategory(undefined);
                            selectedLinkContext.setSelectedLink(aLink);
                        }}>

                        <img
                            src={`https://www.google.com/s2/favicons?domain=${aLink.linkUrl}&sz=64`}
                            className='w-5' />

                        <span
                            className='text-header-color text-base ml-2 text-start'>

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
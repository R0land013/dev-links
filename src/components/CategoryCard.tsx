import SelectedLinkCategoryContext from '~context/selectedCategory';
import Card from './Card';
import { useContext } from 'react';
import SelectedLinkContext from '~context/selectedLink';
import { getIconForLinkCategory } from '~data/category-icons';
import MenuDivider from './MenuDivider';
import CategoryCardItem from './CategoryCardItem';


const CategoryCard = () => {

    const { selectedLinkCategory, setSelectedLinkCategory } = useContext(SelectedLinkCategoryContext);
    const { setSelectedLink } = useContext(SelectedLinkContext);

    return (
        <Card className='flex flex-col p-8 pt-5 m-5 w-full justify-start'>

            <div className='flex flex-row justify-start items-center'>

                <img
                    src={getIconForLinkCategory(selectedLinkCategory.name)}
                    className="h-8" />

                <h3 className="text-header-color font-bold text-2xl ml-1">
                    {selectedLinkCategory.name}
                </h3>

            </div>

            <div className='flex flex-col w-full mt-5'>

                {selectedLinkCategory.links.map((aLink, index) => (
                    <div key={aLink.linkUrl}>
                        <CategoryCardItem
                            link={aLink}
                            onClick={() => {
                                setSelectedLinkCategory(undefined);
                                setSelectedLink(aLink);
                            }}/>

                        {index != selectedLinkCategory.links.length - 1 && (
                            <MenuDivider className="w-full mt-3 mb-3" />
                        )}
                    </div>
                ))}

            </div>

        </Card>
    );
};

export default CategoryCard;
import Card from "./Card";
import CategoryMenu from "./CategoryMenu";
import MenuDivider from "./MenuDivider";
import SearchBar from "./SearchBar";

const someLinkCategories = [
    {
        categoryName: 'Favorites',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6', 'Link 7', 'Link 8', 'Link 9', 'Link 10', 'Link 11']
    },
    {
        categoryName: 'Category 1',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6']
    },
    {
        categoryName: 'Category 2',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6']
    },
    {
        categoryName: 'Category 3',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6']
    },
    {
        categoryName: 'Category 4',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6']
    },
    {
        categoryName: 'Category 5',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6']
    },
    {
        categoryName: 'Category 6',
        items: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6']
    },

];

const NavigationMenu = () => {
    return (
        <Card className="rounded-none w-[30%] h-[100vh] flex flex-col items-center">

            <SearchBar className="w-[80%]" />

            <div className="flex flex-col items-center w-full mt-2 overflow-y-auto">

                {someLinkCategories.map((aCategory, index) => (

                    <div
                        key={aCategory.categoryName}
                        className="w-full flex flex-col items-center">

                        <CategoryMenu
                            categoryName={aCategory.categoryName}
                            items={aCategory.items} />

                        {index !== someLinkCategories.length - 1 ?

                            <MenuDivider className="w-[95%] mt-3 mb-3" />

                            : undefined}

                    </div>
                ))}

            </div>


        </Card>
    );
};

export default NavigationMenu;
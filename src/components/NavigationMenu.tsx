import Card from "./Card";
import CategoryMenu from "./CategoryMenu";
import MenuDivider from "./MenuDivider";
import SearchBar from "./SearchBar";
import linkCategories from "~data/links";
import { useContext } from 'react';
import FavoriteLinksContext from "~context/favoriteLinks";


const NavigationMenu = () => {

    const { favoriteLinks } = useContext(FavoriteLinksContext);


    return (
        <Card className="rounded-none w-[30%] h-[100vh] flex flex-col items-center">

            <SearchBar className="w-[80%]" />

            <div className="flex flex-col items-center w-full mt-2 overflow-y-auto">

                {favoriteLinks && favoriteLinks.length > 0 && (
                    <div
                        key={'Favorites'}
                        className="w-full flex flex-col items-center">
                        
                        <CategoryMenu
                            category={{
                                name: 'Favorites',
                                links: favoriteLinks,
                            }} />
                        
                        <MenuDivider className="w-[95%] mt-3 mb-3" />
                    
                    </div>
                )}

                {linkCategories.map((aCategory, index) => (

                    <div
                        key={aCategory.name}
                        className="w-full flex flex-col items-center">

                        <CategoryMenu
                            category={aCategory} />

                        {index !== linkCategories.length - 1 ?

                            <MenuDivider className="w-[95%] mt-3 mb-3" />

                            : undefined}

                    </div>
                ))}

            </div>


        </Card>
    );
};

export default NavigationMenu;
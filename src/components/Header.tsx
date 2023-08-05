import "./../style.css";
import BrandIcon from "data-base64:~assets/icons/general/brand.svg";
import BurgerButton from "./BurgerButton";
import { showNavigationMenu } from "./NavigationMenu";


const Header = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center pl-3 pr-3 pt-3">

            <BurgerButton
                onClick={showNavigationMenu}
                className="md:hidden" />

            <div className="w-full flex flex-row justify-center items-center">
                <img src={BrandIcon} className="h-10" />
            </div>


        </div>
    );
};

export default Header;
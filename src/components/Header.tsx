import "./../style.css";
import LogoIcon from "data-base64:~assets/icons/general/logo.svg";
import BurgerButton from "./BurgerButton";
import { showNavigationMenu } from "./NavigationMenu";


const Header = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center pl-3 pr-3 pt-3">

            <BurgerButton
                onClick={showNavigationMenu}
                className="md:hidden" />

            <div className="w-full flex flex-row justify-center items-center">
                <img src={LogoIcon} className="h-10" />

                <h1 className="text-header-color font-bold text-4xl">Dev Links</h1>
            </div>


        </div>
    );
};

export default Header;
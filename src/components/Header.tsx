import "./../style.css";
import LogoIcon from "data-base64:~assets/icon.png";


const Header = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center pt-3">
            
            <img src={LogoIcon} className="h-10" />

            <h1 className="text-header-color font-bold text-4xl">Dev Links</h1>
        
        </div>
    );
};

export default Header;
import Button from "~components/Button";
import OpenIcon from "data-base64:~assets/open.svg";
import LogoIcon from "data-base64:~assets/logo.svg";
import "./style.css";


function IndexPopup() {

    return (
        <div className="w-56 h-56 flex flex-col items-center justify-center bg-app-background">

            <div className="flex flex-col w-full items-center">

                <div className="flex flex-row items-center justify-center">

                    <img
                        src={LogoIcon}
                        className="w-8" />

                    <h1 className="text-header-color font-bold text-3xl">Dev Links</h1>

                </div>

                <span className="text-header-color text-[0.75rem] mt-1">
                    All links a developer would need
                </span>

            </div>

            <Button
                onClick={() => {
                    window.open('./tabs/browse-links.html');
                }}
                className="mt-10">

                <span className="font-bold text-base">
                    Browse Links!
                </span>

                <img
                    src={OpenIcon}
                    className="w-5 ml-1" />
            </Button>
        </div>
    );
}

export default IndexPopup;

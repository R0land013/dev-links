import NavigationMenu from "~components/NavigationMenu";
import Header from "./../components/Header";
import "./../style.css";
import LinkCard from "~components/LinkCard";


const BrowseLinks = () => {
    return (
        <div className="w-full flex flex-row flex-grow h-[100vh] items-start">
            
            <NavigationMenu/>

            <div className="flex flex-col w-full h-[100vh] overflow-y-auto">
                <Header/>

                <LinkCard/>
            </div>
            
        </div>
    );
};

export default BrowseLinks;
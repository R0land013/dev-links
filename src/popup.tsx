import { useEffect } from "react";


function IndexPopup() {

    useEffect(() => {
        window.open('./tabs/browse-links.html');
    });

    return (<></>);
}

export default IndexPopup;

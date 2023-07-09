import "./style.css";

function IndexPopup() {

    return (
        <div className="w-64 h-64">
            <h1 className="text-indigo-700">
                Dev Links
            </h1>
            <button
                className="bg-indigo-400 rounded-sm text-white"
                onClick={() => {
                    chrome.tabs.create({
                        url: './tabs/browse-links.html'
                    });
                }}>
                Browse Links!
            </button>
        </div>
    );
}

export default IndexPopup;

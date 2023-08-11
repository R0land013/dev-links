

const WelcomeInfo = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">

            <h1 className="text-4xl font-bold">
                Welcome to Dev Links!
            </h1>

            <div className="mt-8 flex flex-col justify-center items-center">

                <ul>
                    <li className="mb-2">
                        🔗 Browse useful links for developers and designers
                    </li>

                    <li className="mb-2">
                        ⭐ Select your favorite links for a rapid access
                    </li>

                    <li>
                        🚀 Stay focus
                    </li>
                </ul>

                <div className="text-base text-header-color mt-16 flex flex-col justify-center items-center">
                    <span>
                        You can add more links and make suggestions <a href="https://github.com/R0land013/dev-links">here</a>
                    </span>

                    <span className="mt-2">
                        Made with 💜 by <a href="https://r0land013.github.io/">Rolando Rio Garaboa</a>
                    </span>
                    
                    <span className="mt-8">
                        <a href="https://www.buymeacoffee.com/rolandorio">Buy me a coffee ☕</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeInfo;
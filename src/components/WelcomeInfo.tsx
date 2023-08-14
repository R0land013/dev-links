
interface WelcomeInfoProps {
    className?: string;
}

const WelcomeInfo = (props: WelcomeInfoProps) => {
    return (
        <div className={`w-full h-full flex flex-col justify-center items-center ${props.className}`}>

            <h1 className="text-4xl font-bold">
                Welcome to Dev Links!
            </h1>

            <span className="text-base text-header-color mt-1">
                All links a developer would need
            </span>

            <div className="mt-10 flex flex-col justify-center items-center">

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

                <div className="text-base text-header-color mt-10 flex flex-col justify-center items-center">
                    <span>
                        You can add more links and make suggestions <a href="https://github.com/R0land013/dev-links">here</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeInfo;
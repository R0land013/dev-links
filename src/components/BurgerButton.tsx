import BurgerIcon from "data-base64:~assets/icons/general/burger.svg";


interface BurgerButtonProps {
    onClick?: () => void;
    className?: string;
}


const BurgerButton = (props: BurgerButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={props.className}>

            <img
                src={BurgerIcon}
                className="h-8" />
        </button>
    );
};

export default BurgerButton;
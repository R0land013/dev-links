
interface ButtonProps {
    children: Array<React.JSX.Element | string> | React.JSX.Element | string;
    onClick?: () => void;
    className?: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={(event) => {
                event.stopPropagation();
                props.onClick();
            }}
            className={`bg-action-color text-white rounded-xl flex items-center justify-center font-bold hover:bg-hover-action-color ${props.className}`}>
            {props.children}
        </button>
    );
};

export default Button;
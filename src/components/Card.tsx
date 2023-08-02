

interface CardProps {
    id?: string
    className?: string;
    children: Array<React.JSX.Element> | React.JSX.Element;
}

const Card = (props: CardProps) => {
    return (
        <div
            id={props.id}
            className={`bg-white rounded-3xl drop-shadow-[4px_4px_4px_rgba(0,0,0,.2)] p-4 ${props.className ?? ''}`}>

            {props.children}

        </div>
    );
};

export default Card;
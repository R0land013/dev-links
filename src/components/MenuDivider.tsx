
interface MenuDividerProps {
    className?: string;
}

const MenuDivider = (props: MenuDividerProps) => {
    return (
        <div className={`h-[1px] bg-divider-color ${props.className}`}/>
    );
};

export default MenuDivider;
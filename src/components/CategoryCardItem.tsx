import type { Link } from '~data/links';


interface CardCategoryItemProps {
    onClick: () => void;
    link: Link
}

const CategoryCardItem = (props: CardCategoryItemProps) => {

    return (
        <button
            className='flex flex-row w-full p-2 items-center justify-start rounded-lg hover:bg-focus-color'
            onClick={props.onClick}>

            <img
                src={`https://www.google.com/s2/favicons?domain=${props.link.linkUrl}&sz=64`}
                className='h-8' />

            <div className='flex flex-col w-full justify-start items-start truncate'>

                <h4 className='text-header-color text-base font-semibold ml-2'>
                    {props.link.name}
                </h4>

                <p className='text-header-color text-sm font-thin text-start ml-2'>
                    {props.link.description}
                </p>
            </div>

        </button>
    );
};

export default CategoryCardItem;
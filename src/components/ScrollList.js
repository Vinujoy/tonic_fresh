import React  from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function Arrow({
    children,
    disabled,
    onClick
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none"
            }}
        >
            {children}
        </button>
    );
}

function ScrollList( props ) {
    const {products} = props;
    const [items, setItems] = React.useState(products);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) => ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id)

        setSelected((currentSelected) =>
            itemSelected
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
    }

    return (        
            <ScrollMenu                
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
            >
                {items.map(({ id }) => (
                    <Card
                        itemId={id} // NOTE: itemId is required for track items
                        title={id}
                        key={id}
                        onClick={handleClick(id)}
                        selected={isItemSelected(id)}
                    />)
                )}

            </ScrollMenu>        
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <FaChevronCircleLeft size={30} color={"#007D3C"} />
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)
    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <FaChevronCircleRight size={30} color={"#007D3C"} />
        </Arrow>
    );
}

function Card({
    onClick,
    selected,
    title,
    itemId
}) {
    const visibility = React.useContext(VisibilityContext)

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: "160px",
            }}
            tabIndex={0}
        >
            <div className="card">
                <div>{title}</div>
                <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
            <div
                style={{
                    height: "200px",
                }}
            />
        </div>
    );
}

export default ScrollList;
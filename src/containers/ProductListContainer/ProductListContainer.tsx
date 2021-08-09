import React from 'react';
import ScrollList from '../../components/ScrollList';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import ProductCard from '../../components/ProductCard';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const numberOfPicture = [1, 2, 3, 4, 5, 6];
function ProductListContainer(props: { items: any; }) {
    const { items } = props;
    console.log("items inide list", items);
    // const [items] = React.useState(getItems);
    const [selected, setSelected] = React.useState<string[]>([]);
    // can save and restore position if needed
    const [position, setPosition] = React.useState(100);

    const isItemSelected = (id: string): boolean =>
        !!selected.find((el) => el === id);

    const handleItemClick = (itemId: string) => ({
        getItemById
    }: scrollVisibilityApiType) => {
        const itemSelected = isItemSelected(itemId);

        console.log(getItemById(itemId));

        setSelected((currentSelected: string[]) =>
            itemSelected
                ? currentSelected.filter((el) => el !== itemId)
                : currentSelected.concat(itemId)
        );
    };

    const restorePosition = React.useCallback(
        ({ scrollContainer }: scrollVisibilityApiType) => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollLeft = position;
            }
        },
        [position]
    );

    const savePosition = React.useCallback(
        ({ scrollContainer }: scrollVisibilityApiType) =>
            !!scrollContainer.current &&
            setPosition(scrollContainer.current.scrollLeft),
        []
    );
    return (
        <div>
            {items && items.map((item: { id: React.Key | null | undefined; title: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; products: any[]; }) => (
                <div key={item.id}>
                    <div className="text-left uppercase text-lg text-green-800 border-b-2 border-green-700"> {item.title}</div>
                    {/* {<ScrollList products={item.products} />} */}
                    {
                        // item.products.map((product)=>(
                        //     <div>{product.id} </div>
                        // ))

                        // <ScrollMenu
                        //     arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
                        //     arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
                        //     data={item.products.map((item, index) => (
                        //        <ProductCard key={item.id} detail ={item}/>
                        //     ))}
                        // />
                        <ScrollMenu
                            LeftArrow={LeftArrow}
                            RightArrow={RightArrow}
                        >
                            {item.products.map((item: { id: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }, index: any) => (
                                // <div className="px-10"><ProductCard
                                //     id={item.id}
                                //     image_url={item.base_image.medium_image_url}
                                //     name={item.name}
                                // /></div>
                                <div className="w-80"> {item.id}</div>
                            ))
                            }

                        </ScrollMenu>
                    }
                </div>


            ))}
        </div>
    );
}

export default ProductListContainer;

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

function Arrow({
    children,
    disabled,
    onClick
  }: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
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
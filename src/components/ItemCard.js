import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { GiScooter } from "react-icons/gi";

function ItemCard(props) {
    const { item } = props;
    console.log("inside itemCard", item.id);
    return (
        <div>
            {item && item.base_image && <div className="grid grid-cols-12" >
                <div className="col-span-12 lg:col-span-6 ">
                    <img src={`${item.base_image.large_image_url}`}
                        alt="Just a flower"
                        className=" max-w-full  object-cover h-full w-full  rounded-2xl" />
                </div>
                <div className="col-span-12 lg:col-span-6  grid grid-cols-12">
                    <div className="col-span-12 px-8 font-bold uppercase text-base">
                        {item.name}
                    </div>
                    <div className="col-span-12 px-8 text-sm">
                        {item.description}
                    </div>
                    <div className="col-span-6 text-left px-8 font-semibold">
                        {`${item.formated_price} / ${item.weight}`}
                    </div>
                    <div className="col-span-6 text-right px-8 font-semibold">
                        {` Net Weight :${item.weight} `}
                    </div>
                    <div className="col-span-6 text-left px-8">
                        <div className="inline-flex">
                            <button className="bg-primary hover:bg-green-800 text-white font-bold lg:px-2 lg:py-1  xl:py-2 xl:px-6 rounded-l">
                                -
                            </button>
                            <label className="bg-primary  text-white font-bold py-2 px-6 ">
                                0
                            </label>
                            <button className="bg-primary hover:bg-green-800 text-white font-bold lg:px-2 lg:py-1 xl:py-2 xl:px-6 rounded-r">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col-span-6 text-right px-8">
                        <button className="bg-primary hover:bg-green-800 text-white lg:px-2 lg:py-1 xl:py-2 xl:px-6 mx-4 rounded uppercase">
                            Add to cart
                        </button>
                        <button className=" bg-primary hover:bg-green-800 text-white lg:px-2 lg:py-1 xl:py-2 xl:px-2 rounded " >
                            <FavoriteBorderIcon />
                        </button>
                    </div>
                    <div className="col-span-6 text-left px-8">
                        <div>
                            {`Final Price : Rs.400`}
                        </div>
                        <div>
                            {`Gross Weight : ${item.grossweight}`}
                        </div>
                        <div>
                            {`Final Price : ${item.netweight}`}
                        </div>
                    </div>
                    <div className="col-span-12 text-right px-8">                        
                        <span>TODAY 1PM - 4PM</span>
                    </div>
                </div>

            </div>}
        </div>

    );
}

export default ItemCard;
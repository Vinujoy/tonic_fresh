import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './style.css'

function ItemVariantCard({ item, subItems }) {
    const [variants, setVariants] = useState(subItems);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setVariants(subItems);
    }, [subItems]);

    const handleIndex = (ind) => {
        setIndex(ind);
    }

    return (
        <div className="inline-flex">
            {item && item.base_image && <div className="grid grid-cols-12" >
                <div className="col-span-12 lg:col-span-6 ">
                    <img src={`${variants[index].base_image.large_image_url}`}
                        alt="Just a flower"
                        className=" max-w-full  object-cover h-full w-full  rounded-2xl" />
                </div>
                <div className="col-span-12 lg:col-span-6  grid grid-cols-12">
                    <div className="col-span-12 px-8 font-bold uppercase text-base">
                        {item.name}
                    </div>
                    <div className="col-span-12 px-8 font-bold uppercase text-base">
                        {variants[index].name}
                    </div>
                    <div className="col-span-12 px-8 text-base">
                        <div className="fontDescription" dangerouslySetInnerHTML={{ __html: variants[index].short_description }} />
                    </div>
                    <div className="col-span-12 px-8 text-base">
                        {variants.map((variant, ind) => {
                            const activeClass = index === ind ? "bg-primary hover:bg-green-800 text-white " : "bg-green-100 hover:bg-green-100"
                                return(
                                    <button onClick={() => handleIndex(ind)} className={`${activeClass} font-bold lg:px-2 lg:py-1  xl:py-2 xl:px-6 rounded-l`}>
                                        {variant.name}
                                    </button>
                                )
                        })}
                    </div>
                    <div className="col-span-6 text-left px-8 font-semibold">
                        {`${variants[index].formated_price} / ${variants[index].weight}`}
                    </div>
                    <div className="col-span-6 text-right px-8 font-semibold">
                        {` Net Weight :${variants[index].weight} `}
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

            {/* {variants.map((variant, ind) => (
                <button onClick={() => handleIndex(ind)}className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    {variant.id}
                </button>
            ))}
            <div>{variants[index].id}</div> */}
        </div>
    );
}

export default ItemVariantCard;
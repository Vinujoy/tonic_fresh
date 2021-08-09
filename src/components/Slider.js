import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css"
import SingleCarousel from './SingleCarousel';
import { Paper, Button } from '@material-ui/core'

function Slider({ items }) {

    console.log("slider items", items);

    return (
        <Carousel autoPlay showStatus={false} showArrows={true}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item({ item }) {
    return (
        <div>
            <img alt="h-10" src={item.image_url} />
            <div className="legend  mb-20 ">
                <h1 className="text-5xl uppercase text-white font-bold">{item.title}</h1>
                <p className="text-2xl pt-10  text-center">
                    What is lorem ipsum lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
            </div>

        </div>
    )
}
export default Slider;
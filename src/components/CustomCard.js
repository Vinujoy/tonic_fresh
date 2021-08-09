import React from 'react';

function CustomCard(props) {
    const{title,description} = props;
    return (
        <div className="">
            <h2 class="text-gray-500 text-base font-bold uppercase text-center">{title}</h2>
            <p class="mt-2 text-gray-500 text-sm text-center">{description}</p>
        </div>
    );
}

export default CustomCard;
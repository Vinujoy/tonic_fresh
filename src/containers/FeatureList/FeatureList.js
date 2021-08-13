import React from 'react';
import ViewCard from '../../components/ViewCard';
import { Link } from 'react-router-dom';

function FeatureList(props) {
    const { items } = props;
    console.log("inside feature list ", items);
    return (
        <div>
            {items.map((item) => (


                <div key={item.title} >
                    <div className="text-left uppercase text-lg text-green-600 pt-8 pb-6"> {item.title}</div>
                    <div className="grid grid-cols-4 gap-2 ">
                        {item.products.map((product) => (
                            <div key={product.id} className="col-span-2 mx-auto md:col-span-1 ">
                                <Link to={{
                                    pathname: `/product-detail/${product.id}`, aboutProps: {
                                        id: product.id
                                    }
                                }}> <ViewCard product={product} /></Link>

                            </div>

                        ))}
                    </div>

                </div>


            ))}
        </div>
    );
}

export default FeatureList;
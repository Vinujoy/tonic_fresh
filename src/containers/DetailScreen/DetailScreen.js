import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../redux'
import ItemCard from '../../components/ItemCard';
import ItemVariantCard from '../../components/ItemVariantCard';


function DetailScreen({ match }) {
    const { id } = match.params
    console.log("inside detail screen", id);

    const fetched = useSelector(state => state.productGetById.fetched);
    console.log("fetched", fetched);
    const product = useSelector(state => state.productGetById.product);
    console.log("lenght of product", product.variants);
    const dispatch = useDispatch();
    const [item, setItem] = useState({});
    const [productId, setproductId] = useState();


    useEffect(() => {
        // setproductId(id);
        console.log("inside useeffect");
        dispatch(productActions.productGetById(id));
        console.log("id iniside deatail screen", id);
        setItem(product);
        console.log("product lenght",);

        console.log("data in items ", item);
    }, [id])
    return (

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0 md:py-6">
            {fetched && product && (product.variants.length > 0) ?
                <ItemVariantCard item={product} subItems={product.variants} /> : <ItemCard item={product} />
            }
            {/* {fetched && (product.variants === undefined || product.variants.length == 0) ?
                (<ItemCard item={product} />)
                :
                (<ItemCard item={product} />)
            } */}
        </div>
    );
}

export default DetailScreen;
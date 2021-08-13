import { productConstants } from "./productTypes";
import { productService } from "../../services/product.service";
import { alertActions } from '../alert/alertActions';



export const productActions = {
    productGetById,
    // logout,
    // register,
    // getAll,
    // delete: _delete
};

function productGetById(id) {
    return dispatch => {
        dispatch(request({ id }));

        productService.productGetById(id)
            .then(
                product => {
                    console.log("inside action",product);
                    dispatch(success(product));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(product) { return { type: productConstants.PRODUCT_REQUEST, product } }
    function success(product) { return { type: productConstants.PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.PRODUCT_FAILURE, error } }
}
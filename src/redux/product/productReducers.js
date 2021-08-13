import { productConstants } from "./productTypes";

const initialState = { fetched: false, product: {} }

export function productGetById(state = initialState, action) {
    switch (action.type) {
        case productConstants.PRODUCT_REQUEST:
            return {
                fetching: true,
                product: action.product
            };
        case productConstants.PRODUCT_SUCCESS:
            return {
                fetched: true,
                product: action.product
            };
        case productConstants.PRODUCT_FAILURE:
            return {};
        default:
            return state
    }
}
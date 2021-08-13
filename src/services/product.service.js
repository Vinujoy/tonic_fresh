import axios from 'axios'
import {baseUrl} from '../config/api.utils'
export const productService = {
    productGetById,
    // logout,
    // register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

var config = {
    headers: {
        'x-api-token': 'b8Z5x8Mnrs5ypROMs6xD',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

function productGetById(id) {
    return axios
        .get(`${baseUrl}/public/api/products/${id}`, config)
        .then(product => {
            console.log("data", product.data.data);            
            return product.data.data;
        });  
}
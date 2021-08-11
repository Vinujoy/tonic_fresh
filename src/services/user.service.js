
import axios from 'axios'
export const userService = {
    login,
    logout,
    register,
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

function login(phone_number) {
    return axios
        .get(`http://18.118.68.45/public/api/customer-exist?phone=${phone_number}&token=true`, config)
        .then(user => {
            console.log("user data", user);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });

    // return fetch(`http://18.118.68.45/public/api/customer-exist?phone=${phone_number}&token=true`)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //         return user;
    //     });
}

// export const fetchHome = () => {
//     return (dispatch) => {
//         dispatch(fetchHomeRequest())
//         axios
//             .get("http://18.118.68.45/public/api/home-screen", config)
//             .then(response => {
//                 // response.data is the Home
//                 const homeData = response.data
//                 console.log("homedata", homeData);
//                 dispatch(fetchHomeSuccess(homeData))
//             })
//             .catch(error => {
//                 // error.message is the error message
//                 dispatch(fetchHomeFailure(error.message))
//             })
//     }
// }

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    console.log("user deatils", user);
    var postConfig = {
        headers: {
            'x-api-token': 'b8Z5x8Mnrs5ypROMs6xD',
            'Content-Type': 'multipart/form-data'
        },
        data: user
    };

    console.log("data ", postConfig);
    // return axios
    //     .post(`http://18.118.68.45/public/api/customer-register`, postConfig)
    //     .then(user => {
    //         console.log("user data", user);
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes        
    //         return user;
    //     });
    const formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    return axios({
        method: "post",
        url: "http://18.118.68.45/public/api/customer-register",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" ,'x-api-token': 'b8Z5x8Mnrs5ypROMs6xD',},
      })
        .then(function (response) {
          //handle success          
          console.log(response);
          return user;
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
}
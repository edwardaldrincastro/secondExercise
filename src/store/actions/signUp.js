import { ADD_USER } from "../actions/actionTypes";

export const addUser = (firstName, lastName, email) => {
    
    alert("gumana store")
    return {
        type: ADD_USER,
        firstName: firstName,
        lastName: lastName,
        email: email,
        // birthday: birthday,
        // password: password

    };
};


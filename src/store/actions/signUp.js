import { ADD_USER } from "../actions/actionTypes";

export const addUser = (lastName, firstName, email) => {
    
    
    return {
        type: ADD_USER,
        lastName: lastName,
        firstName: firstName,
        email: email,
        birthday: birthday,
        password: password

    };
    
};


export const myAction = (lastName, firstName, email) => {
    
    
    return {
        type: ADD_USER,
        lastName: lastName,
        firstName: firstName,
        email: email,
        // birthday: birthday,
        // password: password

    };
    
};


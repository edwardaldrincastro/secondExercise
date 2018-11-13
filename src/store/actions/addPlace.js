import { ADD_PLACE } from "../actions/actionTypes";

export const addPlace = (placeName, image, latitude, longitude) => {
    console.log(`Action latitude: ${latitude}`)
    return {
        type: ADD_PLACE,
        placeName: placeName,
        image: image,
        location: {
            latitude: latitude,
            longitude: longitude
        },

    };
};


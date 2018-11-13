import { ADD_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:

        console.log(`action placename: ${action.placeName}`)
            console.log(`action image: ${action.image}`)
            return {
                ...state,
                places: state.places.concat({
                    placeName: action.placeName,
                    image: {
                        uri: action.image.uri
                    },
                    location: {
                        latitude: action.location.latitude,
                        longitude: action.location.longitude
                    }
                })
            }
        default:
            return state;
    }
}

export default reducer;
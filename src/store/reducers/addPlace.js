import { SET_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    console.log(`addplaces reducers pumasok`)
    console.log(`places reducers: ${action.places}`)
    switch (action.type) {
        case SET_PLACE: 
        return {
            ...state,
            places: action.places
        }
        default:
            return state;
    }
}

export default reducer;
import { SET_PLACE } from "../actions/actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

export const addPlace = (placeName, image, latitude, longitude) => {
    return dispatch => {
        dispatch(uiStartLoading())
        console.log(`Action start placeName: ${placeName}`)
        console.log(`Action start longitude: ${longitude}`)
        console.log(`Action start latitude: ${latitude}`)
        fetch("https://us-central1-modifiedting-1541990454966.cloudfunctions.net/storeImage",
            {
                method: "POST",
                body: JSON.stringify({
                    image: image
                })
            })
            .catch(err => {
                console.log(err)
                alert("Something went wrong in uploading the image")
                dispatch(uiStopLoading())
            })
            .then(res =>
                res.json()
            )
            .then(parsedRes => {
                console.log(parsedRes)
                const placeData = {
                    placeName: placeName,
                    image: parsedRes.imageUrl,
                    location: {
                        latitude: latitude,
                        longitude: longitude
                    }
                }
                return fetch("https://modifiedting-1541990454966.firebaseio.com/places.json",
                    {
                        method: "POST",
                        body: JSON.stringify(placeData)
                    })
            })
            .catch(err => {
                console.log(err)
                alert("Something went wrong in sending the data")
                dispatch(uiStopLoading())
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes)
                dispatch(uiStopLoading())
                dispatch(getPlaces())
            })
    };
};

export const getPlaces = () => {
    console.log("pumasok sa getPlaces")
    return dispatch => {
        fetch("https://modifiedting-1541990454966.firebaseio.com/places.json")
        .catch(err => {
            console.log(err)
            alert("Something went wrong in getting the data")
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("pumasok sa parsedRes")
            console.log(parsedRes)
            const places = []
            for (let key in parsedRes){
                places.push({
                    ...parsedRes[key],
                    id: key
                })
            }
            
            console.log("after ng forloop")
            dispatch(setPlaces(places))
            
            console.log("done sa dispatch")
        })
    }
}

export const setPlaces = places => {
    console.log("pumasok sa setPlaces")
    console.log(`setPlaces: ${places}`)
    return {
        type: SET_PLACE,
        places: places,
    }
}
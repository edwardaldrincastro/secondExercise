import { ADD_PLACE } from "../actions/actionTypes";

export const addPlace = (placeName, image, latitude, longitude) => {

    return dispatch => {
        // const placeData = {
        //         test: "test",
        //         // image: parsedRes.image,
        //         location: {
        //             latitude: latitude,
        //             longitude: longitude
        //         }
        //     }
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
            .catch(err => console.log(err))
            .then(res =>
                res.json()
                // console.log(res.json())
            )
            .then(parsedRes => {

                // console.log("pumasok sa parsedRes")
                console.log(parsedRes)
                const placeData = {
                    placeName: placeName,
                    image: parsedRes.imageUrl,
                    location: {
                        latitude: latitude,
                        longitude: longitude
                    }
                }
                return fetch("https://modifiedting-1541990454966.firebaseio.com/test.json",
                    {
                        method: "POST",
                        body: JSON.stringify(placeData)
                    })    
            })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes)
            })
        // const placeData = {
        //     test: "test",
        // image: parsedRes.image,
        // location: {
        //     latitude: latitude,
        //     longitude: longitude
        // }
        // }
        // console.log(`Action nest longitude: ${longitude}`)
        // console.log(`Action nest latitude: ${latitude}`)
        //     return 

        // fetch("https://modifiedting-1541990454966.firebaseio.com/test.json",
        //         {
        //             method: "POST",
        //             body: JSON.stringify(placeData)
        //         })
        // .catch(err => console.log(err))
        // .then(res => res.json())
        // .then(parsedRes => {
        //     console.log(parsedRes)
        // })
    };
};


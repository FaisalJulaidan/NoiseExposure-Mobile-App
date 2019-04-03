


getLocation = ()  => {
    return navigator.geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
            // console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHH");
            // console.log(position)

            return {
                lat: position.coords.latitude,
                long: position.coords.longitude
            }
        },

    );
};


export const location = {
    getLocation,
};
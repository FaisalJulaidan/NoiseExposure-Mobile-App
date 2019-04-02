import {asyncStorage, EMAIL_KEY, http, LOGIN_REFRESH_KEY, LOGIN_TOKEN_KEY} from '.'
import {queryAllNonSyncedNoise, setAllSyncedItemsAsSynced} from "../database/schemas";


// Syncing with axios
// https://www.npmjs.com/package/react-native-axios

export function getNoiseData() {
    http.get('/noise')
        .then(function (response) {
            console.log(response);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function validateUserDetails(email, password) {//Function that posts to the database
    return http.post('/auth', { //route to the posting to the server
        email: email, //created email object that will use the password that's will be passed through to the server
        password: password //created password object that will use the password that's passed through to the server
    }).then(response => { //response will return with a status code or a key
        console.log(response);

        asyncStorage.storeData(LOGIN_TOKEN_KEY, response.data.data.token).then((value) => { //sending the token (LOGIN_TOKEN_KEY) to the async storage
            console.log(LOGIN_TOKEN_KEY + " " + value + " : Key Stored"); //log the token on success
        }).catch(err => console.log('There was an error:' + err)); //error handle if the response is 401.

        asyncStorage.storeData(LOGIN_REFRESH_KEY, response.data.data.refresh).then((value) => {  //refresh token
            console.log(LOGIN_REFRESH_KEY + " " + value + " : Key Stored");
        }).catch(err => console.log('There was an error:' + err));

        asyncStorage.storeData(EMAIL_KEY, response.data.data.user.email).then((value) => {  //logged in email
            console.log(EMAIL_KEY + " " + value + " : Key Stored");
        }).catch(err => console.log('There was an error:' + err));

        return Promise.resolve(response) //returning the response

    }).catch( error =>  {//error handling if the post rejects
        console.log(error);
        return Promise.reject(error)
    });
}

export function createAccountToServer(email, password){
    return http.post('/signup', {
        email: email,
        password: password
    }).then( response => {
        console.log(response);
        return Promise.resolve(response)
    }).catch( error => {
        console.log(error);
        return Promise.reject(error)
    })
}


export function sendNoiseDataToServer() {
//getting the login token key from the async storage
    asyncStorage.retrieveData(LOGIN_TOKEN_KEY).then((token) => {
        console.log("Returned token: " + token);
        //sets the Login token in the request header
        http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        // Query database for all non synced data
        queryAllNonSyncedNoise().then((noiseList) => {
            console.log('posting ');
            // Post the returned noiseList to the server
            http.post('/upload', {
                noiseList
            }).then(function (response) {
                console.log(response);

                // If all data has been synced then set all items as Synced in database
                setAllSyncedItemsAsSynced(noiseList);

                return response
            }).catch(error => {
                console.log(error);
                //if the error status is 401
                if (error.response.status === 401) {
                    //get the LoginRefresh token
                    asyncStorage.retrieveData(LOGIN_REFRESH_KEY).then((refreshToken) => {
                        //set the refresh token in the request header
                        http.defaults.headers.common['Authorization'] = 'Bearer ' + refreshToken;
                        http.post('/auth/refresh').then(function (response) { //post the refresh token in the server
                            console.log(response);
                            //sending the login token again for it to get used
                            asyncStorage.storeData(LOGIN_TOKEN_KEY, response.data.data.token).then((value) => { //sending the token (LOGIN_TOKEN_KEY) to the async storage
                                console.log(LOGIN_TOKEN_KEY + " " + value + " : Key Stored"); //log the token on success

                            }).catch(err => console.log('There was an error:' + err)); //error handle if the response is 401 even with the new LOGIN_TOKEN.
                            //when the new login token actually exist, we set it again in request header like at the top of the method, as it's a new token.
                            http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.data.token;
                            error.config.baseURL="";
                            http.request(error.config); //we post the new token to upload with the noiseList (Same as line 54)
                            return response
                        }).catch(function (error) { //error handling
                            console.log(error);

                            return error
                        });

                    }).catch(error => { //error handling
                        console.log("error in reloading noise history list", error);
                    });
                } else { //if it's not a 401
                    console.log("Not 401 Error");
                }

                return error
            });

        }).catch(error => {
            console.log("error in reloading noise history list", error);
        });


    }).catch(error => {
        console.log("Error getting Key" + error);

    });
}


// http.get('/noise')
//     .then(function (response) {
//         return response.data
//     })
//     .catch(function (error) {
//         console.log(error);
//         return error.statusText
//     });
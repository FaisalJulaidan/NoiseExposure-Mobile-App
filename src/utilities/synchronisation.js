import {asyncStorage, http, LOGIN_REFRESH_KEY, LOGIN_TOKEN_KEY} from '.'
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

        asyncStorage.storeData(LOGIN_REFRESH_KEY, response.data.data.refresh).then((value) => {
            console.log(LOGIN_REFRESH_KEY + " " + value + " : Key Stored");
        }).catch(err => console.log('There was an error:' + err));

        return Promise.resolve(response) //returning the response

    }).catch( error =>  {//error handling if the post rejects
        console.log(error);
        return Promise.reject(error)
    });
}


export function sendNoiseDataToServer() {

    asyncStorage.retrieveData(LOGIN_TOKEN_KEY).then((token) => {
        console.log("Returned token: " + token);

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
                if (error.response.status === 401) {

                    asyncStorage.retrieveData(LOGIN_REFRESH_KEY).then((refreshToken) => {

                        http.defaults.headers.common['Authorization'] = 'Bearer ' + refreshToken;

                        http.post('/auth/refresh').then(function (response) {
                            console.log(response);

                            asyncStorage.storeData(LOGIN_TOKEN_KEY, response.data.data.token).then((value) => { //sending the token (LOGIN_TOKEN_KEY) to the async storage
                                console.log(LOGIN_TOKEN_KEY + " " + value + " : Key Stored"); //log the token on success
                            }).catch(err => console.log('There was an error:' + err)); //error handle if the response is 401.

                            http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.data.token;


                            error.config.baseURL="";
                            http.request(error.config);

                            return response
                        }).catch(function (error) {
                            console.log(error);

                            return error
                        });

                    }).catch(error => {
                        console.log("error in reloading noise history list", error);
                    });
                } else {
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
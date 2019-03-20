import {http} from '.'
import {queryAllNonSyncedNoise, setAllSyncedItemsAsSynced} from "../database/schemas";

import axios from 'react-native-axios';



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

export function validateUserDetails(email, password) { //Function that posts to the database
    return axios.post('http://10.164.79.83:5000/api/auth', { //route to the posting to the server
        email: email, //created email object that will use the password that's will be passed through to the server
        password: password //created password object that will use the password that's passed through to the server
    }).then(response => { //response will return with a status code or a key
        console.log(response);
        return Promise.resolve(response) //returning the response

    }).catch( error =>  {//error handling if the post rejects
        console.log(error);
        return Promise.reject(error)
    });
}


export function sendNoiseDataToServer() {
    console.log('method called ');
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
        }).catch(function (error) {
            console.log(error);
            return error
        });

    }).catch(error => {
        console.log("error in reloading noise history list", error);
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
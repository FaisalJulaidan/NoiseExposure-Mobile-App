import {http} from '.'
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


export function sendNoiseDataToServer() {
    // Query database for all non synced data
    queryAllNonSyncedNoise().then((noiseList) => {
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
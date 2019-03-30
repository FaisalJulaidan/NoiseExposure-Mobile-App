import {AsyncStorage} from 'react-native';

export const MAP_THEME_KEY = 'Map-Theme';
export const LOGIN_TOKEN_KEY = 'Login-Token';
export const LOGIN_REFRESH_KEY = 'Login-Refresh';

// request to Store data in local storage
const storeData = async (key, value) => {
    console.log("Set: ", key, value);
    try {
        await AsyncStorage.setItem(key, value);
        return Promise.resolve(value)
    } catch (error) {
        // Error saving data
        console.log("key set error : " + error);
        return Promise.reject(error)
    }
};

// request to get data from local storage then return its value
const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log("value from async storage " + value);
            return Promise.resolve(value)
        } else {
            console.log("key get error value is blank : " + error);
            return Promise.reject(error)
        }
    } catch (error) {
        // Error retrieving data
        console.log("key set error : " + error);
        return Promise.reject(error)
    }
};

export const asyncStorage = {
    storeData,
    retrieveData
};
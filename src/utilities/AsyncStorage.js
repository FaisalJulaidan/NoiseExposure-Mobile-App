import {AsyncStorage} from 'react-native';

export const MAP_THEME_KEY = 'Map-Theme';

// request to Store data in local storage
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return value
    } catch (error) {
        // Error saving data
        console.log("key ser error : " + error);
        return error
    }
};

// request to get data from local storage then return its value
export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log("value from async storage " + value);
            return value;
        } else {
            console.log("Key is Empty")
        }
    } catch (error) {
        // Error retrieving data
        console.log(error)
    }
};
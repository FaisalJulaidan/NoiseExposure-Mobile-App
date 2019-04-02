import Realm from 'realm';
import shortid from 'shortid';
import { ToastAndroid } from 'react-native';

// define models and their properties
export const NOISE_SCHEMA = 'Noise';
export const NoiseSchema = {
    name: NOISE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string', // primary key
        level: 'double',
        locationName: 'string',
        timestamp: 'date',
        longitude: 'double',
        latitude: 'double',
        type: 'string?',
        details: 'string?',
        deviceModel: 'string',
        severity: 'string',
        isPublic: 'bool',
        isSynced: 'bool'
    }
};

const databaseOptions = {
    path: 'noiseExposureApp.realm',
    schema: [NoiseSchema],
    schemaVersion: 1, // optional
};

export const insertNoise = newNoise => new Promise((resolve, reject) => {
    newNoise.id = shortid.generate(); // generate a unique id of type string
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(NOISE_SCHEMA, newNoise);
        });
        resolve(newNoise)
    }).catch(error => reject(error))
});

export const updateTypeAndDetails = (idNoise, type, description) => new Promise ((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(NOISE_SCHEMA, {id: idNoise, type: type, details: description}, true)
            resolve(idNoise, type, description)
            ToastAndroid.show('Successfully Updated!', ToastAndroid.SHORT);
        })
    }).catch(error => reject(error, ToastAndroid.show('Nothing Updated!', ToastAndroid.SHORT)))
});

export const queryAllNoise = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        // return all noise data sorted by timestamp
        let allNoiseList = realm.objects(NOISE_SCHEMA)
            .sorted('timestamp', true);
        resolve(allNoiseList)
    }).catch(error => reject(error))
});

export const queryAllNonSyncedNoise = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        // return all Non synced (isSync = false) noise data sorted by timestamp
        let allNoiseList = realm.objects(NOISE_SCHEMA).filtered('isSynced = False')
            .sorted('timestamp', true);
        resolve(allNoiseList)
    }).catch(error => reject(error))
});

export const  setAllSyncedItemsAsSynced = (syncedRows) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            for (let j = 0; j < syncedRows.length; j++){
                // Update item to say its synced
                realm.create(NOISE_SCHEMA, {id: syncedRows[j].id, isSynced: true}, true);
            }
        });
    }).catch(error => reject(error))
});

export const retriveDataForAdditionalDetails = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let sortedNoiseList = realm.objects(NOISE_SCHEMA).filtered('details = ""').sorted('timestamp', true)
        resolve(sortedNoiseList[0])
        ToastAndroid.show('Successfully Retrieved!', ToastAndroid.SHORT)
    }).catch(error => reject(error, ToastAndroid.show('Nothing Retrieved!', ToastAndroid.SHORT)))
});

export default new Realm(databaseOptions);
import Realm from 'realm';
import shortid from 'shortid'

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
        deviceModel: 'string',
        isPublic: 'bool',
        isSynced: 'bool'
    }
};

const databaseOptions = {
    path: 'noiseExposureApp.realm',
    schema: [NoiseSchema],
    schemaVersion: 0, // optional
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

export const queryAllNoise = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allNoiseList = realm.objects(NOISE_SCHEMA);
        resolve(allNoiseList)
    }).catch(error => reject(error))
});


export default new Realm(databaseOptions);
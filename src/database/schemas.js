import Realm from 'realm';

// define models and their properties
export const NOISE_SCHEMA = 'Noise';
export const NoiseSchema = {
    name: NOISE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int', // primary key
        level: 'double',
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



export default new Realm(databaseOptions);
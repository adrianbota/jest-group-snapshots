module.exports = {
    snapshotSerializers: [
        './serializer'
    ],
    transform: {
        '.*\\.js$': 'babel-jest'
    }
};

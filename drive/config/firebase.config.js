const Firebase = require('firebase-admin');
const serviceAccount = require('../rock-bonus-443305-t6-firebase-adminsdk-5l8cm-3f70b4fa0c.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'rock-bonus-443305-t6.firebasestorage.app'
})

module.exports = Firebase;
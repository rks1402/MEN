const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config')
const serviceAccount = require('../rock-bonus-443305-t6-firebase-adminsdk-5l8cm-3f70b4fa0c.json')

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'rock-bonus-443305-t6.firebasestorage.app',
    unique: true,
})

const upload = multer({
    storage: storage,
})


module.exports = upload;
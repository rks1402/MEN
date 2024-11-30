const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth')
const upload = require('../config/multer.config')
const fileModel = require('../models/files.model');
const firebase = require('../config/firebase.config')

router.get('/home', authMiddleware, async (req,res) => {

    const userFiles = await fileModel.find({
        user: req.user.userId
    })

    console.log(userFiles)

    res.render('home', {
        files: userFiles
    });
})

router.post('/upload', authMiddleware, upload.single('file'),async (req,res) => {
    const newFile = await fileModel.create({
        path: req.file.path,
        originalname: req.file.originalname,
        user: req.user.userId
    })

    res.json(newFile)
})

router.get('/download/:path', authMiddleware, async (req,res) => {

    const loggedInUserId = req.user.userId;
    const path = req.params.path;

    const file = await fileModel.findOne({
        user: loggedInUserId,
        path: path,
    })

    if(!file){
        return res.status(401).json({
            message: "File not found"
        })
    }

    const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
        action: 'read',
        expires: Date.now() + 60*1000
    })

    res.redirect(signedUrl[0])

})


module.exports = router;
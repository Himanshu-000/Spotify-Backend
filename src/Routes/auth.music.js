const express = require("express");
const musiccrater = require("../controller/music.controller")
const authmiddleware = require("../middleweares/auth.middlewears")
const multer = require("multer")

const upload = multer(({
    storage :  multer.memoryStorage()
}))



const router = express.Router();



router.post("/upload",authmiddleware.authArtist ,upload.single("music"),musiccrater.createMusic);

router.post("/album",authmiddleware.authArtist,musiccrater.createAlbum);

router.get("/" ,authmiddleware.authUser,musiccrater.getAllmusic );
router.get("/album" ,authmiddleware.authUser,musiccrater.getallAlbum );
router.get("/musics" ,authmiddleware.authUser,musiccrater.getAllmusic );


module.exports = router;  
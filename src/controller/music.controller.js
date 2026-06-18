const MusicModel = require("../models/user.music");
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken");
const MusichControler = require("../models/user.music")
const {UploadFile} = require("../services/stroage")

async function createMusic(req, res) {
  
        const { title } = req.body ;
    const file = req.file;
  
    const result = await UploadFile(
            file.buffer.toString("base64")
        );
    
   const music = await MusicModel.create({
            title: req.body.title,
            uri: result.url,
            artist: req.user.id
        });

         return res.status(201).json({
            message: "Success",
            music
        });


}

async function createAlbum(req , res) {
     
      let { title, musics } = req.body;

            if (typeof musics === "string") {
            musics = JSON.parse(musics);
        }

               const cleanMusics = musics.map(id => id.trim());

                console.log(cleanMusics);

                const album = await albumModel.create({ 
                 title,
               artists: req.user.id,
                musics: cleanMusics
              });

            res.status(201).json({
                message : "Album Created Successfully",

                album : {
                     id: album.id,
                     title : album.title,
                     artist :  album.artists,
                     music :  album.musics,
           }
          })


}

async function getAllmusic(req , res) {

    const music = await MusicModel.find().limit(10)

    res.status(201).json({
        message : "Music fetch Successfully",
        music : music,

    })
    
}

async function getallAlbum(req ,res) {

    const album = await albumModel.find()
    .limit(10)
    .select("title artists")
    .populate("artists" , "username email");

    res.status(200).json({
        message : "Album fetch successfully",
        albums : album
    })
    
}
 
async function getallMusic(params) {

    const musics = await albumModel.find().select("musics").populate("artists" , "musics");

    res.status(200).json({
        message : "music feached successfully",
        musics : musics
    })
    
}


module.exports = {createMusic , createAlbum , getAllmusic , getallAlbum , getAllmusic};

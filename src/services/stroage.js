const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});



async function UploadFile(file) {
  const result = await imagekit.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "/complete-backend-music",
  });



  return result;
}

module.exports = { UploadFile };
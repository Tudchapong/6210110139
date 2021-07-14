const { createAudio } = require('node-mp3-player')
const Audio = createAudio();
 
(async () => {
  const myFile = await Audio(`${__dirname}/mp3/foo.mp3`)
  await myFile.volume(0.5)
  const currentVolume = await myFile.volume() // 0.5
  await myFile.loop()
  await myFile.stop()
})()
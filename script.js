// clicks and mouseover makes boom sound//
var boomButton = document.getElementById('boomButton')
var boomSound = document.getElementById('boom')
boomButton.addEventListener('click', function () {
  boomSound.play()
})
boomButton.addEventListener('mouseenter', function () {
  boomSound.play()
})
// clicks and mouseover makes open hat sound//
var openHatButton = document.getElementById('openHatButton')
var openHatSound = document.getElementById('openHat')
openHatButton.addEventListener('click', function () {
  openHatSound.play()
})
openHatButton.addEventListener('mouseenter', function () {
  openHatSound.play()
})
// clicks and mouseover makes snare sound//
var snareButton = document.getElementById('snareButton')
var snareSound = document.getElementById('snare')
snareButton.addEventListener('click', function () {
  snareSound.play()
})
snareButton.addEventListener('mouseenter', function () {
  snareSound.play()
})

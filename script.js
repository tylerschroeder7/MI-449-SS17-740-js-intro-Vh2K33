  var boomButton = document.getElementById('boomButton')
  var boomSound = document.getElementById('boom')
  boomButton.addEventListener('click', function () {
    console.log('I was clicked!')
    boomSound.play()

  })

  var openHatButton = document.getElementById('openHatButton')
  var openHatSound = document.getElementById('openHat')

  openHatButton.addEventListener('click', function () {
    openHatSound.play()
  })

  var snareButton = document.getElementById('snareButton')
  var snareSound = document.getElementById('snare')

  snareButton.addEventListener('click', function () {
    snareSound.play()
  })

document.getElementById('change-image') .addEventListener('click', image)
document.getElementById('change-text') .addEventListener('click', text)
document.getElementById('change-hide') .addEventListener('click', hide)
document.getElementById('change-show') .addEventListener('click', show)
document.getElementById('change-bg') .addEventListener('click', background)

function image () {
  document.getElementById('picture').src = "images/Chihuahua.jpg"
}

function text () {
  document.getElementById('text').innerHTML = "Hi I am a Chihuahua.And my name is chimchim."
}

function hide () {
  document.getElementById('text').style.display = "none"
}

function show () {
  document.getElementById('text').style.display = "block"
}

function background () {
  document.body.style.backgroundColor = "cadetblue"
}
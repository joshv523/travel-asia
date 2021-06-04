const menuButton = document.querySelector('.menu-btn')
const showcase = document.querySelector('.showcase')

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active')
  showcase.classList.toggle('active')
})

// change video background
const video = document.querySelector('.bg-video')
// toggle active borders
const logo = document.querySelector('.logo')
const goToPh = document.querySelector('.go-to-ph')
const goToSingapore = document.querySelector('.go-to-singapore')
const goToJapan = document.querySelector('.go-to-japan')


// go to home page
logo.addEventListener('click', () => {
  // change background
  // change header text
  // toggle active class
  logo.classList.add('active')
  goToPh.classList.remove('active')
  goToSingapore.classList.remove('active')
  goToJapan.classList.remove('active')
  const video = document.querySelector('.bg-video')
  video.src = "videos/home.mp4"
  video.load()
  const headerh2 = document.querySelector('.text-h2')
  const headerh3 = document.querySelector('.text-h3')
  headerh2.innerHTML = 'Never Stop'
  headerh3.innerHTML = 'Exploring the World'
})


// go to the philippines
goToPh.addEventListener('click', () => {
  // change background
  // change header text
  // toggle active class
  logo.classList.remove('active')
  goToPh.classList.add('active')
  goToSingapore.classList.remove('active')
  goToJapan.classList.remove('active')
  const video = document.querySelector('.bg-video')
  video.src = "videos/philippines.mp4"
  video.load()
  const headerh2 = document.querySelector('.text-h2')
  const headerh3 = document.querySelector('.text-h3')
  headerh2.innerHTML = "Welcome to The Philippines!"
  headerh3.innerHTML = "Explore the beaches, Manila, and more!"
})

// go to singapore
goToSingapore.addEventListener('click', () => {
  // change background
  // change header text
  // toggle active class
  goToPh.classList.remove('active')
  goToSingapore.classList.add('active')
  goToJapan.classList.remove('active')
  const video = document.querySelector('.bg-video')
  video.src = "videos/singapore.mp4"
  video.load()
  const headerh2 = document.querySelector('.text-h2')
  const headerh3 = document.querySelector('.text-h3')
  headerh2.innerHTML = "Welcome to Singapore!"
  headerh3.innerHTML = "Explore the islands, Marina Bay, and more!"
})

// go to japan
goToJapan.addEventListener('click', () => {
  // change background
  // change header text
  // toggle active class
  goToPh.classList.remove('active')
  goToSingapore.classList.remove('active')
  goToJapan.classList.add('active')
  const video = document.querySelector('.bg-video')
  video.src = "videos/japan.mp4"
  video.load()
  const headerh2 = document.querySelector('.text-h2')
  const headerh3 = document.querySelector('.text-h3')
  headerh2.innerHTML = "Welcome to Japan!"
  headerh3.innerHTML = "Explore Tokyo, Okinawa, and more!"
})
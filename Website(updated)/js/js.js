let image = document.getElementById('image')
let images = ['Image/slideshow/Image1.jpg','Image/slideshow/Image2.jpg','Image/slideshow/Image3.jpg','Image/slideshow/Image5.jpg']
setInterval(function(){
let random = Math.floor(Math.random() * 4);
image.src = images[random];}, 3000);

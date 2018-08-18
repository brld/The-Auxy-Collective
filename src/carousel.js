var carousel = document.getElementById("carousel")
var leftButton = document.getElementById("carousel-left-button")
var rightButton = document.getElementById("carousel-right-button")

leftButton.onclick = function() {
	var sectionWidth = carousel.offsetWidth - 48
	
	carousel.scrollLeft = Math.ceil(
		carousel.scrollLeft / sectionWidth
	) * sectionWidth - sectionWidth
}

rightButton.onclick = function() {
	var sectionWidth = carousel.offsetWidth - 48
	
	var newScrollPosition = Math.floor(
		carousel.scrollLeft / sectionWidth
	) * sectionWidth + sectionWidth
	
	if (newScrollPosition < carousel.scrollWidth - carousel.offsetWidth) {
		console.log(newScrollPosition + "  " + carousel.scrollLeft)
		carousel.scrollLeft = newScrollPosition
	}
}

let menuVisible = false;

// Funcion que oculta o muestra menu

function mostrarOcultarMenu() {

	let navbar = document.getElementById('nav');

	if (menuVisible) {

		navbar.classList.remove('responsive');
		menuVisible = false;

	} else {

		navbar.classList.add('responsive');
		menuVisible = true;

	}
}

function seleccionar(){

	//oculto el menu una vez que selecciono una opcion
	document.getElementById("nav").classList ="";
	menuVisible = false;

}

document.addEventListener('DOMContentLoaded', () => {

	const elementosCarousel = document.querySelectorAll('.carousel');

	M.Carousel.init(elementosCarousel, {

		duration: 150,
		dist: -80,
		shift: 5,
		padding: 6,
		numVisible: 4,
		indicators: true,
		noWrap: false

	});

});
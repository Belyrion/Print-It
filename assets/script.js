const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Sélection des éléments du DOM nécessaires
const dotsContainer = document.querySelector('.dots'); // La div où seront ajoutés les points

// Fonction pour créer les bullet points
function createDots(slides) {
    slides.forEach((_, index) => {
        const dot = document.createElement('div'); // Crée un élément div pour chaque point
        dot.classList.add('dot'); // Ajoute la classe 'dot'
        
        // Ajout de la classe 'dot_selected' au premier point
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        
        // Ajout du point dans le conteneur
        dotsContainer.appendChild(dot);
    });
}

// Appel de la fonction avec le tableau 'slides'
createDots(slides);

// Sélection des éléments nécessaires
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0; // Index de la diapositive active

// Fonction pour mettre à jour l'affichage du carrousel
function updateCarousel(index) {
    // Mise à jour de l'image
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;

    // Mise à jour du texte
    bannerText.innerHTML = slides[index].tagLine;

    // Mise à jour des bullet points
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('dot_selected', dotIndex === index);
    });
}

// Navigation à droite
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Boucle vers le début si on dépasse la dernière slide
    updateCarousel(currentIndex);
    console.log('Flèche droite cliquée, slide actuelle :', currentIndex);
});

// Navigation à gauche
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Boucle vers la fin si on dépasse la première slide
    updateCarousel(currentIndex);
    console.log('Flèche gauche cliquée, slide actuelle :', currentIndex);
});
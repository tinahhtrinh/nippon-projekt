
// Smooth scroll funktion, når man klikker på links, der henviser til sektionen #baggrund2 (måltidskasser)
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#baggrund2"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});





// Smooth scroll funktion, når man klikker på knappen, der henviser til sektionen #kraesensection (bestillingsside)
document.querySelectorAll('a[href^="#kraesensection"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Smooth scroll funktion, når man klikker på knappen, der henviser til sektionen #luksussection (bestillingsside)
document.querySelectorAll('a[href^="#luksussection"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Smooth scroll funktion, når man klikker på knappen, der henviser til sektionen #sundsection (bestillingsside)
document.querySelectorAll('a[href^="#sundsection"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Smooth scroll funktion, når man klikker på knappen, der henviser til sektionen #vegansksection (bestillingsside)
document.querySelectorAll('a[href^="#vegansksection"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});









// Counter knap for antal dage, man vil bestille til

// Tag fat i elementerne
const btnMinus = document.querySelector('.kraesen-btn-minus');
const btnPlus = document.querySelector('.kraesen-btn-plus');
const count = document.querySelector('.kraesen-count');

// Lad counteren starte fra 2
let counter = 2;

// Funktionen opdaterer counteren
function updateCount() {
  count.textContent = counter;
}

// Der tilføjes en event listener for minus-knappen
btnMinus.addEventListener('click', () => {
    if (counter > 2) { // Dette tjekker, om værdien i counteren er større end minimumsværdien (2)
      counter--; //  Nedtællings-counter
      updateCount(); // Opdatér counter displayet
    }
  });
  
  // Der tilføjes en event listener for plus-knappen
  btnPlus.addEventListener('click', () => {
    if (counter < 5) { // Dette tjekker, om værdien i counteren er mindre end maksimumsværdien (5)
      counter++; // Optællings-counter
      updateCount(); // Opdatér counter displayet
    }
  });
  
// Indledende opdatering for counteren
updateCount();




// Hover farve-effekt på 'Gå til kurv'-knap
const button = document.getElementById('kraesen-kurv-button');

  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#8d0e22'; // Ændrer baggrundsfarve på knappen ved hover (mouseover)
  });
  
  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#a61128'; // Går tilbage til den originale baggrundsfarve ved 'mouseout'
  });
  
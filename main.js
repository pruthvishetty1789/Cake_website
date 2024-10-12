let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Cake details data
const cakeDetails = {
    vanilla: {
        name: "Custom Cakes",
        price: "$20",
        flavor: "Vanilla",
        description: "A rich venilla cake topped with chocolate ganache."
    },
    chocolate: {
        name: "Birthday cake",
        price: "$25",
        flavor: "Chocolate",
        description: "A light and fluffy chocolate cake with chocolate frosting."
    },
    butterscotch: {
        name: "Wedding cake",
        price: "$35",
        flavor: "Buttterscotch",
        description: "A moist butterscotch cake layered with cream cheese frosting."
    },
    strawberry: {
        name: "Cup Cake",
        price: "$10",
        flavor: "Strawberry",
        description: "A rich strawberry cake topped with strawberry ganache."
    },
    redVelvet: {
        name: "Red Velvet cake",
        price: "$30",
        flavor: "Red-Velvet",
        description: "A rich red velvet cake topped with strawberry ganache."
    },

};

// Modal elements
const modal = document.getElementById("cakeModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementsByClassName("close")[0];

// Function to show cake details
function showDetails(cake) {
    const details = cakeDetails[cake];
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h2>${details.name}</h2>
        <p><strong>Price:</strong> ${details.price}</p>
        <p><strong>Flavor:</strong> ${details.flavor}</p>
        <p>${details.description}</p>
    `;
    modal.style.display = "block";
}

// Close modal when the user clicks on <span> (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to category boxes
const categories = document.querySelectorAll('.category');
categories.forEach((category) => {
    category.onclick = () => {
        const selectedCategory = category.getAttribute('data-category');
        showDetails(selectedCategory);
    };
});

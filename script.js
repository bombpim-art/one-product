
document.querySelector('.btn-add-cart').addEventListener('click', function() {
    const quantity = document.querySelector('.quantity-input').value;
    alert(`Added ${quantity} item(s) to cart!`);
});


document.querySelector('.btn-submit-rating').addEventListener('click', function() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        alert(`Thank you for rating: ${selectedRating.value} stars!`);
    } else {
        alert('Please select a rating first!');
    }
});


document.querySelector('.quantity-input').addEventListener('change', function() {
    if (this.value < 1) this.value = 1;
});

function toggleMenu() {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('open');
}





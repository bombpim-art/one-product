
document.querySelector('.btn-add-cart').addEventListener('click', function() {
    const quantity = document.querySelector('.quantity-input').value;
    alert(`Added ${quantity} item(s) to cart!`);
});


document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.rating-btn').forEach(b => b.style.borderColor = '#ddd');
        this.style.borderColor = '#0066ff';
        this.style.color = '#0066ff';
    });
});


document.querySelector('.btn-submit-rating').addEventListener('click', function() {
    const selectedRating = document.querySelector('.rating-btn[style*="0066ff"]');
    if (selectedRating) {
        alert(`Thank you for rating: ${selectedRating.textContent} stars!`);
    } else {
        alert('Please select a rating first!');
    }
});


document.querySelector('.quantity-input').addEventListener('change', function() {
    if (this.value < 1) this.value = 1;
});

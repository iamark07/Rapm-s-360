// Franchise Models Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const modelCards = document.querySelectorAll('.model-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and cards
            tabButtons.forEach(btn => btn.classList.remove('active'));
            modelCards.forEach(card => card.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding model card
            const modelType = button.getAttribute('data-model');
            const targetCard = document.getElementById(`${modelType}-model`);
            if (targetCard) {
                targetCard.classList.add('active');
            }
        });
    });
}); 
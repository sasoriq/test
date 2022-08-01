function openModal() {
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

const modal = document.querySelector('.modal-window');
document.addEventListener('DOMContentLoaded', openModal);


const modalCloseIcon = document.querySelector('.close-modal');
document.addEventListener('click', function(event) {
    event.preventDefault();

    const isClosest = event.target.closest('.modal-window__content');
    if (!isClosest || event.target.matches('.close-modal') && modal.classList.contains('open')) {
        closeModal();
    }
});
function toggleDiv() {
    const firstItem = document.querySelector('.item-1');

    if (firstItem.style.display === 'none') {
        firstItem.style.display = 'block';
    } else {
        firstItem.style.display = 'none';
    }
}

function changePosition() {
    const secondItem = document.querySelector('.item-2');
    const thirdItem = document.querySelector('.item-3');

    if (secondItem.nextElementSibling === thirdItem) {
        thirdItem.parentElement.insertBefore(secondItem, thirdItem.nextElementSibling);
    } else {
        thirdItem.parentElement.insertBefore(secondItem, thirdItem);
    }
}

const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
leftBtn.addEventListener('click', toggleDiv);
rightBtn.addEventListener('click', changePosition)
const INPUT = document.querySelector('#toggle');
const CARDS = document.querySelector('.card-box');

INPUT.addEventListener('change', () => {
    let price = document.querySelectorAll('.change');

    price.forEach((item) => {
        if (item.innerHTML === '.99') {
            return  item.innerHTML = '9.99';
        } else {
            return item.innerHTML = '.99';
        }
    });
});

CARDS.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') {
        return;
    } else {
        let modal = document.querySelector('.popup');
        modal.classList.add('popup_open');

        let close = document.querySelector('.popup__close');
        close.addEventListener('click', function (e){
            e.preventDefault();
            modal.classList.remove('popup_open');
        });
    }
}); 
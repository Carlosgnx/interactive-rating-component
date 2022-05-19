'use strict';

// Elements
let options = document.getElementsByClassName('ratecard__rate-item')
let rate = document.getElementsByClassName('thankscard__rate')
let rateCard = document.getElementsByClassName('ratecard')
let thanksCard = document.getElementsByClassName('thankscard')

// Variables
let selectedRating = 0;

function selectRating(rating) {
    selectedRating = rating;

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('ratecard__item-selected')
    }
    options[selectedRating - 1].classList.add('ratecard__item-selected')
    rate[0].innerHTML = selectedRating;
}

function submit() {
    rateCard[0].style.display = 'none'
    thanksCard[0].style.display = 'flex'
}
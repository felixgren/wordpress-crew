'use strict'

const burger = document.querySelector('.burger');
const overlayMobile = document.querySelector('.mobile-overlay');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

const menuLinks = document.querySelectorAll('.menu-links a');

const burgerAnimationIn = (delay) => {
    setTimeout(() => {
        line1.style.transform = 'translateY(-2.5px) rotate(45deg)';
        line3.style.transform = 'translateY(2.5px) rotate(-45deg)';
        burger.style.pointerEvents = 'initial';
    }, delay);
};

const burgerAnimationOut = (delay) => {
    setTimeout(() => {
        line2.style.opacity = '1';
        line1.style.transform = 'translateY(0)';
        line3.style.transform = 'translateY(0)';
        line1.style.transform = null;
        line3.style.transform = null;
        burger.style.pointerEvents = 'initial';
    }, delay);
};

burger.addEventListener('click', () => {
    overlayMobile.classList.toggle('overlay-visible');
    burger.classList.toggle('animate-burger');
    console.log('burg click')

    line2.style.opacity = '0';
    line1.style.transform = 'translateY(-3px)';
    line3.style.transform = 'translateY(3px)';
    burger.style.pointerEvents = 'none';

    if(burger.classList.value === 'burger animate-burger') {
        if(window.innerWidth >= 1350) {
            burgerAnimationIn(300);
        } else {
            burgerAnimationIn(150);
        }
    } else {
        if(window.innerWidth >= 1350) {
            burgerAnimationOut(400);
        } else {
            burgerAnimationOut(150);
        }
    }
})
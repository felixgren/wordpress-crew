'use strict'

const burger = document.querySelector('.burger');
const overlayMobile = document.querySelector('.mobile-overlay');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

const menuLinks = document.querySelectorAll('.menu-item');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-item');


// dropdown mobile
mobileMenuLinks.forEach((link) => {
    const dataId = link.getAttribute('data-id');
    const dropdown = document.querySelector(`.mobile-dropdown-${dataId}`);

    if(dropdown) {
        link.addEventListener('click', () => {
            if(dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                link.childNodes[3].style.transform = 'rotate(0deg)';
            } else {
                dropdown.style.display = 'block';
                link.childNodes[3].style.transform = 'translateX(14px) rotate(180deg)';
            }
        });
    }
});

// dropdown desktop
menuLinks.forEach((link) => {
    const dataId = link.getAttribute('data-id');
    const dropdown = document.querySelector(`.dropdown-${dataId}`);
    
    if(dropdown) {
        link.addEventListener('mouseover', () => {
            dropdown.style.display = 'initial';
        });

        link.addEventListener('mouseout', () => {
            dropdown.style.display = 'none';
        });

        dropdown.addEventListener('mouseover', () => {
            dropdown.style.display = 'initial';
        });
    
        dropdown.addEventListener('mouseout', () => {
            dropdown.style.display = 'none';
        });
    }
});

const burgerAnimationIn = (delay) => {
    document.body.style.overflowY = 'hidden';

    setTimeout(() => {
        line1.style.transform = 'translateY(-2.5px) rotate(45deg)';
        line3.style.transform = 'translateY(2.5px) rotate(-45deg)';
        burger.style.pointerEvents = 'initial';
    }, delay);
};

const burgerAnimationOut = (delay) => {
    document.body.style.overflowY = 'auto';
    
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
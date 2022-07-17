/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggler'),
    navClose = document.getElementById('nav_close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})

const showMenuRemove = () => {
    navMenu.classList.remove('show-menu');
}

navClose.addEventListener('click', () => {
    showMenuRemove();
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(navlink => navlink.addEventListener('click', () => {
    showMenuRemove();
}))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', () => {
    scrollHeader();
});

/*=============== POPULAR SWIPER ===============*/
let swiper = new Swiper(".popular_container", {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        }
    }
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixer = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
})

/* Link active featured */
const list_items = document.querySelectorAll('.featured_item');

list_items.forEach(item => {
    item.addEventListener('click', () => {
        list_items.forEach(list => list.classList.remove('active_featured'));
        item.classList.add('active_featured');
    })
})


/*=============== SHOW SCROLL UP ===============*/
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll_up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollup') : scrollUp.classList.remove('show-scrollup');
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_title, .popular_container, .feature_img, .feature_filters`)
sr.reveal(`.home_subtitle`, { delay: 500 })
sr.reveal(`.home_elec`, { delay: 600 })
sr.reveal(`.home_img`, { delay: 800 })
sr.reveal(`.home_car_data`, { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal(`.home_button`, { delay: 1000, origin: 'bottom' })
sr.reveal(`.about_group, .offer_data`, { origin: 'left' })
sr.reveal(`.about_data, .offer_img`, { origin: 'right' })
sr.reveal(`.feature_map`, { delay: 600, origin: 'bottom' })
sr.reveal(`.feature_card`, { interval: 300 })
sr.reveal(`.featured_card, .logos_content, .footer_content`, { interval: 100 })
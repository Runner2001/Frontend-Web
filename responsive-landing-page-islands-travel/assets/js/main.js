const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


const btnOpenVideo = document.querySelectorAll('.island_video-content');
const islandsPopup = document.getElementById('popup');

btnOpenVideo.forEach(item => item.addEventListener('click', () => {
    islandsPopup.classList.add('show-popup');
}));

const btnCloseVideo = document.getElementById('popup_close');
btnCloseVideo.addEventListener('click', () => islandsPopup.classList.remove('show-popup'));


let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 0,
});
let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    thumbs: {
        swiper: swiper,
    },
});

const controlImg = document.querySelectorAll('.control_img');

function scrollAnimation() {
    gsap.from('.island_subtitle', { opacity: 0, duration: .2, delay: .2, y: -20 })
    gsap.from('.island_title', { opacity: 0, duration: .3, delay: .3, y: -20 })
    gsap.from('.island_description', { opacity: 0, duration: .4, delay: .4, y: -20 })
    gsap.from('.island_button', { opacity: 0, duration: .5, delay: .5, y: -20 })
    gsap.from('.island_video-content', { opacity: 0, duration: .6, delay: .6, y: -20 })

    islandsPopup.classList.remove('show-popup')
}

controlImg.forEach(item => item.addEventListener('click', scrollAnimation))
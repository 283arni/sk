import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.partners__slider', {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        },
});

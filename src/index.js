import './assets/css/tailwind.scss';
import "./scripts/splide.min.js"
import Splide from "@splidejs/splide";

new Splide( '.splide', {
    perPage: 1,
    direction: "rtl",
} ).mount();
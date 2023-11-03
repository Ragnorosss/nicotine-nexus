import Glide from '@glidejs/glide'

new Glide('.glide',{
    perView:1,
    gap:30,
    autoplay:3000,
}).mount();

new Glide('.glide__slider', {
    type:'carousel',
    perView:1,
    gap:30,
    autoplay:3000,
}).mount();
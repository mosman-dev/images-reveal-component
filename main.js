const dqs = x => document.querySelector(`${x}`);

const container = dqs('.container');
const img1 = dqs('.img-one');
const img2 = dqs('.img-two');
const img3 = dqs('.img-three');
const img4 = dqs('.img-four');

const toggleAll = () => {
    img1.classList.toggle('img-one-go');
    img2.classList.toggle('img-two-go');
    img3.classList.toggle('img-three-go');
    img4.classList.toggle('img-four-go');
}

img1.addEventListener('click', toggleAll);
img2.addEventListener('click', toggleAll);
img3.addEventListener('click', toggleAll);
img4.addEventListener('click', toggleAll);
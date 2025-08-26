const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function ChangeSlide() {
    // hide all
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    // show current
    imgs[n].style.display = 'block';
}

// next button
next_btn.addEventListener('click', () => {
    n++;
    if (n >= imgs.length) n = 0; // loop back
    ChangeSlide();
});

// prev button
prev_btn.addEventListener('click', () => {
    n--;
    if (n < 0) n = imgs.length - 1; // loop back
    ChangeSlide();
});

// show first slide at start
ChangeSlide();


const scrollcontainer = document.querySelectorAll('.products');
for (const item of scrollcontainer) {
    item.addEventListener('wheel', (evt)=> {
         evt.preventDefault();
         item.scrollLeft += evt.deltaY
    });
}


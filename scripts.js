const list = document.querySelectorAll('.item'); // seus elementos
const count = list.length;
let active = 0;

const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    if (activeOld) activeOld.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
};

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    if (activeOld) activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
};

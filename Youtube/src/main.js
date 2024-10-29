const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

const actions = document.querySelector('.actions');
    actions.addEventListener('click', (event) => {
    const active  = document.querySelector('.active');
    active.classList.remove('active');
    event.target.classList.add('active')
});

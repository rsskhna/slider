const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');

const blocksArray = document.querySelectorAll('.block');

let activeBlockIndex = 0;
let intervalId;

function toggleActiveClass (index) {
    const activeElem = document.querySelector('.block_active');
    activeElem.classList.remove('block_active');
    blocksArray[index].classList.add('block_active');
}

function nextElem () {
    activeBlockIndex++;
    if (activeBlockIndex === blocksArray.length) {
        activeBlockIndex = 0;
    }
    toggleActiveClass(activeBlockIndex);
}

function prevElem () {
    activeBlockIndex--;
    if (activeBlockIndex < 0) {
        activeBlockIndex = blocksArray.length - 1;
    }
    toggleActiveClass(activeBlockIndex);
}

function autoPlay () {
    if (!intervalId) {
        intervalId = setInterval(nextElem, 1500);
    }
}

function autoStop () {
    clearInterval(intervalId);
    intervalId = null;
}

function resetInterval () {
    if (intervalId) {
        autoStop();
        autoPlay();
    }
}

nextBtn.addEventListener('click', () => {
    nextElem();
    resetInterval();
});
prevBtn.addEventListener('click', () => {
    prevElem();
    resetInterval();
});
playBtn.addEventListener('click', autoPlay);
stopBtn.addEventListener('click', autoStop);




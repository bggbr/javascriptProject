// 우리가 사용하는 인자는 
// 1. 게임 버튼을 누른다.
// 2. field에서 논다.
// 3. pop-up 버튼을 누른다.

const CARROT_COUNT = 5;
const BUG_COUNT = 10;
const CARROT_SIZE = 80;

const gameBtn = document.querySelector('.game__button');
const field = document.querySelector('.game__field');
const refreshBtn = document.querySelector('.pop--up__refresh');

const timer = document.querySelector('.game__timer');
const score = document.querySelector('.game__score');

const GAME_TIME = 10;

gameBtn.addEventListener('click', (event) => {
    gameStart();
})


field.addEventListener('click', (event) => {
    randomArrange(count, );
})

function randomArrange() {
    const x1 = 0;
    const y1 = 0;
    const x2 = field.getBoundingClientRect().width - CARROT_SIZE;
    const y2 = field.getBoundingClientRect().height - CARROT_SIZE;
    
}
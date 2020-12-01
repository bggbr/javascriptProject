/*
구현으로 들어가기 전에 우리가 어떤 기능을 구현할 것인지 명확하게 정하는 것이 중요하다.

첫 번째는 사용자가 텍스트 input에서 텍스트를 타이핑할 수 있다.
두 번째는 아이템을 추가하는 방법은 두 가지가 있다.
1. +을 클릭하거나
2. 엔터키를 쳤을 때
마지막으로 삭제되는 기능까지 있어야 한다.

1. 사용자가 text를 입력할 수 있는 input field
2. +를 눌렀을 때 처리해야 하는 부분
3. 아이템들이 들어가는 컨테이너를 정의
*/

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

/*
여기에는 이 함수에 대한 'why'와 '의도'에 대해 설명하면 된다.
*/

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아와야 한다.
    const text = input.value;
    if (text == '') {
        input.focus();
        return;
    }
    // console.log(text);

    // 2. 받아온 텍스트를 이용해서 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items라는 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({
        block: 'center'
    });
    // 5. text input을 초기화한다.
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener("click", () => {
    onAdd();
})

input.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        onAdd();
    }
})
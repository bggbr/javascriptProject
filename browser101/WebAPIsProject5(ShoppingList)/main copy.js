/*
이벤트 위임을 하기 위해서는 어떻게 하면 좋을까?
일단 이 클릭 이벤트를 items 부모에게만 등록을 해 놓은 다음에 이 쓰레기통 아이콘만 클릭이 되었을 때 해당하는 아이템을 삭제해 줄 것이다.

자 그런데 여기서 이 쓰레기통 아이콘을 클릭했을 때 해당하는 아이템이 어떤 건지 아닌지 어떻게 찾을까?
고유한 아이디를, 즉, 이 아이템마다 고유한 아이디를 지정해줘서 아이디를 할당하고 
또 쓰레기통 아이콘에도 아이디를 기억하게 해서 아이콘이 클릭되면 이 아이콘에 할당되어져 있는 아이디를 이용해서 원하는 이 아이템을 찾아서 삭제해 주면 될 것 같다.

우리는 글로벌 숫자를 이용해서 아이디를 만들어 보자.
*/

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");


function onAdd() {
    const text = input.value;
    if (text == '') {
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({
        block: 'center'
    });
    input.value = '';
    input.focus();
}

let id = 0; // UUID

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    // 아이템 엘리먼트를 만든 다음에 li에 클래스를 지정한 다음에 아이템을 리턴할 것이다. 이 아이템 안에는 사실 섹션 안에 ul안에 li에 보면, childnode가 두개가 있다. 스트링 템플릿을 이용해서 구현해보자. text 입력 추가해주고 버튼과 아이템에는 각각 아이템을 지정해서 고유한 아이디를 지정해 줄 것이다.
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
        </div>
        <div class="item__divider"></div>`;
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})
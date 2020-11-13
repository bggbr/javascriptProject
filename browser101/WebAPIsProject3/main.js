// document.addEventListener('mousemove', (event) => {
//     var cursorX = event.clientX;
//     var cursorY = event.clientY;
//     console.log(cursorX, ', ', cursorY);
//     const target = document.querySelector('.target');
//     target.innerHTML = `${cursorX}, ${cursorY}`;
//     console.log(event);
// });

// 성능 개선 버전
// 마우스가 움직일 때마다 left와 top을 바꿔주는 것은 많은 성능 저하!
// layout부터 paint composition이 발생한다.
// left와 top을 이용하는 것 보다는 transform을 활용하자.
addEventListener("load", () => {
    const vertical = document.querySelector(".vertical");
    const horizontal = document.querySelector(".horizontal");
    const target = document.querySelector(".target");
    const tag = document.querySelector(".tag");
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    window.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;

        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;
        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;
        // tag.innerHTML = `${x}px, ${y}px`;
    });
});

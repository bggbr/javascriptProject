document.addEventListener("mousemove", (event) => {
  var cursorX = event.clientX;
  var cursorY = event.clientY;
  console.log(cursorX, ", ", cursorY);
  const target = document.querySelector(".target");
  target.innerHTML = `${cursorX}, ${cursorY}`;
});

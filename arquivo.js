let imgContainer = document.querySelector(".box");

setInterval(() => {
    let last = imgContainer.firstElementChild;
    last.remove()
    imgContainer.appendChild(last);
}, 2500);








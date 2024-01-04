const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

const backgroundAudio = document.getElementById('backgroundAudio');
backgroundAudio.play();

let x = 0;

prevEl.addEventListener("click", () => {
    x+=45;
    updateGallary();
});

nextEl.addEventListener("click", () => {
    x-=45;
    updateGallary();
});

function updateGallary() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

setInterval(() => {
    x-=45;
    updateGallary();
}, 3000);


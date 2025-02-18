document.getElementById("scrollDown").addEventListener("click", function () {
    let targetPosition = document.getElementById("proximaSecao").offsetTop;
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let duration = 800; // Tempo da animação (ms)
    let start = null;

    function animationScroll(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let easeInOut = progress / duration;
        easeInOut = easeInOut < 0.5 
            ? 2 * easeInOut * easeInOut 
            : 1 - Math.pow(-2 * easeInOut + 2, 2) / 2;
        window.scrollTo(0, startPosition + distance * easeInOut);
        if (progress < duration) requestAnimationFrame(animationScroll);
    }

    requestAnimationFrame(animationScroll);
});

// ----------------------------------------------------------------------- DIVISAO ----------------------------------------------------------------------------

function openOverlay(album) {
    const overlayBg = document.getElementById("overlay-bg");
    const overlay = document.getElementById("overlay");
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; 

    let images = [];

    if (album === 1) {
        images = [
            "Assets/1.jpg", "Assets/2.jpg", "Assets/3.jpg", "Assets/4.jpg",
            "Assets/5.jpg", "Assets/6.jpg", "Assets/7.jpg", "Assets/8.jpg"
        ];
    } else if (album === 2) {
        images = [
            "Assets/11.jpg", "Assets/12.jpg", "Assets/13.jpg", "Assets/14.jpg",
            "Assets/15.jpg", "Assets/16.jpg"
        ];
    }

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem do álbum";
        img.onclick = () => openImageModal(src);
        imageContainer.appendChild(img);
    });

    overlayBg.classList.add("show");
    setTimeout(() => {
        overlay.classList.add("show");
    }, 10);

    document.body.classList.add("no-scroll");
}

function closeOverlay() {
    const overlayBg = document.getElementById("overlay-bg");
    const overlay = document.getElementById("overlay");

    overlay.classList.remove("show");
    setTimeout(() => {
        overlayBg.classList.remove("show");
    }, 300);

    document.body.classList.remove("no-scroll");
}

function openImageModal(src) {
    const imageModalBg = document.getElementById("image-modal-bg");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = src;
    imageModalBg.classList.add("show");
    document.body.classList.add("no-scroll");
}

function closeImageModal() {
    const imageModalBg = document.getElementById("image-modal-bg");
    imageModalBg.classList.remove("show");
    document.body.classList.remove("no-scroll");
}

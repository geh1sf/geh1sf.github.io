/* MUSIC AUTOPLAY + FALLBACK BUTTON */
const bgMusic = document.getElementById("bgMusic");
const playButton = document.getElementById("playButton");

bgMusic.play().catch(() => {
    playButton.style.display = "block";
});

playButton.onclick = () => {
    bgMusic.play();
    playButton.style.display = "none";
};

/* SLIDESHOW */
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 3500);

/* GOOGLE FORM SUBMISSION */
const form = document.getElementById("rsvpForm");
const confirmation = document.getElementById("confirmationMessage");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const url =
"https://docs.google.com/forms/d/e/1FAIpQLSet2BgkiXZTPyLeDv6WjHlRDuEQlESiwHIpGWlthdYjEMu52Q/formResponse";

    const formData = new FormData(form);

    await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData
    });

    confirmation.style.display = "block";
    form.reset();
});

/* ==========================================
            LUMINARIA INTRO
========================================== */

const intro = document.getElementById("intro");
const loading = document.getElementById("loadingScreen");
const button = document.getElementById("enterBtn");

const music = document.getElementById("bgMusic");

const progress = document.getElementById("loadingProgress");
const percent = document.getElementById("loadingPercent");
const loadingText = document.getElementById("loadingText");

const loadingMessages = [

    "Preparing Luminaria...",
    "Awakening your Vision...",
    "Summoning Elemental Energy...",
    "Forging Legendary Weapons...",
    "Generating Domains...",
    "Spawning World Bosses...",
    "Loading Custom Items...",
    "Connecting to Luminaria...",
    "Preparing Adventure...",
    "Almost Ready..."

];

button.addEventListener("click", () => {

    /* Play Music */

    music.volume = 0.35;

    music.play().catch(err => {
        console.log(err);
    });

    /* Hide Intro */

    intro.classList.add("hideIntro");

    /* Show Loading */

    setTimeout(() => {

        intro.style.display = "none";

        loading.style.display = "flex";

        startLoading();

    }, 800);

});

function startLoading(){

    let value = 0;

    loadingText.innerText =
        loadingMessages[Math.floor(Math.random()*loadingMessages.length)];

    const interval = setInterval(() => {

        value++;

        progress.style.width = value + "%";

        percent.innerText = value + "%";

        /* Change loading message */

        if(value % 20 === 0){

            loadingText.innerText =
            loadingMessages[Math.floor(Math.random()*loadingMessages.length)];

        }

        if(value >= 100){

            clearInterval(interval);

            loadingText.innerText =
            "Welcome to Luminaria SMP";

            setTimeout(() => {

                loading.style.opacity = "0";

                loading.style.transition = "1s";

                setTimeout(() => {

                    loading.remove();

                },1000);

            },700);

        }

    },35);

}
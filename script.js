/* ==========================================
            LUMINARIA SCRIPT
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

// Initial State: Ensure body is hidden until user interacts
document.body.style.visibility = "hidden";
intro.style.visibility = "visible"; 

button.addEventListener("click", () => {
    // 1. Play Music
    music.volume = 0.35;
    music.play().catch(err => console.log("Audio interaction required."));

    // 2. Hide Intro
    intro.style.opacity = "0";
    setTimeout(() => {
        intro.style.display = "none";
        loading.style.display = "flex";
        startLoading();
    }, 800);
});

function startLoading(){
    let value = 0;
    loadingText.innerText = loadingMessages[Math.floor(Math.random()*loadingMessages.length)];

    const interval = setInterval(() => {
        value++;
        progress.style.width = value + "%";
        percent.innerText = value + "%";

        if(value % 20 === 0){
            loadingText.innerText = loadingMessages[Math.floor(Math.random()*loadingMessages.length)];
        }

        if(value >= 100){
            clearInterval(interval);
            loadingText.innerText = "Welcome to Luminaria SMP";
            
            setTimeout(() => {
                loading.style.opacity = "0";
                // Reveal the website content once loading is done
                document.body.style.visibility = "visible"; 
                document.body.style.overflow = "auto";
                
                setTimeout(() => {
                    loading.remove();
                }, 1000);
            }, 700);
        }
    }, 35);
}

// Copy to Clipboard Functionality
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById("copyToast");
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
    });
};

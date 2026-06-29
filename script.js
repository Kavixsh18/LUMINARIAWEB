/* ==========================================
            LUMINARIA SCRIPT
========================================== */
/* ==========================================
            LENIS SMOOTH SCROLL
========================================== */
const lenis = new Lenis({
  duration: 1.5,             // Adjust for speed (higher = slower/smoother)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve
  smoothWheel: true,         // Enable smooth scrolling for mouse wheel
  wheelMultiplier: 1,        // Sensitivity
});

// Sync Lenis with the browser's refresh rate
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ==========================================
            LUMINARIA SCRIPT
========================================== */
// ... (Keep the rest of your existing logic here)
const intro = document.getElementById("intro");
const loading = document.getElementById("loadingScreen");
const button = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

const progress = document.getElementById("loadingProgress");
const percent = document.getElementById("loadingPercent");
const loadingText = document.getElementById("loadingText");

// Assuming your website content is inside a wrapper (recommended)
// If not wrapped, you can target individual sections, but a wrapper is best.
const mainContent = document.getElementById("mainContent"); 

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

// Ensure initial state: body is visible, but main content is hidden via CSS or JS
if (mainContent) mainContent.style.visibility = "hidden";

button.addEventListener("click", () => {
    // 1. Play Music
    music.volume = 0.35;
    music.play().catch(err => console.log("Audio interaction required."));

    // 2. Add class to trigger CSS transition for fade
    intro.classList.add("hideIntro");
    
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
                loading.style.transition = "opacity 1s ease";
                
                // Reveal the website content
                if (mainContent) mainContent.style.visibility = "visible";
                
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

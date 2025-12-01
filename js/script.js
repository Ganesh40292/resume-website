// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// TYPE EFFECT
const text = "Welcome to my Web Portfolio";
let i = 0;

function type() {
    const el = document.getElementById("typingText");
    if (el && i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}

type();

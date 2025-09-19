const statements = [
"I stole this from my brother's website",
"Almost everything in this is stolen from my brother",
"I don't give two shits",
"It looks cool!"
];

const paragraph = document.getElementById("dynamicTextTest");
let statementIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
const current = statements[statementIndex];
const visibleText = current.substring(0, charIndex);
paragraph.textContent = visibleText;

if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100); // Typing speed
} else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50); // Deleting speed
} else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
    statementIndex = (statementIndex + 1) % statements.length;
    }
    setTimeout(typeEffect, 1000); // Pause before typing/deleting
}
}

typeEffect();
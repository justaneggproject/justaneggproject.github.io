const funFacts = [
    "Did you know that chickens lay over 1 trillion eggs per year worldwide?",
    "The largest egg ever laid weighed over 2 pounds!",
    "An egg contains every nutrient you need except vitamin C.",
    "Eggshells can come in a variety of colors, depending on the chicken's breed.",
];

function showFunFact() {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("funFact").textContent = fact;
}

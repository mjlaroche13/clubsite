const facts = [
    "Gorillas can climb trees, but they are usually found on the ground.",
    "A group of gorillas is called a 'troop' or a 'band'.",
    "Silverbacks are the mature male leaders of the troop.",
    "Gorillas use nests on the ground or in trees for sleeping at night.",
    "They have unique nose prints, much like human fingerprints!"
];

const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');

factBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
});

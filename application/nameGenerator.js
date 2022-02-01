const names = [
    "Eli",
    "Dax",
    "Louis",
    "Rowan",
    "Lyric",
    "Johnathon",
    "Olivia",
    "Derek",
    "Quinn",
    "Zariah",
    "Mateo",
    "Giana",
    "Samara",
    "Cassandra",
    "Ace",
    "Jaida",
    "Ramiro",
    "Jazlynn",
    "Abby",
    "Dillan"
];

const generate = () => {
    return names[randomNumber(0, 20)]
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export { generate };

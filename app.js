// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("text.txt was copied to text2.txt")

const hero = require("superheroes")

for(let i = 0; i < 10; i++){
    let nameHero = hero.random();
    console.log(hero.random());
}
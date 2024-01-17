"use strict";
// Guest Name in Array
let guest = [
    "Hammad",
    "Mashood",
    "Momi",
    "Kounain"
];
// Adding New Name in the Beginning of Array
let newguest = "Wajid";
guest.unshift(newguest);
// Adding New Name in the Middle  of Array
let newguestinmiddle = (guest.splice(2, 0, "Ahmed"));
guest.forEach((guest) => {
    console.log(`Dear ${guest}, I will like to invite you to dinner party on Saturday Night`);
});
console.log("I can invite only two people for dinner.");
// Removing Guest One By One
guest.pop();
console.log(`I am sorrry Kounain, I can’t invite them to dinner.`);
guest.pop();
console.log(`I am sorrry Momi, I can’t invite them to dinner.`);
guest.pop();
console.log(`I am sorrry Mashood, I can’t invite them to dinner.`);
guest.pop();
console.log(`I am sorrry Ahmed, I can’t invite them to dinner.`);
guest.pop();
console.log(`Hammad, your still invited to dinner`);
guest.pop();
console.log(`Wajid, your still invited to dinner`);
console.log(guest);

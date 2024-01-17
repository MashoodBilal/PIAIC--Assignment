let guest = [
       "Hammad",
        "Mashood",
         "Momi",
          "Kounain"];



let myFirstPopped = guest.pop();
console.log(`${myFirstPopped} can not attend the dinner party`);

let newguest = (guest.splice(3, 1, "Ahmed",));

guest.forEach((newguest)=>
   {
     console.log(`Dear ${newguest}, I will like to invite you to dinner party on Saturday Night`)
   }
)
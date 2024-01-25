
let user = {
    Firname :"Kounain",
    Lasname :"Al Ibad",
    age     :20
    hobbies :["Overthinking and picking my skin Of course!"],
    salary  : () => 0,
    email   : "",
    adress  : "", 

}

user.email="mkibad@abc.com",
user.adress="1234 block 2",

 console.log("email" in user)
console.log("adress" in user)
console.log(user)
 console.log(user.salary())
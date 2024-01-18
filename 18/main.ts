// Creating an Array

let places : string[] = ["Jeddah", "Tokyo", "Stuttgart", "Istanbul", "Cist", "Akihabara"];

  console.log("Array in Original Sequience")
   console.log(places)
 

// Arranging an Array in Alphabetical order 

 console.log("\n Array in Alphabetical order without modifying the original array")
  console.log([...places].sort())

// Reprinting the original Array

  console.log("\n Array is still in its original Sequience")
   console.log(places)


 // Arranging an Array in Revers Alphabetical order 

 console.log("\n Array in Revers Alphabetical order without modifying the original array")
  console.log([...places].sort().reverse())

  // Reprinting the original Array

  console.log("\n Array is still in its original Sequience")
   console.log(places)

   // Reverse the order original Array

  console.log("\n Revers Sequience")
  places.reverse()
   console.log(places)

    // Reverse the order original Array

  console.log("\n Back to original Sequience")
  places.reverse()
   console.log(places)

    // Arranging an Array in Alphabetical order

  console.log("\n Alphabetical order")
  places.sort()
   console.log(places)

   // Arranging an Array in Reverse Alphabetical order

  console.log("\n Reverse Alphabetical order")
  places.sort().reverse()
   console.log(places)
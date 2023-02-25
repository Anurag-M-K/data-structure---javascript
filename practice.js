let myArray = [
    { name: "John"},
    { name: "Shobin" },
  [ 
   { name: "Shobin"},
   ],
  [ 
   { name: "Shobin" },
  ]
  ]; 



  const first = myArray.flat()

  const sum = first.filter((value)=>(value.name == "Shobin")).length



console.log("sum ",sum)
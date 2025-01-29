// Objects -->

// Creating object in JS

const car = {
    color : "white",
    price : "8,00,999/-",
    make : "Toyota",
    "year" : 2024,
    1 : "0000" ,//syntex error dot notation  not work in word and space
    "company Name": "nokia"
}


console.log(car)
console.log(car["company Name"]) // reason it's in string
document.getElementById('timepass').innerHTML = car.make

// key.name for accesing the value 

console.log(car.color)
console.log(car.price)
console.log(car.make)
console.log(car.year)


const obj = [
    {
        name :"Keshav",
        id: "324932749",
        salary : 90000

    },
    {
        name :"Narendar Singh",
        id: "324932749",
        salary : 40000

    },
    {
        name :"Ranjeet",
        id: "324932749",
        salary : 30000

    },
    {
        name :"Rana",
        id: "324932749",
        salary : 20000

    }
]

sum = 0;

for (i = 0; i < obj.length; i++){
    sum += obj[i]["salary"]
    sum += obj[i].salary // can use both
}

console.log(sum)


// Dynamic Keys

const fortuner = {
    color : "white",
    price : "58,00,999/-",
    make : "Toyota",
    "year" : 2024,
    //1 : "0000" ,//syntex error dot notation  not work in word and space
    "company Name": "nokia"
}

const key = ["color", "price","make","year","company Name"]

for (i =0; i<key.length; i++){
    console.log(fortuner[key[i]])
}


for(let key in fortuner){
    console.log("key",key,fortuner[key])
}


// Adding keys in Object 
fortuner.insureance = true



// Removing Keys


delete fortuner["company Name"] // for removing keys
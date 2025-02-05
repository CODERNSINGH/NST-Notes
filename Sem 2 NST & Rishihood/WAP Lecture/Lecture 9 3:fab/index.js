const obj = {
    nameis : "Narendra Singh",
    id : 2401010292,
    mail : 'narendra.singh2024@nst.rishihood.edu.in',
    batch : 'section D'

}
const keys = Object.keys(obj)
console.log(keys)

// now geting value from key

for (let key in obj){
    console.log("value ->", obj[key])
    console.log("key ->", key)
}
const key12 = Object.keys(obj)

for (let i=0; i < key12;i++){
    console.log(obj[i])
    console.log("hi")
}


// Object values

const values = Object.values(obj);
console.log('values', values)


// interview Question

const student = {
    nameis : "Narendra Singh",
    id : 2401010292,
    mail : 'narendra.singh2024@nst.rishihood.edu.in',
    batch : 'section D'

}

function modifyOnj(obj){
    id : 2332432
}

modifyOnj(student)
console.log(student)

const timepass = {ed: 343322}
console.log(timepass)

const obj234 = timepass;

obj234.ed  = 69696;
console.log(timepass)
console.log(obj234)

// creating cone and copy of non primitive data type is dufficult 
// onject.assign 

//spreate oprator
const abc = {id: 2323}

const cloneAbc = {...abc}

col
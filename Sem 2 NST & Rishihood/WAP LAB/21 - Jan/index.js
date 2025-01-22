// sort funciton
// method is always after .sort() something and function we describe
num_lst = [2,3,100,50]
abc_lst = ['a','aa','b', 'btoa','acd']



console.log(abc_lst.sort(), "only using sort") // output = a,aa,acd,b,bton // dictionary order
console.log(num_lst.sort()), "only using sort" // output = 100,2,3,50 reason is it's doing same comparing first element only


// solve this issue
console.log(num_lst.sort(compare));

function compare(a,b){
    if (a<b){
        return -1 // maintainer the order
    }
    else{
        return 1 // filips the order
    }
}
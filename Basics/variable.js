//data type -- Premitive - String, Number, Boolean
//Non premitive/ Reference  - Array, Object, Function
let na = "Umesh"
const id = 4.3
const temp = null
console.log(id + 3)
console.log(na + " tripathi")
console.log(typeof na)
console.log(typeof temp)
console.log(typeof id)

//Non Premitive

let hero = ["Jay", "Veeru","Sonu"]
let myobj = {
    name: "Umesh",
    age: 36,
}
let myfuc = function(){
    console.log("in the function")
}
console.log(typeof hero)
console.log(typeof myobj)
console.log(typeof myfuc)
// ++++++++++++++++++++++++++++++++++++++
// Memory allocation - Premitive => Statck, Non Premitive=> Heap

let First = "Umesh"
let second = First
 console.log(second)
 console.log(First)

let profile1 = {
    name: "Umesh",
    age : 39
} 

let profile2 = profile1

profile2.age = 40

console.log(profile1.age)
console.log(profile2.age)
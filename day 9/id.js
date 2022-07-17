// var a = 2
// var b = 2
// var c = 1
// var d = b*((b**2)-(4*a*c))**-1/2*a
// console.log(d)

//logical operator
// let v = "word"
// let f = "1word"
// if (v==f){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// let a = document.getElementById("factor")
// let b = document.getElementById("word")
// let btn = document.getElementById("met")
// btn.addEventListener("click" ,me)
// function me(){
//    let d = a.value
//   let e = b.value
//   let c = d + e
//    window.alert(c)
// } 
let ny = document.getElementById("met")
let myGuess = document.getElementById("word")
ny.addEventListener("click", checkGuess)
let randomWord = ["Right","happy", "fuck",
"the", "of", "and", "a", "to", "in", "is", "you", "that", "it", 
"he", "was", "for", "on", "are", "as", "with", "his", "they","I", "at", 
"be","this", "have", "from", "or", "one", "had", "by", "word", "but","not",
"what", "all", "were", "we", "when", "your", "can", "said", "there",
"use", "an", "each", "which", "she", "do", "how", "their", "if", 
"will","up", "other", "about", "out", "many", "then", "them",
"these", "so","some", "her", "would", "make", "like", "him", "into", "time", "has",
 "look", "two", "more", "write", "go", "see", "number", "no", "way",
"could", "people", "my", "than", "first", "water", "been", "call",
"who", "oil", "its", "now", "find", "long", "down", "day", "did", 
"get", "come", "made", "may", "part"];
function checkGuess(){
    if (randomWord.indexOf(myGuess.value) > -1){
        
        window.alert("You got it right")
    }
    else {
       window.alert("odeh olodo ni e")
    }
}

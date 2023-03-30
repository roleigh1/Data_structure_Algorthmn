
var letters = [] // this is our stack 
var word = 121.toString(); // this is our palindrome 
var rword = ""; // this is the result of the palindrome 

// first we put the letters of word intro stack
for(var i = 0; i < word.length; i++) {
    letters.push(word[i]);// we push word in index i
}
// we pop off the stack in reverse order 
for(var i = 0; i < word.length;i++){
    rword += letters.pop(); // they gonna pop off in reverse order 

}
if(rword === word){
    console.log(word + " is a palindrome.")
}
else {
    console.log(word + " is not a palindrome.")
}
let word = prompt("Enter Your Word");
word = word.toLowerCase();
let count = 0;

for (let i = 0; i<word.length; i++){

let vow = word[i];

if(
    vow === "a" || vow === "e" || vow === "i" || vow === "o" || vow === "u")  
{
count++;
}

}

alert(`No: Of Vowels =  ${count}`);

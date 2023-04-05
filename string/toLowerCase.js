function toLowerCase(string){
    let result = '';
    for(let i = 0 ; i<string.length; i++){
        let charCode = string.charCodeAt(i);
        if(charCode >=65 && charCode <=97){
            charCode += 32;
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}

let string = 'ANuRAG MK';
let toLowerCaseString = toLowerCase(string);
console.log(toLowerCaseString)





// Declare a variable called "result" and set its initial value to an empty string. This variable will be used to store the final result.

// Loop through each character of the input string using a for loop that starts from 0 and goes up to the length of the string.

// Inside the loop, get the Unicode code point of the current character using the charCodeAt method of the string object. The charCodeAt method returns an integer between 0 and 65535 that represents the Unicode code point of the character at the specified index.

// Check if the code point of the current character is between 65 (the code point for uppercase A) and 97 (the code point for lowercase a) inclusive. If it is, add 32 to the code point to get the code point of the corresponding lowercase character.

// Convert the code point of the character (either the original uppercase code point or the new lowercase code point) back into a character using the String.fromCharCode method.

// Append the resulting character to the "result" string.

// Once the loop has finished, return the "result" string containing the converted string.

// Overall, this function is a simple implementation of th

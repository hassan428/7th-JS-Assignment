/*
        Previous Assignment Remaing Question
                    FUNCTION

11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.

EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'
*/


function capitalWord(inputString){
    var words = inputString.split(' ');
    for(var i = 0; i < words.length; i++){
        var word = words[i];
        if(word.length > 0){
            words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase(); 
        }
    }
    var capitalString = words.join(' ');
    return capitalString;
}

var inputString = 'the quick purple brown fox ';
var outputString = capitalWord(inputString);
// console.log(outputString);


/*
12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.

EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'
*/

function longest(exapmleStr){
    var arr = exapmleStr.split(' ');
    var longWord = arr[0];
    
    for(var i = 0; i < arr.length; i++){        
        if(arr[i].length > longWord.length){    
            longWord = arr[i];
        } 
    }
        return longWord;
}

var exapmleStr ='Web Development Tutorial'
var longestWord = longest(exapmleStr);
// console.log(longestWord);



/* New Assigment 
 Chapter 46, 48 (Events) */

// Question No. 2 

function hide(){
    var id = document.getElementById('hide');
    id.style.display = "none";
}


// Question No. 6

document.getElementById("Next_Page").addEventListener("click", function(){

    window.open("index01.html", "_blank");
})


/*Chapter 46, 48 (Events)
completed */


/* Chapter 49, 50 
(Reading and Setting field values)*/


// Question No. 1, 2, 3

function input(){
  var userInput1 = document.getElementById("input1");
  var userInput2_1 = document.getElementById("input2.1");
  var userInput2_2 = document.getElementById("input2.2");
  var userInput2_3 = document.getElementById("input2.3");
  var userInput3 = document.getElementById('Country');

  console.log(userInput1.value);

  if(userInput2_1.checked){
    console.log(userInput2_1.value);
  }
  if(userInput2_2.checked){
    console.log(userInput2_2.value);
  }
  if(userInput2_3.checked){
    console.log(userInput2_3.value);
  }

  console.log(userInput3.value);

}

// Question No. 5

function status(){
    var married = false

    if(married){
        document.getElementById('status').value = "Married";
    }
    else{
        document.getElementById('status').value = "Available";
    }
}

// Question No. 6

var inputFillStr = "Hello World";

document.getElementById("string").value = inputFillStr;



console.log(inputFillStr.trim())





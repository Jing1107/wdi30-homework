console.log("1111111");
/*You'll create a simple word guessing game where the user gets infinite tries
to guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
and end with 'F', 'O', 'X').*/

// const worldLetters = ['F', 'O', 'X'];
// const currentGuessedLetters = ['_', '_', '_'];

//Write a function called guessLetter that will:
//Take one argument, the guessed letter.

// const guessLetter = function ( a ) {
//   let guessedLetters = [];
//   for ( i = 0; i < worldLetters.length; i ++ ) {
//     guessedLetters.push ('_');
//   }
//
// };

//Iterate through the word letters and see if the guessed letter is in there.


//If the guessed letter matches a word letter, changed the guessed letters array to
//reflect that.

// When it's done iterating, it should log the current guessed letters ('F__') and
// congratulate the user if they found a new letter.

// It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.

// Pretend you don't know the word, and call guessLetter multiple times with various
// letters to check that your program works.*/


var arr1    = ['H', 'E', 'L', 'L', 'O'];
     var guessarr  = ['_', '_', '_', '_'];

     function guessLetter(letter) {
         var goodGuess = false;
         var moreToGuess = false;
         for (var i = 0; i < arr1.length; i++) {
             if (arr1[i] == letter) {
                 guessarr[i] = letter;
                 goodGuess = true;
             }
             if (guessarr[i] == '_') {
                 moreToGuess = true;
             }
         }
         if (goodGuess) {
             console.log('Correct!');
             console.log(guessarr.join(''));
             if (!moreToGuess) {
                 console.log('YOU WON!');
             }
         } else {
             console.log('Incorrect');
         }
     };

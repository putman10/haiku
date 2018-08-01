export class Haiku {
  constructor(line1, line2, line3, line1Counter, line2Counter, line3Counter) {
    this.line1 = line1.toLowerCase();
    this.line2 = line2.toLowerCase();
    this.line3 = line3.toLowerCase();
    this.line1Counter = 0;
    this.line2Counter = 0;
    this.line3Counter = 0;
  }

  removeSilentLetter() {
    const e = "e";
    let line1Words = this.line1.split(" ");
    let line2Words = this.line2.split(" ");
    let line3Words = this.line3.split(" ");
    let newline1 = []
    let newline2 = []
    let newline3 = []

    line1Words.forEach(function(word){
     let letter = word.split("");
     if(letter.lastIndexOf(e) == (letter.length - 1) && (!word.includes('a')) && (!word.includes('i')) && (!word.includes('o')) && (!word.includes('u'))){
       newline1.push(letter.join(""))
      }
      else if (letter.lastIndexOf(e) == (letter.length - 1) && ((word.includes('a')) || (word.includes('i')) || (word.includes('o')) || (word.includes('u')))){
        letter.pop();
      newline1.push(letter.join(""))
      }
      else {
        newline1.push(letter.join(""))
      }
    });

    line2Words.forEach(function(word){
     let letter = word.split("");

     if(letter.lastIndexOf(e) == (letter.length - 1) && (!word.includes('a')) && (!word.includes('i')) && (!word.includes('o')) && (!word.includes('u'))){
       newline2.push(letter.join(""))
      }
      else if (letter.lastIndexOf(e) == (letter.length - 1) && ((word.includes('a')) || (word.includes('i')) || (word.includes('o')) || (word.includes('u')))){
        letter.pop();
      newline2.push(letter.join(""))
      }
      else {
        newline2.push(letter.join(""))
      }
    });

    line3Words.forEach(function(word){
     let letter = word.split("");
     if(letter.lastIndexOf(e) == (letter.length - 1) && (!word.includes('a')) && (!word.includes('i')) && (!word.includes('o')) && (!word.includes('u'))){
       newline3.push(letter.join(""))
      }
      else if (letter.lastIndexOf(e) == (letter.length - 1) && ((word.includes('a')) || (word.includes('i')) || (word.includes('o')) || (word.includes('u')))){
        letter.pop();
      newline3.push(letter.join(""))
      }
      else {
        newline3.push(letter.join(""))
      }
    });

    this.line1 = newline1.join(" ");
    this.line2 = newline2.join(" ");
    this.line3 = newline3.join(" ");
  }

  removeOneVowelFromDipthongs() {
    const dipthongs = ["oi", "oy", "ou", "ow", "au", "aw", "oo"];
    let line1Words = this.line1.split(" ");
    let line2Words = this.line2.split(" ");
    let line3Words = this.line3.split(" ");
    let line1Counter = 0
    let line2Counter = 0
    let line3Counter = 0

    line1Words.forEach(function(word){
      dipthongs.forEach(function(dipthong){
      if(word.includes(dipthong)){
      line1Counter --;
       }
       else {
       line1Counter += 0;
       }
     });
    });
    this.line1Counter += line1Counter

    line2Words.forEach(function(word){
      dipthongs.forEach(function(dipthong){
      if(word.includes(dipthong)){
      line2Counter --;
       }
       else {
       line2Counter += 0;
       }
     });
    });
    this.line2Counter += line2Counter

    line3Words.forEach(function(word){
      dipthongs.forEach(function(dipthong){
      if(word.includes(dipthong)){
      line3Counter --;
       }
       else {
       line3Counter += 0;
       }
     });
    });
    this.line3Counter += line3Counter
  }

  countVowels() {

    const vowels = ["a", "e", "i", "o", "u"];
    let line1Words = this.line1.split("");
    let line2Words = this.line2.split("");
    let line3Words = this.line3.split("");
    let line1Counter = 0;
    let line2Counter = 0;
    let line3Counter = 0;

    line1Words.forEach(function(word){

     let letter = word.split("");
     let counter = 0;
       vowels.forEach(function(vowel){
       if(letter.includes(vowel)){
       line1Counter ++;
        }
        else {
        line1Counter += 0;
        }
      });
    });

    this.line1Counter += line1Counter;

    line2Words.forEach(function(word){
     let letter = word.split("");
     let counter = 0;
       vowels.forEach(function(vowel){
       if(letter.includes(vowel)){
       line2Counter ++;
        }
        else {
        line2Counter += 0;
        }
      });
    });

    this.line2Counter += line2Counter;

    line3Words.forEach(function(word){
     let letter = word.split("");
     let counter = 0;
       vowels.forEach(function(vowel){
       if(letter.includes(vowel)){
       line3Counter ++;
        }
        else {
        line3Counter += 0;
        }
      });
    });
    debugger;
    this.line3Counter += line3Counter;
    if(this.line1Counter == 5 && this.line2Counter == 7 && this.line3Counter == 5){
      return true;
    } else {
      return false;
    }
  }
}

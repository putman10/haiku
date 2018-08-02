export class Haiku {
  constructor(line1, line2, line3, line1Counter, line2Counter, line3Counter) {
    this.line1 = line1.toLowerCase();
    this.line2 = line2.toLowerCase();
    this.line3 = line3.toLowerCase();
    this.line1Counter = 0;
    this.line2Counter = 0;
    this.line3Counter = 0;
  }
  testHaiku(){
    this.removeSilentLetter();
    this.addOneForYAtEnd();
    this.removeOneVowelFromDipthongs();
    this.removeOneVowelFromTwoVowelsInARow();
    return this.countVowels();
  }

  addOneForYAtEnd() {
    const y = "y";
    let line1Words = this.line1.split(" ");
    let line2Words = this.line2.split(" ");
    let line3Words = this.line3.split(" ");
    let line1Counter = 0;
    let line2Counter = 0;
    let line3Counter = 0;

    line1Words.forEach(function(word){
      if (word.includes(y)) {
      // if(word.charAt(word.length - 1) == y){
        line1Counter ++;
      }
    });
    this.line1Counter += line1Counter;

    line2Words.forEach(function(word){
    if (word.includes(y)) {
      // if(word.charAt(word.length - 1) == y){
        line2Counter ++;
      }
    });
    this.line2Counter += line2Counter;

    line3Words.forEach(function(word){
    if (word.includes(y)) {
      // if(word.charAt(word.length - 1) == y){
        line3Counter ++;
      }
    });
    this.line3Counter += line3Counter;
  }

  removeSilentLetter() {
    const e = "e";
    let line1Words = this.line1.split(" ");
    let line2Words = this.line2.split(" ");
    let line3Words = this.line3.split(" ");
    let newline1 = [];
    let newline2 = [];
    let newline3 = [];

    line1Words.forEach(function(word){
      let letter = word.split("");
      if(letter.lastIndexOf(e) == (letter.length - 1) && (!word.includes('a')) && (!word.includes('i')) && (!word.includes('o')) && (!word.includes('u'))){
        newline1.push(letter.join(""));
      }
      else if (letter.lastIndexOf(e) == (letter.length - 1) && ((word.includes('a')) || (word.includes('i')) || (word.includes('o')) || (word.includes('u')))){
        letter.pop();
        newline1.push(letter.join(""));
      }
      else {
        newline1.push(letter.join(""));
      }
    });

    line2Words.forEach(function(word){
      let letter = word.split("");

      if(letter.lastIndexOf(e) == (letter.length - 1) && (!word.includes('a')) && (!word.includes('i')) && (!word.includes('o')) && (!word.includes('u'))){
        newline2.push(letter.join(""));
      }
      else if (letter.lastIndexOf(e) == (letter.length - 1) && ((word.includes('a')) || (word.includes('i')) || (word.includes('o')) || (word.includes('u')))){
        letter.pop();
        newline2.push(letter.join(""));
      }
      else {
        newline2.push(letter.join(""));
      }
    });

    line3Words.forEach(function(word){
      let letter = word.split("");
      if(letter.lastIndexOf(e) == (letter.length - 1) && (!word.includes('a')) && (!word.includes('i')) && (!word.includes('o')) && (!word.includes('u'))){
        newline3.push(letter.join(""));
      }
      else if (letter.lastIndexOf(e) == (letter.length - 1) && ((word.includes('a')) || (word.includes('i')) || (word.includes('o')) || (word.includes('u')))){
        letter.pop();
        newline3.push(letter.join(""));
      }
      else {
        newline3.push(letter.join(""));
      }
    });

    this.line1 = newline1.join(" ");
    this.line2 = newline2.join(" ");
    this.line3 = newline3.join(" ");
  }

  removeOneVowelFromTwoVowelsInARow() {
    const vowels = ["a", "e", "i", "o", "u"];
    let line1Words = this.line1.split("");
    let line2Words = this.line2.split("");
    let line3Words = this.line3.split("");
    let line1Counter = 0;
    let line2Counter = 0;
    let line3Counter = 0;

    for (let i = 0; i < line1Words.length; i++) {
      vowels.forEach(function(vowel){
        if (line1Words[i] == vowel) {
          vowels.forEach(function(vowel){
            if (line1Words[i + 1] == vowel) {
              line1Counter --;
            }
            else {
              line1Counter += 0;
            }
          });
        }
      });
    }
    this.line1Counter += line1Counter;

    for (let j = 0; j < line2Words.length; j++) {
      vowels.forEach(function(vowel){
        if (line2Words[j] == vowel) {
          vowels.forEach(function(vowel){
            if (line2Words[j + 1] == vowel) {
              line2Counter --;
            }
            else {
              line2Counter += 0;
            }
          });
        }
      });
    }
    this.line2Counter += line2Counter;

    for (let k = 0; k < line3Words.length; k++) {
      vowels.forEach(function(vowel){
        if (line3Words[k] == vowel) {
          vowels.forEach(function(vowel){
            if (line3Words[k + 1] == vowel) {
              line3Counter --;
            }
            else {
              line3Counter += 0;
            }
          });
        }
      });
    }
    this.line3Counter += line3Counter;
  }

  removeOneVowelFromDipthongs() {
    const dipthongs = [ "oy", "aw", "ey", "ay"];
    let line1Words = this.line1.split(" ");
    let line2Words = this.line2.split(" ");
    let line3Words = this.line3.split(" ");
    let line1Counter = 0;
    let line2Counter = 0;
    let line3Counter = 0;

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
    this.line1Counter += line1Counter;

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
    this.line2Counter += line2Counter;

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
    this.line3Counter += line3Counter;
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

      vowels.forEach(function(vowel){
        if(letter.includes(vowel)){
          line3Counter ++;
        }
        else {
          line3Counter += 0;
        }
      });
    });

    this.line3Counter += line3Counter;
    if(this.line1Counter == 5 && this.line2Counter == 7 && this.line3Counter == 5){
      return true;
    } else {
      return false;
    }
  }
}

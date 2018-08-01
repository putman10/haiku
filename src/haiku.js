export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
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
      debugger;
     let letter = word.split("");
     if(letter.lastIndexOf(e) == (letter.length - 1)){
       letter.pop();
       newline1.push(letter.join(""))
      }
      else {
        newline1.push(letter.join(""))
      }
    });


    line2Words.forEach(function(word){
     let letter = word.split("");
     if(letter.lastIndexOf(e) == (letter.length - 1)){
       letter.pop();
       newline2.push(letter.join(""))
      }
      else {
        newline2.push(letter.join(""))
      }
    });

    line3Words.forEach(function(word){
     let letter = word.split("");
     if(letter.lastIndexOf(e) == (letter.length - 1)){
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
}

import { Haiku } from './../src/haiku';

describe('Haiku', function(){
  var reusableHaiku;

  beforeEach(function() {
    var string1 = "I am first with five";
    var string2 = "Then seven in the middle";
    var string3 = "Five again to end.";
    reusableHaiku = new Haiku(string1, string2, string3);
    console.log(reusableHaiku);
  });

 it('should test whether method returns words without e at the end', function(){
   console.log(reusableHaiku.removeSilentLetter());
   reusableHaiku.removeSilentLetter();
   expect(reusableHaiku.line1).toEqual("I am first with fiv");
 });
});

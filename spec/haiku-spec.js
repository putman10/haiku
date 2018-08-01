import { Haiku } from './../src/haiku';

describe('Haiku', function(){
  var reusableHaiku;

  beforeEach(function() {
    var string1 = "An old silent poond";
    var string2 = "A frog jumps into the pond";
    var string3 = "splash! Silence again.";
    reusableHaiku = new Haiku(string1, string2, string3);
  });

 it('should test whether method returns words without e at the end', function(){
   reusableHaiku.removeSilentLetter();
   expect(reusableHaiku.line1).toEqual("an old silent pond");
 });

 it('should test whether method returns true when vowels match Haiku standards', function(){
   reusableHaiku.removeSilentLetter();
   expect(reusableHaiku.countVowels()).toEqual(true);
 });
});

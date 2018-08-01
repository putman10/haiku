import {Haiku} from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  var string1 = "An old silent poond";
  var string2 = "A frog jumps into the pond";
  var string3 = "splash! Silence again.";
  var reusableHaiku = new Haiku(string1, string2, string3);
  reusableHaiku.removeSilentLetter();
  reusableHaiku.removeOneVowelFromDipthongs();
  reusableHaiku.countVowels();
});

import {Haiku} from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  var string1 = "I am first with five";
  var string2 = "Then seven in the middle";
  var string3 = "Five again to end.";
  var reusableHaiku = new Haiku(string1, string2, string3);
  reusableHaiku.removeSilentLetter();
});

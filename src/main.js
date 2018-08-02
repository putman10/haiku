import {Haiku} from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#haiku-checker").submit(function(event){
    event.preventDefault();
    var string1 = $("#line1").val();
    var string2 = $("#line2").val();
    var string3 = $("#line3").val();
    var reusableHaiku = new Haiku(string1, string2, string3);
    $(".results").text(reusableHaiku.testHaiku());
  });
});

import $ from "jquery";
import './header.css';

$(document).ready(function () {
  $('body').append('<h1>Holberton Dashboard</h1>');

  $('<div id="logo"></div>').insertBefore("h1:first");

  console.log('Init header');
});

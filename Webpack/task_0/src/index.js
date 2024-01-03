import $ from "jquery";

let p1 = $("<p></p>").text("Holberton Dashboard");
let p2 = $("<p></p>").text("Dashboard data for the students");
let p3 = $("<p></p>").text("Copyright - Holberton School");

$( document ).ready(function() {
    $("body").append(p1, p2, p3);
});
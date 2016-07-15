"use strict";var questions=[{id:0,imageOne:"images/dylan.png",nameOne:"Dylan McDermott",imageTwo:"images/dermot.png",nameTwo:"Dermot Mulroney",correctAnswer:[]},{id:1,imageOne:"images/q1_img1.png",nameOne:"The Burger King",imageTwo:"images/q1_img2.png",nameTwo:"Mel Gibson",correctAnswer:[0,3]},{id:2,imageOne:"images/q2_img1.jpg",nameOne:"Djimon Hounsou",imageTwo:"images/q2_img2.jpg",nameTwo:"Chiwetel Ejiofor",correctAnswer:[0,3]},{id:3,imageOne:"images/q3_img1.png",nameOne:"Stephen Colbert",imageTwo:"images/q3_img2.png",nameTwo:"Bob Saget",correctAnswer:[1,2]},{id:4,imageOne:"images/q4_img1.png",nameOne:"Eric Dane",imageTwo:"images/q4_img2.png",nameTwo:"Leonardo DiCaprio",correctAnswer:[1,2]},{id:5,imageOne:"images/q5_img1.png",nameOne:"Joe Swanson",imageTwo:"images/q5_img2.png",nameTwo:"Kevin James",correctAnswer:[1,2]}];$(function(){function t(){g=0,$("#intro-wrapper").show(),$("#question-wrapper").hide(),$("#results-wrapper").hide()}function e(){$("#tutorial-one-a").show(),$("#tutorial-button").show(),$("#skip-button").show(),$("#skip-button").click(l),$("#tutorial-button").click(o)}function o(){$("#tutorial-one-a h3").text("Click on the corresponding arrow."),$("#top-left").addClass("btn-success"),$("#bottom-right").addClass("btn-success"),$("#tutorial-button").click(s)}function s(){console.log("Tutorial C"),$(".next-button").show(),$("#tutorial-one-a h3").text("Click on the right arrow to see if you were right."),$("#tutorial-one-b").hide(),$("#tutorial-button").click(n)}function n(){$("#tutorial-one-a h3").text("Click on ready to continue."),$("#tutorial-one-b").hide(),$("#tutorial-one-c").hide(),$("#skip-button").hide(),$("#tutorial-button").addClass("btn-warning"),$("#tutorial-button").text("Ready!"),$("#tutorial-button").click(l),$(".next-button").off("click").on("click",l)}function a(){$(".next-button").hide(),e()}function i(t){var e=questions[t];$(".question-header").text("Question "+g),$("#nameOne").text(questions[t].nameOne),$("#nameTwo").text(questions[t].nameTwo),$("#imageOne").attr("src",e.imageOne),$("#imageTwo").attr("src",e.imageTwo),f=questions[t].correctAnswer,$(".next-button").off("click").on("click",r)}function r(){$(".question-header").text("Question "+g+" Results"),f[0]==d[0]?($("#results-box").css("background-color","green"),$("#results-box h3").text("Correct!"),h.push(!0)):($("#results-box").css("background-color","crimson"),$("#results-box h3").text("Incorrect!"),h.push(!1)),$("#results-box").show(),$(".next-button").off("click").on("click",l),$("#top-left").off("click"),$("#top-right").off("click"),$("#bottom-left").off("click"),$("#bottom-right").off("click")}function c(){$("#top-left").removeClass("btn-success"),$("#top-right").removeClass("btn-success"),$("#bottom-left").removeClass("btn-success"),$("#bottom-right").removeClass("btn-success")}function l(){$("#tutorial-one-a").hide(),$("#results-box").hide(),$(".next-button").show(),$(".next-button").off("click").on("click",l),$("#skip-button").hide(),$("#tutorial-button").hide(),c(),$("#top-left").off("click").on("click",b),$("#top-right").off("click").on("click",b),$("#bottom-left").off("click").on("click",b),$("#bottom-right").off("click").on("click",b),g++,g<=5?i(g):($("#question-wrapper").hide(),$("#results-wrapper").show(),u())}function u(){console.log(h.length);var t=0;h.forEach(function(e,o){console.log(o);var s="";e?(s='<span class="correct">✓</span>',t++):s='<span class="incorrect">✗</span>',$(".q"+(o+1)).html("Question "+(o+1)+": "+s)}),$(".overall").text(t+"/5  "+t/5*100+"%")}function m(){$("#intro-wrapper").hide(),$("#results-wrapper").hide(),$("#question-wrapper").show(),a()}function b(){$(event.target).closest("button").addClass("btn-success");var t=$(event.target).closest("button").attr("id");switch(t){case"top-left":$("#top-right").removeClass("btn-success"),$("#top-right").addClass("btn-default"),$("#bottom-left").removeClass("btn-success"),$("#bottom-left").addClass("btn-default"),$("#bottom-right").addClass("btn-success"),$("#bottom-right").removeClass("btn-default"),d=[0,3];break;case"bottom-left":$("#top-left").removeClass("btn-success"),$("#top-left").addClass("btn-default"),$("#bottom-right").removeClass("btn-success"),$("#bottom-right").addClass("btn-default"),$("#top-right").addClass("btn-success"),$("#top-right").removeClass("btn-default"),d=[1,2];break;case"top-right":$("#top-left").removeClass("btn-success"),$("#top-left").addClass("btn-default"),$("#bottom-right").removeClass("btn-success"),$("#bottom-right").addClass("btn-default"),$("#bottom-left").addClass("btn-success"),$("#bottom-left").removeClass("btn-default"),d=[1,2];break;case"bottom-right":$("#top-right").removeClass("btn-success"),$("#top-right").addClass("btn-default"),$("#bottom-left").removeClass("btn-success"),$("#bottom-left").addClass("btn-default"),$("#top-left").addClass("btn-success"),$("#top-left").removeClass("btn-default"),d=[0,3];break;default:console.log("Something went wrong!")}}var g,d=[],f=[],h=[];$(".start-button").click(m),t()});
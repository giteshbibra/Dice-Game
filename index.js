// Generating a random number from 1-6
// 1 for each dice 

var randomNumber1= Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1= Math.floor(randomNumber1);

var randomNumber2= Math.random();
randomNumber2=(randomNumber2*6)+1;
randomNumber2= Math.floor(randomNumber2);

// Generating random images by formatting them using randomNumber variable 1-6

var randomimage1 = "images/dice" + randomNumber1 + ".png";

var randomimage2 = "images/dice" + randomNumber2 + ".png";

// Changing image6 from HTML to any image from 1-6 using set attribute

document.querySelector(".dice .img1").setAttribute("src",randomimage1);

document.querySelector(".dice .img2").setAttribute("src",randomimage2);

// Changing the innerHTML to display winner

var message1="Player 1 Wins!";
var message2="Player 2 Wins! ";
var message3="Its a Draw!";

if(randomNumber1>randomNumber2)
{
    document.querySelector(".container h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector(".container h1").innerHTML="Player 2 Wins! 🚩";
}
else
{
    document.querySelector(".container h1").innerHTML="🚩 Its a Draw! 🚩";
}
var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
var rdice="dice"+randomNumber1+".png";
var rdice2="dice"+randomNumber2+".png";
var sourcedice="images/"+rdice;
document.querySelectorAll("img")[0].setAttribute("src",sourcedice);
document.querySelectorAll("img")[1].setAttribute("src","images/"+rdice2);
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}else{
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}



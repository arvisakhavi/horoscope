

var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
var months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
var messages = [" you will be lucky"," you will be successful"," you will find happiness"," you will meet new people"," you will find love"," you will spend time with your family"," you will find a new hobby"," you will go on a new adventure"," you will spend time with your pets"," you will relax"," you will find time for yourself"," you will surprise others"];
//make a global var of signs


// var messages = ["you will be lucky", ....]

function onSubmit(){
    var day = parseInt(document.getElementById("days").value);
    var month = parseInt(document.getElementById("month").value);
    var name = (document.getElementById("name").value);


    if(month == 0 || day == 0){
        document.getElementById("output").innerHTML = "choose a month and day" ;
    }else{
        document.getElementById("output").innerHTML = signs[determineSign(month, day)] + "! " + name;
        document.getElementById("output").innerHTML += messages[determineHoroscope(determineSign(month, day))];
        document.getElementById("img").innerHTML = "<img src=img/" + signs[determineSign(month, day)] + ".jpg>";
    }
}
    /*
grab day and month from the page

    determine sign - pass day and month, but be sure to change them to numbers
    using parseInt(string)

    once you have the sign, write it out to the page
     var sign = determineSign(month,day)
     the actual sign text is : signs[sign]
*/



function determineSign(month,day){
    if((month == 1 && day >= 20)||(month == 2 && day <= 18)){
        document.getElementById("img").innerHTML="<img src='img/" + "aquarius.jpg'>";
        return 0;
    }
    if((month == 2 && day >= 19)||(month == 3 && day <=20)){
        document.getElementById("img").innerHTML="<img src='img/" + "pices.jpg'>";
        return 1;
    }
    if((month == 3 && day >= 21)||(month == 4 && day <= 19)){
        document.getElementById("img").innerHTML="<img src='img/" + "aries.jpg'>";
        return 2;
    }
    if((month == 4 && day >= 20)||(month == 5 && day <=20)){
        document.getElementById("img").innerHTML="<img src='img/" + "taurus.jpg'>";
        return 3;
    }
    if((month == 5 && day >= 21)||(month == 6 && day <=20)){
        document.getElementById("img").innerHTML="<img src='img/" + "gemini.jpg'>";
        return 4;
    }
    if((month == 6 && day >= 21)||(month == 7 && day <=22)){
        document.getElementById("img").innerHTML="<img src='img/" + "cancer.jpg'>";
        return 5;
    }
    if((month == 7 && day >= 23)||(month == 8 && day <=22)){
        document.getElementById("img").innerHTML="<img src='img/" + "leo.jpg'>";
        return 6;
    }
    if((month == 8 && day >= 23)||(month == 9 && day <=22)){
        document.getElementById("img").innerHTML="<img src='img/" + "virgo.jpg'>";
        return 7;
    }
    if((month == 9 && day >= 23)||(month == 10 && day <=22)){
        document.getElementById("img").innerHTML="<img src='img/" + "libra.jpg'>";
        return 8;
    }
    if((month == 10 && day >= 3)||(month == 11 && day <=21)){
        document.getElementById("img").innerHTML="<img src='img/" + "scorpio.jpg'>";
        return 9;
    }
    if((month == 11 && day >= 22)||(month == 12 && day <=21)){
        document.getElementById("img").innerHTML="<img src='img/" + "sagittarius.jpg'>";
        return 10;
    }
    if((month == 12 && day >= 22)||(month == 1 && day <=19)){
        document.getElementById("img").innerHTML="<img src='img/" + "capricorn.jpg'>";
        return 11;
    }
}

function determineHoroscope(sign){
    if(sign == 0){
       return 0;
    }
    if(sign == 1){
        return 1;
    }
    if(sign == 2){
        return 2;
    }
    if(sign == 3){
        return 3;
    }
    if(sign == 4){
        return 4;
    }
    if(sign == 5){
        return 5;
    }
    if(sign == 6){
        return 6;
    }
    if(sign == 7){
        return 7;
    }
    if(sign == 8){
        return 8;
    }
    if(sign == 9){
        return 9;
    }
    if(sign == 10){
        return 10;
    }
    if(sign == 11){
        return 11;
    }
}







//function getImage(sign){
//    document.getElementById("image").innerHTML = "<imgsrc=' img/" + getImage(sign) + ".png'>";
//    <div id="image"></div>

//}


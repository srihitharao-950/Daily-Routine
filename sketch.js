const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await response.json();
    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    console.log(hour);

    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=10){
        bg = "sunset3.png";
    }else if(hour>=10 && hour<=12){
        bg = "sunset4.png";
    }else if(hour>=12 && hour<=14){
        bg = "sunset5.png";
    }else if(hour>=14 && hour<=16){
        bg = "sunset6.png";
    }else if(hour>=16 && hour<=18){
        bg = "sunset7.png";
    }else if(hour>=18 && hour<=20){
        bg = "sunset8.png";
    }else if(hour>=20 && hour<=22){
        bg = "sunset10.PNG";
    }else if(hour>=22 && hour<=0){
        bg = "sunset11.png";
    }else{
        bg = "sunset12.PNG";
    }
    
backgroundImg = loadImage(bg);

}  
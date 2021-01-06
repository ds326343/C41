var gamestate = 0;
var playerCount = 0;
var database 
var form
var player
var game 
var allPlayers
var car1,car2,car3,car4
var cars
var playerRank
function preload(){
    car1image = loadImage("car1.png");
    car2image = loadImage("car2.png");
    car3image = loadImage("car3.png");
    car4image = loadImage("car4.png");
    groundimage = loadImage("ground.png");
    trackimage = loadImage("track.jpg");
    track2image = loadImage("track.png");
    carSound = loadSound("carSound.mp3");
}

function setup(){  
    database = firebase.database();
    createCanvas(displayWidth-50,displayHeight-50);
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    if(playerCount===4){
        game.update(1);
    }  
    if(gamestate===1){
        clear();
        game.play();
    } 
    if(gamestate===2){
        game.end();
    }
}


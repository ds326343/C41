class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref('Gamestate');
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })

        
    }
    update(state){
        database.ref('/').update({
            Gamestate : state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player()
            var playercountref = await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display()
        }
        car1 = createSprite(100,200,40,40);
        car1.addImage(car1image);
        car2 = createSprite(300,200,40,40);
        car2.addImage(car2image);
        car3 = createSprite(500,200,40,40);
        car3.addImage(car3image);
        car4 = createSprite(700,200,40,40);
        car4.addImage(car4image);
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hideDetails();
        Player.GetPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers!==undefined){
            background(groundimage);
            image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5);
            //Index of the array
            var index = 0

            //X and Y positions of the car
            var x = 250;
            var y ;
            
            for(var plr in allPlayers){
                index = index + 1
                //Position the cars a little away from each other in X direction
                x = x + 285
                //Use data from the database to display the cars in Y direction
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x
                cars[index - 1].y = y
                if(index === player.index){
                    cars[index - 1].shapeColor = "red"
                    stroke(10);
                    fill("red");
                    ellipse(x,y,120,120);
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index - 1].y;
                    
                }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50
            player.update();
        }
        if(player.distance>5500){
            gamestate = 2
            player.rank+=1
            Player.updateCarsAtEnd(player.rank);
            playerRank = player.rank;
        }
    }
    drawSprites();
    }
    end(){
       console.log("Game End") 
       console.log(player.rank);
       var r = createElement('h1',playerRank);
        r.position(displayWidth/2,displayHeight/2);
    }
}
class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.title = createElement('h1');
        this.reset = createButton("Restart")
    }
    hideDetails(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
       this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-90,10)
        this.input.position(displayWidth/2-90,displayHeight/2-190)
        this.button.position(displayWidth/2-30,displayHeight/2-160);
        this.greeting.position(displayWidth/2-90,displayHeight/2-160)
        this.reset.position(displayWidth-90,10);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1 
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
        })
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            Player.updateCarsAtEnd(0);
        })
        
    }
}
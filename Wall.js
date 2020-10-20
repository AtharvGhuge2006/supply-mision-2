class Wall{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var Options={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,width,height,Options)
    World.add(world,this.body);
    
    
    }
    display(){
        rectMode(CENTER)
        stroke("red")
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
  }
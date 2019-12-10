class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 30;
        this.image = loadImage("images/player.png");
        this.Visibility = 255;
    }
    destroy(){
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visiblity);
    }
    display(){
        this.y = mouseY;
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width*3,this.height*3);
        }
       
}
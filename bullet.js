class Bullet{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.height=20;
        this.width=10
        this.image = loadImage("images/daBullt.webp");

    };
    fire(bullet_pos){
        this.x = this.x+bullet_pos*5;
    }
    display(){
        fill(255,255,255);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width*3,this.height*3);
    }
    isTouching(player1){
        var bult_pos = dist(this.x,this.y,player1.x,player1.y);
        if(bult_pos<this.width+player1.y){
            return true;
        }
        else{
            return false;
        }
    }
   
}
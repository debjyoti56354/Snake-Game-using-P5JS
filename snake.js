function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
   // print("entered snake const");
    
    this.dir(x,y){
        
        this.xspeed=x;
        this.yspeed=y;
    }
    
    this.update = function() {
        this.x=this.x + this.xspeed;
        this.y=this.y+this.yspeed;
     //   print(this.y+"-- "+this.x+"--"+this.xspeed+"--"+this.yspeed);
    }
    
    this.show= function() {
        fill(255,0,255);
        rect(this.x,this.y,10,10);
        //print("DRAW snake const");
        
    }
}
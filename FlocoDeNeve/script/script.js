var canvas = document.createElement('canvas')
canvas.style.position="absolute"
canvas.style.top="0px"
canvas.style.left="0px"
canvas.style.zIndex="-9999999"
document.body.appendChild(canvas)
var ctx = canvas.getContext('2d')

class SnowFlake {
    x=0;
    y=0;
    color=null;
    bodyLength = 0;
    img = null;

    constructor(bodyLength,color,imgSrc){
        this.x = Math.random()*canvas.width;
        this.y= 0;
        this.color = color;
        var t = Math.random()*bodyLength;
        this.bodyLength = (t<=6)?6:t;
        this.img = new Image();
        if(imgSrc.length>0){
            this.img.src = imgSrc;
        }else{
           this.img.src = "http://tnhnok-001-site7.itempurl.com/scripts/snow.png"
       }
    }
    drawFlake(){
        for(var i=0;i<this.list.length;i++){
            var o = this.list[i];
            if(this.img.src.length>0){
                ctx.drawImage(this.img,o.x+o.bodyLength,o.y+o.bodyLength,o.bodyLength,o.bodyLength);
            }else{
                ctx.fillStyle=this.color;
                ctx.fillRect(o.x+o.bodyLength,o.y+o.bodyLength,o.bodyLength,o.bodyLength);
            }  
        }    
    }
    gravity=2;
    wind= Math.random()*0.3;
    update(){
        if(this.interval==0){
            this.insertFlake();
        }else{
            this.interval--;
        }
        for(var i=0,tam=this.list.length;i<tam;i++){
            var o = this.list[i];
            o.y+=o.gravity;
            o.x+=o.wind;
            if(o.y>canvas.height || o.x>canvas.width ||o.x<0 ){
                this.list.splice(i,1);
                tam--;
            }
        }
    }
    clear(){
        this.list=[];
    }
    list=[];
    interval=0;
    insertFlake(){
        this.list.push(new SnowFlake(this.bodyLength,this.color,this.img.src));
        this.interval=1;               
    }        
}


class AnimaCanvas{
    constructor(animatedObject){
        this.animatedObject = animatedObject;
    }        
    animatedObject=null;
    update(){
        canvas.width = document.body.clientWidth
        canvas.height = (document.body.clientHeight<window.innerHeight)?window.innerHeight:document.body.clientHeight 
        this.animatedObject.update()
    }
    draw(){
        this.animatedObject.drawFlake()
    }
    init(){
        this.update(this.animatedObject)
        this.draw(this.animatedObject)    
        window.requestAnimationFrame(this.init.bind(this))
    }
}    

function load(){
  Anima = new AnimaCanvas();
}


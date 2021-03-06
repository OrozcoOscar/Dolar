/**
OrozcoOscar
v4.9
18/10/21
**/

function $(argument) {
	class obj {
		constructor(e) {
			this.tag = e
			if(this.tag.length>1){
				this._current=[]
				this.tag.map(t => this._current.push(new obj(t)) )
			}
			else{ this.tag = e[0] || e;}
		}
		html(e) {
			if (!e) return this.tag.innerHTML;
			if (this.tag.length > 1)
				for (var t = 0; t < this.tag.length; t++) this.tag[t].innerHTML = e;
			else this.tag.innerHTML = e
		}
		event(e, t) {
			if (this.tag.length > 1)
				for (var n = 0; n < this.tag.length; n++) this.tag[n].addEventListener(e, t);
			else this.tag.addEventListener(e, t)
		}
		val(e) {
			return e ? this.tag.value = e : this.tag.value
		}
		src(e) {
			return e ? this.tag.src = e : this.tag.src
		}
		attr(e, t) {
			if (this.tag.length > 1)
				for (var n = 0; n < this.tag.length; n++) this._current[n].attr(e, t);
			else this.tag.setAttribute(e, t)
		}
		append(e) {
			try {
				if (this.tag.length > 1)
					for (var t = 0; t < this.tag.length; t++) this.tag[t].innerHTML += e;
				else this.tag.innerHTML += e
			} catch (e) {}
		}
		css(obj) {
			if (this.tag.length > 1)
				for (var i = 0; i < this.tag.length; i++)
					for (let p in obj) this.tag[i].style[p]=obj[p]
			else
				for (let p in obj) this.tag.style[p]=obj[p]
		}
		toggleClass(e) {
			if (this.tag.length > 1)
				for (var t = 0; t < this.tag.length; t++) this.tag[t].classList.toggle(e);
			else this.tag.classList.toggle(e)
		}
		removeClass(e) {
			if (this.tag.length > 1)
				for (var t = 0; t < this.tag.length; t++) this.tag[t].classList.remove(e);
			else this.tag.classList.remove(e)
		}
	}
	let n= [];
	let tag=document.querySelectorAll(argument)
	if (tag.length > 1) for (var t = 0; t < tag.length; t++) n.push(tag[t]) 
	else n[0] = tag[0];
	
	if(n.length>0)return (new obj(n))
	else return undefined
}
function createMatriz(f,c,r=0) {let m=[f];for (var i = 0; i <f; i++) {m[i]=[];for (var e = 0; e < c; e++) {m[i][e]=r;}}return m;}
function Random(min, max) { return Math.floor(Math.random() * (max - min)) + min;}//no incluye al max
function Get() {let cont=window.location.search;if(cont.indexOf("=")>-1){let json="{";let get=cont.replace("?","");get=get.split("&");get.map((e,i)=>{e=e.split("=");if(i<get.length-1)json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\",";else json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\""+"}";});return JSON.parse(json);}else return null;}

const toRad=(g)=>g*Math.PI/180
const toGrad=(r)=>r*180/Math.PI
const binToASCII=(bin)=>bin.map(b=>parseInt(b,2).toString(10))//bin:[]
const numToBin=(num)=>num.toString(2)
const asciiToText=(ascii)=>String.fromCharCode(...ascii)//ascii:int[]
const textToAscii=(text)=>text.split("").map(c=>c.charCodeAt(0))
const textToBin=(text)=>textToAscii(text).map(c=>numToBin(c))
const binToNum=(bin)=>parseInt(bin,2);

function moveTo(obj,x,y,tipo="relative") {// mueve un elemento html;obj:String("selector del elento (.element,#element o etiqueta html))
	obj=document.querySelectorAll(obj)
	obj.forEach((e)=>{
		e.style.position=tipo
		e.style.left=x+"px"
		e.style.top=y+"px"

	})
}
class GESTOR{
	constructor(tag){
		this.fin=0//Fin del ciclo
		this.aps=0//Actualizaciones por segundo
		this.fps=0//Frames por segundo
		this.tag=tag	
	}
    start(tiempo){
        this.aps++;
        this.fps++;
        var diferencia=tiempo-this.fin;
        if( diferencia > 999 ){
            if(this.tag!=""){
                document.querySelector(this.tag).innerHTML=(`
                tiempo:${tiempo}<br>
                aps:${this.aps}<br>
                fps:${this.fps}<br>
                `);
            }
            this.fin=tiempo;
            this.fps=0;
            this.aps=0;
        }
    }
   
}
class Canvas{// new Canvas()  o new Canvas("#mycanvas") si solo hay un canvas,new Canvas(".mycanvas")
	constructor(obj="canvas"){
		this.tag=$(obj).tag;
		this.$=$(obj)
		this.width=this.tag.width
		this.height=this.tag.height
		if(this.tag)this.ctx=this.tag.getContext("2d");
		else console.error("NO se encuentra un elemnto canvas");
	}
	clear(n){
		if(n){
			this.rect(0,0,this.tag.width,this.tag.height,"rgb("+n+")",true)
		}else{
			this.ctx.clearRect(0, 0,this.tag.width,this.tag.height);
		}
	}

	getCanvas(){
		return $("canvas");
	}
	polygon(x,y, n, radio, angulo=undefined){
            let incremento= 360/n;
            let vx=[], vy=[];
            let radians;
            if(angulo==undefined){
                angulo= 90+180;
                if(n%2==0){
                    angulo+=incremento/2;
                }
            }
            for (let i = 0; i < n; i++) {
                radians = toRad(angulo);
                vx[i] = parseInt(x + radio * Math.cos(radians));
                vy[i] = parseInt(y + radio * Math.sin(radians));
                angulo += incremento;
            }
            this.ctx.beginPath();
            this.ctx.moveTo(vx[0], vy[0]);
            for(let i=1 ; i<vx.length ; i++) {this.ctx.lineTo( vx[i] , vy[i] )}

            this.ctx.closePath();
            this.ctx.stroke();
        }
	rect(x,y,w,h,c,f=false,r=false){
	//x:int y:int w:int h:int c:String(color) f:bool(relleno) r:int,array[4]:int (valores de redondes de las esquinas)
		if(r){
			if(Number(r)){
				this.ctx.beginPath()
				this.ctx.save();
				this.ctx.fillStyle =c;
				this.ctx.strokeStyle =c;
				this.ctx.arc(x+r,y+r,r,toRad(180),toRad(-90));
				this.ctx.arc(x+w-r,y+r,r,toRad(-90),toRad(0));
				this.ctx.arc(x+w-r,y+h-r,r,toRad(0),toRad(90));
				this.ctx.arc(x+r,y+h-r,r,toRad(90),toRad(180));
				this.ctx.moveTo(x,y+r);
	       		this.ctx.lineTo(x,y+h-r);
				this.ctx.stroke();
			}else{
				this.ctx.beginPath()
				this.ctx.save();
				this.ctx.fillStyle =c;
				this.ctx.strokeStyle =c;
				this.ctx.arc(x+r[0],y+r[0],r[0],toRad(180),toRad(-90));
				this.ctx.arc(x+w-r[1],y+r[1],r[1],toRad(-90),toRad(0));
				this.ctx.arc(x+w-r[2],y+h-r[2],r[2],toRad(0),toRad(90));
				this.ctx.arc(x+r[3],y+h-r[3],r[3],toRad(90),toRad(180));
				this.ctx.moveTo(x,y+r[0]);
	       		this.ctx.lineTo(x,y+h-r[3]);
				this.ctx.stroke();
			}
			if(f)this.ctx.fill();
		}else{
			if(f){
				this.ctx.fillStyle=c;
				this.ctx.fillRect(x,y,w,h);
			}else{
				this.ctx.strokeStyle=c;
				this.ctx.strokeRect(x,y,w,h);
			}
		}
	
	}
	circle(x,y,r,c,f=false){
		this.ctx.beginPath()
		this.ctx.save();
		this.ctx.fillStyle =c;
		this.ctx.strokeStyle =c;
		this.ctx.arc(x,y,r,0,Math.PI*2);
		this.ctx.stroke();
		if(f)this.ctx.fill();
	}
	elipce(x,y,w,h,c,f=false){//inserta una elipce dentro de un rectangulo
		let esc=Math.abs(w/h)
		this.ctx.save();
		this.ctx.scale(esc, 1);
		this.ctx.beginPath();
		this.ctx.arc((x/esc)+w/(2*esc),y+h/2,Math.abs(h/2), 0, 2 * Math.PI );
		this.ctx.restore();
		this.ctx.strokeStyle =c;
		this.ctx.stroke();		
		if(f)this.ctx.fill();
	}

	line(x,y,xf,yf,w=3,c){
		this.ctx.lineWidth=w
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.strokeStyle =c;
		this.ctx.moveTo(xf,yf);
      		this.ctx.lineTo(x,y);
       		this.ctx.stroke();
		this.ctx.restore();
			
	}

	rotate(cx,cy,a){//recibe el centro de la figura y el angulo en radiandes podria usar toRand(grados)
		this.ctx.save();
		this.ctx.translate(cx, cy);
		this.ctx.rotate(a);
		this.ctx.translate(-cx, -cy);
	}
	text(t,x,y,s=23,c="green"){
		this.ctx.fillStyle=c;
		this.ctx.font="bold "+s+"px sans-serif";
		this.ctx.fillText(t,x,y);
	}
	size(w=null,h=null){
		if(w)this.tag.width=w;
		if(h)this.tag.height=h;
		this.width=this.tag.width
		this.height=this.tag.height
		return {w:this.tag.width,h:this.tag.height}
	}
	fill(){//canvas en tama??o completo de la pag
		this.tag.width=innerWidth;
		this.tag.height=innerHeight;
		this.width=this.tag.width
		this.height=this.tag.height
		$("body").css({margin:0,padding:0,overflow:"hidden"});
	}
	event(e,f){//a??ade ventos al canvas "click" ,"key" etc; canvas.event("click",myFuncion)
		this.$.event(e,f);
	}
	img(img,x,y,w,h,cutX=0,cutY=0,cutW=null,cutH=null,espX=1,espY=1){
		//maneja imagenes;img:Image,x:Int,y:Int,w:Int,h:Int,cutX,cutY,cut... son para recortar,espX,espY son para efecto de espejo
		(!cutW)?cutW=img.width:false;
		(!cutH)?cutH=img.height:false;

		let ax = 0, ay = 0;
		if(espX==-1) ax= -w;
		if(espY==-1) ay= -h;
		
		this.ctx.scale(espX,espY);
		this.ctx.drawImage(img,cutX,cutY,cutW,cutH,espX*x+ax,espY*y+ay,w,h);
		this.ctx.scale(espX,espY);
	}
	setResponsive(px,py){//recibe posicion relativa
		return [px/this.width,py/this.height]
	}
	getResponsive(px,py){//obtiene psicion relativa basada en posiciones absolutas
		return [px*this.width,py*this.height]
	}
	getMousePosition(evt){
		let ClientRect = this.tag.getBoundingClientRect(), 
        	scaleX = this.width / ClientRect.width,
        	scaleY = this.height / ClientRect.height; 
            	return {
             	   x: (evt.clientX - ClientRect.left) * scaleX, 
             	   y: (evt.clientY - ClientRect.top) * scaleY 
           	 }
	}
}

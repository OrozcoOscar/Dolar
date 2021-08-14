/**
OrozcoOscar
v4.5
3/08/21
**/

function $(argument){class obj{constructor(e){this.element=e,this.this=this.element}html(e){if(!e)return this.this.innerHTML;if(this.element.length>1)for(var t=0;t<this.element.length;t++)this.element[t].this.innerHTML=e;else this.element.innerHTML=e}event(e,t){if(this.element.length>1)for(var n=0;n<this.element.length;n++)this.element[n].this.addEventListener(e,t);else this.element.addEventListener(e,t)}val(e){return e?this.element.value=e:this.element.value}src(e){return e?this.element.src=e:this.element.src}attr(e,t){if(this.element.length>1)for(var n=0;n<this.element.length;n++)this.element[n].attr(e,t);else this.element.setAttribute(e,t)}append(e){try{if(this.element.length>1)for(var t=0;t<this.element.length;t++)this.element[t].this.innerHTML+=e;else this.element.innerHTML+=e}catch(e){}}css(obj){if(this.element.length>1)for(var i=0;i<this.element.length;i++)for(let p in obj)eval("this.element["+i+"].this.style."+p+"='"+obj[p]+"'");else for(let p in obj)eval("this.element.style."+p+"='"+obj[p]+"'")}toggleClass(e){if(this.element.length>1)for(var t=0;t<this.element.length;t++)this.element[t].this.classList.toggle(e);else this.element.classList.toggle(e)}removeClass(e){if(this.element.length>1)for(var t=0;t<this.element.length;t++)this.element[t].this.classList.remove(e);else this.element.classList.remove(e)}}let n;if(document.querySelectorAll(argument).length>1){n=[];for(var i=0;i<document.querySelectorAll(argument).length;i++)n.push(new obj(document.querySelectorAll(argument)[i]))}else n=document.querySelectorAll(argument)[0];try{return n.length,new obj(n)}catch(e){}}
function createMatriz(f,c,r=0) {let m=[f];for (var i = 0; i <f; i++) {m[i]=[];for (var e = 0; e < c; e++) {m[i][e]=r;}}return m;}
function Random(min, max) { return Math.floor(Math.random() * (max - min)) + min;}//no incluye al max
function Get() {let cont=window.location.search;if(cont.indexOf("=")>-1){let json="{";let get=cont.replace("?","");get=get.split("&");get.map((e,i)=>{e=e.split("=");if(i<get.length-1)json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\",";else json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\""+"}";});return JSON.parse(json);}else return null;}

function toRad(g) {
	return g*Math.PI/180
}
function toGrad(r) {
	return r*180/Math.PI
}
function moveTo(obj,x,y,tipo="relative") {
	obj=document.querySelectorAll(obj)
	obj.forEach((e)=>{
		e.style.position=tipo
		e.style.left=x+"px"
		e.style.top=y+"px"

	})
}
class Canvas{
	constructor(obj="canvas"){
		this.this=$(obj).this;
		this.element=$(obj)
		this.width=this.this.width
		this.height=this.this.height
		if(this.this)this.ctx=this.this.getContext("2d");
		else console.error("NO se encuentra un elemnto canvas");
	}
	clear(n){
		if(n){
			this.rect(0,0,this.this.width,this.this.height,"rgb("+n+")",true)
		}else{
			this.this.width=this.this.width;
		}
	}

	getCanvas(){
		return $("canvas");
	}
	rect(x,y,w,h,c,f=false,r=false){//x:int y:int w:int h:int c:String(color) f:bool(relleno) r:int,array[4]:int (valores de redondes de las esquinas)
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
		if(w)this.this.width=w;
		if(h)this.this.height=h;
		this.width=this.this.width
		this.height=this.this.height
		return {w:this.this.width,h:this.this.height}
	}
	fill(){
		this.this.width=innerWidth;
		this.this.height=innerHeight;
		this.width=this.this.width
		this.height=this.this.height
		$("body").css({margin:0,overflow:"hidden"});
	}
	event(e,f){
		this.element.event(e,f);
	}
	img(img,x,y,w,h,cutX=0,cutY=0,cutW=null,cutH=null,espX=1,espY=1){
		(!cutW)?cutW=img.width:false;
		(!cutH)?cutH=img.height:false;

		let ax = 0, ay = 0;
		if(espX==-1) ax= -w;
		if(espY==-1) ay= -h;
		
		this.ctx.scale(espX,espY);
		this.ctx.drawImage(img,cutX,cutY,cutW,cutH,espX*x+ax,espY*y+ay,w,h);
		this.ctx.scale(espX,espY);
	}
	setResponsive(px,py){
		return [px/this.width,py/this.height]
	}
	getResponsive(px,py){
		return [px*this.width,py*this.height]
	}
	getMousePosition(evt){
		let ClientRect = this.this.getBoundingClientRect(), 
        scaleX = this.width / ClientRect.width,
        scaleY = this.height / ClientRect.height; 
            return {
                x: (evt.clientX - ClientRect.left) * scaleX, 
                y: (evt.clientY - ClientRect.top) * scaleY 
            }
	}
}


/**
OrozcoOscar
v4.10
30/08/22
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
		removeEvent(e, t) {
			if (this.tag.length > 1)
				for (var n = 0; n < this.tag.length; n++) this.tag[n].removeEventListener(e, t);
			else this.tag.removeEventListener(e, t)
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
/**
     * Resolver Ecuaciones lineales 
     * @param p1 primer punto.
     * @param p2  segundo punto.
     */
function distanceBetweenPoints(p1={x:0,y:0},p2={x:0,y:0}){
	return Math.sqrt((p1.x-p2.x)**2+(p1.y-p2.y)**2)
}
function createMatriz(f,c,r=0) {let m=[f];for (var i = 0; i <f; i++) {m[i]=[];for (var e = 0; e < c; e++) {m[i][e]=r;}}return m;}
function Random(min, max) { return Math.floor(Math.random() * (max - min)) + min;}//no incluye al max
function Get() {let cont=window.location.search;if(cont.indexOf("=")>-1){let json="{";let get=cont.replace("?","");get=get.split("&");get.map((e,i)=>{e=e.split("=");if(i<get.length-1)json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\",";else json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\""+"}";});return JSON.parse(json);}else return null;}
/**
     * Resolver Ecuaciones lineales 
     * @param M Matriz de coeficientes.
     * @param equality  Array de igualdades.
	 * -----------------------------------
	 * Ej: M=[[2,1],[5,2]] equality=[10,10]
	 *  es equivalente  a 2x+y=10 ; 5x+2y=10
     */
function solveEquations(M=[[]],equality=[]){
    let detM=det(M)
    function remplazarCol(M,V,c){
        let A=M.map(e=>e.map(i=>i))//Crea una copia para matar el puntero
        let n=A.length
        for (let i = 0; i < n; i++) {
            A[i][c]=V[i]
        }
        return A
    }
    return equality.map((_,i)=>{
        let a=det(remplazarCol(M,equality,i))
        let b=detM
        if(b==0){
            return null
        }else if(b==1){
            return a
        }else{
            return a/b
        }
    })
    
}


/**
     * Calcula el determinante de una matriz 
     * @param M Matriz de coeficientes.
     */
function det(M){
    let n=M.length
    let aux=M
    let d=0
    function reduce(x,y,M){
        let n=M.length
        let aux=[]
        for (let i = 0; i < n-1; i++) {
            aux.push([])
        }
        for (let i = 0, a = 0; i < n; i++) {
            if(i)
            for (let e = 0; e < n; e++) {
                if(i!=y && e!=x){
                    aux[a].push(M[i][e])
                    if(aux[a].length==n-1){
                        a++
                    }
                }    
            }
        }
        return aux
    }
    if(n==1) return (M[0][0])
    for (let i = 0; i < n; i++) {
        let coe=M[0][i]
        if(i%2!=0)coe*=-1
        d+=coe*det(reduce(i,0,aux))
    } 
    
    return d
}
/**
     * Convierte grados en Radianes 
     * @param g Grados.
     */
const toRad=(g)=>g*Math.PI/180
/**
     * Convierte radianes en Grados 
     * @param g Grados.
     */
const toGrad=(r)=>r*180/Math.PI
const binToASCII=(bin)=>bin.map(b=>parseInt(b,2).toString(10))//bin:[]
const numToBin=(num)=>num.toString(2)
const asciiToText=(ascii)=>String.fromCharCode(...ascii)//ascii:int[]
const textToAscii=(text)=>text.split("").map(c=>c.charCodeAt(0))
const textToBin=(text)=>textToAscii(text).map(c=>numToBin(c))
const binToNum=(bin)=>parseInt(bin,2);
/**
     * mueve un elemento html;
	 * @param obj:String("selector del elemento (.element,#element o etiqueta html)")
	 * @param x
	 * @param y
	 * @param type tipo de posición (relative,absolute)
*/
function moveTo(obj,x,y,type="relative") {
	obj=document.querySelectorAll(obj)
	obj.forEach((e)=>{
		e.style.position=type
		e.style.left=x+"px"
		e.style.top=y+"px"

	})
}
/**
     * Muestra los fps;
	 * @param tag String -> etiqueta css del contenedor de la salida(.cont,#cont)
*/
class GESTOR{
	constructor(tag=""){
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
/**
     * Prepara un Canvas 
	 * new Canvas()  o new Canvas("#mycanvas") 
	 * si solo hay un canvas,new Canvas(".mycanvas")
     * @param obj new Canvas().
     * @param obj  new Canvas("#mycanvas").
	 * @param obj  new Canvas(".mycanvas").
     */
class Canvas{
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
	polygon(x,y, n, radio, angulo=undefined,f=false){
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
			if(f)this.ctx.fill();
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
	arc(x,y,r,ang=0,angf=Math.PI*2,c,f=false){
		this.ctx.beginPath()
		this.ctx.save();
		this.ctx.fillStyle =c;
		this.ctx.strokeStyle =c;
		this.ctx.arc(x,y,r,angf,ang);
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
	fill(){//canvas en tamaño completo de la pag
		this.tag.width=innerWidth;
		this.tag.height=innerHeight;
		this.width=this.tag.width
		this.height=this.tag.height
		$("body").css({margin:0,padding:0,overflow:"hidden"});
	}
	event(e,f){//añade ventos al canvas "click" ,"key" etc; canvas.event("click",myFuncion)
		this.$.event(e,f);
	}
	removeEvent(e,f){//quita ventos al canvas "click" ,"key" etc; canvas.event("click",myFuncion)
		this.$.removeEvent(e,f);
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

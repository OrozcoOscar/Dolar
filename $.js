/**
OrozcoOscar
v4.12
3/09/22
**/
/**
 * Función para facilitar el manejo del DOM
 * @param {string} argument Selector Css (".micaja","#midiv","body",etc..)
 */
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
		/**
		 * Retorna o modifica el contenido de uno o mas elementos HTML
		 * @param {string|undefined} e Contenido a modificar
		 * @returns innerHTML
		 */
		html(e) {
			if (!e) return this.tag.innerHTML;
			if (this.tag.length > 1)
				for (var t = 0; t < this.tag.length; t++) this.tag[t].innerHTML = e;
			else this.tag.innerHTML = e
		}
		/**
		 * Añade eventos a uno o mas elementos HTML; 
		 * @param {string} e Nombre del evento "click" ,"key" etc
		 * @param {function} f función que ejecuta el evento $(selectorCss).event("click",myFuncion)
		 * la función recibe como parámetro los datos del evento
		 */
		event(e, f) {
			if (this.tag.length > 1)
				for (var n = 0; n < this.tag.length; n++) this.tag[n].addEventListener(e, f);
			else this.tag.addEventListener(e, f)
		}
		/**
		 * Quita eventos a uno o mas elementos HTML
		 * @param {string} e Nombre del evento "click" ,"key" etc
		 * @param {function} f función que ejecuta el evento $(selectorCss).removeEvent("click",myFuncion)
		 */
		removeEvent(e, f) {
			if (this.tag.length > 1)
				for (var n = 0; n < this.tag.length; n++) this.tag[n].removeEventListener(e, f);
			else this.tag.removeEventListener(e, f)
		}
		/**
		 * Retorna o modifica el value de un elemento HTML
		 * @param {string} e 
		 * @returns value
		 */
		val(e) {
			return e ? this.tag.value = e : this.tag.value
		}
		/**
		 * Retorna o modifica el src de un elemento HTML
		 * @param {string} e 
		 * @returns src
		 */
		src(e) {
			return e ? this.tag.src = e : this.tag.src
		}
		/**
		 * Inserta Atributos a uno o varios elementos HTML
		 * @param {string} e Nombre del Atributo
		 * @param {string} t Valor del Atributo
		 */
		attr(e, t) {
			if (this.tag.length > 1)
				for (var n = 0; n < this.tag.length; n++) this._current[n].attr(e, t);
			else this.tag.setAttribute(e, t)
		}
		/**
		 * Inserta contenido al final a uno o varios elementos HTML
		 * @param {string} e contenido
		 */
		append(e) {
			try {
				if (this.tag.length > 1)
					for (var t = 0; t < this.tag.length; t++) this.tag[t].innerHTML += e;
				else this.tag.innerHTML += e
			} catch (e) {}
		}
		/**
		 * Inserta Css a uno o varios elementos HTML
		 * @param {Json} obj estilos Css
		 */
		css(obj) {
			if (this.tag.length > 1)
				for (var i = 0; i < this.tag.length; i++)
					for (let p in obj) this.tag[i].style[p]=obj[p]
			else
				for (let p in obj) this.tag.style[p]=obj[p]
		}
		/**
		 * Inserta clase a uno o varios elementos HTML
		 * @param {string} e nombre de la clase
		 */
		toggleClass(e) {
			if (this.tag.length > 1)
				for (var t = 0; t < this.tag.length; t++) this.tag[t].classList.toggle(e);
			else this.tag.classList.toggle(e)
		}
		/**
		 * Quita clase a uno o varios elementos HTML
		 * @param {string} e nombre de la clase
		 */
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
     * Calcula la Distancia entre dos puntos 
     * @param p1 primer punto.
     * @param p2  segundo punto.
     */
function distanceBetweenPoints(p1={x:0,y:0},p2={x:0,y:0}){
	return Math.sqrt((p1.x-p2.x)**2+(p1.y-p2.y)**2)
}
/**
 * Crea una Matriz
 * @param {number} f N Filas
 * @param {number} c N Columnas
 * @param {any} r Relleno
 * @returns Una Matriz
 */
function createMatriz(f,c,r=0) {let m=[f];for (var i = 0; i <f; i++) {m[i]=[];for (var e = 0; e < c; e++) {m[i][e]=r;}}return m;}
function Random(min, max) { return Math.floor(Math.random() * (max - min)) + min;}//no incluye al max
/**
 * 
 * @returns {Json} Retorna un json con los parámetros obtenidos de la url o método GET
 */
function Get() {let cont=window.location.search;if(cont.indexOf("=")>-1){let json="{";let get=cont.replace("?","");get=get.split("&");get.map((e,i)=>{e=e.split("=");if(i<get.length-1)json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\",";else json+="\""+e[0]+"\":\""+e[1].replace(/%20/g," ")+"\""+"}";});return JSON.parse(json);}else return null;}
/**
     * Resolver Ecuaciones lineales 
     * @param M Matriz de coeficientes.
     * @param equality  Array de igualdades.
	 * @return "Array" con los resultados (null o undefine es que no tiene solución )
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
const asciiToText=(ascii)=>String.fromCharCode(...ascii)//ascii:number[]
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
	/**
	 * Limpia el canvas
	 * @param {Array} n Array de 3 posiciones [r,g,b] donde r,g,b son números entre 0 y 255
	 */
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
	/**
	 * Pinta un poligono de n lados
	 * @param {number} x Posición en x
	 * @param {number} y Posición en x
	 * @param {number} n Numero de lados
	 * @param {number} radio 
	 * @param {number|undefined} angulo 
	 * @param {boolean} f Relleno o no relleno por defecto esta en false
	 */
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
		/** Pinta un rectángulo
		 * @param {number} x Posición en x
		 * @param {number} y Posición en x
		 * @param {number} w Ancho
		 * @param {number} h Alto
		 * @param {string} c Color
	     * @param {boolean} f Relleno o no relleno por defecto esta en false
		 * @param {number|Array} r Recibe un numero o un array de 4 posiciones (valores de redondez de las esquinas)
		 */
	rect(x,y,w,h,c,f=false,r=false){
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
	/**
	 * Pinta un circulo
 	 * @param {number} x Posición en x
	 * @param {number} y Posición en x
	 * @param {number} r Radio
	 * @param {string} c Color
	 * @param {boolean} f Relleno o no relleno por defecto esta en false
	 */
	circle(x,y,r,c,f=false){
		this.ctx.beginPath()
		this.ctx.save();
		this.ctx.fillStyle =c;
		this.ctx.strokeStyle =c;
		this.ctx.arc(x,y,r,0,Math.PI*2);
		this.ctx.stroke();
		if(f)this.ctx.fill();
	}
	/**
	 * Pinta un Arco
 	 * @param {number} x Posición en x
	 * @param {number} y Posición en x
	 * @param {number} r Radio
	 * @param {number} ang Angulo inicial En RADIANES
	 * @param {number} angf Angulo final EN RADIANES
	 * @param {string} c Color
	 * @param {boolean} f Relleno o no relleno por defecto esta en false
	 */
	arc(x,y,r,ang=0,angf=Math.PI*2,c,f=false){
		this.ctx.beginPath()
		this.ctx.save();
		this.ctx.fillStyle =c;
		this.ctx.strokeStyle =c;
		this.ctx.arc(x,y,r,angf,ang);
		this.ctx.stroke();
		if(f)this.ctx.fill();
	}
	/**
	 * Inserta una elipse dentro de un rectángulo
	 * @param {number} x Posición en x
	 * @param {number} y Posición en x
	 * @param {number} w Ancho
	 * @param {number} h Alto
	 * @param {string} c Color
	 * @param {boolean} f Relleno o no relleno por defecto esta en false
	 */
	elipce(x,y,w,h,c,f=false){
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
	/**
	 * Pinta una linea
	 * @param {number} x Posición en x
	 * @param {number} y Posición en y
	 * @param {number} xf Posición final en x
	 * @param {number} yf Posición final en y
	 * @param {number} w Ancho de la linea
	 * @param {string} c Color de la linea
	 */
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
	/**
	 * Rota con respecto al angulo (beta)
	 * @param {number} cx Centro de la figura en x
	 * @param {number} cy Centro de la figura en y
	 * @param {number} a angulo en radianes podría usar toRand(grados)
	 */
	rotate(cx,cy,a){
		this.ctx.translate(cx, cy);
		this.ctx.rotate(a);
		this.ctx.translate(-cx, -cy);
	}
	/**
	 * Pinta un Texto
	 * @param {string} t Texto a Pintar
	 * @param {number} x Posición x
	 * @param {number} y Posición y
	 * @param {number} s Tamaño del texto por defecto es 23
	 * @param {string} c Color del texto
	 */
	text(t,x,y,s=23,c="green"){
		this.ctx.fillStyle=c;
		this.ctx.font="bold "+s+"px sans-serif";
		this.ctx.fillText(t,x,y);
	}
	/**
	 * Establece el tamaño del canvas
	 * @param {number|null} w ancho 
	 * @param {number|null} h alto
	 * @returns "{w,h}" retorna el ancho y alto
	 */
	size(w=null,h=null){
		if(w)this.tag.width=w;
		if(h)this.tag.height=h;
		this.width=this.tag.width
		this.height=this.tag.height
		return {w:this.tag.width,h:this.tag.height}
	}
	/**
	 * Canvas en tamaño completo de la pag
	 */
	fill(){
		this.tag.width=innerWidth;
		this.tag.height=innerHeight;
		this.width=this.tag.width
		this.height=this.tag.height
		$("body").css({margin:0,padding:0,overflow:"hidden"});
	}
	/**
	 * Añade eventos al canvas ; 
	 * @param {string} e Nombre del evento "click" ,"key" etc
	 * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
	 * la función recibe como parámetro los datos del evento
	 */
	event(e,f){
		this.$.event(e,f);
	}
	/**
	 * Quita eventos al canvas 
	 * @param {string} e Nombre del evento "click" ,"key" etc
	 * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
	 */
	removeEvent(e,f){
		this.$.removeEvent(e,f);
	}
	/**
	 * Pinta una imagen
	 * cutX,cutY,cut... son para recortar,espX,espY son para efecto de espejo
	 * @param {Image} img Imagen
	 * @param {number} x Posición en x
	 * @param {number} y Posición en x
	 * @param {number} w Ancho
	 * @param {number} h Alto
	 * @param {number} cutX Inicio recorte en x
	 * @param {number} cutY Inicio recorte en y
	 * @param {number} cutW Ancho del recorte
	 * @param {number} cutH Alto del recorte
	 * @param {number} espX 
	 * @param {number} espY 
	 */
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
	setResponsive(px,py){//recibe posición relativa
		return [px/this.width,py/this.height]
	}
	getResponsive(px,py){//obtiene posición relativa basada en posiciones absolutas
		return [px*this.width,py*this.height]
	}
	/**
	 * Obtiene la posición del mouse incluso si el canvas se re-dimensiona
	 * @param {event} evt recibe un evento de mouse
	 * @returns "{x,y}" posiciones exactas del mouse
	 */
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

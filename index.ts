/**
OrozcoOscar
v5
06/01/24
**/

import { $ObjType, ArcOptionsType, CallbackType, EllipseOptionsType, InputsElementsTypes, ResourceElements } from "./dolar-js";

/**
 * Función para facilitar el manejo del DOM
 * @param {string} argument Selector Css (".micaja","#midiv","body",etc..)
 */
export function $(argument: string) {
    class obj {
        tag: $ObjType
        _current: obj[]
        constructor(e: $ObjType) {
            this.tag = e
            if (Array.isArray(this.tag)) {
                if (this.tag.length > 1) {
                    this._current = []
                    this.tag.forEach(t => this._current.push(new obj(t)))
                }
                else {
                    this.tag = e[0]
                }
            } else {
                this.tag = e
            }
        }
        /**
         * Retorna o modifica el contenido de uno o mas elementos HTML
         * @param {string|undefined} e Contenido a modificar
         * @returns innerHTML
         */
        html(e: string | undefined) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    let r: string[] = []
                    this.tag.forEach(t => r.push(t.innerHTML))
                    return r
                }
                else {
                    this.tag.forEach(t => t.innerHTML = e)
                }
            } else {
                if (e) this.tag.innerHTML = e
                else return this.tag.innerHTML
            }
        }
        /**
         * Añade eventos a uno o mas elementos HTML; 
         * @param {string} e Nombre del evento "click" ,"key" etc
         * @param {function} f función que ejecuta el evento $(selectorCss).event("click",myFuncion)
         * la función recibe como parámetro los datos del evento
         */
        event(e: string, f: EventListenerOrEventListenerObject) {
            if (Array.isArray(this.tag)) {
                for (let i = 0; i < this.tag.length; i++) {
                    this.tag[i].addEventListener(e, f);
                }
            } else {
                this.tag.addEventListener(e, f);
            }
        }
        /**
         * Quita eventos a uno o mas elementos HTML
         * @param {string} e Nombre del evento "click" ,"key" etc
         * @param {function} f función que ejecuta el evento $(selectorCss).removeEvent("click",myFuncion)
         */
        removeEvent(e: string, f: EventListenerOrEventListenerObject) {
            if (Array.isArray(this.tag)) {
                for (let n = 0; n < this.tag.length; n++) {
                    this.tag[n].removeEventListener(e, f);
                }
            } else {
                this.tag.removeEventListener(e, f);
            }
        }
        /**
         * Retorna o modifica el value de un elemento HTML
         * @param {string} e 
         * @returns value
         */
        val(e: string): string | string[] | undefined {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    let r: string[] = []
                    this.tag.forEach((t) => {

                        let element = t as InputsElementsTypes
                        r.push(element.value)
                    })
                    return r
                }
                else {
                    this.tag.forEach(t => {
                        let element = t as InputsElementsTypes
                        element.value = e
                    })
                }
            }
            else {
                let element = this.tag as InputsElementsTypes
                if (e) element.value = e
                else return element.value
            }

        }
        /**
         * Retorna o modifica el src de un elemento HTML
         * @param {string} e 
         * @returns src
         */
        src(e: string): string | string[] | undefined {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    let r: string[] = []
                    this.tag.forEach((t) => {
                        let element = t as ResourceElements
                        r.push(element.src)
                    })
                    return r
                }
                else {
                    this.tag.forEach(t => {
                        let element = t as ResourceElements
                        element.src = e
                    })
                }
            }
            else {
                let element = this.tag as ResourceElements
                if (e) element.src = e
                else return element.src
            }
        }
        /**
         * Inserta Atributos a uno o varios elementos HTML
         * @param {string} e Nombre del Atributo
         * @param {string} t Valor del Atributo
         */
        attr(e: string, t: string) {
            if (Array.isArray(this.tag)) {
                for (let n = 0; n < this.tag.length; n++) {
                    this._current[n].attr(e, t);
                }
            } else {
                this.tag.setAttribute(e, t);
            }
        }
        /**
         * Inserta contenido al final a uno o varios elementos HTML
         * @param {string} e contenido
         */
        append(e: string) {
            try {
                if (Array.isArray(this.tag)) {
                    for (let t = 0; t < this.tag.length; t++) {
                        let element = this.tag[t];
                        element.innerHTML += e;
                    }
                } else {
                    let element = this.tag;
                    element.innerHTML += e;
                }
            } catch (e) { }
        }
        /**
         * Inserta Css a uno o varios elementos HTML
         * @param {Json} obj estilos Css
         */
        css(obj: { [key: string]: string | number }) {
            if (Array.isArray(this.tag)) {
                for (let i = 0; i < this.tag.length; i++) {
                    for (let p in obj) {
                        (this.tag[i] as HTMLElement).style[p] = obj[p];
                    }
                }
            } else {
                for (let p in obj) {
                    (this.tag as HTMLElement).style[p] = obj[p];
                }
            }
        }
        /**
         * Añade o quita una clase a uno o varios elementos HTML
         * @param {string} e nombre de la clase
         */
        toggleClass(e: string) {
            if (Array.isArray(this.tag)) {
                for (let t = 0; t < this.tag.length; t++) {
                    this.tag[t].classList.toggle(e);
                }
            } else {
                this.tag.classList.toggle(e);
            }
        }
        /**
         * Quita clase a uno o varios elementos HTML
         * @param {string} e nombre de la clase
         */
        removeClass(e: string) {
            if (Array.isArray(this.tag)) {
                for (let t = 0; t < this.tag.length; t++) {
                    this.tag[t].classList.remove(e);
                }
            } else {
                this.tag.classList.remove(e);
            }
        }
    }
    let n: $ObjType = [];
    let tag = document.querySelectorAll(argument)
    if (tag.length > 1) for (var t = 0; t < tag.length; t++) n.push(tag[t])
    else n[0] = tag[0];

    if (n.length > 0) return (new obj(n))
    else return undefined
}
/**
 * Limita la frecuencia de ejecución de una función.
 * @param {Function} callback - Función a ejecutar.
 * @param {number} delay - Retraso en milisegundos.
 * @returns {Function} - Función envuelta que aplica el throttle.
 */
export function throttle(callback: CallbackType, delay: number): CallbackType {
    let lastExecution = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        const now = Date.now();

        if (now - lastExecution < delay) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecution = now;
                callback.apply(this, args);
            }, delay);
        } else {
            lastExecution = now;
            callback.apply(this, args);
        }
    };
}

/**
 * Retrasa la ejecución de una función después del último evento.
 * @param {Function} callback - Función a ejecutar.
 * @param {number} delay - Retraso en milisegundos.
 * @returns {Function} - Función envuelta que aplica el debounce.
 */
export function debounce(callback: CallbackType, delay: number): CallbackType {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

/**
     * Calcula la Distancia entre dos puntos 
     * @param p1 primer punto.
     * @param p2  segundo punto.
     */
export function distanceBetweenPoints(p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}
/**
 * Crea una Matriz
 * @param {number} f N Filas
 * @param {number} c N Columnas
 * @param {any} r Relleno
 * @returns Una Matriz
 */
export function createMatriz(f: number, c: number, r: any = 0): any[][] {
    let m: any[][] = [];
    for (var i = 0; i < f; i++) {
        m[i] = [];
        for (var e = 0; e < c; e++) {
            m[i][e] = r;
        }
    }
    return m;
}
export function Random(min: number, max: number) { return Math.floor(Math.random() * (max - min)) + min; }//no incluye al max
/**
 * 
 * @returns {Json} Retorna un json con los parámetros obtenidos de la url o método GET
 */
/**
 * Retorna los parámetros obtenidos de la URL o método GET como un objeto JSON.
 * @returns {Object} - Objeto JSON con los parámetros obtenidos.
 */
export function Get(): object | null {
    const searchParams = new URLSearchParams(window.location.search);
    const params: { [key: string]: string } = {};

    searchParams.forEach((value, key) => {
        params[key] = value.replace(/%20/g, " ");
    });

    return Object.keys(params).length > 0 ? params : null;
}
/**
     * Resolver Ecuaciones lineales 
     * @param {Array} M Matriz de coeficientes.
     * @param {Array} equality  Array de igualdades.
     * @return "Array" con los resultados (null o undefine es que no tiene solución )
     * -----------------------------------
     * Ej: M=[[2,1],[5,2]] equality=[10,10]
     *  es equivalente  a 2x+y=10 ; 5x+2y=10
     */
export function solveEquations(M: number[][] = [[]], equality: number[] = []) {
    let detM = det(M);
    function remplazarCol(M: number[][], V: number[], c: number) {
        let A = M.map(e => e.map(i => i)); // Crea una copia para matar el puntero
        let n = A.length;
        for (let i = 0; i < n; i++) {
            A[i][c] = V[i];
        }
        return A;
    }
    return equality.map((_, i) => {
        let a = det(remplazarCol(M, equality, i));
        let b = detM;
        if (b == 0) {
            return null;
        } else if (b == 1) {
            return a;
        } else {
            return a / b;
        }
    });
}

/**
 * Calcula el ángulo según el cuadrante.
 * @param {Object} p1 Primer punto.
 * @param {Object} p2 Segundo punto.
 * @returns {number} Ángulo en radianes.
 */
export function calcularAnguloCuadrante(p1: { x: number, y: number } = { x: 0, y: 0 }, p2: { x: number, y: number } = { x: 0, y: 0 }): number {
    let a = angleSlope(slope(p1, p2));
    if ((p2.x <= p1.x && p2.y <= p1.y) || (p2.x < p1.x && p2.y >= p1.y)) {
        a = Math.PI + a;
    } else if (p2.y < p1.y) {
        a = 2 * Math.PI + a;
    }
    return a;
}
/**
 * Calcula la pendiente entre dos puntos
* @param {Object} p1 primer punto 
* @param {Object} p2 segundo punto 
*/
/**
 * Calcula la pendiente entre dos puntos
 * @param {Object} p1 primer punto 
 * @param {Object} p2 segundo punto 
 * @returns {number} Pendiente
 */
export function slope(p1: { x: number, y: number } = { x: 0, y: 0 }, p2: { x: number, y: number } = { x: 0, y: 0 }): number {
    return (p2.y - p1.y) / (p2.x - p1.x);
}

/**
 * Calcula el ángulo en radianes de una pendiente.
 * @param {number} m Pendiente
 * @returns {number} Ángulo en radianes
 */
export function angleSlope(m: number): number {
    return Math.atan(m);
}

/**
 * Calcula el determinante de una matriz.
 * @param {number[][]} M Matriz
 * @returns {number} Determinante
 */
export function det(M: number[][]): number {
    let n = M.length;
    let aux = M;
    let d = 0;

    function reduce(x: number, y: number, M: number[][]): number[][] {
        let n = M.length;
        let aux: number[][] = [];
        for (let i = 0; i < n - 1; i++) {
            aux.push([]);
        }
        for (let i = 0, a = 0; i < n; i++) {
            if (i)
                for (let e = 0; e < n; e++) {
                    if (i != y && e != x) {
                        aux[a].push(M[i][e]);
                        if (aux[a].length == n - 1) {
                            a++;
                        }
                    }
                }
        }
        return aux;
    }

    if (n == 1) return M[0][0];
    for (let i = 0; i < n; i++) {
        let coe = M[0][i];
        if (i % 2 != 0) coe *= -1;
        d += coe * det(reduce(i, 0, aux));
    }

    return d;
}
/**
 * Convierte grados en Radianes 
 * @param {Number} g Grados.
 */
export const toRad = (g: number) => g * Math.PI / 180;
/**
 * Convierte radianes en Grados 
 * @param {Number} r Radianes.
 */
export const toGrad = (r: number) => r * 180 / Math.PI;
/**
 * Convierte binario en Ascii
 * @param {Array} bin Array de Números binario.
 */
export const binToASCII = (bin: number[] = []) => bin.map(b => parseInt(parseInt(b.toString(), 2).toString(10)));
/**
 * Convierte números en binario
 * @param {Number} num Numero decimal.
 */
export const numToBin = (num: number) => num.toString(2);
/**
 * Convierte números ascii en texto
 * @param {Array} ascii Array de números ascii.
 */
export const asciiToText = (ascii: number[]) => String.fromCharCode(...ascii);
/**
 * Convierte texto en  ascii
 * @param {String} text Texto a convertir.
 */
export const textToAscii = (text: string) => text.split("").map(c => c.charCodeAt(0));
/**
 * Convierte texto en  binario
 * @param {String} text Texto a convertir.
 */
export const textToBin = (text: string) => textToAscii(text).map(c => numToBin(c));
/**
 * Convierte binario en  texto
 * @param {Array} bin array de binarios.
 */
export const binToText = (bin: number[]) => asciiToText(binToASCII(bin));
/**
 * Convierte binario en decimal
 * @param {String} bin numero binario a convertir.
 */
export const binToNum = (bin: string) => parseInt(bin, 2);
/**
     * mueve un elemento html;
     * @param obj:String("selector del elemento (.element,#element o etiqueta html)")
     * @param x
     * @param y
     * @param type tipo de posición (relative,absolute)
*/
export function moveTo(obj: string | NodeListOf<Element>, x: number, y: number, type: string = "relative") {
    if (typeof obj === 'string') {
        obj = document.querySelectorAll(obj);
    }
    (obj as NodeListOf<HTMLElement>).forEach((e: HTMLElement) => {
        e.style.position = type;
        e.style.left = x + "px";
        e.style.top = y + "px";
    });
}
/**
     * Muestra los fps;
     * @param tag String -> etiqueta css del contenedor de la salida(.cont,#cont)
*/
export class GESTOR {
    fin: number; // Fin del ciclo
    aps: number; // Actualizaciones por segundo
    fps: number; // Frames por segundo
    outputElement: HTMLElement | null;

    constructor(tag = "") {
        this.fin = 0;
        this.aps = 0;
        this.fps = 0;
        this.outputElement = document.querySelector(tag);
    }

    start = (tiempo: number) => {
        this.aps++;
        this.fps++;
        var diferencia = tiempo - this.fin;
        if (diferencia > 999) {
            if (this.outputElement) {
                this.outputElement.innerHTML = `
        Tiempo: ${tiempo}<br>
        APS: ${this.aps}<br>
        FPS: ${this.fps}<br>
      `;
            }
            this.fin = tiempo;
            this.fps = 0;
            this.aps = 0;
        }
    };
}
/**
     * Prepara un Canvas 
     * new Canvas()  o new Canvas("#mycanvas") 
     * si solo hay un canvas,new Canvas(".mycanvas")
     * @param obj new Canvas().
     * @param obj  new Canvas("#mycanvas").
     * @param obj  new Canvas(".mycanvas").
     */
export class Canvas {
    tag: HTMLCanvasElement;
    $: any;
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D | null;

    constructor(obj = "canvas") {
        this.tag = document.querySelector(obj) as HTMLCanvasElement;
        this.$ = $(obj);
        this.width = this.tag.width;
        this.height = this.tag.height;
        this.ctx = this.tag.getContext("2d");
        if (!this.tag) console.error("NO se encuentra un elemento canvas");
    }
    /**
     * Limpia el canvas
     * @param {Array} n Array de 3 posiciones [r,g,b] donde r,g,b son números entre 0 y 255
     */
    clear(n: number[]) {
        if (n) {
            this.rect(0, 0, this.tag.width, this.tag.height, "rgb(" + n + ")", true)
        } else {
            if (this.ctx) {
                this.ctx.clearRect(0, 0, this.tag.width, this.tag.height);
            }
        }
    }


    /**
     * Guarda el estado actual del contexto de dibujo
     */
    save() {
        if (this.ctx) {
            this.ctx.save();
        }
    }

    /**
     * Restaura el último estado guardado en la pila del contexto de dibujo
     */
    restore() {
        if (this.ctx) {
            this.ctx.restore();
        }
    }

    getCanvas() {
        return $("canvas");
    }
    /**
     * Pinta un poligono de n lados
     * @param {number} x Posición en x
     * @param {number} y Posición en x
     * @param {number} n Numero de lados
     * @param {number} radio 
     * @param {number|undefined} angulo Angulo en grados
     * @param {boolean} f Relleno o no relleno por defecto esta en false
     */
    polygon(x: number, y: number, n: number, radio: number, angulo: number = 90 + 180, c: string = "", f: boolean = false) {
        let incremento = 360 / n;
        let vx: number[] = [], vy: number[] = [];
        let radians: number;
        if (angulo == undefined) {
            angulo = 90 + 180;
            if (n % 2 == 0) {
                angulo += incremento / 2;
            }
        }
        for (let i = 0; i < n; i++) {
            radians = toRad(angulo);
            vx[i] = x + radio * Math.cos(radians);
            vy[i] = y + radio * Math.sin(radians);
            angulo += incremento;
        }
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.strokeStyle = c;
            this.ctx.moveTo(vx[0], vy[0]);
            for (let i = 1; i < vx.length; i++) { this.ctx.lineTo(vx[i], vy[i]) }

            this.ctx.closePath();
            this.ctx.stroke();
            if (f) this.ctx.fill();
        }
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
    rect(x: number, y: number, w: number, h: number, c: string, f: boolean = false, r: number | number[] | boolean = false) {
        if (this.ctx) {
            if (r) {
                if (typeof r === 'number') {

                    this.ctx.beginPath()
                    this.ctx.fillStyle = c;
                    this.ctx.strokeStyle = c;
                    this.ctx.arc(x + r, y + r, r, toRad(180), toRad(-90));
                    this.ctx.arc(x + w - r, y + r, r, toRad(-90), toRad(0));
                    this.ctx.arc(x + w - r, y + h - r, r, toRad(0), toRad(90));
                    this.ctx.arc(x + r, y + h - r, r, toRad(90), toRad(180));
                    this.ctx.moveTo(x, y + r);
                    this.ctx.lineTo(x, y + h - r);
                    this.ctx.stroke();

                } else {
                    this.ctx.beginPath()
                    this.ctx.fillStyle = c;
                    this.ctx.strokeStyle = c;
                    this.ctx.arc(x + r[0], y + r[0], r[0], toRad(180), toRad(-90));
                    this.ctx.arc(x + w - r[1], y + r[1], r[1], toRad(-90), toRad(0));
                    this.ctx.arc(x + w - r[2], y + h - r[2], r[2], toRad(0), toRad(90));
                    this.ctx.arc(x + r[3], y + h - r[3], r[3], toRad(90), toRad(180));
                    this.ctx.moveTo(x, y + r[0]);
                    this.ctx.lineTo(x, y + h - r[3]);
                    this.ctx.stroke();
                }
                if (f) this.ctx.fill();
            } else {
                if (f) {
                    this.ctx.fillStyle = c;
                    this.ctx.fillRect(x, y, w, h);
                } else {
                    this.ctx.strokeStyle = c;
                    this.ctx.strokeRect(x, y, w, h);
                }
            }
        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto")
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
    circle(x: number, y: number, r: number, c: string, f: boolean = false): void {
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.strokeStyle = c;
            this.ctx.arc(x, y, r, 0, Math.PI * 2);
            this.ctx.stroke();
            if (f) this.ctx.fill();
        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
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
    arc(...options: ArcOptionsType): void {
        const [
            x, y,
            r, ang = 0,
            angf = Math.PI * 2,
            c, f = false
        ] = options;
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.strokeStyle = c;
            this.ctx.arc(x, y, r, angf, ang);
            this.ctx.stroke();
            if (f) this.ctx.fill();

        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
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


    elipse(...options: EllipseOptionsType) {
        const [x, y, w, h, c, f = false] = options;
        if (this.ctx) {
            let esc = Math.abs(w / h)
            this.ctx.save();
            this.ctx.scale(esc, 1);
            this.ctx.beginPath();
            this.ctx.arc((x / esc) + w / (2 * esc), y + h / 2, Math.abs(h / 2), 0, 2 * Math.PI);
            this.ctx.restore();
            this.ctx.strokeStyle = c;
            this.ctx.fillStyle = c;
            this.ctx.stroke();
            if (f) this.ctx.fill();
        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
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
    line(x: number, y: number, xf: number, yf: number, w: number = 3, c: string) {
        if (this.ctx) {
            this.ctx.lineWidth = w;
            this.ctx.beginPath();
            this.ctx.strokeStyle = c;
            this.ctx.moveTo(xf, yf);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
    }
    /**
     * Pinta un vector o flecha
     * @param {number} x Posición en x
     * @param {number} y Posición en y
     * @param {number} mod Modulo o magnitud
     * @param {number} ang angulo en grados
     * @param {number} w Ancho de la linea
     * @param {string} c Color de la linea
     */
    vector(x: number, y: number, xf: number, yf: number, w: number = 3, c: string): void {
        this.line(x, y, xf, yf, w, c);
        let ang: number = toGrad(angleSlope(slope({ x, y }, { x: xf, y: yf })));
        this.polygon(xf, yf, 3, 10, ang, c, true);
    }
    /**
     * Rota con respecto al angulo (beta)
     * @param {number} cx Centro de la figura en x
     * @param {number} cy Centro de la figura en y
     * @param {number} a angulo en radianes podría usar toRand(grados)
     */
    rotate(cx: number, cy: number, a: number) {
        if (this.ctx) {
            this.ctx.translate(cx, cy);
            this.ctx.rotate(a);
            this.ctx.translate(-cx, -cy);
        } else {
            console.error("No se puede rotar porque no se ha encontrado el contexto");
        }
    }
    /**
     * Pinta un Texto
     * @param {string} t Texto a Pintar
     * @param {number} x Posición x
     * @param {number} y Posición y
     * @param {number} s Tamaño del texto por defecto es 23
     * @param {string} c Color del texto
     */
    text(t: string, x: number, y: number, s = 23, c = "green") {
        if (this.ctx) {
            this.ctx.fillStyle = c;
            this.ctx.font = "bold " + s + "px sans-serif";
            this.ctx.fillText(t, x, y);
        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
    }
    /**
     * Establece el tamaño del canvas
     * @param {number|null} w ancho 
     * @param {number|null} h alto
     * @returns "{w,h}" retorna el ancho y alto
     */
    size(w: number | null = null, h: number | null = null) {
        if (w) this.tag.width = w;
        if (h) this.tag.height = h;
        this.width = this.tag.width
        this.height = this.tag.height
        return { w: this.tag.width, h: this.tag.height }
    }
    /**
     * Canvas en tamaño completo de la pag
     */
    fill() {
        this.tag.width = innerWidth;
        this.tag.height = innerHeight;
        this.width = this.tag.width
        this.height = this.tag.height
        $("body")?.css({ margin: 0, padding: 0, overflow: "hidden" });
    }
    /**
     * Añade eventos al canvas ; 
     * @param {string} e Nombre del evento "click" ,"key" etc
     * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
     * la función recibe como parámetro los datos del evento
     */
    on(e: string, f: Function) {
        this.$.event(e, f);
    }
    /**
     * Quita eventos al canvas 
     * @param {string} e Nombre del evento "click" ,"key" etc
     * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
     */
    off(e: string, f: Function) {
        this.$.removeEvent(e, f);
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
    img(img: HTMLImageElement, x: number, y: number, w: number, h: number, cutX: number = 0, cutY: number = 0, cutW: number | undefined = undefined, cutH: number | undefined = undefined, espX: number = 1, espY: number = 1) {
        (!cutW) ? cutW = img.width : false;
        (!cutH) ? cutH = img.height : false;
        (!w) ? w = img.width : false;
        (!h) ? h = img.height : false;

        let ax = 0, ay = 0;
        if (espX == -1) ax = -w;
        if (espY == -1) ay = -h;

        if (this.ctx) {
            this.ctx.scale(espX, espY);
            this.ctx.drawImage(img, cutX, cutY, cutW, cutH, espX * x + ax, espY * y + ay, w, h);
            this.ctx.scale(espX, espY);
        } else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
    }
    setResponsive(px: number, py: number): [number, number] {//recibe posición relativa
        return [px / this.width, py / this.height]
    }
    getResponsive(px: number, py: number): [number, number] {//obtiene posición relativa basada en posiciones absolutas
        return [px * this.width, py * this.height]
    }
    /**
     * Obtiene la posición del mouse incluso si el canvas se re-dimensiona
     * @param {event} evt recibe un evento de mouse
     * @returns "{x,y}" posiciones exactas del mouse
     */
    getMousePosition(evt: MouseEvent): { x: number, y: number } {
        let ClientRect: DOMRect = this.tag.getBoundingClientRect(),
            scaleX: number = this.width / ClientRect.width,
            scaleY: number = this.height / ClientRect.height;
        return {
            x: (evt.clientX - ClientRect.left) * scaleX,
            y: (evt.clientY - ClientRect.top) * scaleY
        }
    }
    /**
     * Obtiene la posición del mouse incluso si el canvas se re-dimensiona
     * @param {number} centerX centro del gradiente en x
     * @param {number} centerY centro del gradiente en y
     * @param {number} innerRadius radio interno
     * @param {number} outerRadius radio externo
     * @param {Array} colorStops { offset, color } offset:(el desplazamiento del color, normalizado entre 0 y 1)  ej[
            { offset: 0, color: "red" },
            { offset: 1, color: "#000" }
          ]
     * @returns "obj" un canvasGradiente
     */
    createRadialGradient(centerX = 0, centerY = 0, innerRadius = 0, outerRadius = 0, colorStops: { offset: number, color: string }[] = []) {
        const gradient = this.ctx ? this.ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius) : null;
    
        if (gradient) {
            for (let i = 0; i < colorStops.length; i++) {
                const { offset, color } = colorStops[i];
                gradient.addColorStop(offset, color);
            }
        }
    
        return gradient;
    }
}
/**
 * calcula la intersección de dos circunferencias y retorna un vector de dos puntos
 * @param {number} h centro en x circunferencia 1
 * @param {number} k centro en y circunferencia 1
 * @param {number} r radio circunferencia 1
 * @param {number} a centro en x circunferencia 2
 * @param {number} b centro en y circunferencia 2
 * @param {number} c radio circunferencia 2
 * @return "[{x,y},{x,y}]" retorna un vector de dos puntos 
 */
export function intersectionCircles(h: number, k: number, r: number, a: number, b: number, c: number) {
    let w = -1 * h ** 2 + a ** 2 + b ** 2 - c ** 2 - k ** 2 + r ** 2;
    let t = -2 * b + 2 * k;
    let z = 2 * (-h + a);
    let parte1 = -t * w + t * z * h + k * z ** 2;
    let asd = t ** 2 * r ** 2 - k ** 2 * t ** 2 - 2 * k * t * w + z * (-z * h ** 2 + 2 * w * h + 2 * k * t * h + z * r ** 2) - w ** 2;
    let parte2 = z * Math.sqrt(asd);
    let denominador = t ** 2 + z ** 2;
    let y1 = (parte1 + parte2) / denominador;
    let y2 = (parte1 - parte2) / denominador;
    let x1 = (y1 * t + w) / z;
    let x2 = (y2 * t + w) / z;
    return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
}

/**
 * Defina un Vector posee métodos para operaciones
 */
export class Vector {
    x: number;
    y: number;
    ang: number;
    mod: number;
    xf: number;
    yf: number;

    constructor(x: number, y: number, mod: number, ang: number) {
        this.x = x;
        this.y = y;
        this.ang = 360 - ang;
        this.mod = mod;
        this.xf = Math.cos(toRad(this.ang)) * this.mod + this.x;
        this.yf = Math.sin(toRad(this.ang)) * this.mod + this.y;
    }

    /**
     * 
     * @returns Retorna los datos del vector en formato Json
     */
    getDataJson(): any {
        return { ...this };
    }

    /**
     * 
     * @returns Retorna los datos del vector en un Array
     * 
     * Ej:[x,y,xf,yf,mod,ang]
     */
    getDataArray(): number[] {
        return [this.x, this.y, this.xf, this.yf, this.mod, this.ang];
    }

    /**
     * 
     * @param {Canvas} canvas Recibe una instancia de la clase Canvas donde se va a pintar
     * @param {Number} w Ancho de la linea
     * @param {String} c Color
     */
    paint(canvas: any, w: number, c: string): void {
        canvas.vector(this.x, this.y, this.xf, this.yf, w, c);
    }

    setOrigin(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.xf = Math.cos(toRad(this.ang)) * this.mod + this.x;
        this.yf = Math.sin(toRad(this.ang)) * this.mod + this.y;
    }

    setMod(mod: number): void {
        this.mod = mod;
        this.xf = Math.cos(toRad(this.ang)) * this.mod + this.x;
        this.yf = Math.sin(toRad(this.ang)) * this.mod + this.y;
    }

    setAngle(ang: number): void {
        this.ang = 360 - ang;
        this.xf = Math.cos(toRad(this.ang)) * this.mod + this.x;
        this.yf = Math.sin(toRad(this.ang)) * this.mod + this.y;
    }

    // static addition(v1,v2){

    // }

    /**
     * Producto Punto o Escalar
     * @param {Number} e Escalar a multiplicar
     * @param {Vector} v Vector 
     * @returns 
     */
    static productPoint(e: number, v: Vector): Vector {
        let aux = JSON.parse(JSON.stringify(v));
        let pp = new Vector(aux.x, aux.y, aux.mod, aux.ang);
        pp.setMod(aux.mod * e);
        return pp;
    }
}
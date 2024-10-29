/**
OrozcoOscar
v6
07/08/24
**/
/**
 * Función para facilitar el manejo del DOM
 * @param {string} argument Selector Css (".micaja","#midiv","body",etc..)
 */
function $(argument) {
    class obj {
        constructor(e) {
            this._current = [];
            this.tag = e;
            if (Array.isArray(this.tag)) {
                if (this.tag.length > 1) {
                    this._current = [];
                    this.tag.forEach(t => this._current.push(new obj(t)));
                }
                else if (this.tag.length == 1) {
                    this.tag = this.tag[0];
                }
            }
            else {
                this.tag = e;
            }
        }
        /**
         * Retorna o modifica el contenido de uno o mas elementos HTML
         * @param {string|undefined} e Contenido a modificar
         * @returns innerHTML
         */
        html(e) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    let r = [];
                    this.tag.forEach(t => r.push(t.innerHTML));
                    return r;
                }
                else {
                    this.tag.forEach(t => t.innerHTML = e);
                }
            }
            else {
                if (e)
                    this.tag.innerHTML = e;
                else
                    return this.tag.innerHTML;
            }
        }
        /**
         * Añade eventos a uno o mas elementos HTML;
         * @param {string} e Nombre del evento "click" ,"key" etc
         * @param {function} f función que ejecuta el evento $(selectorCss).event("click",myFuncion)
         * la función recibe como parámetro los datos del evento
         */
        event(e, f) {
            if (Array.isArray(this.tag)) {
                for (let i = 0; i < this.tag.length; i++) {
                    this.tag[i].addEventListener(e, f);
                }
            }
            else {
                this.tag.addEventListener(e, f);
            }
        }
        /**
         * Quita eventos a uno o mas elementos HTML
         * @param {string} e Nombre del evento "click" ,"key" etc
         * @param {function} f función que ejecuta el evento $(selectorCss).removeEvent("click",myFuncion)
         */
        removeEvent(e, f) {
            if (Array.isArray(this.tag)) {
                for (let n = 0; n < this.tag.length; n++) {
                    this.tag[n].removeEventListener(e, f);
                }
            }
            else {
                this.tag.removeEventListener(e, f);
            }
        }
        /**
         * Retorna o modifica el value de un elemento HTML
         * @param {string} e
         * @returns value
         */
        val(e) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    let r = [];
                    this.tag.forEach((t) => {
                        let element = t;
                        r.push(element.value);
                    });
                    return r;
                }
                else {
                    this.tag.forEach(t => {
                        let element = t;
                        element.value = e;
                    });
                }
            }
            else {
                let element = this.tag;
                if (e)
                    element.value = e;
                else
                    return element.value;
            }
        }
        /**
         * Retorna o modifica el src de un elemento HTML
         * @param {string} e
         * @returns src
         */
        src(e) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    let r = [];
                    this.tag.forEach((t) => {
                        let element = t;
                        r.push(element.src);
                    });
                    return r;
                }
                else {
                    this.tag.forEach(t => {
                        let element = t;
                        element.src = e;
                    });
                }
            }
            else {
                let element = this.tag;
                if (e)
                    element.src = e;
                else
                    return element.src;
            }
        }
        /**
         * Inserta Atributos a uno o varios elementos HTML
         * @param {string} e Nombre del Atributo
         * @param {string} t Valor del Atributo
         */
        attr(e, t) {
            if (Array.isArray(this.tag)) {
                for (let n = 0; n < this.tag.length; n++) {
                    this._current[n].attr(e, t);
                }
            }
            else {
                this.tag.setAttribute(e, t);
            }
        }
        /**
         * Inserta contenido al final a uno o varios elementos HTML
         * @param {string} e contenido
         */
        append(e) {
            try {
                if (Array.isArray(this.tag)) {
                    for (let t = 0; t < this.tag.length; t++) {
                        let element = this.tag[t];
                        element.innerHTML += e;
                    }
                }
                else {
                    let element = this.tag;
                    element.innerHTML += e;
                }
            }
            catch (e) { }
        }
        /**
         * Inserta Css a uno o varios elementos HTML
         * @param {Json} obj estilos Css
         */
        css(obj) {
            if (Array.isArray(this.tag)) {
                for (let i = 0; i < this.tag.length; i++) {
                    for (let p in obj) {
                        this.tag[i].style[p] = obj[p];
                    }
                }
            }
            else {
                for (let p in obj) {
                    this.tag.style[p] = obj[p];
                }
            }
        }
        /**
         * Añade o quita una clase a uno o varios elementos HTML
         * @param {string} e nombre de la clase
         */
        toggleClass(e) {
            if (Array.isArray(this.tag)) {
                for (let t = 0; t < this.tag.length; t++) {
                    this.tag[t].classList.toggle(e);
                }
            }
            else {
                this.tag.classList.toggle(e);
            }
        }
        /**
         * Quita clase a uno o varios elementos HTML
         * @param {string} e nombre de la clase
         */
        removeClass(e) {
            if (Array.isArray(this.tag)) {
                for (let t = 0; t < this.tag.length; t++) {
                    this.tag[t].classList.remove(e);
                }
            }
            else {
                this.tag.classList.remove(e);
            }
        }
    }
    let n = [];
    let tag = document.querySelectorAll(argument);
    if (tag.length > 1)
        for (var t = 0; t < tag.length; t++)
            n.push(tag[t]);
    else
        n[0] = tag[0];
    if (n.length > 0)
        return (new obj(n));
    else
        return undefined;
}
/**
 * Limita la frecuencia de ejecución de una función.
 * @param {Function} callback - Función a ejecutar.
 * @param {number} delay - Retraso en milisegundos.
 * @returns {Function} - Función envuelta que aplica el throttle.
 */
function throttle(callback, delay) {
    let lastExecution = 0;
    let timeoutId;
    return function (...args) {
        const now = Date.now();
        if (now - lastExecution < delay) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecution = now;
                callback.apply(this, args);
            }, delay);
        }
        else {
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
function debounce(callback, delay) {
    let timeoutId;
    return function (...args) {
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
function distanceBetweenPoints(p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }) {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}
/**
 * Crea una Matriz
 * @param {number} f N Filas
 * @param {number} c N Columnas
 * @param {any} r Relleno
 * @returns Una Matriz
 */
function createMatriz(f, c, r = 0) {
    let m = [];
    for (var i = 0; i < f; i++) {
        m[i] = [];
        for (var e = 0; e < c; e++) {
            m[i][e] = r;
        }
    }
    return m;
}
function Random(min, max) { return Math.floor(Math.random() * (max - min)) + min; } //no incluye al max
/**
 *
 * @returns {Json} Retorna un json con los parámetros obtenidos de la url o método GET
 */
/**
 * Retorna los parámetros obtenidos de la URL o método GET como un objeto JSON.
 * @returns {Object} - Objeto JSON con los parámetros obtenidos.
 */
function Get() {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
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
function solveEquations(M = [[]], equality = []) {
    let detM = det(M);
    function remplazarCol(M, V, c) {
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
        }
        else if (b == 1) {
            return a;
        }
        else {
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
function calcularAnguloCuadrante(p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }) {
    let a = angleSlope(slope(p1, p2));
    if ((p2.x <= p1.x && p2.y <= p1.y) || (p2.x < p1.x && p2.y >= p1.y)) {
        a = Math.PI + a;
    }
    else if (p2.y < p1.y) {
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
function slope(p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }) {
    return (p2.y - p1.y) / (p2.x - p1.x);
}
/**
 * Calcula el ángulo en radianes de una pendiente.
 * @param {number} m Pendiente
 * @returns {number} Ángulo en radianes
 */
function angleSlope(m) {
    return Math.atan(m);
}
/**
 * Calcula el determinante de una matriz.
 * @param {number[][]} M Matriz
 * @returns {number} Determinante
 */
function det(M) {
    let n = M.length;
    let aux = M;
    let d = 0;
    function reduce(x, y, M) {
        let n = M.length;
        let aux = [];
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
    if (n == 1)
        return M[0][0];
    for (let i = 0; i < n; i++) {
        let coe = M[0][i];
        if (i % 2 != 0)
            coe *= -1;
        d += coe * det(reduce(i, 0, aux));
    }
    return d;
}
/**
 * Convierte grados en Radianes
 * @param {Number} g Grados.
 */
const toRad = (g) => g * Math.PI / 180;
/**
 * Convierte radianes en Grados
 * @param {Number} r Radianes.
 */
const toGrad = (r) => r * 180 / Math.PI;
/**
 * Convierte binario en Ascii
 * @param {Array} bin Array de Números binario.
 */
const binToASCII = (bin = []) => bin.map(b => parseInt(parseInt(b.toString(), 2).toString(10)));
/**
 * Convierte números en binario
 * @param {Number} num Numero decimal.
 */
const numToBin = (num) => num.toString(2);
/**
 * Convierte números ascii en texto
 * @param {Array} ascii Array de números ascii.
 */
const asciiToText = (ascii) => String.fromCharCode(...ascii);
/**
 * Convierte texto en  ascii
 * @param {String} text Texto a convertir.
 */
const textToAscii = (text) => text.split("").map(c => c.charCodeAt(0));
/**
 * Convierte texto en  binario
 * @param {String} text Texto a convertir.
 */
const textToBin = (text) => textToAscii(text).map(c => numToBin(c));
/**
 * Convierte binario en  texto
 * @param {Array} bin array de binarios.
 */
const binToText = (bin) => asciiToText(binToASCII(bin));
/**
 * Convierte binario en decimal
 * @param {String} bin numero binario a convertir.
 */
const binToNum = (bin) => parseInt(bin, 2);
/**
     * mueve un elemento html;
     * @param obj:String("selector del elemento (.element,#element o etiqueta html)")
     * @param x
     * @param y
     * @param type tipo de posición (relative,absolute)
*/
function moveTo(obj, x, y, type = "relative") {
    if (typeof obj === 'string') {
        obj = document.querySelectorAll(obj);
    }
    obj.forEach((e) => {
        e.style.position = type;
        e.style.left = x + "px";
        e.style.top = y + "px";
    });
}
/**
     * Muestra los fps;
     * @param tag String -> etiqueta css del contenedor de la salida(.cont,#cont)
*/
class GESTOR {
    constructor(tag = "") {
        this.start = (tiempo) => {
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
        this.fin = 0;
        this.aps = 0;
        this.fps = 0;
        this.outputElement = document.querySelector(tag);
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
class Canvas {
    constructor(obj = "canvas") {
        this.tag = document.querySelector(obj);
        this.$ = $(obj);
        this.width = this.tag.width;
        this.height = this.tag.height;
        this.ctx = this.tag.getContext("2d");
        if (!this.tag)
            console.error("NO se encuentra un elemento canvas");
    }
    /**
     * Limpia el canvas
     * @param {Array} n Array de 3 posiciones [r,g,b] donde r,g,b son números entre 0 y 255
     */
    clear(n) {
        if (n) {
            this.rect(0, 0, this.tag.width, this.tag.height, "rgb(" + n + ")", true);
        }
        else {
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
    polygon(x, y, n, radio, angulo = 90 + 180, c = "", f = false) {
        let incremento = 360 / n;
        let vx = [], vy = [];
        let radians;
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
            for (let i = 1; i < vx.length; i++) {
                this.ctx.lineTo(vx[i], vy[i]);
            }
            this.ctx.closePath();
            this.ctx.stroke();
            if (f)
                this.ctx.fill();
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
    rect(x, y, w, h, c, f = false, r = false) {
        if (this.ctx) {
            if (r) {
                if (typeof r === 'number') {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = c;
                    this.ctx.strokeStyle = c;
                    this.ctx.arc(x + r, y + r, r, toRad(180), toRad(-90));
                    this.ctx.arc(x + w - r, y + r, r, toRad(-90), toRad(0));
                    this.ctx.arc(x + w - r, y + h - r, r, toRad(0), toRad(90));
                    this.ctx.arc(x + r, y + h - r, r, toRad(90), toRad(180));
                    this.ctx.moveTo(x, y + r);
                    this.ctx.lineTo(x, y + h - r);
                    this.ctx.stroke();
                }
                else {
                    if (Array.isArray(r)) {
                        this.ctx.beginPath();
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
                }
                if (f)
                    this.ctx.fill();
            }
            else {
                if (f) {
                    this.ctx.fillStyle = c;
                    this.ctx.fillRect(x, y, w, h);
                }
                else {
                    this.ctx.strokeStyle = c;
                    this.ctx.strokeRect(x, y, w, h);
                }
            }
        }
        else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
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
    circle(x, y, r, c, f = false) {
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.strokeStyle = c;
            this.ctx.arc(x, y, r, 0, Math.PI * 2);
            this.ctx.stroke();
            if (f)
                this.ctx.fill();
        }
        else {
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
    arc(...options) {
        const [x, y, r, ang = 0, angf = Math.PI * 2, c, f = false] = options;
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.strokeStyle = c;
            this.ctx.arc(x, y, r, angf, ang);
            this.ctx.stroke();
            if (f)
                this.ctx.fill();
        }
        else {
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
    elipse(...options) {
        const [x, y, w, h, c, f = false] = options;
        if (this.ctx) {
            let esc = Math.abs(w / h);
            this.ctx.save();
            this.ctx.scale(esc, 1);
            this.ctx.beginPath();
            this.ctx.arc((x / esc) + w / (2 * esc), y + h / 2, Math.abs(h / 2), 0, 2 * Math.PI);
            this.ctx.restore();
            this.ctx.strokeStyle = c;
            this.ctx.fillStyle = c;
            this.ctx.stroke();
            if (f)
                this.ctx.fill();
        }
        else {
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
    line(x, y, xf, yf, w = 3, c) {
        if (this.ctx) {
            this.ctx.lineWidth = w;
            this.ctx.beginPath();
            this.ctx.strokeStyle = c;
            this.ctx.moveTo(xf, yf);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }
        else {
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
    vector(x, y, xf, yf, w = 3, c) {
        this.line(x, y, xf, yf, w, c);
        let ang = toGrad(angleSlope(slope({ x, y }, { x: xf, y: yf })));
        this.polygon(xf, yf, 3, 10, ang, c, true);
    }
    /**
     * Rota con respecto al angulo (beta)
     * @param {number} cx Centro de la figura en x
     * @param {number} cy Centro de la figura en y
     * @param {number} a angulo en radianes podría usar toRand(grados)
     */
    rotate(cx, cy, a) {
        if (this.ctx) {
            this.ctx.translate(cx, cy);
            this.ctx.rotate(a);
            this.ctx.translate(-cx, -cy);
        }
        else {
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
    text(t, x, y, s = 23, c = "green") {
        if (this.ctx) {
            this.ctx.fillStyle = c;
            this.ctx.font = "bold " + s + "px sans-serif";
            this.ctx.fillText(t, x, y);
        }
        else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
    }
    /**
     * Establece el tamaño del canvas
     * @param {number|null} w ancho
     * @param {number|null} h alto
     * @returns "{w,h}" retorna el ancho y alto
     */
    size(w = null, h = null) {
        if (w)
            this.tag.width = w;
        if (h)
            this.tag.height = h;
        this.width = this.tag.width;
        this.height = this.tag.height;
        return { w: this.tag.width, h: this.tag.height };
    }
    /**
     * Canvas en tamaño completo de la pag
     */
    fill() {
        var _a;
        this.tag.width = innerWidth;
        this.tag.height = innerHeight;
        this.width = this.tag.width;
        this.height = this.tag.height;
        (_a = $("body")) === null || _a === void 0 ? void 0 : _a.css({ margin: '0', padding: '0', overflow: "hidden" });
    }
    /**
     * Añade eventos al canvas ;
     * @param {string} e Nombre del evento "click" ,"key" etc
     * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
     * la función recibe como parámetro los datos del evento
     */
    on(e, f) {
        this.$.event(e, f);
    }
    /**
     * Quita eventos al canvas
     * @param {string} e Nombre del evento "click" ,"key" etc
     * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
     */
    off(e, f) {
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
    img(img, x, y, w, h, cutX = 0, cutY = 0, cutW = undefined, cutH = undefined, espX = 1, espY = 1) {
        (!cutW) ? cutW = img.width : false;
        (!cutH) ? cutH = img.height : false;
        (!w) ? w = img.width : false;
        (!h) ? h = img.height : false;
        let ax = 0, ay = 0;
        if (espX == -1)
            ax = -w;
        if (espY == -1)
            ay = -h;
        if (this.ctx) {
            this.ctx.scale(espX, espY);
            this.ctx.drawImage(img, cutX, cutY, cutW, cutH, espX * x + ax, espY * y + ay, w, h);
            this.ctx.scale(espX, espY);
        }
        else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
    }
    setResponsive(px, py) {
        return [px / this.width, py / this.height];
    }
    getResponsive(px, py) {
        return [px * this.width, py * this.height];
    }
    /**
     * Obtiene la posición del mouse incluso si el canvas se re-dimensiona
     * @param {event} evt recibe un evento de mouse
     * @returns "{x,y}" posiciones exactas del mouse
     */
    getMousePosition(evt) {
        let ClientRect = this.tag.getBoundingClientRect(), scaleX = this.width / ClientRect.width, scaleY = this.height / ClientRect.height;
        return {
            x: (evt.clientX - ClientRect.left) * scaleX,
            y: (evt.clientY - ClientRect.top) * scaleY
        };
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
    createRadialGradient(centerX = 0, centerY = 0, innerRadius = 0, outerRadius = 0, colorStops = []) {
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
function intersectionCircles(h, k, r, a, b, c) {
    let w = -1 * Math.pow(h, 2) + Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) - Math.pow(k, 2) + Math.pow(r, 2);
    let t = -2 * b + 2 * k;
    let z = 2 * (-h + a);
    let parte1 = -t * w + t * z * h + k * Math.pow(z, 2);
    let asd = Math.pow(t, 2) * Math.pow(r, 2) - Math.pow(k, 2) * Math.pow(t, 2) - 2 * k * t * w + z * (-z * Math.pow(h, 2) + 2 * w * h + 2 * k * t * h + z * Math.pow(r, 2)) - Math.pow(w, 2);
    let parte2 = z * Math.sqrt(asd);
    let denominador = Math.pow(t, 2) + Math.pow(z, 2);
    let y1 = (parte1 + parte2) / denominador;
    let y2 = (parte1 - parte2) / denominador;
    let x1 = (y1 * t + w) / z;
    let x2 = (y2 * t + w) / z;
    return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
}
/**
 * Defina un Vector posee métodos para operaciones
 */
class Vector {
    constructor(x, y, mod, ang) {
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
    getDataJson() {
        return Object.assign({}, this);
    }
    /**
     *
     * @returns Retorna los datos del vector en un Array
     *
     * Ej:[x,y,xf,yf,mod,ang]
     */
    getDataArray() {
        return [this.x, this.y, this.xf, this.yf, this.mod, this.ang];
    }
    /**
     *
     * @param {Canvas} canvas Recibe una instancia de la clase Canvas donde se va a pintar
     * @param {Number} w Ancho de la linea
     * @param {String} c Color
     */
    paint(canvas, w, c) {
        canvas.vector(this.x, this.y, this.xf, this.yf, w, c);
    }
    setOrigin(x, y) {
        this.x = x;
        this.y = y;
        this.xf = Math.cos(toRad(this.ang)) * this.mod + this.x;
        this.yf = Math.sin(toRad(this.ang)) * this.mod + this.y;
    }
    setMod(mod) {
        this.mod = mod;
        this.xf = Math.cos(toRad(this.ang)) * this.mod + this.x;
        this.yf = Math.sin(toRad(this.ang)) * this.mod + this.y;
    }
    setAngle(ang) {
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
    static productPoint(e, v) {
        let aux = JSON.parse(JSON.stringify(v));
        let pp = new Vector(aux.x, aux.y, aux.mod, aux.ang);
        pp.setMod(aux.mod * e);
        return pp;
    }
}
const DolarJs = {
    throttle,
    debounce,
    distanceBetweenPoints,
    createMatriz,
    Random,
    Get,
    solveEquations,
    toRad,
    toGrad,
    binToASCII,
    numToBin,
    asciiToText,
    textToAscii,
    textToBin,
    binToText,
    binToNum,
    moveTo,
    GESTOR,
    Canvas,
    intersectionCircles,
    Vector,
    angleSlope,
    slope,
    det,
    $,
    calcularAnguloCuadrante
};
export default DolarJs;
//# sourceMappingURL=index.js.map
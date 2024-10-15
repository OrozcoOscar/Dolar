"use strict";
/**
OrozcoOscar
v6
07/08/24
**/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = exports.Canvas = exports.GESTOR = exports.binToNum = exports.binToText = exports.textToBin = exports.textToAscii = exports.asciiToText = exports.numToBin = exports.binToASCII = exports.toGrad = exports.toRad = void 0;
exports.$ = $;
exports.throttle = throttle;
exports.debounce = debounce;
exports.distanceBetweenPoints = distanceBetweenPoints;
exports.createMatriz = createMatriz;
exports.Random = Random;
exports.Get = Get;
exports.solveEquations = solveEquations;
exports.calcularAnguloCuadrante = calcularAnguloCuadrante;
exports.slope = slope;
exports.angleSlope = angleSlope;
exports.det = det;
exports.moveTo = moveTo;
exports.intersectionCircles = intersectionCircles;
/**
 * Función para facilitar el manejo del DOM
 * @param {string} argument Selector Css (".micaja","#midiv","body",etc..)
 */
function $(argument) {
    var obj = /** @class */ (function () {
        function obj(e) {
            var _this = this;
            this._current = [];
            this.tag = e;
            if (Array.isArray(this.tag)) {
                if (this.tag.length > 1) {
                    this._current = [];
                    this.tag.forEach(function (t) { return _this._current.push(new obj(t)); });
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
        obj.prototype.html = function (e) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    var r_1 = [];
                    this.tag.forEach(function (t) { return r_1.push(t.innerHTML); });
                    return r_1;
                }
                else {
                    this.tag.forEach(function (t) { return t.innerHTML = e; });
                }
            }
            else {
                if (e)
                    this.tag.innerHTML = e;
                else
                    return this.tag.innerHTML;
            }
        };
        /**
         * Añade eventos a uno o mas elementos HTML;
         * @param {string} e Nombre del evento "click" ,"key" etc
         * @param {function} f función que ejecuta el evento $(selectorCss).event("click",myFuncion)
         * la función recibe como parámetro los datos del evento
         */
        obj.prototype.event = function (e, f) {
            if (Array.isArray(this.tag)) {
                for (var i = 0; i < this.tag.length; i++) {
                    this.tag[i].addEventListener(e, f);
                }
            }
            else {
                this.tag.addEventListener(e, f);
            }
        };
        /**
         * Quita eventos a uno o mas elementos HTML
         * @param {string} e Nombre del evento "click" ,"key" etc
         * @param {function} f función que ejecuta el evento $(selectorCss).removeEvent("click",myFuncion)
         */
        obj.prototype.removeEvent = function (e, f) {
            if (Array.isArray(this.tag)) {
                for (var n_1 = 0; n_1 < this.tag.length; n_1++) {
                    this.tag[n_1].removeEventListener(e, f);
                }
            }
            else {
                this.tag.removeEventListener(e, f);
            }
        };
        /**
         * Retorna o modifica el value de un elemento HTML
         * @param {string} e
         * @returns value
         */
        obj.prototype.val = function (e) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    var r_2 = [];
                    this.tag.forEach(function (t) {
                        var element = t;
                        r_2.push(element.value);
                    });
                    return r_2;
                }
                else {
                    this.tag.forEach(function (t) {
                        var element = t;
                        element.value = e;
                    });
                }
            }
            else {
                var element = this.tag;
                if (e)
                    element.value = e;
                else
                    return element.value;
            }
        };
        /**
         * Retorna o modifica el src de un elemento HTML
         * @param {string} e
         * @returns src
         */
        obj.prototype.src = function (e) {
            if (Array.isArray(this.tag)) {
                if (!e) {
                    var r_3 = [];
                    this.tag.forEach(function (t) {
                        var element = t;
                        r_3.push(element.src);
                    });
                    return r_3;
                }
                else {
                    this.tag.forEach(function (t) {
                        var element = t;
                        element.src = e;
                    });
                }
            }
            else {
                var element = this.tag;
                if (e)
                    element.src = e;
                else
                    return element.src;
            }
        };
        /**
         * Inserta Atributos a uno o varios elementos HTML
         * @param {string} e Nombre del Atributo
         * @param {string} t Valor del Atributo
         */
        obj.prototype.attr = function (e, t) {
            if (Array.isArray(this.tag)) {
                for (var n_2 = 0; n_2 < this.tag.length; n_2++) {
                    this._current[n_2].attr(e, t);
                }
            }
            else {
                this.tag.setAttribute(e, t);
            }
        };
        /**
         * Inserta contenido al final a uno o varios elementos HTML
         * @param {string} e contenido
         */
        obj.prototype.append = function (e) {
            try {
                if (Array.isArray(this.tag)) {
                    for (var t_1 = 0; t_1 < this.tag.length; t_1++) {
                        var element = this.tag[t_1];
                        element.innerHTML += e;
                    }
                }
                else {
                    var element = this.tag;
                    element.innerHTML += e;
                }
            }
            catch (e) { }
        };
        /**
         * Inserta Css a uno o varios elementos HTML
         * @param {Json} obj estilos Css
         */
        obj.prototype.css = function (obj) {
            if (Array.isArray(this.tag)) {
                for (var i = 0; i < this.tag.length; i++) {
                    for (var p in obj) {
                        this.tag[i].style[p] = obj[p];
                    }
                }
            }
            else {
                for (var p in obj) {
                    this.tag.style[p] = obj[p];
                }
            }
        };
        /**
         * Añade o quita una clase a uno o varios elementos HTML
         * @param {string} e nombre de la clase
         */
        obj.prototype.toggleClass = function (e) {
            if (Array.isArray(this.tag)) {
                for (var t_2 = 0; t_2 < this.tag.length; t_2++) {
                    this.tag[t_2].classList.toggle(e);
                }
            }
            else {
                this.tag.classList.toggle(e);
            }
        };
        /**
         * Quita clase a uno o varios elementos HTML
         * @param {string} e nombre de la clase
         */
        obj.prototype.removeClass = function (e) {
            if (Array.isArray(this.tag)) {
                for (var t_3 = 0; t_3 < this.tag.length; t_3++) {
                    this.tag[t_3].classList.remove(e);
                }
            }
            else {
                this.tag.classList.remove(e);
            }
        };
        return obj;
    }());
    var n = [];
    var tag = document.querySelectorAll(argument);
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
    var lastExecution = 0;
    var timeoutId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (now - lastExecution < delay) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastExecution = now;
                callback.apply(_this, args);
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
    var timeoutId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            callback.apply(_this, args);
        }, delay);
    };
}
/**
     * Calcula la Distancia entre dos puntos
     * @param p1 primer punto.
     * @param p2  segundo punto.
     */
function distanceBetweenPoints(p1, p2) {
    if (p1 === void 0) { p1 = { x: 0, y: 0 }; }
    if (p2 === void 0) { p2 = { x: 0, y: 0 }; }
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}
/**
 * Crea una Matriz
 * @param {number} f N Filas
 * @param {number} c N Columnas
 * @param {any} r Relleno
 * @returns Una Matriz
 */
function createMatriz(f, c, r) {
    if (r === void 0) { r = 0; }
    var m = [];
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
    var searchParams = new URLSearchParams(window.location.search);
    var params = {};
    searchParams.forEach(function (value, key) {
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
function solveEquations(M, equality) {
    if (M === void 0) { M = [[]]; }
    if (equality === void 0) { equality = []; }
    var detM = det(M);
    function remplazarCol(M, V, c) {
        var A = M.map(function (e) { return e.map(function (i) { return i; }); }); // Crea una copia para matar el puntero
        var n = A.length;
        for (var i = 0; i < n; i++) {
            A[i][c] = V[i];
        }
        return A;
    }
    return equality.map(function (_, i) {
        var a = det(remplazarCol(M, equality, i));
        var b = detM;
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
function calcularAnguloCuadrante(p1, p2) {
    if (p1 === void 0) { p1 = { x: 0, y: 0 }; }
    if (p2 === void 0) { p2 = { x: 0, y: 0 }; }
    var a = angleSlope(slope(p1, p2));
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
function slope(p1, p2) {
    if (p1 === void 0) { p1 = { x: 0, y: 0 }; }
    if (p2 === void 0) { p2 = { x: 0, y: 0 }; }
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
    var n = M.length;
    var aux = M;
    var d = 0;
    function reduce(x, y, M) {
        var n = M.length;
        var aux = [];
        for (var i = 0; i < n - 1; i++) {
            aux.push([]);
        }
        for (var i = 0, a = 0; i < n; i++) {
            if (i)
                for (var e = 0; e < n; e++) {
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
    for (var i = 0; i < n; i++) {
        var coe = M[0][i];
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
var toRad = function (g) { return g * Math.PI / 180; };
exports.toRad = toRad;
/**
 * Convierte radianes en Grados
 * @param {Number} r Radianes.
 */
var toGrad = function (r) { return r * 180 / Math.PI; };
exports.toGrad = toGrad;
/**
 * Convierte binario en Ascii
 * @param {Array} bin Array de Números binario.
 */
var binToASCII = function (bin) {
    if (bin === void 0) { bin = []; }
    return bin.map(function (b) { return parseInt(parseInt(b.toString(), 2).toString(10)); });
};
exports.binToASCII = binToASCII;
/**
 * Convierte números en binario
 * @param {Number} num Numero decimal.
 */
var numToBin = function (num) { return num.toString(2); };
exports.numToBin = numToBin;
/**
 * Convierte números ascii en texto
 * @param {Array} ascii Array de números ascii.
 */
var asciiToText = function (ascii) { return String.fromCharCode.apply(String, ascii); };
exports.asciiToText = asciiToText;
/**
 * Convierte texto en  ascii
 * @param {String} text Texto a convertir.
 */
var textToAscii = function (text) { return text.split("").map(function (c) { return c.charCodeAt(0); }); };
exports.textToAscii = textToAscii;
/**
 * Convierte texto en  binario
 * @param {String} text Texto a convertir.
 */
var textToBin = function (text) { return (0, exports.textToAscii)(text).map(function (c) { return (0, exports.numToBin)(c); }); };
exports.textToBin = textToBin;
/**
 * Convierte binario en  texto
 * @param {Array} bin array de binarios.
 */
var binToText = function (bin) { return (0, exports.asciiToText)((0, exports.binToASCII)(bin)); };
exports.binToText = binToText;
/**
 * Convierte binario en decimal
 * @param {String} bin numero binario a convertir.
 */
var binToNum = function (bin) { return parseInt(bin, 2); };
exports.binToNum = binToNum;
/**
     * mueve un elemento html;
     * @param obj:String("selector del elemento (.element,#element o etiqueta html)")
     * @param x
     * @param y
     * @param type tipo de posición (relative,absolute)
*/
function moveTo(obj, x, y, type) {
    if (type === void 0) { type = "relative"; }
    if (typeof obj === 'string') {
        obj = document.querySelectorAll(obj);
    }
    obj.forEach(function (e) {
        e.style.position = type;
        e.style.left = x + "px";
        e.style.top = y + "px";
    });
}
/**
     * Muestra los fps;
     * @param tag String -> etiqueta css del contenedor de la salida(.cont,#cont)
*/
var GESTOR = /** @class */ (function () {
    function GESTOR(tag) {
        if (tag === void 0) { tag = ""; }
        var _this = this;
        this.start = function (tiempo) {
            _this.aps++;
            _this.fps++;
            var diferencia = tiempo - _this.fin;
            if (diferencia > 999) {
                if (_this.outputElement) {
                    _this.outputElement.innerHTML = "\n        Tiempo: ".concat(tiempo, "<br>\n        APS: ").concat(_this.aps, "<br>\n        FPS: ").concat(_this.fps, "<br>\n      ");
                }
                _this.fin = tiempo;
                _this.fps = 0;
                _this.aps = 0;
            }
        };
        this.fin = 0;
        this.aps = 0;
        this.fps = 0;
        this.outputElement = document.querySelector(tag);
    }
    return GESTOR;
}());
exports.GESTOR = GESTOR;
/**
     * Prepara un Canvas
     * new Canvas()  o new Canvas("#mycanvas")
     * si solo hay un canvas,new Canvas(".mycanvas")
     * @param obj new Canvas().
     * @param obj  new Canvas("#mycanvas").
     * @param obj  new Canvas(".mycanvas").
     */
var Canvas = /** @class */ (function () {
    function Canvas(obj) {
        if (obj === void 0) { obj = "canvas"; }
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
    Canvas.prototype.clear = function (n) {
        if (n) {
            this.rect(0, 0, this.tag.width, this.tag.height, "rgb(" + n + ")", true);
        }
        else {
            if (this.ctx) {
                this.ctx.clearRect(0, 0, this.tag.width, this.tag.height);
            }
        }
    };
    /**
     * Guarda el estado actual del contexto de dibujo
     */
    Canvas.prototype.save = function () {
        if (this.ctx) {
            this.ctx.save();
        }
    };
    /**
     * Restaura el último estado guardado en la pila del contexto de dibujo
     */
    Canvas.prototype.restore = function () {
        if (this.ctx) {
            this.ctx.restore();
        }
    };
    Canvas.prototype.getCanvas = function () {
        return $("canvas");
    };
    /**
     * Pinta un poligono de n lados
     * @param {number} x Posición en x
     * @param {number} y Posición en x
     * @param {number} n Numero de lados
     * @param {number} radio
     * @param {number|undefined} angulo Angulo en grados
     * @param {boolean} f Relleno o no relleno por defecto esta en false
     */
    Canvas.prototype.polygon = function (x, y, n, radio, angulo, c, f) {
        if (angulo === void 0) { angulo = 90 + 180; }
        if (c === void 0) { c = ""; }
        if (f === void 0) { f = false; }
        var incremento = 360 / n;
        var vx = [], vy = [];
        var radians;
        if (angulo == undefined) {
            angulo = 90 + 180;
            if (n % 2 == 0) {
                angulo += incremento / 2;
            }
        }
        for (var i = 0; i < n; i++) {
            radians = (0, exports.toRad)(angulo);
            vx[i] = x + radio * Math.cos(radians);
            vy[i] = y + radio * Math.sin(radians);
            angulo += incremento;
        }
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.fillStyle = c;
            this.ctx.strokeStyle = c;
            this.ctx.moveTo(vx[0], vy[0]);
            for (var i = 1; i < vx.length; i++) {
                this.ctx.lineTo(vx[i], vy[i]);
            }
            this.ctx.closePath();
            this.ctx.stroke();
            if (f)
                this.ctx.fill();
        }
    };
    /** Pinta un rectángulo
     * @param {number} x Posición en x
     * @param {number} y Posición en x
     * @param {number} w Ancho
     * @param {number} h Alto
     * @param {string} c Color
     * @param {boolean} f Relleno o no relleno por defecto esta en false
     * @param {number|Array} r Recibe un numero o un array de 4 posiciones (valores de redondez de las esquinas)
     */
    Canvas.prototype.rect = function (x, y, w, h, c, f, r) {
        if (f === void 0) { f = false; }
        if (r === void 0) { r = false; }
        if (this.ctx) {
            if (r) {
                if (typeof r === 'number') {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = c;
                    this.ctx.strokeStyle = c;
                    this.ctx.arc(x + r, y + r, r, (0, exports.toRad)(180), (0, exports.toRad)(-90));
                    this.ctx.arc(x + w - r, y + r, r, (0, exports.toRad)(-90), (0, exports.toRad)(0));
                    this.ctx.arc(x + w - r, y + h - r, r, (0, exports.toRad)(0), (0, exports.toRad)(90));
                    this.ctx.arc(x + r, y + h - r, r, (0, exports.toRad)(90), (0, exports.toRad)(180));
                    this.ctx.moveTo(x, y + r);
                    this.ctx.lineTo(x, y + h - r);
                    this.ctx.stroke();
                }
                else {
                    if (Array.isArray(r)) {
                        this.ctx.beginPath();
                        this.ctx.fillStyle = c;
                        this.ctx.strokeStyle = c;
                        this.ctx.arc(x + r[0], y + r[0], r[0], (0, exports.toRad)(180), (0, exports.toRad)(-90));
                        this.ctx.arc(x + w - r[1], y + r[1], r[1], (0, exports.toRad)(-90), (0, exports.toRad)(0));
                        this.ctx.arc(x + w - r[2], y + h - r[2], r[2], (0, exports.toRad)(0), (0, exports.toRad)(90));
                        this.ctx.arc(x + r[3], y + h - r[3], r[3], (0, exports.toRad)(90), (0, exports.toRad)(180));
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
    };
    /**
     * Pinta un circulo
       * @param {number} x Posición en x
     * @param {number} y Posición en x
     * @param {number} r Radio
     * @param {string} c Color
     * @param {boolean} f Relleno o no relleno por defecto esta en false
     */
    Canvas.prototype.circle = function (x, y, r, c, f) {
        if (f === void 0) { f = false; }
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
    };
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
    Canvas.prototype.arc = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var x = options[0], y = options[1], r = options[2], _a = options[3], ang = _a === void 0 ? 0 : _a, _b = options[4], angf = _b === void 0 ? Math.PI * 2 : _b, c = options[5], _c = options[6], f = _c === void 0 ? false : _c;
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
    };
    /**
     * Inserta una elipse dentro de un rectángulo
     * @param {number} x Posición en x
     * @param {number} y Posición en x
     * @param {number} w Ancho
     * @param {number} h Alto
     * @param {string} c Color
     * @param {boolean} f Relleno o no relleno por defecto esta en false
     */
    Canvas.prototype.elipse = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var x = options[0], y = options[1], w = options[2], h = options[3], c = options[4], _a = options[5], f = _a === void 0 ? false : _a;
        if (this.ctx) {
            var esc = Math.abs(w / h);
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
    };
    /**
     * Pinta una linea
     * @param {number} x Posición en x
     * @param {number} y Posición en y
     * @param {number} xf Posición final en x
     * @param {number} yf Posición final en y
     * @param {number} w Ancho de la linea
     * @param {string} c Color de la linea
     */
    Canvas.prototype.line = function (x, y, xf, yf, w, c) {
        if (w === void 0) { w = 3; }
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
    };
    /**
     * Pinta un vector o flecha
     * @param {number} x Posición en x
     * @param {number} y Posición en y
     * @param {number} mod Modulo o magnitud
     * @param {number} ang angulo en grados
     * @param {number} w Ancho de la linea
     * @param {string} c Color de la linea
     */
    Canvas.prototype.vector = function (x, y, xf, yf, w, c) {
        if (w === void 0) { w = 3; }
        this.line(x, y, xf, yf, w, c);
        var ang = (0, exports.toGrad)(angleSlope(slope({ x: x, y: y }, { x: xf, y: yf })));
        this.polygon(xf, yf, 3, 10, ang, c, true);
    };
    /**
     * Rota con respecto al angulo (beta)
     * @param {number} cx Centro de la figura en x
     * @param {number} cy Centro de la figura en y
     * @param {number} a angulo en radianes podría usar toRand(grados)
     */
    Canvas.prototype.rotate = function (cx, cy, a) {
        if (this.ctx) {
            this.ctx.translate(cx, cy);
            this.ctx.rotate(a);
            this.ctx.translate(-cx, -cy);
        }
        else {
            console.error("No se puede rotar porque no se ha encontrado el contexto");
        }
    };
    /**
     * Pinta un Texto
     * @param {string} t Texto a Pintar
     * @param {number} x Posición x
     * @param {number} y Posición y
     * @param {number} s Tamaño del texto por defecto es 23
     * @param {string} c Color del texto
     */
    Canvas.prototype.text = function (t, x, y, s, c) {
        if (s === void 0) { s = 23; }
        if (c === void 0) { c = "green"; }
        if (this.ctx) {
            this.ctx.fillStyle = c;
            this.ctx.font = "bold " + s + "px sans-serif";
            this.ctx.fillText(t, x, y);
        }
        else {
            console.error("No se puede dibujar porque no se ha encontrado el contexto");
        }
    };
    /**
     * Establece el tamaño del canvas
     * @param {number|null} w ancho
     * @param {number|null} h alto
     * @returns "{w,h}" retorna el ancho y alto
     */
    Canvas.prototype.size = function (w, h) {
        if (w === void 0) { w = null; }
        if (h === void 0) { h = null; }
        if (w)
            this.tag.width = w;
        if (h)
            this.tag.height = h;
        this.width = this.tag.width;
        this.height = this.tag.height;
        return { w: this.tag.width, h: this.tag.height };
    };
    /**
     * Canvas en tamaño completo de la pag
     */
    Canvas.prototype.fill = function () {
        var _a;
        this.tag.width = innerWidth;
        this.tag.height = innerHeight;
        this.width = this.tag.width;
        this.height = this.tag.height;
        (_a = $("body")) === null || _a === void 0 ? void 0 : _a.css({ margin: '0', padding: '0', overflow: "hidden" });
    };
    /**
     * Añade eventos al canvas ;
     * @param {string} e Nombre del evento "click" ,"key" etc
     * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
     * la función recibe como parámetro los datos del evento
     */
    Canvas.prototype.on = function (e, f) {
        this.$.event(e, f);
    };
    /**
     * Quita eventos al canvas
     * @param {string} e Nombre del evento "click" ,"key" etc
     * @param {function} f función que ejecuta el evento canvas.event("click",myFuncion)
     */
    Canvas.prototype.off = function (e, f) {
        this.$.removeEvent(e, f);
    };
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
    Canvas.prototype.img = function (img, x, y, w, h, cutX, cutY, cutW, cutH, espX, espY) {
        if (cutX === void 0) { cutX = 0; }
        if (cutY === void 0) { cutY = 0; }
        if (cutW === void 0) { cutW = undefined; }
        if (cutH === void 0) { cutH = undefined; }
        if (espX === void 0) { espX = 1; }
        if (espY === void 0) { espY = 1; }
        (!cutW) ? cutW = img.width : false;
        (!cutH) ? cutH = img.height : false;
        (!w) ? w = img.width : false;
        (!h) ? h = img.height : false;
        var ax = 0, ay = 0;
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
    };
    Canvas.prototype.setResponsive = function (px, py) {
        return [px / this.width, py / this.height];
    };
    Canvas.prototype.getResponsive = function (px, py) {
        return [px * this.width, py * this.height];
    };
    /**
     * Obtiene la posición del mouse incluso si el canvas se re-dimensiona
     * @param {event} evt recibe un evento de mouse
     * @returns "{x,y}" posiciones exactas del mouse
     */
    Canvas.prototype.getMousePosition = function (evt) {
        var ClientRect = this.tag.getBoundingClientRect(), scaleX = this.width / ClientRect.width, scaleY = this.height / ClientRect.height;
        return {
            x: (evt.clientX - ClientRect.left) * scaleX,
            y: (evt.clientY - ClientRect.top) * scaleY
        };
    };
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
    Canvas.prototype.createRadialGradient = function (centerX, centerY, innerRadius, outerRadius, colorStops) {
        if (centerX === void 0) { centerX = 0; }
        if (centerY === void 0) { centerY = 0; }
        if (innerRadius === void 0) { innerRadius = 0; }
        if (outerRadius === void 0) { outerRadius = 0; }
        if (colorStops === void 0) { colorStops = []; }
        var gradient = this.ctx ? this.ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius) : null;
        if (gradient) {
            for (var i = 0; i < colorStops.length; i++) {
                var _a = colorStops[i], offset = _a.offset, color = _a.color;
                gradient.addColorStop(offset, color);
            }
        }
        return gradient;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
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
    var w = -1 * Math.pow(h, 2) + Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) - Math.pow(k, 2) + Math.pow(r, 2);
    var t = -2 * b + 2 * k;
    var z = 2 * (-h + a);
    var parte1 = -t * w + t * z * h + k * Math.pow(z, 2);
    var asd = Math.pow(t, 2) * Math.pow(r, 2) - Math.pow(k, 2) * Math.pow(t, 2) - 2 * k * t * w + z * (-z * Math.pow(h, 2) + 2 * w * h + 2 * k * t * h + z * Math.pow(r, 2)) - Math.pow(w, 2);
    var parte2 = z * Math.sqrt(asd);
    var denominador = Math.pow(t, 2) + Math.pow(z, 2);
    var y1 = (parte1 + parte2) / denominador;
    var y2 = (parte1 - parte2) / denominador;
    var x1 = (y1 * t + w) / z;
    var x2 = (y2 * t + w) / z;
    return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
}
/**
 * Defina un Vector posee métodos para operaciones
 */
var Vector = /** @class */ (function () {
    function Vector(x, y, mod, ang) {
        this.x = x;
        this.y = y;
        this.ang = 360 - ang;
        this.mod = mod;
        this.xf = Math.cos((0, exports.toRad)(this.ang)) * this.mod + this.x;
        this.yf = Math.sin((0, exports.toRad)(this.ang)) * this.mod + this.y;
    }
    /**
     *
     * @returns Retorna los datos del vector en formato Json
     */
    Vector.prototype.getDataJson = function () {
        return __assign({}, this);
    };
    /**
     *
     * @returns Retorna los datos del vector en un Array
     *
     * Ej:[x,y,xf,yf,mod,ang]
     */
    Vector.prototype.getDataArray = function () {
        return [this.x, this.y, this.xf, this.yf, this.mod, this.ang];
    };
    /**
     *
     * @param {Canvas} canvas Recibe una instancia de la clase Canvas donde se va a pintar
     * @param {Number} w Ancho de la linea
     * @param {String} c Color
     */
    Vector.prototype.paint = function (canvas, w, c) {
        canvas.vector(this.x, this.y, this.xf, this.yf, w, c);
    };
    Vector.prototype.setOrigin = function (x, y) {
        this.x = x;
        this.y = y;
        this.xf = Math.cos((0, exports.toRad)(this.ang)) * this.mod + this.x;
        this.yf = Math.sin((0, exports.toRad)(this.ang)) * this.mod + this.y;
    };
    Vector.prototype.setMod = function (mod) {
        this.mod = mod;
        this.xf = Math.cos((0, exports.toRad)(this.ang)) * this.mod + this.x;
        this.yf = Math.sin((0, exports.toRad)(this.ang)) * this.mod + this.y;
    };
    Vector.prototype.setAngle = function (ang) {
        this.ang = 360 - ang;
        this.xf = Math.cos((0, exports.toRad)(this.ang)) * this.mod + this.x;
        this.yf = Math.sin((0, exports.toRad)(this.ang)) * this.mod + this.y;
    };
    // static addition(v1,v2){
    // }
    /**
     * Producto Punto o Escalar
     * @param {Number} e Escalar a multiplicar
     * @param {Vector} v Vector
     * @returns
     */
    Vector.productPoint = function (e, v) {
        var aux = JSON.parse(JSON.stringify(v));
        var pp = new Vector(aux.x, aux.y, aux.mod, aux.ang);
        pp.setMod(aux.mod * e);
        return pp;
    };
    return Vector;
}());
exports.Vector = Vector;
var DolarJs = {
    throttle: throttle,
    debounce: debounce,
    distanceBetweenPoints: distanceBetweenPoints,
    createMatriz: createMatriz,
    Random: Random,
    Get: Get,
    solveEquations: solveEquations,
    toRad: exports.toRad,
    toGrad: exports.toGrad,
    binToASCII: exports.binToASCII,
    numToBin: exports.numToBin,
    asciiToText: exports.asciiToText,
    textToAscii: exports.textToAscii,
    textToBin: exports.textToBin,
    binToText: exports.binToText,
    binToNum: exports.binToNum,
    moveTo: moveTo,
    GESTOR: GESTOR,
    Canvas: Canvas,
    intersectionCircles: intersectionCircles,
    Vector: Vector,
    angleSlope: angleSlope,
    slope: slope,
    det: det,
    $: $
};
exports.default = DolarJs;
//# sourceMappingURL=index.js.map
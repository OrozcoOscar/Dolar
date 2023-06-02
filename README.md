# Dolar
Biblioteca en js para facilitar el uso de Canvas y la gestión del Dom, también proporciona diferentes funciones.


# cdn
https://raw.githack.com/OrozcoOscar/Dolar/main/$.js


# Funciones

# Función $

La función `$` es una función JavaScript que facilita el manejo del DOM y proporciona métodos para interactuar con elementos HTML.

## Uso

A continuación se describe cómo utilizar la función `$` y los métodos disponibles:

### Selección de elementos

La función `$` selecciona uno o varios elementos HTML utilizando un selector CSS. Puedes pasar el selector como argumento al llamar a la función. Por ejemplo:

```javascript
const elemento = $("div");
```

Si hay varios elementos que coinciden con el selector, la función `$` devolverá una instancia de la clase `obj` que contiene una colección de elementos.

### Métodos disponibles

A continuación se describen los métodos disponibles en la clase `obj` que se devuelve al llamar a la función `$`:

#### html(e)

- Descripción: Retorna o modifica el contenido de uno o más elementos HTML.
- Parámetros:
  - `e` (opcional): Contenido a modificar.
- Retorno: `innerHTML` del elemento.

Ejemplo:

```javascript
const contenido = elemento.html(); // Obtener el contenido
elemento.html("Nuevo contenido"); // Modificar el contenido
```

#### event(e, f)

- Descripción: Añade eventos a uno o más elementos HTML.
- Parámetros:
  - `e`: Nombre del evento ("click", "key", etc.).
  - `f`: Función que se ejecuta cuando se produce el evento.
- Retorno: Ninguno.

Ejemplo:

```javascript
elemento.event("click", miFuncion);
```

#### removeEvent(e, f)

- Descripción: Quita eventos de uno o más elementos HTML.
- Parámetros:
  - `e`: Nombre del evento ("click", "key", etc.).
  - `f`: Función que se quitó del evento.
- Retorno: Ninguno.

Ejemplo:

```javascript
elemento.removeEvent("click", miFuncion);
```

#### val(e)

- Descripción: Retorna o modifica el valor de un elemento HTML.
- Parámetros:
  - `e` (opcional): Valor a modificar.
- Retorno: Valor del elemento.

Ejemplo:

```javascript
const valor = elemento.val(); // Obtener el valor
elemento.val("Nuevo valor"); // Modificar el valor
```

#### src(e)

- Descripción: Retorna o modifica el atributo `src` de un elemento HTML.
- Parámetros:
  - `e` (opcional): Valor del atributo `src` a modificar.
- Retorno: Valor del atributo `src` del elemento.

Ejemplo:

```javascript
const src = elemento.src(); // Obtener el valor del atributo src
elemento.src("nueva-imagen.jpg"); // Modificar el valor del atributo src
```

#### attr(e, t)

- Descripción: Inserta atributos a uno o varios elementos HTML.
- Parámetros:
  - `e`: Nombre del atributo.
  - `t`: Valor del atributo.
- Retorno: Ninguno.

Ejemplo:

```javascript
elemento.attr("id", "mi-elemento"); // Insertar el atributo id
```

#### append(e)

- Descripción: Inserta contenido al final de uno o varios elementos HTML.
- Parámetros:
  - `e`: Contenido a insertar.
- Retorno: Ninguno.

Ejemplo:

```javascript


elemento.append("<p>Nuevo contenido</p>"); // Insertar un párrafo al final
```

#### css(obj)

- Descripción: Inserta estilos CSS a uno o varios elementos HTML.
- Parámetros:
  - `obj`: Objeto con los estilos CSS.
- Retorno: Ninguno.

Ejemplo:

```javascript
elemento.css({ color: "red", fontSize: "20px" }); // Aplicar estilos CSS
```

#### toggleClass(e)

- Descripción: Inserta o quita una clase a uno o varios elementos HTML.
- Parámetros:
  - `e`: Nombre de la clase.
- Retorno: Ninguno.

Ejemplo:

```javascript
elemento.toggleClass("mi-clase"); // Insertar o quitar la clase
```

#### removeClass(e)

- Descripción: Quita una clase de uno o varios elementos HTML.
- Parámetros:
  - `e`: Nombre de la clase.
- Retorno: Ninguno.

Ejemplo:

```javascript
elemento.removeClass("mi-clase"); // Quitar la clase
```


### _**distanceBetweenPoints(p1,p2)**_
> Calcula la Distancia entre dos puntos.
> 
> **p1:Obj** Punto formado por x e y.
>
> **p2:Obj** Punto formado por x e y.
```js
distanceBetweenPoints({x:4,y:20},{x:23,y:12})

->  20.615528128088304
```

### _**createMatriz(f,c,r)**_
> Calcula la Distancia entre dos puntos.
> 
> **f:Number** Número de Filas.
>
> **c:Number** Número de Columnas.
>
> **r:Any** Relleno.
```js
createMatriz(3,3,1)

->  
    [1, 1, 1]
    [1, 1, 1]
    [1, 1, 1]
```

### _**Random(min,max)**_
> Calcula la Distancia entre dos puntos.
> 
> **min:Number** Número mínimo del rango.
>
> **max:Number** Número máximo del rango.
```js
Random(1,10)

->  5
```

### _**Get()**_
> Retorna un json con los parámetros obtenidos de la url o método GET.
```js
url:http://127.0.0.1:5500/index.html?q=1&p=5

Get()

->  {q: '1', p: '5'}
```


### _**solveEquations(M,equality)**_
> Resuelve Ecuaciones lineales .
>
> **M:Array** Matriz de coeficientes
>
> **equality:Array** Array de igualdades.
>
>2x+y=10
>5x+2y=10
```js
let M=[[2,1],[5,2]];
let equality=[10,10];

solveEquations(M,equality)

-> [-10, 30]
```
> Quiere decir que **x=-10**,**y=30**


### _**calcularAnguloCuadrante(p1,p2)**_
> Calcula el angulo según el cuadrante
>
> **p1:Obj-> {x:0,y:0}** primer punto.
> **p2:Obj-> {x:0,y:0}** segundo punto.

```js
calcularAnguloCuadrante(undefined,{x:20,y:20})

-> 0.7853981633974483
```
```js
calcularAnguloCuadrante({x:20,y:20},{x:10,y:10})

-> 3.9269908169872414
```


### _**slope(p1,p2)**_
> Calcula la pendiente entre dos puntos
>
> **p1:Obj-> {x:0,y:0}** primer punto.
> **p2:Obj-> {x:0,y:0}** segundo punto.

```js
slope({x:20,y:20},{x:10,y:90})

-> -7
```
### _**angleSlope(m)**_
> Calcula el angulo en Radianes de una pendiente
>
> **m:Number** Pendiente.

```jsjs
angleSlope(-7)

-> -1.4288992721907328
```


### _**det(M)**_
> Calcula el determinante de una matriz .
>
> **M:Array** Matriz 

```js
let M=[[2,1],[5,2]];

det(M)

-> -1
```

### _**toRad(g)**_
> Convierte Grados en Radianes .
>
> **g:Number** Número de Grados 

```jsjs
toRad(90)

-> 1.5707963267948966
```

### _**toGrad(r)**_
> Convierte Radianes en Grados .
>
> **r:Number** Número de Radianes 

```js
toGrad(1.5707963267948966)

-> 90
```

### _**binToASCII(bin)**_
> Convierte Binario en ascii .
>
> **bin:Array** Array de Número binario 

```js
binToASCII(["10100010"])

-> ['162']
```

### _**numToBin(num)**_
> Convierte números en binario
>
> **num:Number** Número decimal 

```js
numToBin(20)

-> "10100"
```

### _**asciiToText(ascii)**_
> Convierte números ascii en texto
>
> **ascii:Array** Array de números ascii.

```js
asciiToText(['104', '111', '108', '97'])

-> 'hola'
```
### _**textToAscii(text)**_
> Convierte texto en  ascii
>
> **text:String** Texto a convertir.

```js
textToAscii("hola")

-> ['104', '111', '108', '97']
```
### _**textToBin(text)**_
> Convierte texto en  binario
>
> **text:String** Texto a convertir.

```js
textToBin("hola")

-> ['1101000', '1101111', '1101100', '1100001']
```

### _**binToText(bin)**_
> Convierte binario en  texto
>
> **bin:Array** array de binarios.

```js
binToText(['1101000', '1101111', '1101100', '1100001'])

-> 'hola'
```

### _**binToNum(bin)**_
> Convierte binario en decimal
>
> **bin:String** Número binario a convertir.

```js
binToText(['1101000', '1101111', '1101100', '1100001'])

-> 'hola'
```



# Clases

### _**obj**_
> Esta clase no puede ser instanciada pero es retornada por la función **$**.
* _**tag**_ 
  > Retorna el elemento HTML.

```js
    $("#micaja").tag

    -> <div id="micaja"></div>
```
* _**html(e)**_ 
  > Retorna o modifica el contenido de uno o mas elementos HTML.
  >
  > **e:(string|undefined)** Contenido a modificar.

```js
    $("#micaja").html("<h1>Hola Mundo</h1>")
```
> Si **e** no se especifica retorna el contenido del elemento.
```js
    $("#micaja").html()

    -> <h1>Hola Mundo</h1>
```
* _**event(e, f)**_ 
  > Añade eventos a uno o mas elementos HTML
  >
  > **e:(string)** Nombre del evento ("click" ,"key", etc)
  >
  > **f:(string)** función que ejecuta el evento _esta función recibe el evento cuando se active_

```js
    $("#micaja").event("click",miFuncion)
```
```js
    $("#micaja").event("click",(e)=>{
        ...
    })
```
* _**removeEvent(e, f)**_ 
  > Quita eventos a uno o mas elementos HTML.
  >
  > **e:(string)** Nombre del evento ("click" ,"key", etc)
  >
  > **f:(string)** función que ejecuta el evento _esta función recibe el evento cuando se active_

```js
    $("#micaja").removeEvent("click",miFuncion)
```
* _**val(e)**_ 
  > Retorna o modifica el value de un elemento HTML.
  >
  > **e:(string|undefined)** Valor a modificar

```js
    $("#micaja").val("Hola")
```
> Si **e** no se especifica retorna el valor.
```js
    $("#micaja").val()
    -> Hola
```

* _**src(e)**_ 
  > Retorna o modifica el src de un elemento HTML.
  >
  > **e:(string|undefined)** Valor a modificar

```js
    $("#micaja").src("http://www.algo.com")
```
> Si **e** no se especifica retorna el valor.
```js
    $("#micaja").src()
    -> "http://www.algo.com"
```

* _**attr(e,t)**_ 
  > Inserta Atributos a uno o varios elementos HTML.
  >
  > **e:(string)** Nombre del Atributo
  >
  > **t:(string)** Valor del Atributo

```js
    $("#micaja").attr("style","background:red")
```
* _**append(e)**_ 
  > Inserta contenido al final a uno o varios elementos HTML.
  >
  > **e:(string)** Contenido
  
```js
    $("#micaja").append("<h1>Hola Mundo</h1>")
```

* _**css(obj)**_ 
  > Inserta Css a uno o varios elementos HTML.
  >
  > **obj:(Json)** Css
  
```js
    $("#micaja").css({
        "background":"red",
        "color":"white"
    })
```

* _**toggleClass(e)**_ 
  > Inserta clase a uno o varios elementos HTML.
  >
  > **e:(string)** nombre de la clase
  
```js
    $("#micaja").toggleClass(".active")
```

* _**removeClass(e)**_ 
  > Quita clase a uno o varios elementos HTML.
  >
  > **e:(string)** nombre de la clase
  
```js
    $("#micaja").removeClass(".active")
```

# Canvas Class

La clase `Canvas` es una clase JavaScript que facilita la manipulación y el dibujo en un elemento `<canvas>` utilizando el contexto 2D.

## Instalación

No se requiere ninguna instalación adicional para utilizar la clase `Canvas`. Simplemente asegúrate de incluir el archivo JavaScript que contiene la definición de la clase en tu proyecto.

## Uso

A continuación se muestra cómo puedes instanciar y utilizar la clase `Canvas` en tu proyecto:

1. Asegúrate de tener un elemento `<canvas>` en tu archivo HTML:

```html
<canvas id="miCanvas"></canvas>
```

2. En tu archivo JavaScript, crea una instancia de la clase `Canvas` y pásale el id o la referencia del elemento `<canvas>` como argumento:

```javascript
const canvas = new Canvas("#miCanvas");
```

3. A partir de la instancia `canvas`, puedes utilizar los métodos proporcionados por la clase para dibujar en el lienzo. Por ejemplo, para dibujar una línea:

```javascript
canvas.line(100, 100, 200, 200, 5, "blue");
```

4. Si deseas agregar el lienzo al documento HTML, puedes obtener el elemento `<canvas>` utilizando el método `getCanvas()` y luego agregarlo al DOM. Por ejemplo:

```javascript
document.body.appendChild(canvas.getCanvas());
```

Asegúrate de ajustar los parámetros de los métodos según tus necesidades. La clase `Canvas` también tiene otros métodos disponibles, como `size()`, `text()`, `img()`, entre otros, que puedes utilizar para realizar diversas operaciones en el lienzo.

## Métodos

### clear(n)

Limpia el lienzo.

- Parámetros:
  - `n` (Array): Un array de 3 posiciones [r, g, b] donde r, g y b son números entre 0 y 255. (Opcional)

Ejemplo de uso:
```javascript
canvas.clear([255, 255, 255]);
```

### getCanvas()

Obtiene el elemento canvas.

- Retorna:
  - `canvas` (Elemento): El elemento canvas del DOM.

Ejemplo de uso:
```javascript
const canvasElement = canvas.getCanvas();
```

### polygon(x, y, n, radio, angulo, c, f)

Dibuja un polígono de n lados en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x.
  - `y` (Número): Posición en el eje y.
  - `n` (Número): Número de lados del polígono.
  - `radio` (Número): Radio del polígono.
  - `angulo` (Número|undefined): Ángulo en grados. (Opcional)
  - `c` (Cadena): Color del polígono.
  - `f` (Booleano): Indica si el polígono debe ser relleno o no. Valor por defecto: `false`.

Ejemplo de uso:
```javascript
canvas.polygon(100, 100, 5, 50, undefined, "blue", true);
```

### rect(x, y, w, h, c, f, r)

Dibuja un rectángulo en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x.
  - `y` (Número): Posición en el eje y.
  - `w` (Número): Ancho del rectángulo.
  - `h` (Número): Alto del rectángulo.
  - `c` (Cadena): Color del rectángulo.
  - `f` (Booleano): Indica si el rectángulo debe ser relleno o no. Valor por defecto: `false`.
  - `r` (Número|Array): Valor de redondez de las esquinas. Puede ser un número para un redondeo uniforme en todas las esquinas, o un array de 4 posiciones para especificar un redondeo diferente en cada esquina. (Opcional)

Ejemplo de uso:
```javascript
canvas.rect(200, 200, 100, 50, "red", true);
```

### circle(x, y, r, c, f)

Dibuja un círculo en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x del centro del círculo.
  - `y` (Número): Posición en el eje y del centro del círculo.
  - `r` (Número): Radio del círculo.
  - `c` (Cadena): Color del círculo.
  - `f` (Booleano): Indica si el círculo debe ser re

lleno o no. Valor por defecto: `false`.

Ejemplo de uso:
```javascript
canvas.circle(300, 300, 50, "green");
```

### arc(x, y, r, ang, angf, c, f)

Dibuja un arco en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x del centro del arco.
  - `y` (Número): Posición en el eje y del centro del arco.
  - `r` (Número): Radio del arco.
  - `ang` (Número): Ángulo inicial en radianes.
  - `angf` (Número): Ángulo final en radianes.
  - `c` (Cadena): Color del arco.
  - `f` (Booleano): Indica si el arco debe ser relleno o no. Valor por defecto: `false`.

Ejemplo de uso:
```javascript
canvas.arc(400, 400, 50, Math.PI / 4, (3 * Math.PI) / 4, "purple");
```

### elipse(x, y, w, h, c, f)

Dibuja una elipse dentro de un rectángulo en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x del centro del rectángulo.
  - `y` (Número): Posición en el eje y del centro del rectángulo.
  - `w` (Número): Ancho del rectángulo que contiene la elipse.
  - `h` (Número): Alto del rectángulo que contiene la elipse.
  - `c` (Cadena): Color de la elipse.
  - `f` (Booleano): Indica si la elipse debe ser rellena o no. Valor por defecto: `false`.

Ejemplo de uso:
```javascript
canvas.elipse(500, 500, 100, 50, "orange", true);
```
### line(x, y, xf, yf, w, c)

Pinta una línea en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x.
  - `y` (Número): Posición en el eje y.
  - `xf` (Número): Posición final en el eje x.
  - `yf` (Número): Posición final en el eje y.
  - `w` (Número): Ancho de la línea. Valor por defecto: 3.
  - `c` (Cadena): Color de la línea.

Ejemplo de uso:
```javascript
canvas.line(100, 100, 200, 200, 5, "blue");
```

### vector(x, y, xf, yf, w, c)

Pinta un vector o flecha en el lienzo.

- Parámetros:
  - `x` (Número): Posición en el eje x.
  - `y` (Número): Posición en el eje y.
  - `xf` (Número): Posición final en el eje x.
  - `yf` (Número): Posición final en el eje y.
  - `w` (Número): Ancho de la línea. Valor por defecto: 3.
  - `c` (Cadena): Color de la línea.

Ejemplo de uso:
```javascript
canvas.vector(100, 100, 200, 200, 5, "blue");
```

### rotate(cx, cy, a)

Rota la figura con respecto al ángulo (beta) en el lienzo.

- Parámetros:
  - `cx` (Número): Centro de la figura en el eje x.
  - `cy` (Número): Centro de la figura en el eje y.
  - `a` (Número): Ángulo en radianes.

Ejemplo de uso:
```javascript
canvas.rotate(100, 100, Math.PI / 4);
```

### text(t, x, y, s, c)

Pinta un texto en el lienzo.

- Parámetros:
  - `t` (Cadena): Texto a pintar.
  - `x` (Número): Posición en el eje x.
  - `y` (Número): Posición en el eje y.
  - `s` (Número): Tamaño del texto. Valor por defecto: 23.
  - `c` (Cadena): Color del texto. Valor por defecto: "green".

Ejemplo de uso:
```javascript
canvas.text("Hello, World!", 100, 100, 30, "red");
```

### size(w, h)

Establece el tamaño del lienzo.

- Parámetros:
  - `w` (Número|null): Ancho del lienzo.
  - `h` (Número|null): Alto del lienzo.

- Retorna:
  - `{w, h}` (Objeto): Objeto con las propiedades `w` y `h` que representan el ancho y alto del lienzo respectivamente.

Ejemplo de uso:
```javascript
canvas.size(500, 300);
```

### fill()

Establece el tamaño del lienzo

 al tamaño completo de la página.

Ejemplo de uso:
```javascript
canvas.fill();
```

### event(e, f)

Añade eventos al lienzo.

- Parámetros:
  - `e` (Cadena): Nombre del evento, por ejemplo, "click" o "keydown".
  - `f` (Función): Función que se ejecuta cuando ocurre el evento. La función recibe los datos del evento como parámetro.

Ejemplo de uso:
```javascript
canvas.event("click", myFunction);
```
### removeEvent(e, f)

Quita eventos del lienzo.

- Parámetros:
  - `e` (Cadena): Nombre del evento, por ejemplo, "click" o "keydown".
  - `f` (Función): Función que se ejecuta cuando ocurre el evento. La función recibe los datos del evento como parámetro.

Ejemplo de uso:
```javascript
canvas.removeEvent("click", myFunction);
```

### img(img, x, y, w, h, cutX, cutY, cutW, cutH, espX, espY)

Pinta una imagen en el lienzo.

- Parámetros:
  - `img` (Imagen): Imagen a pintar.
  - `x` (Número): Posición en el eje x.
  - `y` (Número): Posición en el eje y.
  - `w` (Número): Ancho de la imagen.
  - `h` (Número): Alto de la imagen.
  - `cutX` (Número): Inicio del recorte en el eje x. Valor por defecto: 0.
  - `cutY` (Número): Inicio del recorte en el eje y. Valor por defecto: 0.
  - `cutW` (Número): Ancho del recorte. Valor por defecto: ancho de la imagen original.
  - `cutH` (Número): Alto del recorte. Valor por defecto: alto de la imagen original.
  - `espX` (Número): Efecto de espejo en el eje x. Valor por defecto: 1.
  - `espY` (Número): Efecto de espejo en el eje y. Valor por defecto: 1.

Ejemplo de uso:
```javascript
canvas.img(image, 100, 100, 200, 200, 0, 0, 100, 100, -1, 1);
```

### setResponsive(px, py)

Establece la posición relativa en el lienzo.

- Parámetros:
  - `px` (Número): Posición relativa en el eje x.
  - `py` (Número): Posición relativa en el eje y.

- Retorna:
  - `[px, py]` (Arreglo): Arreglo con las posiciones relativas en el eje x y eje y respectivamente.

Ejemplo de uso:
```javascript
const [relativeX, relativeY] = canvas.setResponsive(0.5, 0.5);
```

### getResponsive(px, py)

Obtiene la posición absoluta basada en las posiciones relativas en el lienzo.

- Parámetros:
  - `px` (Número): Posición relativa en el eje x.
  - `py` (Número): Posición relativa en el eje y.

- Retorna:
  - `[px, py]` (Arreglo): Arreglo con las posiciones absolutas en el eje x y eje y respectivamente.

Ejemplo de uso:
```javascript
const [absoluteX, absoluteY] = canvas.getResponsive(0.5, 0.5);
```

### getMousePosition(evt)

Obtiene la posición del mouse incluso si el

 lienzo se redimensiona.

- Parámetros:
  - `evt` (Evento): Evento del mouse.

- Retorna:
  - `{x, y}` (Objeto): Objeto con las posiciones exactas del mouse.

Ejemplo de uso:
```javascript
canvas.tag.addEventListener("mousemove", function(evt) {
  const { x, y } = canvas.getMousePosition(evt);
  console.log(`Mouse position: x=${x}, y=${y}`);
});
```

### createRadialGradient(centerX, centerY, innerRadius, outerRadius, colorStops)

Crea un gradiente radial en el lienzo.

- Parámetros:
  - `centerX` (Número): Centro del gradiente en el eje x. Valor por defecto: 0.
  - `centerY` (Número): Centro del gradiente en el eje y. Valor por defecto: 0.
  - `innerRadius` (Número): Radio interno del gradiente. Valor por defecto: 0.
  - `outerRadius` (Número): Radio externo del gradiente. Valor por defecto: 0.
  - `colorStops` (Arreglo): Arreglo de objetos `{ offset, color }` que representan los puntos de parada del gradiente. El desplazamiento del color debe estar normalizado entre 0 y 1.

- Retorna:
  - `gradient` (Objeto): Objeto `canvasGradiente` que representa el gradiente radial creado.

Ejemplo de uso:
```javascript
const gradient = canvas.createRadialGradient(100, 100, 0, 100, 100, 50, [
  { offset: 0, color: "red" },
  { offset: 1, color: "blue" }
]);
```


## Contribución

Si encuentras algún problema o tienes alguna sugerencia de mejora, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.



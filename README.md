# Dolar
Biblioteca en js para facilitar el uso de Canvas y la gestión del Dom, también proporciona diferentes funciones.


# cdn
https://raw.githack.com/OrozcoOscar/Dolar/main/$.js


# Funciones
Este repositorio contiene una colección de funciones útiles para realizar diferentes tareas en JavaScript.
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

------------------------------------------------------------------------------------------------
# Throttle y Debounce

Estas son dos funciones utilitarias para controlar la frecuencia de ejecución de funciones en respuesta a eventos.

## Función throttle

La función `throttle` permite limitar la frecuencia de ejecución de una función para evitar que se ejecute con demasiada frecuencia.

- `callback`: La función que se desea ejecutar con throttle.
- `delay`: El tiempo mínimo en milisegundos que debe transcurrir entre cada ejecución de la función.

### Ejemplo

```javascript
function handleScroll() {
  // Manejar el evento de scroll
  // ...
}

const throttledScroll = throttle(handleScroll, 200);

window.addEventListener('scroll', throttledScroll);
```

En este ejemplo, la función `handleScroll` se ejecutará como máximo cada 200 milisegundos en respuesta al evento de scroll. Si se produce un evento de scroll más frecuente, se ignorarán hasta que haya pasado el período de tiempo establecido.

## Función debounce

La función `debounce` permite retrasar la ejecución de una función hasta que no se produzcan eventos adicionales dentro de un período de tiempo determinado.
- `callback`: La función que se desea ejecutar con debounce.
- `delay`: El tiempo en milisegundos que se debe esperar después del último evento para ejecutar la función.

### Ejemplo

```javascript
function handleInput() {
  // Manejar el evento de input
  // ...
}

const debouncedInput = debounce(handleInput, 300);

input.addEventListener('input', debouncedInput);
```
En este ejemplo, la función handleInput se ejecutará después de que no se produzcan eventos de input durante al menos 300 milisegundos. Si se produce un evento de input dentro de ese período, se reinicia el temporizador y se espera nuevamente.

## Función distanceBetweenPoints(p1, p2)

Calcula la distancia entre dos puntos en un plano cartesiano.

- Parámetros:
  - `p1`: Primer punto con las propiedades `x` y `y`.
  - `p2`: Segundo punto con las propiedades `x` y `y`.
- Retorno: La distancia entre los dos puntos.

Ejemplo:

```javascript
const distancia = distanceBetweenPoints({ x: 0, y: 0 }, { x: 3, y: 4 });
console.log(distancia); // Resultado: 5
```

## Función createMatriz(f, c, r)

Crea una matriz con el número de filas y columnas especificadas, y un valor de relleno opcional.

- Parámetros:
  - `f`: Número de filas.
  - `c`: Número de columnas.
  - `r` (opcional): Valor de relleno (por defecto: 0).
- Retorno: La matriz creada.

Ejemplo:

```javascript
const matriz = createMatriz(3, 2, 1);
console.log(matriz);
/*
Resultado:
[
  [1, 1],
  [1, 1],
  [1, 1]
]
*/
```

## Función Random(min, max)

Genera un número aleatorio entre el valor mínimo (incluido) y el valor máximo (excluido).

- Parámetros:
  - `min`: Valor mínimo.
  - `max`: Valor máximo.
- Retorno: El número aleatorio generado.

Ejemplo:

```javascript
const numero = Random(1, 10);
console.log(numero); // Resultado: Un número aleatorio entre 1 y 9
```

## Función Get()

Obtiene los parámetros de la URL o del método GET y los devuelve como un objeto JSON.

- Retorno: Un objeto JSON con los parámetros obtenidos de la URL o del método GET.

Ejemplo:

Supongamos que la URL es `https://example.com/?nombre=John&edad=25`. Podemos obtener los parámetros de la siguiente manera:

```javascript
const parametros = Get();
console.log(parametros);
/*
Resultado:
{
  nombre: "John",
  edad: "25"
}
*/
```

## Función solveEquations(M, equality)

Resuelve ecuaciones lineales representadas por una matriz de coeficientes y un array de igualdades.

- Parámetros:
  - `M`: Matriz de coeficientes.
  - `equality`: Array de igualdades.
- Retorno: Un array con los resultados de las ecuaciones. Si no tiene solución, devuelve `null` o `undefined`.

Ejemplo:

```javascript
//2x+y=10
//5x+2y=10
const M = [[2, 1], [5, 2]];
const equality = [10, 10];
const solucion = solveEquations(M, equality);
console.log(solucion); // Resultado: [0, 10]
```

## Función calcularAnguloCuadrante(p1, p2)

Calcula el ángulo entre dos puntos en función del cuadrante en el que se encuentran.

- Parámetros:
  - `p1`: Primer punto con las propiedades `x` y `y`.
  - `p2`: Segundo punto con las propiedades `x` y `y`.
- Retorno: El ángulo en radianes.

Ejemplo:

```javascript
const angulo = calcularAnguloCuadrante({ x: 0, y: 0 }, { x: 1, y: 1 });
console.log(angulo); // Resultado: 0.7853981633974483
```

## Función slope(p1, p2)

Calcula la pendiente entre dos puntos en un plano cartesiano.

- Parámetros:
  - `p1`: Primer punto con las propiedades `x` y `y`.
  - `p2`: Segundo punto con las propiedades `x` y `y`.
- Retorno: La pendiente entre los dos puntos.

Ejemplo:

```javascript
const pendiente = slope({ x: 1, y: 2 }, { x: 3, y: 4 });
console.log(pendiente); // Resultado: 1
```

## Función angleSlope(m)

Calcula el ángulo en radianes de una pendiente.

- Parámetros:
  - `m`: Pendiente.
- Retorno: El ángulo en radianes.

Ejemplo:

```javascript
const angulo = angleSlope(1);
console.log(angulo); // Resultado: 0.7853981633974483
```

# Funciones útiles

Este repositorio contiene una colección de funciones útiles para realizar diferentes tareas en JavaScript.

## Función det(M)

Calcula el determinante de una matriz.

- Parámetros:
  - `M`: Matriz.
- Retorno: El determinante de la matriz.

Ejemplo:

```javascript
const matriz = [[1, 2], [3, 4]];
const determinante = det(matriz);
console.log(determinante); // Resultado: -2
```

## Función toRad(g)

Convierte grados a radianes.

- Parámetros:
  - `g`: Grados.
- Retorno: Los radianes equivalentes a los grados especificados.

Ejemplo:

```javascript
const radianes = toRad(180);
console.log(radianes); // Resultado: 3.141592653589793
```

## Función toGrad(r)

Convierte radianes a grados.

- Parámetros:
  - `r`: Radianes.
- Retorno: Los grados equivalentes a los radianes especificados.

Ejemplo:

```javascript
const grados = toGrad(Math.PI);
console.log(grados); // Resultado: 180
```

## Función binToASCII(bin)

Convierte una serie de números binarios en caracteres ASCII.

- Parámetros:
  - `bin`: Array de números binarios.
- Retorno: Un array de caracteres ASCII correspondientes a los números binarios especificados.

Ejemplo:

```javascript
const binarios = ['01100001', '01100010', '01100011'];
const ascii = binToASCII(binarios);
console.log(ascii); // Resultado: ['a', 'b', 'c']
```

## Función numToBin(num)

Convierte un número decimal en binario.

- Parámetros:
  - `num`: Número decimal.
- Retorno: El número en representación binaria.

Ejemplo:

```javascript
const numero = 10;
const binario = numToBin(numero);
console.log(binario); // Resultado: '1010'
```

## Función asciiToText(ascii)

Convierte una serie de números ASCII en texto.

- Parámetros:
  - `ascii`: Array de números ASCII.
- Retorno: El texto correspondiente a los números ASCII especificados.

Ejemplo:

```javascript
const numerosASCII = [97, 98, 99];
const texto = asciiToText(numerosASCII);
console.log(texto); // Resultado: 'abc'
```

## Función textToAscii(text)

Convierte texto en números ASCII.

- Parámetros:
  - `text`: Texto a convertir.
- Retorno: Un array de números ASCII correspondientes al texto especificado.

Ejemplo:

```javascript
const texto = 'abc';
const numerosASCII = textToAscii(texto);
console.log(numerosASCII); // Resultado: [97, 98, 99]
```

## Función textToBin(text)

Convierte texto en representación binaria.

- Parámetros:
  - `text`: Texto a convertir.
- Retorno: Un array de números binarios correspondientes al texto especificado.

Ejemplo:

```javascript
const texto = 'abc';
const binarios = textToBin(texto);
console.log(binarios); // Resultado: ['01100001',

 '01100010', '01100011']
```

## Función binToText(bin)

Convierte una serie de números binarios en texto.

- Parámetros:
  - `bin`: Array de números binarios.
- Retorno: El texto correspondiente a los números binarios especificados.

Ejemplo:

```javascript
const binarios = ['01100001', '01100010', '01100011'];
const texto = binToText(binarios);
console.log(texto); // Resultado: 'abc'
```

## Función binToNum(bin)

Convierte un número binario en decimal.

- Parámetros:
  - `bin`: Número binario a convertir.
- Retorno: El número decimal correspondiente al número binario especificado.

Ejemplo:

```javascript
const binario = '1010';
const decimal = binToNum(binario);
console.log(decimal); // Resultado: 10
```

## Función moveTo(obj, x, y, type)

Mueve un elemento HTML a una posición especificada.

- Parámetros:
  - `obj`: Selector del elemento (`".element"`, `"#element"` o etiqueta HTML).
  - `x`: Coordenada X.
  - `y`: Coordenada Y.
  - `type`: Tipo de posición (`"relative"`, `"absolute"`).
- Retorno: Ninguno.

Ejemplo:

```javascript
moveTo('.element', 100, 200, 'absolute');
```

# Clases

# GESTOR Class

La clase `GESTOR` es una utilidad que permite calcular y mostrar los FPS (Frames por segundo) y APS (Actualizaciones por segundo) en una aplicación o juego. Proporciona una forma sencilla de realizar un seguimiento del rendimiento de la aplicación y ajustar la optimización si es necesario.

## Uso

1. Instalación: No se requiere ninguna instalación especial para utilizar la clase `GESTOR`.

2. Crear una instancia de GESTOR:

```javascript
// Crear una instancia de GESTOR
const gestor = new GESTOR(tag);
```

Puedes pasar un argumento opcional `tag` que representa la etiqueta CSS del contenedor donde deseas mostrar la salida de los FPS y APS.

3. Llamar al método `start(tiempo)`:

```javascript
// Dentro del bucle principal de tu aplicación o juego
gestor.start(tiempo);
```

El método `start(tiempo)` debe ser llamado en cada iteración del bucle principal de tu aplicación o juego. Debes proporcionar el tiempo actual en milisegundos como argumento.

4. Mostrar la salida de los FPS y APS:

La salida de los FPS y APS se puede mostrar en un elemento HTML utilizando el valor de `tag` especificado al crear la instancia de `GESTOR`. Asegúrate de que exista un elemento en el DOM con la etiqueta CSS especificada para que los resultados se muestren correctamente.

Ejemplo:

```html
<div class="cont"></div>
```

En este ejemplo, los resultados se mostrarán en un elemento `<div>` con la clase CSS `"cont"`. Puedes ajustar la etiqueta CSS según tus necesidades.

## Ejemplo completo

Aquí tienes un ejemplo completo de cómo utilizar la clase `GESTOR` en una aplicación o juego:

```javascript
// Crear una instancia de GESTOR
const gestor = new GESTOR(".cont");

// Función de bucle de juego (simulada)
function gameLoop() {
  // Obtener el tiempo actual en milisegundos
  const tiempoActual = Date.now();

  // Realizar las actualizaciones del juego

  // Llamar al método start del gestor para calcular y mostrar los FPS y APS
  gestor.start(tiempoActual);

  // Volver a llamar al bucle del juego
  requestAnimationFrame(gameLoop);
}

// Iniciar el bucle del juego
gameLoop();
```

En este ejemplo, se crea una instancia de `GESTOR` con la etiqueta CSS `".cont"` para especificar dónde se mostrarán los resultados de los FPS y APS. Luego, se define una función `gameLoop()` que representa el bucle de juego. Dentro de ese bucle, se obtiene el tiempo actual en milisegundos y se llama al método `start` del gestor para calcular y mostrar los FPS y APS. Finalmente, se vuelve a llamar al bucle del juego utilizando `requestAnimationFrame()` para mantener el bucle en funcionamiento.

# obj Class
> Esta clase no puede ser instanciada pero es retornada por la función **$**.

### Métodos disponibles

A continuación se describen los métodos disponibles en la clase `obj` que se devuelve al llamar a la función `$`:
#### tag 
  > Retorna el elemento HTML.

```js
    $("#micaja").tag

    -> <div id="micaja"></div>
```
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



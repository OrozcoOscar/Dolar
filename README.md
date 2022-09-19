# Dolar
Biblioteca en js para facilitar el uso de Canvas y la gestión del Dom, también proporciona diferentes funciones.


# cdn
https://raw.githack.com/OrozcoOscar/Dolar/main/$.js


# Funciones

### _**$(argument)**_
> función para facilitar el manejo del DOM.
> 
> **argument:String** es un Selector Css (".micaja","#midiv","body",etc..).
>
> Esta función retorna una clase **obj**.
```js
$("#micaja")

->  obj {tag: div#micaja}
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
### _**Canvas**_

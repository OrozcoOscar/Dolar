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
```
$("#micaja")

->  obj {tag: div#micaja}
```


### _**distanceBetweenPoints(p1,p2)**_
> Calcula la Distancia entre dos puntos.
> 
> **p1:Obj** Punto formado por x e y.
>
> **p2:Obj** Punto formado por x e y.
```
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
```
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
```
Random(1,10)

->  5
```

### _**Get()**_
> Retorna un json con los parámetros obtenidos de la url o método GET.
```
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
```
let M=[[2,1],[5,2]];
let equality=[10,10];

solveEquations(M,equality)

-> [-10, 30]
```
> Quiere decir que **x=-10**,**y=30**

### _**det(M)**_
> Calcula el determinante de una matriz .
>
> **M:Array** Matriz 

```
let M=[[2,1],[5,2]];

det(M)

-> -1
```

### _**toRad(g)**_
> Convierte Grados en Radianes .
>
> **g:Number** Número de Grados 

```
toRad(90)

-> 1.5707963267948966
```

### _**toGrad(r)**_
> Convierte Radianes en Grados .
>
> **r:Number** Número de Radianes 

```
toGrad(1.5707963267948966)

-> 90
```

### _**binToASCII(bin)**_
> Convierte Binario en ascii .
>
> **bin:Array** Array de Número binario 

```
binToASCII(["10100010"])

-> ['162']
```

### _**numToBin(num)**_
> Convierte números en binario
>
> **num:Number** Número decimal 

```
numToBin(20)

-> "10100"
```

### _**asciiToText(ascii)**_
> Convierte números ascii en texto
>
> **ascii:Array** Array de números ascii.

```
asciiToText(['104', '111', '108', '97'])

-> 'hola'
```
### _**textToAscii(text)**_
> Convierte texto en  ascii
>
> **text:String** Texto a convertir.

```
textToAscii("hola")

-> ['104', '111', '108', '97']
```
### _**textToBin(text)**_
> Convierte texto en  binario
>
> **text:String** Texto a convertir.

```
textToBin("hola")

-> ['1101000', '1101111', '1101100', '1100001']
```

### _**binToText(bin)**_
> Convierte binario en  texto
>
> **bin:Array** array de binarios.

```
binToText(['1101000', '1101111', '1101100', '1100001'])

-> 'hola'
```

### _**binToNum(bin)**_
> Convierte binario en decimal
>
> **bin:String** Número binario a convertir.

```
binToText(['1101000', '1101111', '1101100', '1100001'])

-> 'hola'
```




# Clases

### _**obj**_
> Esta clase no puede ser instanciada pero es retornada por la función **$**.
* _**tag**_ 
  > Retorna el elemento HTML.

```
    $("#micaja").tag

    -> <div id="micaja"></div>
```
* _**html(e)**_ 
  > Retorna o modifica el contenido de uno o mas elementos HTML.
  >
  > **e:(string|undefined)** Contenido a modificar.

```
    $("#micaja").html("<h1>Hola Mundo</h1>")
```
> Si **e** no se especifica retorna el contenido del elemento.
```
    $("#micaja").html()

    -> <h1>Hola Mundo</h1>
```
* _**event(e, f)**_ 
  > Añade eventos a uno o mas elementos HTML
  >
  > **e:(string)** Nombre del evento ("click" ,"key", etc)
  >
  > **f:(string)** función que ejecuta el evento _esta función recibe el evento cuando se active_

```
    $("#micaja").event("click",miFuncion)
```
```
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

```
    $("#micaja").removeEvent("click",miFuncion)
```
* _**val(e)**_ 
  > Retorna o modifica el value de un elemento HTML.
  >
  > **e:(string|undefined)** Valor a modificar

```
    $("#micaja").val("Hola")
```
> Si **e** no se especifica retorna el valor.
```
    $("#micaja").val()
    -> Hola
```

* _**src(e)**_ 
  > Retorna o modifica el src de un elemento HTML.
  >
  > **e:(string|undefined)** Valor a modificar

```
    $("#micaja").src("http://www.algo.com")
```
> Si **e** no se especifica retorna el valor.
```
    $("#micaja").src()
    -> "http://www.algo.com"
```

* _**attr(e,t)**_ 
  > Inserta Atributos a uno o varios elementos HTML.
  >
  > **e:(string)** Nombre del Atributo
  >
  > **t:(string)** Valor del Atributo

```
    $("#micaja").attr("style","background:red")
```
* _**append(e)**_ 
  > Inserta contenido al final a uno o varios elementos HTML.
  >
  > **e:(string)** Contenido
  
```
    $("#micaja").append("<h1>Hola Mundo</h1>")
```

* _**css(obj)**_ 
  > Inserta Css a uno o varios elementos HTML.
  >
  > **obj:(Json)** Css
  
```
    $("#micaja").css({
        "background":"red",
        "color":"white"
    })
```

* _**toggleClass(e)**_ 
  > Inserta clase a uno o varios elementos HTML.
  >
  > **e:(string)** nombre de la clase
  
```
    $("#micaja").toggleClass(".active")
```

* _**removeClass(e)**_ 
  > Quita clase a uno o varios elementos HTML.
  >
  > **e:(string)** nombre de la clase
  
```
    $("#micaja").removeClass(".active")
```
### _**Canvas**_

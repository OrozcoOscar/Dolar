# Dolar
library in js to facilitate the use of Canvas and the management of the Dom, it also provides different functions.


# cdn
https://raw.githack.com/OrozcoOscar/Dolar/main/$.js


### Funciones

_**$(argument)**_
> función para facilitar el manejo del DOM.
> 
> **argument:String** es un Selector Css (".micaja","#midiv","body",etc..).
>
> Esta función retorna una clase **obj**.
```
$("#micaja")

->  obj {tag: div#micaja}
```

### Clases

_**obj**_
> Esta clase no puede ser Instanciada pero es retornada por la función **$**.
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

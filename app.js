
let ingresoSistema = prompt ("Buenas noches! ¿Desea ingresar al bar?")



while (ingresoSistema !== "si"){
    if(ingresoSistema == "no"){
        alert("Buenas noches! Vuelva pronto")
    }
    else{
        alert("Solo se acepta si o no")
    }
    ingresoSistema = prompt ("Buenas noches! ¿Desea ingresar al bar?")
}

while (ingresoSistema == "si"){
    alert("Complete los siguientes datos")
    pedirDatos()
    break;
}




// Declaracion de funcion


function pedirDatos (){
    let nombre = prompt ("Ingrese su nombre:")
    alert ("Bienvenido " + nombre + ". A continuacion le pediremos algunos datos:")

    let tiempo = Number( prompt ( "Ingrese el tiempo que desea quedarse:" ) ) 
    alert ( "Usted desea quedarse " + tiempo + " hs" )

    let edad = Number ( prompt( "Ingrese su edad:" ) )
        if (edad >= 18){
            alert("Usted puede ingresar al bar. ¿Que desea tomar?")
        }
        else if (edad >= 16){
            alert( "Usted puede quedarse pero no ingerir alcohol" )
            alert( "¿Desea comer algo?" )
        }
        else{
            alert( "Lo lamento, usted no puede ingresar a nuestro bar" )
        }

    
}



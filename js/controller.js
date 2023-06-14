function verificarNumero() {
    let numero = parseInt(document.getElementById("numeroInput").value);

    let resultadoParImpar = "";
    if (numero % 2 === 0) {
        resultadoParImpar = "El número ingresado es par.";
    } else {
        resultadoParImpar = "El número ingresado es impar.";
    }

    let resultadoPosNegCero = "";
    if (numero > 0) {
        resultadoPosNegCero = "El número ingresado es positivo.";
    } else if (numero < 0) {
        resultadoPosNegCero = "El número ingresado es negativo.";
    } else {
        resultadoPosNegCero = "El número ingresado es cero.";
    }

    document.getElementById("resultadoParImpar").textContent = resultadoParImpar;
    document.getElementById("resultadoPosNegCero").textContent = resultadoPosNegCero;
}

//* solucion 2 //

function compararNumeros() {
    let numero1 = parseInt(document.getElementById("numero1Input").value);
    let numero2 = parseInt(document.getElementById("numero2Input").value);

    let numeroMayor, numeroMenor;

    if (numero1 > numero2) {
        numeroMayor = numero1;
        numeroMenor = numero2;
    } else if (numero2 > numero1) {
        numeroMayor = numero2;
        numeroMenor = numero1;
    } else {
        document.getElementById("resultado").textContent = "Ambos números son iguales.";
        return;
    }


    document.getElementById("resultado").textContent = "El número mayor es: " + numeroMayor + ". El número menor es: " + numeroMenor + ".";
}

//* solucion 3 //

function obtenerDiaSemana() {
    let numero = parseInt(document.getElementById("Input").value);

    let diaSemana;
    switch (numero) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Número inválido. Ingresa un número del 1 al 7.";
    }

    document.getElementById("respuesta").textContent = "El número " + numero + " corresponde a " + diaSemana + ".";
}

//* solucion 4 //

function clasificarEtapa() {
    let edad = parseInt(document.getElementById("edadInput").value);

    if (isNaN(edad)) {
        document.getElementById("resultado").textContent = "Ingresa una edad válida.";
        return;
    }

    let etapa;

    if (edad < 18) {
        etapa = "Adolescente";
    } else if (edad >= 18 && edad <= 28) {
        etapa = "Adulto adolescente";
    } else if (edad >= 29 && edad <= 49) {
        etapa = "Adulto";
    } else {
        etapa = "Adulto mayor";
    }

    document.getElementById("resulta").textContent = "La etapa de la persona es: " + etapa;
}

//* solucion 5 //

function calcularTotal() {
    let producto1 = parseFloat(document.getElementById("producto1Input").value);
    let producto2 = parseFloat(document.getElementById("producto2Input").value);
    let producto3 = parseFloat(document.getElementById("producto3Input").value);

    let total = producto1 + producto2 + producto3;

    let metodoPago = document.getElementById("metodoPagoSelect").value;

    if (metodoPago === "efectivo") {
    } else if (metodoPago === "cupon") {
        total *= 0.97; 
    } else if (metodoPago === "credito") {
        total *= 1.05;
    }

    document.getElementById("total").textContent = "Total a pagar: $" + total.toFixed(2);
}

//* solucion 6 //

function calcularPromedio() {
    let nota1 = parseFloat(document.getElementById("nota1Input").value);
    let nota2 = parseFloat(document.getElementById("nota2Input").value);
    let nota3 = parseFloat(document.getElementById("nota3Input").value);

    let promedio = (nota1 + nota2 + nota3) / 3;

    let nivel;

    if (promedio < 2.0) {
        nivel = "Malo";
    } else if (promedio < 2.9) {
        nivel = "Debe recuperar";
    } else if (promedio < 3.9) {
        nivel = "Regular";
    } else if (promedio < 4.5) {
        nivel = "Bueno";
    } else {
        nivel = "Muy bueno";
    }

    document.getElementById("promedio").textContent = "Promedio: " + promedio.toFixed(2);
    document.getElementById("nivel").textContent = "Nivel: " + nivel;
}

//* solucion 7 //

function calcularEdad() {
    let dia = parseInt(document.getElementById("diaInput").value);
    let mes = parseInt(document.getElementById("mesInput").value);
    let anio = parseInt(document.getElementById("anioInput").value);

    let fechaActual = new Date();

    let diaActual = fechaActual.getDate();
    let mesActual = fechaActual.getMonth() + 1;
    let anioActual = fechaActual.getFullYear();

    let edad = anioActual - anio;

    if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
        edad--;
    }

    document.getElementById("edad").textContent = "La edad actual es: " + edad;
}
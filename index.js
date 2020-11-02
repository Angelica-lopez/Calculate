var $screen = document.querySelector(".js-screen");
var $inputOne = document.querySelector(".js-numb1");
var $inputTwo = document.querySelector(".js-numb2");
var $operations = document.querySelectorAll(".js-operation");

$operations.forEach(function(sign) {
    sign.addEventListener("click", operaciones);
})

function operaciones(event) {
    var objt = event.target.innerHTML;
    console.log("objt", objt);
    var resultado;
    if(($inputOne.value === "") && ($inputTwo.value === "")) {
        alert("Los dos campos estan vacios")
    }else if(($inputOne.value === "") || ($inputTwo.value === "") ) {
        alert("Uno de los campos esta vacio, ingrese un numero");
    }else if(objt === "x") {
        resultado = Number($inputOne.value) * Number($inputTwo.value);
        $screen.innerHTML = resultado;
    }else if(objt === "/") {
        resultado = Number($inputOne.value) / Number($inputTwo.value);
        $screen.innerHTML = resultado;
    }else if(objt === "+") {
        resultado = Number($inputOne.value) + Number($inputTwo.value);
        $screen.innerHTML = resultado;
    }else if(objt === "-") {
        resultado = Number($inputOne.value) - Number($inputTwo.value);
        $screen.innerHTML = resultado;
    }else if(objt === "CE") {
        $screen.innerHTML = 0;
        $inputOne.value = "";
        $inputTwo.value = "";
    }
    console.log("resultado", resultado);
    return resultado;
}
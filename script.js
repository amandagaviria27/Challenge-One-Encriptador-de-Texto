// e = enter
// i = imes
// o = ober
// a = ai
// u = ufat 

function encriptar (){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    // i --> afecta tanto mayusculas como minusculas
    // g --> afecta toda una linea u oracion
    // m --> afecta varios parrafos u oraciones
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("munecoimg").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").encriptadorTexto.html = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar (){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    // i --> afecta tanto mayusculas como minusculas
    // g --> afecta toda una linea u oracion
    // m --> afecta varios parrafos u oraciones
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("munecoimg").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").encriptadorTexto.html = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}

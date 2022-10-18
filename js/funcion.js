
function show(message){

    document.querySelector("#result").innerHTML=message;
}

function update(){
    
    document.querySelector("#empty").style.display="none";
    document.querySelector("#nomsgimg").style.display="none";
    document.querySelector("#nomsg").style.display="none";
    document.querySelector("#nomsgdesc").style.display="none";
    document.querySelector("#result").style.display="inline-block";
    document.querySelector("#copiar").style.display="inline-block";
    
}

function encryptmsg(){
    var message = document.querySelector("#texto").value;
    var secreto="";

    if(message!="" && !/[A-Z]/g.test(message) && !/[á-ú]/g.test(message) && message.trim().length){
        for(var i=0;i<message.length;i++){
            switch(message[i]){
                case "a":
                    secreto+="ai";
                    break;
                case "e":
                    secreto+="enter";
                    break;
                case "i":
                    secreto+="imes";
                    break;
                case "o":
                    secreto+="ober";
                    break;
                case "u":
                    secreto+="ufat";
                    break;
                default:
                    secreto+=message[i];
            }
        }

        update();
        show(secreto);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
}

function desencryptmsg(){
    var message = document.querySelector("#texto").value;
    var codigos= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    var letras = ['a','e','i','o','u'];
    
    if(message!="" && !/[A-Z]/g.test(message) && !/[á-ú]/g.test(message) && message.trim().length){
        for(var i=0;i<5;i++){
            message=message.replaceAll(codigos[i], letras[i]);
        }

        update();
        show(message);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    
}

function copytext(){
    var texto = document.querySelector("#result");
    texto.select();
    texto.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(texto.value);
}

var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");

copiar.onclick = copytext;
encriptar.onclick = encryptmsg;
desencriptar.onclick = desencryptmsg;

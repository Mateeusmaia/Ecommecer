let mes = document.getElementById("mes");

for (let m = 0 ; m <= 11; m++){
    mes.innerHTML += "<option>" + m + "</option>";
}

let ano = document.getElementById("ano");

for (let a = 1920 ; a <= 2100; a++){
    ano.innerHTML += "<option>" + a + "</option>";
}
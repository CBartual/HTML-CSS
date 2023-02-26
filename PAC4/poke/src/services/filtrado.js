export function filtrado() {
    let filtrar = document.getElementById('filtradobox').value;
    
    if (filtrar) {
    let elementos = document.getElementsByClassName('flex-item');
    for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "none";
    }
    
    
    for (let i = 0; i < elementos.length; i++) {
    if (elementos[i].id.indexOf(filtrar) == 0) {
    elementos[i].style.display = "block";
    }
    }
    
    } else {
    let elementos = document.getElementsByClassName('flex-item');
    for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "block";
    }
    }
    }

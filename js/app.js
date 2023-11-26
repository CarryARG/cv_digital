//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que haya seleccionado una opcion
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono todas las barras generales para luego manipularlas
let soporteTecnico = document.getElementById("soporteTecnico");
crearBarra(soporteTecnico);
let html_css = document.getElementById("html_css");
crearBarra(html_css);
let cSharp = document.getElementById("cSharp");
crearBarra(cSharp);
let office = document.getElementById("office");
crearBarra(office);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizaremos un arreglo, cada posicion pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animacion
let entro = false;

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight = habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalSoporteTecnico = setInterval(function(){
            pintarBarra(soporteTecnico, 14, 4, intervalSoporteTecnico);
        },100);
        const intervalHtml = setInterval(function(){
            pintarBarra(html_css, 13, 5, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 13, 0, intervalJavascript);
        },100);
        const intervalOffice = setInterval(function(){
            pintarBarra(office, 13, 2, intervalOffice);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 11, 1, intervalPython);
        },100);
        const intervalCSharp = setInterval(function(){
            pintarBarra(cSharp, 10, 3, intervalCSharp);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#3ba4ff";
    }else{
        clearInterval(interval);
    }
}

//detecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}

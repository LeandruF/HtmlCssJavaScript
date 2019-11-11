
function livros(){
var img = document.getElementById('imglivros')
var oplivros = document.getElementsByName('rlivro');

if(oplivros[0].checked){
    img.src = 'imagem/algoritmos.png';
    
}else if(oplivros[1].checked){
    img.src = 'imagem/javacomoprogramar.jpg';
}
else if(oplivros[2].checked){
    img.src = 'imagem/html.jpg';
}
else if(oplivros[3].checked){
    img.src = 'imagem/javascript.jpg';
}
else if(oplivros[4].checked){
    img.src = 'imagem/javascript2.jpg';
}
else if(oplivros[5].checked){
    img.src = 'imagem/jquery.jpg';
}
else if(oplivros[6].checked){
    img.src = 'imagem/angularjs.jpg';
}
else if(oplivros[7].checked){
    img.src = 'imagem/nodejs.jpg';
}
else if(oplivros[8].checked){
    img.src = 'imagem/android.jpg';
}
else if(oplivros[9].checked){
    img.src = 'imagem/hacker.jpg';
}
}

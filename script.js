function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var min = data.getMinutes ()
var seg = data.getSeconds ()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora}:${min}. `

if(hora>=0 && hora < 12){
    img.innerHTML = '<img src="./Exercicios/EX 01/fotos/Novo-Projeto-(2).png">'
    msg.innerHTML += 'BOM DIA!'
    document.body.style.background = '#B3DFDF'
    

}else if(hora >= 12 && hora < 18){
    img.innerHTML = '<img src="./Exercicios/EX 01/fotos/Novo-Projeto-(1).png">'
    msg.innerHTML += ' BOA TARDE!'
    document.body.style.background = '#BF7762'

} else{
    img.innerHTML = '<img src="./Exercicios/EX 01/fotos/Novo-Projeto.png">'
    msg.innerHTML += ' BOA NOITE!'
    document.body.style.background = '#373960'
}

}

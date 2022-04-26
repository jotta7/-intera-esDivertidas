function carregar() { //ilustração do site de acordo com o tempo.
    var msg = window.document.getElementById('msg')
    var boa = window.document.getElementById('boa')
    var img = window.document.getElementById('fotos')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12){
        boa.innerText = 'BOM DIA!'
        img.innerHTML = '<img src="./img/manha.png">'
        document.body.style.background = 'linear-gradient(150deg,#fff38e,#1FC1DA)'
        //background-image: linear-gradient(180deg,#c814d8,#000000);
        //( BOM DIA!)
    } else if (hora >= 12 && hora < 18){
        boa.innerText = 'BOA TARDE!'
        img.innerHTML = '<img src="./img/tarde.png">'
        document.body.style.background = 'linear-gradient(150deg,#e75207,#3B79CA'
        //('BOA TARDE!')    
    } else {
        boa.innerText = 'BOA NOITE!'
        img.innerHTML = '<img src="./img/noite.png">'
        document.body.style.background = 'linear-gradient(150deg,#141125,#0C387A'
        //('BOA NOITE!')
    }
}
function verificar() { //verificação de idade usando if / else
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')
    if(fano.value <= 0 || fano.value > ano){
        window.alert('não tenho maquina do tempo do Matue')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' //var genero = sexo[0].checked ? 'Masculino':'Femenino' condiçãoternario
        var imgidade = document.createElement('img')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                imgidade.setAttribute('src', './img/menino.jpg')
            } else if (idade < 21){
                //jovem
                imgidade.setAttribute('src', './img/jovemH.jpg')
            } else if (idade < 50){
                //adulto
                imgidade.setAttribute('src', './img/homem.jpg')
            } else {
                //idoso
                imgidade.setAttribute('src', './img/velho.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                imgidade.setAttribute('src', './img/menina.jpg')
            } else if (idade < 21){
                //jovem
                imgidade.setAttribute('src', './img/jovemM.jpg')
            } else if (idade < 50){
                //adulto
                imgidade.setAttribute('src', './img/mulher.jpg')
            } else {
                //idoso
                imgidade.setAttribute('src', './img/velha.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(imgidade) 
    }
    
}
function contar(){  //contagem usanso for ou while/do-while
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let contagem = document.querySelector('div#contagem')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert('COLOCA os números ABESTADO')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        contagem.innerHTML = ''
        if (i < f){//CONTAGEM NORMAL
            for(let c = i; c <= f; c += p) {
                contagem.innerHTML += ` ${c} \u{1F449} `
            }
        } else {//CONTAGEM REGRECIVA
            for(let c = i; c >= f; c -= p){
                contagem.innerHTML += ` ${c} \u{1F449} `  
            }
        }
        
        contagem.innerHTML += `\u{1F3C1}`
    }
}  
function tabuada(){
    let bnun = document.getElementById('bnun')
    let tab = document.getElementById('seltab')
    if (bnun.value == 0) {
        window.alert('Tu é burro é? coloca pelomenos o Número!') 
    } else {
        let bn = Number(bnun.value)
        let t = 0
        tab.innerHTML = ''
        while (t <= 10){
            t++
            let item = document.createElement('option')
            item.text = `${bn} x ${t} = ${bn*t}`
            //item.value = `tab${t}` ---> isso é pro php se for usar.
            tab.appendChild(item)
        }
    }
    
}
//----------------------------------lista
let lnum = document.getElementById('lnum')          //são variaveis dos inputs que receberam valor do usuario
let lista = document.getElementById('sellist')      //são variaveis dos select que vai receber e mostrar o valor
let resitens = document.getElementById('reslist')   // vai mostrar a analize dos itens 
let valores = []                                    // recebe os valores dos inputs

function isNumero(ln) {                             // função que diz se o numero esta nos parametros respondendo a função principal
    if (Number(ln) >= 1 && Number(ln) <=100) {      // parametros sobre o valor 
        return true
    } else {
        return false
    }
}

function inlista(ln, li) {                          
    if (li.indexOf(Number(ln)) != -1) {             //parametros sobre a lista
        return true
    } else {
        return false
    }
}

function adicionar(){                                               //função principal do onclick 
    if(isNumero(lnum.value) && !inlista(lnum.value, valores)){      // comandos dados as sub funçoes  
        valores.push(Number(lnum.value))                            // adiciona valor
        let itemlist = document.createElement('option')             // cria um elemento que vai inserir os valores dentro do select
        itemlist.text = `valor ${lnum.value} adicionado.`           // mostrar o valor digitado dentro do select
        lista.appendChild(itemlist)                                 // add filhos do elemento colocando cada valor dentro de um espaço.
        resitens.innerHTML = ''                                     // quando receber novo valor vai limpar a analize
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    lnum.value = '' // ele limpa o valor no imput
    lnum.focus() //ele deixa clicado pra receber valor
}
//--------------
function finalizar(){
    if (valores.length == 0) {
        window.alert('Add valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        resitens.innerHTML = ''
        resitens.innerHTML += `Ao todo, temos ${total} numeros cadastrados.</p>`
        resitens.innerHTML += `O maior valor informado foi ${maior}.</p>`
        resitens.innerHTML += `O menor valor informado foi  ${menor}.</p>`
        resitens.innerHTML += `somado todos os valores, temos ${soma}.</p>`
        resitens.innerHTML += `A media dos valores é ${media}.</p>`
    }  
}
//----------------------------------

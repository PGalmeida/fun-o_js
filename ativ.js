//Pedro Gomes de Almeida 25082
//julia barbosa lutfala 24858
//--------------------------------------------------------------------------------------------------------------
let exe1 = (str) => {
    let i = 0
    while(str[i] != undefined){
        i++
    }
    console.log(`Comprimento ${i}`)
}

exe1(prompt(`Digite uma palavra ou frase:`))
//--------------------------------------------------------------------------------------------------------------
let exe2 = (nome) => {
    let char = nome.charAt(0);
    if(char == 'a' || char == 'A'){
        console.log(nome)
    }
    else console.log(`O nome não começa com A`)
}

exe2(prompt(`Digite uma palavra ou frase:`))
//------------------------------------------------------------------------------------------------------------------------
let exe3 = (nome) => {
    console.log(nome.slice(0, 4))
}

exe3(prompt(`Digite uma palavra ou frase:`))
//------------------------------------------------------------------------------------------------------------
let exe4 = (nome) => {
    let jun = nome.split(" ").join("")
    let comp = jun.length
    console.log(comp)
}

exe4(prompt(`Digite uma palavra ou frase:`))
//--------------------------------------------------------------------------------------------------------
let exe5 = (nome, sexo, idade) => {
    if(sexo.toLowerCase()  == 'feminino' && idade < 25){
        console.log(`${nome} ACEITA`)
    }
    else{
        console.log(`${nome} NÃO ACEITA`)
    }
}

exe5(prompt('Informe o nome'), prompt('Informe o sexo'), 
     Number(prompt('Informe a idade')))
//-------------------------------------------------------------------------------------------------------------------------
let exe6 = (nome1, nome2) => {
    if(nome1 == nome2){
        console.log(`As palavras são iguais`)
    }
    else{
        console.log(`As palavras são diferentes`)
    }
}

exe6(prompt(`Digite uma palavra:`), prompt(`Digite outra palavra:`))
//---------------------------------------------------------------------------------------------------------
let exe7 = (num) => {
    let cont = 0
    for(let i=0;i<num.length;i++){
        if(num.charAt(i) === '1'){
            cont++
        }
    }
    console.log(`A quantidade de 1 é ${cont}`)
}

exe7(prompt(`Digite um número:`))
//-----------------------------------------------------------------------------------------------
let exe8 = (num) => {
    let novo = num.replace(/0/g, '1')
    console.log(novo)
}

exe8(prompt(`Digite um número:`))
//---------------------------------------------------------------------------------------------
let exe9 = (nome) => {
    let novo = nome.split('').reverse().join('')
    console.log(novo)
}

exe9(prompt(`Digite uma palavra ou frase:`))
//------------------------------------------------------------------------------------------------
let exe10 = (vogais) => {
    let remove = vogais.replace(/[aeiouà-ú]/gi,'')
    console.log(remove)
}

exe10(prompt('Digite uma frase:'))
//--------------------------------------------------------------------------------------------------
let exe11 = (palavra, carac) => {
    let cont = 0
    let result = ""
    palavra = palavra.toLowerCase()
    for(let i=0;i<palavra.length;i++){
        atual = palavra[i]

        if("aeiou".includes(atual)){
            cont++
            result += carac
        }
        else{
            result += palavra[i]
        }
    }
    console.log(`A palavra ${palavra} tem ${cont} vogais.`)
    console.log(`A palavra sem as vogais substituindo por ${carac} = ${result}`)
}

exe11(prompt(`Digite uma palavra ou frase:`), prompt(`Digite umcaracter:`))
//-----------------------------------------------------------------------------------------------------------------
let exe12 = (frase) => {
    let cont = 0
    for (let i = 0; i < frase.length; i++) {
        if(frase[i] === " "){
            cont++
        } 
    }
    console.log(`A frase "${frase}" tem ${cont} espaços.`)
}

exe12(prompt(`Digite uma frase:`))
//-------------------------------------------------------------------------------------------------------------------
let exe13 = (frase) => {
    let nova = frase.split('')
    let result = nova.filter(char => char !== ' ')
    console.log(result)
}

exe13(prompt(`Digite uma palavra ou frase:`))
//-----------------------------------------------------------------------------------------------------------------
let exe14 = (nome, troca, sub) => {
    let mudar = nome.split(troca).join(sub)
    console.log(mudar)
}

exe14(prompt(`Digite uma palavra:`), prompt(`Digite uma letra que deseja encontrar`), 
              prompt(`Digite um caracter:`))
//-------------------------------------------------------------------------------------------------------
let dados = (num) => {
    let nome = prompt(`Digite o primeiro nome da pessoa ${num}:`);
    let idade = Number(prompt(`Digite a idade de ${nome}:`));
    return {nome, idade};
}
  
let encontrar = () => {
    let nomeJovem = "";
    let idadeJovem = Infinity;
    let nomeVelho = "";
    let idadeVelho = -Infinity;

    for (let i = 1; i <= 10; i++){
        let {nome, idade } = dados(i);

        if(idade < 0){
        break;
        }

        if(idade < idadeJovem){
        nomeJovem = nome;
        idadeJovem = idade;
        }

        if(idade > idadeVelho){
        nomeVelho = nome;
        idadeVelho = idade;
        }
    }

    return {nomeJovem, idadeJovem, nomeVelho, idadeVelho};
}

  
let exe15 = () =>{
    let {nomeJovem, idadeJovem, nomeVelho, idadeVelho} = encontrar();
  
    console.log(`Pessoa mais jovem:`);
    console.log(`Nome: ${nomeJovem}`);
    console.log(`Idade: ${idadeJovem}`);
  
    console.log(`Pessoa mais velha:`);
    console.log(`Nome: ${nomeVelho}`);
    console.log(`Idade: ${idadeVelho}`);
}
  
exe15();
//-----------------------------------------------------------------------------------------------
let exe16 = (frase1, frase2) => {
    let novo1 = frase1.split('').reverse().join('')
    let novo2 = frase2.split('').reverse().join('')
    let remove1 = novo1.replace(/[a,A]/g,'*')
    let remove2 = novo2.replace(/[a,A]/g,'*')
    console.log(remove1)
    console.log(remove2)
}

exe16(prompt(`Digite uma frase:`), prompt(`Digite outra frase:`))
//--------------------------------------------------------------------------------------------------------------------
let exe17 = (s, i, j) => {
    if(i < 0 || j < 0 || i >= s.length || j >= s.length || i > j){
        console.log(`Valores de I e/ou J são inválidos.`)
    }
    else{
        let segmento = s.slice(i, j+1)
        console.log(`Segmento S[${i}..${j}]: ${segmento}`)
    }
}

exe17(prompt(`Digite uma palavra:`), Number(prompt(`Digite o valor inicial:`)), 
              Number(prompt(`Digite o valor final:`)))
//------------------------------------------------------------------------------------------------------
let exe18 = (s, c, i) => {
    if(i < 0 || i >= s.length){
        console.log(`Não foi encontrada nenhuma ocorrência de '${c}'
         a partir da posição ${i}.`)
    }
    for(let k = i; k < s.length; k++){
        if(s[k] === c){
            console.log(`A primeira ocorrência de '${c}'
             a partir da posição ${i} está no índice ${k}.`)
        }
    }
}

exe18(prompt(`Digite uma palavra:`), prompt(`Digite um caracter:`),
      Number(prompt(`Digite uma posição inicial:`)))
//-------------------------------------------------------------------------------------------------------------------
let exe19 = (n1, n2) => {
    let char = n1.charAt(0)
    let char1 = n2.charAt(0)
    if(char > char1){
        console.log(`${n2} - ${n1} // ${char1} - ${char}`)
    }
    else if(char1 > char){
        console.log(`${n1} - ${n2} // ${char} - ${char1}`)
    }
    else{
        console.log(`As palavras começam com as mesmas letras - ${n1} - ${n2} // ${char1} - ${char}`)
    }
}

exe19(prompt(`Digite uma palavra`), prompt(`Digite outra palavra`))
//-----------------------------------------------------------------------------------------------------------
let exe20 = (f1) => {
    let desloca = 3 % 26
    let result = ""

    for(let i = 0; i < f1.length; i++){
        let letra = f1[i]

        if(/[a-zA-Z]/.test(letra)){
            let maiuscula = letra === letra.toUpperCase()
            let cod = letra.charCodeAt()
            let deslocado = cod + desloca
            if((maiuscula && deslocado > 90) || (!maiuscula && deslocado > 122)){
                deslocado -= 26;
            }
            
            result += String.fromCharCode(deslocado);
        } else {
            result += letra;
        }
    }
        console.log(`A frase cifrada é ${result}`);
}


exe20(prompt(`Digite uma frase para ser cifrada:`))
//------------------------------------------------------------------------------------------------------------------
let exe21 = (nome) => {
    let str = nome.replace(/[^a-zA-Z]/g, '').toLowerCase()
    let novo = str.split('').reverse().join('')
    if(novo === str){
        console.log(`A palavra ${nome} é um palíndromo`)
    }
    else{
        console.log(`A palavra ${nome} não é um palíndroma`)
    }
}

exe21(prompt(`Digite uma frase ou uma palavra:`))
//-----------------------------------------------------------------------------------------------------------------
let exe22 = (n1, n2) => {
    let result = n1.endsWith(n2)
    if(result){
        console.log(`A segunda palavra está contida no final da primeira.`)
    }
    else{
        console.log(`A segunda palavra não está contida no final da primeira.`)
    }
}

exe22(prompt(`Digite a primeira palavra:`), prompt(`Digite a segunda palavra:`))
//----------------------------------------------------------------------------------------------------------------
let exe23 = (str1, str2, n) => {
    let parteStr2 = str2.substring(0, n)
    let concatenada = str1 + parteStr2 + "\0"
    console.log(concatenada)
}

exe23(prompt(`Digite a primeira palavra (str1):`), 
      prompt(`Digite a segunda palavra (str2):`), 
      Number(prompt(`Digite um valor inteiro positivo N:`)))
//-------------------------------------------------------------------------------------------------------------
let exe24 = (a, b) => {
    let cont = 0
    let i = -1
    while ((i = b.indexOf(a, i + 1)) !== -1) {
        cont++;
      }
      console.log(`A cadeia A ocorre ${cont} vezes na cadeia B.`)
}

exe24(prompt(`Digite a cadeia A:`), prompt(`Digite a cadeia B:`))
//---------------------------------------------------------------------------------------------------------------------
let exe25 = (data) => {
    let padrao = /^(\d{2})\/(\d{2})\/(\d{4})$/
    let correspondencias = data.match(padrao)
    if(correspondencias){
        let dia = Number(correspondencias[1], 10)
        let mes = Number(correspondencias[2], 10)
        let ano = Number(correspondencias[3], 10)

        console.log(`Dia: ${dia}`)
        console.log(`Mês: ${mes}`)
        console.log(`Ano: ${ano}`)
    }
    else{
        console.log(`Formato de data inválido ou não numérico.`)
    }
}

exe25(prompt(`Digite uma data no formato 'DD/MM/AAAA':`))
//--------------------------------------------------------------------------------------------------------------
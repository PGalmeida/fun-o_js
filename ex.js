function exe1() {
    let a
    let b
    let c
    let d
    let aux
    let conta2 = 1

    while(conta2 <= 1){

    a = Number(prompt(`Informe A`))
    b = Number(prompt(`Informe B`))
    c = Number(prompt(`Informe C`))
    d = Number(prompt(`Informe D`))

    let conta = 1
  

    while (conta <= 3) {
        if(a > b){
            aux = a
            a = b
            b = aux
        }
        if(b > c){
            aux = b
            b = c
            c = aux 
        }
        if (c > d) {
            aux = c
            c = d
            d = aux
        }

        conta ++
    }
    

    alert(`Crescente : ${a}, ${b}, ${c}, ${d}`)
    alert(`Decrescente: ${d}, ${c}, ${b}, ${a}`)
    conta2 ++

    }
}

function exe2(){
    let preco = 5.0
    let qtde = 120
    const desc = 200
    
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Quantidade </th> <th> Dispesa </th> <th> Lucro </th> </tr>"

    while (preco >= 1.0) {
        let lucro = (preco * qtde) - desc
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desc} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
        
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function exe3(){
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    let pf1 = 0 
    let pf5 = 0
    let idade
    let conta = 1

    while(conta <= 8){
        idade = Number(prompt(`Informe idade ${conta}`))
        if ((idade >= 0) && (idade <= 15)) {
            f1++
        }
        else if ((idade >= 16) && (idade <= 30)) {
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)) {
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)) {
            f4++
        }
        else if(idade >= 60){
            f5++
        }
        else alert("Idade negativa")

        conta++
    }
    pf1 = (f1/8)*100
    pf5 = (f5/8)*100

    alert(`f1: ${f1}, f2: ${f2}, f3: ${f3}, f4:${f4} e f5: ${f5}`)
    alert(`%f1: ${pf1} e %f5: ${pf5}`)
}

function exe4(){
    let nu = Number(prompt("Informe o número: "))
    let conta = 0
    let saida = ""

    while (conta <= 10) {
        saida = saida + `\n ${nu} x ${conta} = ${nu*conta}`
        conta++
    }

    alert(saida)
}

function exe5(){
    let nu 
    let conta 
    let saida = ""

    for(nu = 1; nu <= 10; nu++){
    for(conta = 0; conta <= 10; conta++){
        saida = saida + `\n ${nu} x ${conta} = ${nu*conta}`
    }
}

    alert(saida)  
}

function exe6(){
    let totalprazo = 0
    let totalvista = 0
    let total = 0
    let codigo
    let valor

    for (let conta = 1; conta <=10; conta++){
        codigo = prompt("Informw V ou P como código da compra").toUpperCase()
        valor = Number(prompt("Informe o valor da compra"))

        if(codigo == 'V'){
            totalvista = totalvista + valor
        }
        else if(codigo == 'P'){
            totalprazo = totalprazo + valor
        }
        else{
            alert("código inválido")
            conta--
        }
    }
    total = totalvista + totalprazo
    alert(`Total Prazo: ${totalprazo}, Total a Vista: ${totalvista} e Total: ${total}`)
    alert(`Valor da 1° prestação ${(totalprazo/3).toFixed(2)}`)
}

function exe7(){
    let idade, altura, peso
    let idade50 = 0 
    let somaltura = 0
    let contaltura = 0
    let peso40 = 0
    for(let conta = 1; conta <= 5; conta++){
        idade = Number(prompt("Informe idade"))
        altura = Number(prompt("Informe altura"))
        peso = Number(prompt("Informe peso"))

        if(idade > 50){
            idade50 ++
        }
        if(idade >= 10 && idade <= 20){
            somaltura = somaltura + altura
        }
        if(peso < 40){
            peso40 ++
        }
    }
    contaltura = somaltura/5

    alert(`A quantidade de pessaos com mais de 50 anos é ${idade50}`)
    alert(`A média das alturas entre 10 a 20 anos é ${contaltura}`)
    alert(`A % de pessoa com peso menor que 40Kg é ${peso40*20}%`)
}

function exe8(){
    let idade, altura, peso, corolhos, corcabelo
    let idade50 = 0
    let somaidade = 0
    let mediaIdade
    let olhos = 0
    let cabelo = 0

    for(let conta = 1; conta <= 6; conta++){
        idade = Number(prompt("Informe idade"))
        altura = Number(prompt("Informe altura"))
        peso = Number(prompt("Informe peso"))
        corolhos = prompt("Informe a cor dos olohs (A - azul, P - preto, V - verde, C - castanho)")
        corcabelo = prompt("Informe a cor do cabelo (P - preto, C - castanho, L - loiro, R - ruivo)")

        if(idade > 50 && peso < 60){
            idade50++
        }
        if(altura < 150){
            somaidade = somaidade + idade
        }
        if(corolhos == 'A'){
            olhos++
        }
        if(corcabelo == 'R' && corolhos !== 'A'){
            cabelo++
        }
    }
    mediaIdade = somaidade/6

    alert(`A quantidade de pessoas com idade maior de 50 anos e peso menor que 60Kg é: ${idade50}`)
    alert(`A média de idades com a altura menor que 1,50 metros é: ${mediaIdade}`)
    alert(`A % de pessoa com olhos azuis é: ${(olhos*100)/6}%`)
    alert(`A quantidade de pessoa rivas e que não tem olhos azuis é: ${cabelo}`)
}

function exe9(){
    let peso
    let altura
    let idade
    let mediaIdade
    let acm = 0
    let pessoa = 0
    let pes = 0

    for(let cont = 1; cont <= 10; cont++){
        idade = Number(prompt("Informe idade"))
        altura = Number(prompt("Informe altura"))
        peso = Number(prompt("Informe peso"))
        
        acm = acm + idade

        if(peso > 90 && altura < 150){
            pessoa = pessoa + 1
        }
        else if((idade >= 10 && idade <= 30) && altura > 190){
            pes = pes + 1
        }
    }
    mediaIdade = acm/10
    alert(`A média das idades é ${mediaIdade}`)
    alert(`A quantidade de pessoa com mais de 90Kg e menor que 1,50 metros é ${pessoa}`)
    alert(`A % de pessoas entre 10 e 30 anos com mais de 1,90 é de ${pes*10}%`)
}

function exe10(){
    let somaPares = 0
    let somaPrimos = 0
  
    for (let i = 1; i <= 10; i++) {
      let n = Number(prompt("Informe um número"));
  
      let resto = 0;
  
      for (let conta = 1; conta <= n; conta++) {
        if (n % conta === 0) {
          resto++;
        }
      }
  
      if (resto == 2) {
        somaPrimos += n;
      }
  
      if (n % 2 == 0) {
        somaPares += n;
      }
    }
  
    alert(`A soma dos números pares é: ${somaPares}`);
    alert(`A soma dos números primos é: ${somaPrimos}`);
  }


function exe20(){
    let opcao
    let n1
    let n2
    let n3
    let pn1
    let pn2
    let pn3

    do {
        opcao = Number(prompt("Menu de opções \n 1.Média aritimética \n 2.Média ponderada \n 3.Sair"))
        switch (opcao) {
            case 1:
                n1 = Number(prompt("Informe nota 1: "))
                n2 = Number(prompt("Informe nota 2: "))
                alert(`Média aritimética  ${(n1+n2)/2}`)
                break;
            case 2:
                n1 = Number(prompt("Informe nota 1: "))
                pn1 = Number(prompt("Informe peso da nota 1: "))
                n2 = Number(prompt("Informe nota 2: "))
                pn2 = Number(prompt("Informe peso da nota 2: "))
                n3 = Number(prompt("Informe nota 3: "))
                pn3 = Number(prompt("Informe peso da nota 3: "))
                alert(`Média ponderada ${((n1+pn1) + (n2+pn2) + (n3+pn3))/(pn1+pn2+pn3)}`)
                break;
            case 3:
                alert("Opção 3 escolhida")
                break;
            default:
                alert("Opção inválida")
                break;
        }
    } while (opcao != 3);
}

function exe21(){
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulos = 0, branco = 0;
    let total, opcao

    do{
        opcao = Number(prompt('Escolha uma opção: \n 1.Cand 1 \n 2.Cand 2 \n 3.Cand 3 \n 4.Cand 4 \n 5.Nulos \n 6.Branco \n 0.Sair do programa'))
        switch(opcao){
            case 1: cand1++; break
            case 2: cand2++; break
            case 3: cand3++; break
            case 4: cand4++; break
            case 5: nulos++; break
            case 6: branco++; break
            case 0: alert('Votação encerrada'); break
            default: alert('Opção Inválida')
        }
    }
    while(opcao != 0)
    total = cand1 + cand2 + cand3 + cand4 + nulos + branco
    if(total > 0){
    alert(`% de votos nulos ${nulos/total*100}`)
    alert(`% de votos brancos ${branco/total*100}`)
    }
    else alert('Nenhum voto computado')
}

function exe23(){
    let salario, novo, ferias, decimoterceiro, meses, opcao

    do{
        opcao = Number(prompt('Escolha uma opção: \n 1.Novo Salário \n 2.Férias \n 3.Decimo Terceiro \n 4.Sair'))

        switch(opcao){
            case 1: salario = Number(prompt('Informe salario'))
                    if((salario >= 0) && (salario< 210)){
                        novo = salario + salario*15/100
                    }
                    else if((salario >= 210) && (salario <= 600)){
                        novo = salario + salario*10/100
                    }
                    else if((salario > 600)){
                        novo = salario + salario*5/100
                    }
                    else{
                        alert('Salário negativo'); break
                    }
                    alert(`Novo salário ${novo}`);break
                    case 2: salario = Number(prompt('Informe salário'))
                    ferias = salario + 1/3*salario
                    alert(`Férias ${ferias}`);break
                    case 3: salario = Number(prompt('Informe salario'))
                    meses = Number(prompt('Informe meses'))
                    if((meses >= 1) && (meses <= 12)){
                        decimoterceiro = salario + salario * meses/12
                        alert(`Décimo Terceiro ${decimoterceiro}`)
                    }
                    else{
                        alert('Nro de meses inválidos')
                    }
                    break
                    case 4: alert('Encerra o prgrama');break
                    default: alert('Opção inválida')
        }
    }
    while(opcao != 4)
}
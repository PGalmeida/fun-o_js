function conta10(){
    let conta = 1
    while(conta <= 10){
        console.log("Boa noite" + conta)
        conta = conta + 1
    }
    console.log("Depois do while " + conta)
}

function Idade() {
    let conta = 1
    let soma = 0
    let idade
    let quant = Number(prompt['Informe idade '])
    while (conta <= quant) {
         let idade = Number(prompt['Informe idade ' + conta])
         soma = soma + idade
         conta = conta + 1
    }
        
    let media = soma / quant
    alert("A média das idades é " + media)
}

function Idade() {
    let nu = Number(prompt['Informe um número '])
    let conta = 0
    while (conta <= 10) {
        alert(nu + " x " + conta + " = " + nu*conta)
        conta++
    }
}
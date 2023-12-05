let idade = [15, 24, 47, 78, 35]
console.log(idade)
let dobrar = idade.map((item) => item*2)// todos
console.log(dobrar)


let notas = [7, 8, 9, 2, 1, 4, 7]
let soma = notas.reduce((acumula, item) => acumula + item) // junta todos
console.log(notas)
console.log(soma)
let multiplica = notas.reduce((acumula, item) => acumula * item)
console.log(multiplica)

let vetor = [2, 12, 23, 34, 45, 60]
let pares = vetor.filter((item) => item % 2 == 0)//todos
console.log(pares)

let par = vetor.find((item) => item % 2 == 0)//primeiro
console.log(par)

let temPar = vetor.some((item) => item % 2 == 0)//tem ou não tem
console.log(temPar)

let nome = "pedro"
console.log(nome.charAt(0))

//JSON.parse() - tranforma/converte string para objeto
//JSON.stringify() - tranforma/converte objeto para string

//operado spread ...

let times = ['São paulo', 'Palmeiras', 'Santos', 'Corintians']
console.log(times)
console.log(...times)

//comando for

for(let time of times){// of = nome 
    console.log(time)
}

for(let time in times){// in = indice
    console.log(time)
}

let m = [1, 2, 3]
console.log(m)
console.log(...m)
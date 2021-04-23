let pessoas = []

let quantidade_pessoas = Number(prompt("Quantas pessoas vai inserir:"));

for(let i=0; i<quantidade_pessoas; i++){
    confirm(`ingreso de pessoa ${i+1}`);
    let nome = prompt("Informe o seu Nome:");
    let sobrenome = prompt("Informe o seu Sobrenome:");
    let idade = Number(prompt("Informe a sua Idade"));
    let sexo = prompt("Informe o seu Sexo:");

    let registro = {
        nome,
        sobrenome,
        idade,
        sexo,
    }

    pessoas.push(registro)

}

console.log("As pessoas cadastradas foram:");
console.table(pessoas);



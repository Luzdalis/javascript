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

i=0;
mayor=0
while(quantidade_pessoas>1){
    if ((pessoas[i].idade > pessoas[i+1].idade) && (pessoas[mayor].idade < pessoas[i].idade)){   
        mayor=i;
    }
    else if((pessoas[i].idade < pessoas[i+1].idade) && (pessoas[mayor].idade < pessoas[i+1].idade)){
        mayor=i+1;    
    }

    quantidade_pessoas--;
    i++;
}

console.log(`${pessoas[mayor].nome} ${pessoas[mayor].sobrenome} é a pessoa mais velha de todos os cadastrados`)
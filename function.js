let pessoas = [];

function pessoa(nome, sobrenome, cpf, idade, sexo){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.idade = idade;
    this.sexo = sexo;
}

function cadastro_de_pessoas(){
    let nome = prompt("Insira o Nome:");
    let sobrenome = prompt("Insira o Sobrenome:");
    let cpf = Number(prompt("Insira o CPF:"));
    let idade = Number(prompt("Insira a Idade"));
    let sexo = prompt("Insira o Sexo:"); 

    let pessoa_cadastrada = new pessoa (nome, sobrenome, cpf, idade, sexo);
    return (pessoa_cadastrada);
}

function mais_velho(pessoas){
    let i=0;
    let velho=0
    let quantidade_pessoas = pessoas.length;
    while(quantidade_pessoas>1){
        if ((pessoas[i].idade > pessoas[i+1].idade) && (pessoas[velho].idade < pessoas[i].idade)){   
            velho=i;   
        }
        else if((pessoas[i].idade < pessoas[i+1].idade) && (pessoas[velho].idade < pessoas[i+1].idade)){
            velho=i+1;    
        }

        quantidade_pessoas--;
        i++;
    }
    return(velho);
}

function mais_nova(pessoas){
    let i=0;
    let nova=0;
    let quantidade_pessoas = pessoas.length;
    while(quantidade_pessoas>1){
        if ((pessoas[i].idade < pessoas[i+1].idade) && (pessoas[nova].idade > pessoas[i].idade)){   
            nova=i;
        }
        else if((pessoas[i].idade > pessoas[i+1].idade) && (pessoas[nova].idade > pessoas[i+1].idade)){
            nova=i+1;    
        }
    
        quantidade_pessoas--;
        i++;
    }
    return(nova);
}

let homem_mulher = (pessoas) => {
    let homem = 0;
    let mulher = 0;
    for (i=0; i<pessoas.length; i++){
        if (pessoas[i].sexo == "f" || pessoas[i].sexo == "F")
        mulher++;
        else if (pessoas[i] == "M" || pessoas[i].sexo == "m")
        homem++;
    }
    return [homem, mulher];
}



resposta = "S";
while (resposta == "S"){
    pessoas.push(cadastro_de_pessoas());
    resposta = prompt("Deseja cadrastrar outra pessoa? (S/N) ");
}

if (pessoas.length == 1){
    console.log ("Há apenas uma pessoa cadastrada, portanto, não foram feitas comparações")
    }
else{
    console.log("As pessoas cadastradas foram:");
    console.table(pessoas);

    let velho = mais_velho(pessoas);
    console.log(`A pessoa mais velha é ${pessoas[velho].nome} ${pessoas[velho].sobrenome} com ${pessoas[velho].idade} anos de Idade`);

    let nova = mais_nova(pessoas);
    console.log(`A pessoa mais nova é ${pessoas[nova].nome} ${pessoas[nova].sobrenome} com ${pessoas[nova].idade} anos de Idade`);

    let [homem, mulher] = homem_mulher(pessoas);
    console.log(`quantidades de homems cadastrados ${homem}
quantidades de mulhers cadastradas ${mulher}` 
    )
}



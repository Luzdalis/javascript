let pessoas = [];
let formulario = document.querySelector("#cadastro")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let dados = new FormData(formulario);
    let novoCadastro = cadastro_de_pessoas(dados);

    let valor = validarCpf(novoCadastro.cpf);
    if (valor == true){

    pessoas.push(novoCadastro);
    novoItem();
    comparacoes();

    alert("Pessoa registrada!")
    }
})

function validarCpf(cpf){

    let arr = String(cpf);
    let i=0;
    while(i < arr.length){
        console.log(arr[i])
    valorMultiplicador = 10;
    i++;
    }
}


function cadastro_de_pessoas(formData) {
    let nome = formData.get ("nome")
    let cpf = Number(formData.get("cpf"))
    let email = formData.get("email")
    let idade = Number(formData.get("idade"))
    let sexo = formData.get("sexo")

    let cadastrado = {
        nome,
        cpf,
        email,
        idade,
        sexo
    }

    return(cadastrado);
}

function novoItem(){

    let inputItem = document.querySelector('#lista');

    let inputNome = document.querySelector('input[name="nome"]')
    let inputCpf = document.querySelector('input[name="cpf"]')
    let inputEmail = document.querySelector('input[name="email"]')
    let inputIdade = document.querySelector('input[name="idade"]')
    let inputSexo = document.querySelector('select[name="sexo"]')

    let item = document.createElement('li');
    item.textContent = `Nome:${inputNome.value} CPF:${inputCpf.value} 
    E-email:${inputEmail.value}  Idades:${inputIdade.value}  Sexo:${inputSexo.value} `

    inputItem.appendChild(item);
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
        if (pessoas[i].sexo == "Feminino")
        mulher++;
        else if (pessoas[i].sexo == "Masculino")
        homem++;
    }
    return [homem, mulher];
}

function comparacoes(){

        let velho = mais_velho(pessoas);
        let paragrafo1 = document.querySelector('#comp1');
        paragrafo1.textContent = `A pessoa mais velha é ${pessoas[velho].nome} com ${pessoas[velho].idade} anos de Idade`;

        let nova = mais_nova(pessoas);
        let paragrafo2 = document.querySelector('#comp2');
        paragrafo2.textContent = `A pessoa mais nova é ${pessoas[nova].nome} com ${pessoas[nova].idade} anos de Idade`;

        let [homem, mulher] = homem_mulher(pessoas);
        let paragrafo3 = document.querySelector('#comp3');
        paragrafo3.textContent = `Quantidades de homems cadastrados: ${homem}
        Quantidades de mulhers cadastradas: ${mulher}`;

}

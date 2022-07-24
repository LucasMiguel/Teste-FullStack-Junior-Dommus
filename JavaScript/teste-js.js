/**
- Avaliação técnica para equipe de Desenvolvimento da Dommus (2021);
- Esse exercício tem por objetivo analisar o conhecimento básico de Javascript
dos candidatos
- Observe o array definido na constante "pessoas". O mesmo possui um conjunto de
objetos, cujo estado consiste dos atributos "nome" e "idade"
- Desejamos separar os nomes das pessoas deste vetor por paridade do atributo "idade"
- Para tanto, desenvolva uma função ASSÍNCRONA E ANÔNIMA com o nome "separarPorIdade"
- Essa função deve receber como parametro um vetor, o qual você pode assumir que
será composto por objetos com o mesmo estado da constante "pessoas" - não se
preocupe com validação
- Essa função deverá retornar um objeto contendo dois atributos: "nomesIdadePar"
e "nomesIdadeImpar", cada qual contendo um vetor com os valores do atributo nome
das pessoas de entrada, cuja as idades sejam números pares ou ímpares, respectivamente.
- Chame sua função passando a constante "pessoas" como parâmetro. Na resolução desta,
imprima no console a quantidade de nomes em "nomesIdadePar" da resposta,
a quantidade de nomes em "nomesIdadeImpar" da resposta, bem como os nomes em cada
um dos arrays, ordenados alfabeticamente de forma crescente.
**/
const pessoas = [
  {
    nome: "Rafael",
    idade: 30
  },
  {
    nome: "Ambrosina",
    idade: 87
  },
  {
    nome: "José",
    idade: 25
  },
  {
    nome: "André",
    idade: 23
  },
  {
    nome: "Brenda",
    idade: 23
  },
  {
    nome: "Carlinhos",
    idade: "27"
  },
  {
    nome: "Nivea",
    idade: 19
  },
  {
    nome: "Jaison",
    idade: 34
  },
  {
    nome: "Adriana",
    idade: 28
  },
  {
    nome: "Edenilson",
    idade: 33
  },
  {
    nome: "Claudio",
    idade: 16
  },
  {
    nome: "Flavia",
    idade: 32
  },
  {
    nome: "Bruno",
    idade: 28
  },
  {
    nome: "Marcia",
    idade: 24
  }
];

/**
 * Função para separação dos nomes de acordo com o a idade. Entre impares e pares
 * @param {object} data 
 * @returns {object} Arrays com os nomes já em ordem alfabética
 */
const separarPorIdade = async (data) => {
  let evenAges = [];
  let oddAges = [];

  data.forEach(element => {
    if (element.idade % 2) {
      oddAges.push(element.nome)
    } else {
      evenAges.push(element.nome)
    }
  });

  return {
    nomesIdadePar: evenAges.sort(),
    nomesIdadeImpar: oddAges.sort()
  };
}


separarPorIdade(pessoas).then((resposta) => {
  console.log("Quantidade idades pares: " + resposta.nomesIdadePar.length);
  console.log("Quantidade idades impares: " + resposta.nomesIdadeImpar.length);
  console.log("Nomes com idades pares: " + resposta.nomesIdadePar);
  console.log("Nomes com idades impares: " + resposta.nomesIdadeImpar);
});

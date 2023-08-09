const data = [
  {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
  },
  {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
  },
  {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
  },
  {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
  },
  {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
  },
  {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
  },
  {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
  },
];

// 1. Imprima no console a quantidade de pessoas Total.
const totalPessoas = data.length
console.log(`O total de pessoas é ${totalPessoas}.`)

// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
const pessoasFeminino = data.filter(pessoa => pessoa.sexo === 'F')
console.log(pessoasFeminino)

// 3. Imprima no console a soma do salário de todas as pessoas.
const somaSalarios = data.reduce((total, pessoa) => total + pessoa.salario, 0)
console.log(`A soma de todos os salários é ${somaSalarios.toFixed(2)}.`)

// 4. Imprima no console a média do salário de todas as pessoas.
const mediaSalarios = somaSalarios / totalPessoas
console.log(`A média de todos os salários é ${mediaSalarios.toFixed(2)}.`)

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino.
const pessoasMasculino = data.filter(pessoa => pessoa.sexo === 'M')
console.log(pessoasMasculino)

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino.
const somaSalariosMasculinos = pessoasMasculino.reduce((total, pessoa) => total + pessoa.salario, 0)
const mediaSalariosMasculino = somaSalariosMasculinos / pessoasMasculino.length
console.log(`A média de todos os salários masculinos é ${mediaSalariosMasculino.toFixed(2)}.`)

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
console.log(data.some(pessoa => pessoa.salario > 7000))

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
console.log(data.findIndex(pessoa => pessoa.nome === 'Eva Trindade'))

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const pessoaNomeSilva = data.filter(pessoas => pessoas.nome.includes('Silva'))
console.log(pessoaNomeSilva)

// 10. Imprima os nomes utilizando o MAP
const nomes = data.map(pessoas => pessoas.nome)
console.log(nomes)
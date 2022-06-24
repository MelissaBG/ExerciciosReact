import "./styles.css";
import React from "react";

const names = ["James", "John", "Paul", "Ringo", "George"];

export default function App() {
  return (
    <div>
      {names
        .filter((name) => name.includes("j"))
        .map((filteredName) => (
          <li>{filteredNae}</li>
        ))}
    </div>
  );
}

export default App;

//Exbindo apenas os nomes que incluam a letra 'J'
// Na linha 9 definimos o JSX com a abertura de uma chave dentro do elemnto div.
//Em seguida especificamos o array para o qual quermos executar
// a função de filtro. Por ser uma funçao abre-se um conjunto de parentêses
// É dentro dele que definimos a condição: neste caso, se o elemento incluir a letra J.

const people = [
  {
    name: "James",
    age: 31
  },
  {
    name: "John",
    age: 45
  },
  {
    name: "Paul",
    age: 65
  },
  {
    name: "Ringo",
    age: 49
  },
  {
    name: "George",
    age: 34
  }
];

export default function App() {
  return (
    <div>
      {people
        .filter((person) => person.age < 60)
        .map((filteredPerson) => (
          <li>{filteredPerson.name}</li>
        ))}
    </div>
  );
}

//Filtrando um array de objetos por valor em React
// Na linha 54 declaramos qual objeto queremos filtrar e aplicamos o filter
// Em seguida declamos qual valor dentro do array de pessoas quermos filtrar
// O filter percorrerá todos os objetos e verificará qual o valor de Age dentro de
//cada objeto é menor que 60.
// A partir dai usamos o map para mapear esses objetos filtrados.

export default App;

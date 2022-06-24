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
// Na linha 16 definimos o JSX com a abertura de uma chave dentro do elemnto div.
//Em seguida especificamos o array para o qual quermos executar
// a função de filtro. Por ser uma funçao abre-se um conjunto de parentêses
// É dentro dele que definimos a condição: neste caso, se o elemento incluir a letra J.

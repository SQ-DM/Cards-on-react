import { useState, useEffect } from "react";
import CardsList from "./components/cards-list/CardsList";
import info from "./data";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(info);
  }, []);

  const onHandleChoice = (id, e) => {
    e.preventDefault();
    let newData = data.map((card) => {
      if (card.id === id) {
        return { ...card, active: !card.active };
      }
      return card;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="header-text">Ты сегодня покормил кота?</p>
        <CardsList cardsInfo={data} onHandleChoice={onHandleChoice} />
      </header>
    </div>
  );
}

export default App;

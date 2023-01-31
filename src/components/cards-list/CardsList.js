import Card from "./Card";

function CardsList({ cardsInfo, onHandleChoice }) {
  return (
    <div className="cards__list">
      {cardsInfo.map((card, i) => (
        <Card
          key={i}
          id={card.id}
          filler={card.filler}
          portions={card.portions}
          gift={card.gift}
          weight={card.weight}
          active={card.active}
          availability={card.availability}
          message={card.message}          
          onHandleChoice={onHandleChoice}
        />
      ))}
    </div>
  );
}

export default CardsList;

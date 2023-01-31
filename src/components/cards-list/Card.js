import { useState } from "react";
import cat from "../img/cat.png";
import "./style.css";

function Card({
  id,
  filler,
  portions,
  gift,
  weight,
  onHandleChoice,
  active,
  availability,
  message,
}) {
  const [onHandleLeave, setOnHandleLeave] = useState(null);

  const classActive = active ? "card__wrapper__active" : "card__wrapper";

  const classDisabled =
    availability === false ? "card__wrapper__disabled" : classActive;

  const moreFiveMouse =
    gift >= 5 ? (
      <p className="card__title">
        {gift} мышей в подарок
        <br />
        заказчик доволен
      </p>
    ) : (
      <p className="card__title">{gift} мыши в подарок</p>
    );

  const oneMouse =
    gift < 2 ? (
      <p className="card__title">{gift} мышь в подарок</p>
    ) : (
      moreFiveMouse
    );

  const messageActive = active ? (
    <p className="link__text">{message}</p>
  ) : (
    <p className="link__text">
      Чего сидишь? Порадуй котэ,{" "}
      <a className="link" href="bye" onClick={(e) => onHandleChoice(id, e)}>
        купи
      </a>
    </p>
  );

  const messageDisabled =
    availability === false ? (
      <p className="link__text__disabled">{`Печалька, ${filler} закончился`}</p>
    ) : (
      messageActive
    );

  return (
    <div className="card__container">
      <div
        className={classDisabled}
        onClick={(e) => onHandleChoice(id, e)}
        onMouseOver={() => setOnHandleLeave(true)}
        onMouseOutCapture={() => setOnHandleLeave(false)}>
        <div className="card__menu">
          {active && availability ? (
            <p className="card__title__active">Котэ не одобряет?</p>
          ) : (
            <p className="card__title">Сказочное заморское яство</p>
          )}

          <p className="card__title__name">Нямушка</p>
          <h3 className="card__title__filler">{filler}</h3>
          <div className="card__menu__block">
            <p className="card__title">{portions} порций</p>
            {oneMouse}
          </div>
        </div>
        <div className="card__block">
          <img className="card__img" src={cat} alt="cat" />
          <div className="card__label">
            <p className="card__label__num">{weight}</p>
            <span className="card__label__letter">кг</span>
          </div>
        </div>
      </div>
      <div className="link__block">
        {onHandleLeave && availability ? (
          <p className="link__text">{message}</p>
        ) : (
          messageDisabled
        )}
      </div>
    </div>
  );
}

export default Card;

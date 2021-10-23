import React, { useEffect, useState, useRef } from "react";

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? "0" + month : month;
});
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export default function CForm({
  role,
  cardMonth,
  cardYear,
  onUpdateState,
  cardNumberRef,
  cardHolderRef,
  cardDateRef,
  onCardInputFocus,
  onCardInputBlur,
  cardCvv,
  children,
}) {
  const [cardNumber, setCardNumber] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    onUpdateState(name, value);
  };

  // TODO: We can improve the regex check with a better approach like in the card component.
  const onCardNumberChange = (event) => {
    let { value, name } = event.target;
    let cardNumber = value;
    setCardNumber(cardNumber.trimRight());
    onUpdateState(name, cardNumber);
  };

  const onCvvFocus = (event) => {
    onUpdateState("isCardFlipped", true);
  };

  const onCvvBlur = (event) => {
    onUpdateState("isCardFlipped", false);
  };

  // NOTE: Currently the cursor on the card number field gets reset if we remove a number, the code bellow was used
  // in class components, need to transform this to work with functional components.
  // getSnapshotBeforeUpdate() {
  //     return this.props.cardNumberRef.current.selectionStart;
  // }

  // const componentDidUpdate = function (prevProps, prevState, cursorIdx) {
  //     const node = cardNumberRef.current;
  //     const { cardNumber: cardNum } = state;
  //     const { cardNumber: prevCardNum } = prevState;
  //     if (
  //         cardNum.length > prevCardNum.length &&
  //         cardNum[cursorIdx - 1] === ' '
  //     ) {
  //         cursorIdx += 1;
  //     } else if (prevCardNum[cursorIdx - 1] === ' ') {
  //         cursorIdx -= 1;
  //     }
  //     node.selectionStart = node.selectionEnd = cursorIdx;
  // };

  return (
    <div className="card-form">
      <div className="card-list">{children}</div>
      <div className="card-form__inner">
        <div className="card-input">
          <label htmlFor="cardNumber" className="card-input__label">
            Metamask Wallet Address
          </label>
          <input
            type="email"
            name="cardNumber"
            className="card-input__input"
            autoComplete="off"
            onChange={onCardNumberChange}
            ref={cardNumberRef}
            onFocus={(e) => onCardInputFocus(e, "cardNumber")}
            onBlur={onCardInputBlur}
            value={cardNumber}
          />
        </div>

        <div className="card-input">
          <label htmlFor="cardName" className="card-input__label">
            DCLO Token Holder
          </label>
          <input
            type="email"
            className="card-input__input"
            autoComplete="off"
            name="cardHolder"
            onChange={handleFormChange}
            ref={cardHolderRef}
            onFocus={(e) => onCardInputFocus(e, "cardHolder")}
            onBlur={onCardInputBlur}
          />
        </div>

        <div className="card-form__row">
          <div className="card-form__col">
            <div className="card-form__group">
              <label htmlFor="cardMonth" className="card-input__label">
                {role} Since
              </label>
              <select
                className="card-input__input -select"
                value={cardMonth}
                name="cardMonth"
                onChange={handleFormChange}
                ref={cardDateRef}
                onFocus={(e) => onCardInputFocus(e, "cardDate")}
                onBlur={onCardInputBlur}
              >
                <option value="" disabled>
                  Month
                </option>

                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <select
                name="cardYear"
                className="card-input__input -select"
                value={cardYear}
                onChange={handleFormChange}
                onFocus={(e) => onCardInputFocus(e, "cardDate")}
                onBlur={onCardInputBlur}
              >
                <option value="" disabled>
                  Year
                </option>

                {yearsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="card-form__col -cvv">
            <div className="card-input">
              <label htmlFor="cardCvv" className="card-input__label">
                Network name
              </label>
              <input
                type="tel"
                className="card-input__input"
                autoComplete="off"
                name="cardCvv"
                onChange={handleFormChange}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                ref={cardCvv}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
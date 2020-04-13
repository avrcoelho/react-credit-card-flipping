import React, { useState } from 'react';
import { render } from 'react-dom';

import Card from '../';

export default function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardBrand, setCardBrand] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [focusCVV, setFocusCVV] = useState(false);

  return (
    <div id="form">
      <Card
        brand={cardBrand}
        number={cardNumber}
        name={cardName}
        expiry={cardExpiry}
        cvv={cardCVV}
        flipCard={focusCVV}
      />
      <br />
      <form>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={(event) => setCardBrand(event.target.value)}
        />
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={(event) => setCardNumber(event.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => setCardName(event.target.value)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="00/00"
          onChange={(event) => setCardExpiry(event.target.value)}
        />
        <input
          type="tel"
          name="cvv"
          placeholder="CVV"
          onChange={(event) => setCardCVV(event.target.value)}
          onFocus={() => setFocusCVV(true)}
          onBlur={() => setFocusCVV(false)}
        />
      </form>
    </div>
  );
}

render(<App />, document.querySelector('#app'));

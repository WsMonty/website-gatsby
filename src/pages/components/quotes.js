import React, { useEffect, useState } from 'react';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

const Quotes = () => {
  const [count, setCount] = useState(0);

  const quote = allQuotes[count];

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      counter < 5 ? counter++ : (counter = 0);
      setCount(counter);
    }, 8000);
  }, []);

  const handleLeftBtn = () => {
    let counter = count;
    counter < 5 ? counter++ : (counter = 0);
    setCount(counter);
  };

  const handleRightBtn = () => {
    let counter = count;
    counter === 0 ? (counter = 5) : counter--;
    setCount(counter);
  };

  return (
    <div className="quotes">
      <button className="quotes_btn quotes_btn_left" onClick={handleLeftBtn}>
        <BsArrowLeftSquare />
      </button>
      <div className="quotes_quote">
        <p className="quotes_text">
          <i>{`	“${quote.quote}”`}</i>
        </p>
        <p className="quotes_author">{quote.author}</p>
      </div>
      <button className="quotes_btn quotes_btn_right" onClick={handleRightBtn}>
        <BsArrowRightSquare />
      </button>
    </div>
  );
};

const allQuotes = [
  {
    quote:
      'Pictorial, lyrical-melancholic compositions that oscillate gently between tradition and modernity.',
    author: 'Jazz Thing (DE)',
  },
  {
    quote:
      'Grethen’s ideas are original and marked by many rhythmic and harmonic surprises.',
    author: 'Concerto (AT)',
  },
  {
    quote:
      'First class jazz where the soloists get a real chance to solo and make their statements.',
    author: 'Midwest Records (US)',
  },
  {
    quote:
      'Ranging between tradition and free soundscapes, between dreamy, quiet pieces and tracks with a complex pulse and a delicate drive.',
    author: 'Saarbrücker Zeitung (DE)',
  },
  {
    quote:
      'The sound of the trumpet and the guitar is wonderful. Their joint phrases in duet are beautiful, both musicians have an individual playing style and the rhythm section ties it all together perfectly. We like the “Next Generation” very much!',
    author: 'Jazz-fun.de (DE)',
  },
  {
    quote:
      'The atmosphere of the record, both serene and mesmerising, is tirelessly energised by improvised moments of which you never know if they will last forever or slip through your fingers.',
    author: 'Le Quotidien (LU)',
  },
];

export default Quotes;

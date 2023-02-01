import { useState } from 'react';

/*
function History({ allClicks }) {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing buttons</div>;
  }
  return <div>button press history: {allClicks.join('| ')}</div>;
}

function Button({ handleClick, text }) {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}
*/

function Feedback({ good, neutral, bad }) {
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={good} />
      <Button text="neutral" handleClick={neutral} />
      <Button text="bad" handleClick={bad} />
    </div>
  );
}

function Button({ text, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

function Statistics({ good, neutral, bad, all, average, positive }) {
  const averageResult = (
    average.reduce((a, b) => a + b, 0) / average.length
  ).toFixed(2);

  const positiveResult = ((positive / all) * 100).toFixed(1);

  if (all <= 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <h3>No feedback given</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <SingleStat text="good" score={good} />
      <SingleStat text="neutral" score={neutral} />
      <SingleStat text="bad" score={bad} />
      <SingleStat text="all" score={all} />
      <SingleStat text="average" score={averageResult} />
      <SingleStat text="positive" score={`${positiveResult} %`} />
    </div>
  );
}

function SingleStat({ text, score }) {
  return (
    <p>
      {text} : {score}
    </p>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState([]);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average.concat(1));
    setPositive(positive + 1);
  };

  const handleNeutClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAverage(average.concat(0));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
    setAverage(average.concat(-1));
  };

  return (
    <>
      <Feedback
        good={handleGoodClick}
        neutral={handleNeutClick}
        bad={handleBadClick}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
}

/*
function Button(props) {
  const { text, handleClick } = props;
  console.log('Button props', props);
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

function SingleStat(props) {
  // console.log(props);
  const { text } = props;
  return <p>{text} :</p>;
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    console.log('good feedback is now', good);
  };

  const handleNeutClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <h2>Statistics</h2>
      <SingleStat text="good" />
      <SingleStat text="neutral" />
      <SingleStat text="bad" />
    </div>
  );
}
*/

export default App;

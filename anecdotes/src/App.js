import { useState } from "react";

function Button({ text, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

function MostVotes({ anecdotes, hasMostVotes }) {
  if (hasMostVotes > 0) {
    return (
      <div>
        <h2>Anecdote with the most votes</h2>
        {anecdotes}
        <p>has {hasMostVotes} votes</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Anecdote with the most votes</h2>
      <p>Please vote to see result</p>
    </div>
  );
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // create empty filled array == anecdotes.length
  const votes = new Array(anecdotes.length).fill(0);
  // generate random number
  const random = (arr = anecdotes) => Math.floor(Math.random() * arr.length);

  const [selected, setSelected] = useState(random());
  const [vote, setVote] = useState(votes);

  // display anagdote with the most votes
  const hasMostVotes = Math.max(...vote);

  const handleAnecdotes = (arr) => {
    setSelected(random(arr));
  };

  const handleVotes = () => {
    const voteCopy = [...vote];
    voteCopy[selected] += 1;
    setVote(voteCopy);
  };

  return (
    <>
      <div>
        <h2>Anecdodte of the day</h2>
        {anecdotes[selected]}
        <p>has {vote[selected]} votes.</p>
      </div>
      <Button text="vote" handleClick={handleVotes} />
      <Button
        text="next anecdote"
        handleClick={() => handleAnecdotes(anecdotes)}
      />
      <MostVotes
        anecdotes={anecdotes[vote.indexOf(Math.max(...vote))]}
        hasMostVotes={hasMostVotes}
      />
    </>
  );
};

export default App;

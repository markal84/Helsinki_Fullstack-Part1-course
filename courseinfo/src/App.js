function Header(props) {
  const { course } = props;
  return <h1>{course}</h1>;
}

function Part(props) {
  const { name, exercises } = props;
  return (
    <p>
      {name} : {exercises}
    </p>
  );
}

function Content(props) {
  const { parts } = props;
  // console.log({ ...parts });
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
}

function Total(props) {
  const { parts } = props;
  return (
    <p>
      Number of exercises{' : '}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
}

function App() {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;

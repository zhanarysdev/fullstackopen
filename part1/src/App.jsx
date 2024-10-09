import Header from "./components/header"
import Total from "./components/total"
import Content from "./components/content"

const App = () => {

  const course = 'Half Stack application development'

  const data = [
    {
      title: 'Fundamentals of React',
      exercises: 10,
    },
    {
      title: 'Using props to pass data',
      exercises: 7,
    },
    {
      title: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      {
        data.map(({ title, exercises }) => <Content key={exercises} title={title} exercises={exercises} />)
      }
      <Total sum={data.reduce((total, current) => total + current.exercises, 0)} />
    </div>
  )
}

export default App
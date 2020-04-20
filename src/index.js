import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part}: {props.exercises} exercises</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.part1 + props.part2 + props.part3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundementals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (

    <div>
     <Header course={course} />
     <Content part={part1} exercises={exercises1} />
     <Content part={part2} exercises={exercises2} />
     <Content part={part3} exercises={exercises3} />
     <Total part1={exercises1} part2={exercises2} part3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
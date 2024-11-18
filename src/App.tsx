import { useState } from 'react'
import './App.css'

function App() {
  const [str, setStr] = useState("")
  const [sum, setSum] = useState(0)


  function add(numbers: string):number{
      const num = numbers.match(/-?\d+/g)
      if(num == null){
          return 0
      } else{
        const sum = num.reduce((acc, num) => {
          const number = Number(num); // Convert the string to a number
          return acc + number;
      }, 0);
        return sum
    }
}

function stringSum(str : string){
  let result = add(str)
  setSum(result)
}


  return (
    <>
      <div>
        <h1>String Calculator</h1>
      </div>
      <div>
      <input type="text" onChange={(e) => setStr(e.target.value)} />
      <button onClick={() => stringSum(str)}>Sum</button>
      </div>
      <div>
        <p>The sum of the string is {sum}</p>
      </div>
    </>
  )
}

export default App

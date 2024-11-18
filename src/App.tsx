import { useState } from 'react'
import './App.css'

function App() {
  const [str, setStr] = useState("")
  const [sum, setSum] = useState(0)
  const [error, setError] = useState("")


  function add(numbers: string):number{
      const num = numbers.match(/-?\d+/g)
      const negatives : any = []; // Array to collect negative numbers
      if(num == null){
          return 0
      } else{
        const sum = num.reduce((acc, num) => {
          const number = Number(num); // Convert the string to a number
          if (number < 0) {
              negatives.push(number); // Collect negative numbers
          }
          return acc + number;
      }, 0);
      if(negatives.length > 0){
        setSum(0)
        setError(`negative number not allowed ${negatives.join(",")}`) //set
        throw `negative number not allowed ${negatives.join(",")}`
      } else{
        return sum
      }
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
        {sum ? <p>The sum of the string is {sum}</p> : <p style={{color: 'red'}}>{error}</p>}
      </div>
    </>
  )
}

export default App

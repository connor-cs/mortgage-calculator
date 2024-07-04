import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [term, setTerm] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [type, setType] = useState(null)

  return (
    <>
      <div className='main'>
        <div className="input-side">
          <div className="left">
            <div className="subtitle-left">
              <h3>Mortgage Calculator</h3>
              <p>Clear All</p>
            </div>

            <p>Mortgage Amount</p>
            <input onChange={(e) => setAmount(e.target.value)} name="amount"></input>

            <section className="term-interest">
              <div className="term">
                <p>Mortgage Term</p>
                <input onChange={(e) => setTerm(e.target.value)} />
              </div>
              <div className="interest">
                <p>Interest Rate</p>
                <input onChange={(e) => setInterestRate(e.target.value)} />
              </div>
            </section>

            <div className="mortgage-type-section">
              <p>Mortgage Type</p>
              <div className="button">
                <input type="checkbox" name="repayment" value={"Repayment"} onChange={(e) => console.log(e.target.value)} />
                <label for="repayment">Repayment</label>
              </div>
              <div className="button">
                <input type="checkbox" name="interest" value={"Interest Only"} onChange={(e) => setType(e.target.value)} />
                <label for="interest">Interest Only</label>
              </div>
            </div>

          </div>
        </div>
        <div className="results-side">
          <h3 style={{ color: "white" }}>Your Results</h3>
          <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        </div>
      </div>
    </>
  )
}

export default App

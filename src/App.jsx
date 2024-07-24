import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [term, setTerm] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [type, setType] = useState(null)
  const [formComplete, setFormComplete] = useState(false)

  return (
    <>
      <div className='main'>
        <div className="input-side">
          <div className="left">
            <div className="subtitle-left">
              <h3>Mortgage Calculator</h3>
              <p className='clear'>Clear All</p>
            </div> 

            <div className="input-group">
              <p>Mortgage Amount</p>
              <div className="input-with-label">
                <span className='dollar-label'>$</span>
                <input onChange={(e) => setAmount(e.target.value)} name="amount"></input>
              </div>
            </div>

            <section className="term-interest">

              <div className="input-group">
                <p>Mortgage Term</p>
                <div className="input-with-label">
                  <input onChange={(e) => setTerm(e.target.value)} />
                  <span className="label">years</span>
                </div>
              </div>

              <div className="input-group">
                <p>Interest Rate</p>
                <div className="input-with-label">
                  <input onChange={(e) => setInterestRate(e.target.value)} />
                  <span className='label'>%</span>

                </div>
              </div>
            </section>

            <div className="mortgage-type-section">
              <p>Mortgage Type</p>
              <div className="radio-button">
                <input type="radio" name="mortgage-type" value={"Repayment"} onChange={(e) => console.log(e.target.value)} />
                <label for="repayment">Repayment</label>
              </div>
              <div className="radio-button" id='int-only'>
                <input type="radio" name="mortgage-type" value={"Interest Only"} onChange={(e) => setType(e.target.value)} />
                <label for="interest">Interest Only</label>
              </div>
              <button className='calculate-button'> <img src="/images/icon-calculator.svg" /> Calculate Repayments</button>
            </div>

          </div>
        </div>
        <div className="results-side">
          {formComplete ? (
            <>
              <h3 style={{ color: "white" }}>Your Results</h3>
              <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p></>
          ) : (
            <div className='incomplete'>
              <img src="/images/illustration-empty.svg" alt="calculator" />
              <h3 style={{ color: "white" }}>Results shown here</h3>
              <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

function useCounter(startValue: number = 0) {
  const [counterValue, setCounterValue] = useState(startValue)

  const incrementCounter = () => {
    setCounterValue(counterValue + 1)
  }

  const decrementCounter = () => {
    setCounterValue(counterValue - 1)
  }

  const resetCounter = () => {
    setCounterValue(startValue)
  }

  return {
    counterValue,
    incrementCounter,
    decrementCounter,
    resetCounter
  }
}

export default useCounter

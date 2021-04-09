import React from 'react'

class CounterStore {
  count = 0
  increment () {
    this.count += 1
  }
  reset () {
    this.count = 0
  }
}

let counter = new CounterStore()

function Counter () {
  return (
    <div>
      <p>{}</p>
      <button>+1</button>
      <button>reset</button>
    </div>
  )
}

export default Counter

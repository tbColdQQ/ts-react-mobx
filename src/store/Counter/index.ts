import { makeAutoObservable } from 'mobx'
class CounterStore {
  constructor () {
    makeAutoObservable(this)
  }
  count = 0
  increment () {
    this.count += 1
  }
  reset () {
    this.count = 0
  }
}

export default CounterStore

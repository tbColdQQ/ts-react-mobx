import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import CounterStore from '../../store/Counter'

interface Props {
  counter: CounterStore
}

const Counter: FC<Props> = ({counter}) => {
  return (
    <div>
      <p>{counter.count}</p>
      <button onClick={() => counter.increment()}>+1</button>
      <button onClick={() => counter.reset()}>reset</button>
    </div>
  )
}

export default observer(Counter)

import Button, { ButtonSize, ButtonType } from './components/Button'
import Counter from './components/counter/counter'
import CounterStore from './store/Counter'
import './App.scss'

const counter: CounterStore = new CounterStore()

function App() {

  return (
    <div className="App">
      app works
      <Counter counter={counter}/>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled> Hello </Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' size={ButtonSize.Large}> Hello </Button>
    </div>
  );
}

export default App;

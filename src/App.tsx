import Counter from "./components/Counter";
import CounterWithHook from "./components/CounterWithHook";
import { BasicTypes } from "./typescrpt/BasicTypes";
import Functions from "./typescrpt/Functions";
import LiteralObjects from "./typescrpt/LiteralObjects";

const App = () => {
  return (
    <div className='mt-2'>
      <h1> TypeScript - React Introduction</h1>
      <hr/>
      <BasicTypes />
      <hr/>
      <LiteralObjects/>
      <hr/>
      <Functions />
      <hr/>
      <Counter />
      <hr/>
      <CounterWithHook/>
    </div>
  )
}

export default App;

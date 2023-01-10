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
    </div>
  )
}

export default App;


import './App.css'
import { Hero } from './components'
import { heroapi} from "./data/data.js";


function App() {


  return (
    <>
      <main>
          <Hero heroapi ={heroapi}  />
    </main>
        </>
  )
}

export default App;
